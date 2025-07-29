# /home/vincent/ixome/scrapy-selenium/control4_scraper/control4_scraper/spiders/control4_spider.py
# Narrowed to https://www.snapav.com/shop/en/snapav/product-files-videos-search, searches "Control4", scrapes files (PDFs/videos/articles), with delays for rate limiting, fixed strip for int/None, reduced retries to 1, added mouse/scroll simulation, sessionStorage restore.
import random
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from scrapy.selector import Selector
from scrapy.http import Request
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import Select
from ..items import Control4ScraperItem
from dotenv import load_dotenv
import os
import logging
import time
import json
import subprocess
from scrapy.exceptions import CloseSpider
from urllib.parse import urljoin
from selenium.webdriver.common.action_chains import ActionChains

class Control4Spider(CrawlSpider):
    name = 'control4'
    allowed_domains = ['snapav.com', 'snapone.com']
    start_urls = [
        'https://www.snapav.com/shop/en/snapav/product-files-videos-search'  # Focused on this URL only
    ]

    rules = (
        Rule(LinkExtractor(allow=('/documents/', '/files/', '/videos/', '/article/', '/products/', '/technical/', '/resources/', '/kb/', '/forums/', '/support/', '/category/', '/search-results/')), callback='parse_item', follow=True),
        Rule(LinkExtractor(allow=('/page/[0-9]+', '/next', '/more', '/results', '/filter/')), follow=True),
        Rule(LinkExtractor(allow=('.pdf', '.mp4')), callback='parse_media', follow=False),
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.custom_logger = logging.getLogger(__name__)
        self.custom_logger.setLevel(logging.ERROR)  # Reduced log level to ERROR for less verbosity
        self.custom_logger.info("Control4Spider initialized")
        load_dotenv(dotenv_path='/home/vincent/ixome/.env')
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')  # Headless for production
        options.add_argument('--disable-gpu')
        options.add_argument('--no-sandbox')
        options.add_argument('--enable-third-party-cookies')
        options.add_argument('--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36')
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        options.add_experimental_option('useAutomationExtension', False)
        options.add_argument('--disable-blink-features=AutomationControlled')
        options.binary_location = '/opt/google/chrome/chrome'
        service = Service('/usr/local/bin/chromedriver')
        self.driver = webdriver.Chrome(service=service, options=options)
        self.custom_logger.info("ChromeDriver initialized")
        self.cookies = self.load_cookies()
        self.session_storage = self.load_session_storage()
        self.timeout = 300  # 5-minute timeout
        self.start_time = time.time()  # Track runtime
        self.max_runtime = 7200  # 2 hours max

    def load_cookies(self):
        try:
            with open('cookies.json', 'r') as f:
                cookies = json.load(f)
        except FileNotFoundError:
            self.custom_logger.info("cookies.json not found - running login_snapone.py")
            subprocess.call(['python', '/home/vincent/ixome/scrapy-selenium/control4_scraper/login_snapone.py'])
            with open('cookies.json', 'r') as f:
                cookies = json.load(f)
        return cookies

    def load_session_storage(self):
        try:
            with open('session_storage.json', 'r') as f:
                return json.load(f)
        except FileNotFoundError:
            self.custom_logger.info("session_storage.json not found")
            return {}

    def apply_cookies(self, url, retries=1):  # Reduced retries to 1 to avoid loop
        backoff = 10  # Initial backoff in seconds
        for attempt in range(retries):
            try:
                # Check runtime
                if time.time() - self.start_time > self.max_runtime:
                    self.custom_logger.info("Max runtime reached, closing spider")
                    raise CloseSpider("Max runtime reached")
                self.driver.set_page_load_timeout(self.timeout)
                self.driver.get(url)
                time.sleep(random.uniform(90, 150))  # Increased delay for session timeouts
                # Restore sessionStorage
                if self.session_storage:
                    for key, value in self.session_storage.items():
                        self.driver.execute_script(f"sessionStorage.setItem('{key}', '{value}');")
                    self.custom_logger.info(f"Restored sessionStorage for {url}")
                for cookie in self.cookies:
                    if cookie.get('domain', '').endswith(('snapav.com', 'snapone.com')):
                        try:
                            self.driver.add_cookie(cookie)
                        except Exception as e:
                            self.custom_logger.warning(f"Failed to add cookie {cookie['name']} to {url}: {e}")
                self.driver.refresh()
                time.sleep(random.uniform(90, 150))  # Increased delay after refresh
                # Simulate human behavior (mouse move, staggered scrolls)
                ActionChains(self.driver).move_by_offset(random.randint(10, 50), random.randint(10, 50)).perform()
                time.sleep(random.uniform(2, 5))
                self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight / 3);")
                time.sleep(random.uniform(2, 5))
                self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight / 2);")
                time.sleep(random.uniform(2, 5))
                self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                time.sleep(random.uniform(2, 5))
                current_url = self.driver.current_url
                self.custom_logger.info(f"Cookies applied to {url}, current URL: {current_url}")
                if 'LogonForm' in current_url or 'Logoff' in current_url or 'login' in current_url.lower():
                    self.custom_logger.warning(f"Authentication failed for {url} (attempt {attempt+1}/{retries})")
                    subprocess.call(['python', '/home/vincent/ixome/scrapy-selenium/control4_scraper/login_snapone.py'])
                    with open('cookies.json', 'r') as f:
                        self.cookies = json.load(f)
                    with open('session_storage.json', 'r') as f:
                        self.session_storage = json.load(f)
                    time.sleep(random.uniform(90, 150))  # Increased delay after login retry
                    continue
                # Handle dynamic content
                if 'product-files-videos-search' in url:
                    try:
                        # Select "Control4" from first dropdown
                        dropdown1 = WebDriverWait(self.driver, 20).until(
                            EC.presence_of_element_located((By.CSS_SELECTOR, 'select[name="brand"], select#brand, select'))
                        )
                        Select(dropdown1).select_by_visible_text("Control4")
                        self.custom_logger.info("Selected 'Control4' from first dropdown")
                        time.sleep(5)  # Delay for selection
                        # Trigger search
                        search_button = self.driver.find_element(By.CSS_SELECTOR, 'button.search-button, button#search-button, input[type="submit"], button[type="submit"]')
                        search_button.click()
                        time.sleep(random.uniform(90, 150))  # Increased delay after search
                        self.custom_logger.info(f"Triggered search for 'Control4' on {url}")
                        for _ in range(3):
                            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                            time.sleep(random.uniform(5, 10))
                    except Exception as e:
                        self.custom_logger.debug(f"No dropdown or search button found on {url}: {e}")
                return True
            except Exception as e:
                self.custom_logger.error(f"Failed to load {url} (attempt {attempt+1}/{retries}): {e}")
                time.sleep(backoff)
                backoff *= 2  # Exponential backoff
                if attempt == retries - 1:
                    return False
        return False

    def start_requests(self):
        for url in self.start_urls:
            if self.apply_cookies(url):
                try:
                    cookie_button = WebDriverWait(self.driver, 10).until(
                        EC.element_to_be_clickable((By.ID, 'onetrust-accept-btn-handler'))
                    )
                    cookie_button.click()
                    self.custom_logger.info("Accepted cookie consent")
                except Exception:
                    self.custom_logger.debug("No cookie consent popup found")
                if 'LogonForm' in self.driver.current_url or 'Logoff' in self.driver.current_url:
                    self.custom_logger.warning("Authentication failure detected - reloading cookies")
                    self.apply_cookies(url)
                yield Request(
                    url=url,
                    callback=self.parse,
                    meta={'selenium_response': self.driver.page_source, 'depth': 0}
                )
            else:
                self.custom_logger.error(f"Failed to access {url} after retries")
                raise CloseSpider("Failed to access start URL after retries")

    def parse(self, response):
        if time.time() - self.start_time > self.max_runtime:
            self.custom_logger.info("Max runtime reached, closing spider")
            raise CloseSpider("Max runtime reached")
        sel = Selector(response)
        links = sel.css('a::attr(href)').getall()
        self.custom_logger.debug(f"Found {len(links)} links on {response.url}: {links[:5]}")
        for link in links:
            absolute_url = response.urljoin(link)
            if any(domain in absolute_url for domain in self.allowed_domains):
                try:
                    if self.apply_cookies(absolute_url):
                        try:
                            cookie_button = WebDriverWait(self.driver, 10).until(
                                EC.element_to_be_clickable((By.ID, 'onetrust-accept-btn-handler'))
                            )
                            cookie_button.click()
                            self.custom_logger.info(f"Accepted cookie consent for {absolute_url}")
                        except Exception:
                            self.custom_logger.debug(f"No cookie consent popup for {absolute_url}")
                        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                        time.sleep(random.uniform(5, 10))
                        if 'LogonForm' in self.driver.current_url or 'Logoff' in self.driver.current_url:
                            self.custom_logger.warning(f"Authentication failure on {absolute_url} - reloading cookies")
                            self.apply_cookies(absolute_url)
                        yield Request(
                            url=absolute_url,
                            callback=self.parse_item,
                            meta={'selenium_response': self.driver.page_source, 'depth': response.meta.get('depth', 0) + 1}
                        )
                except Exception as e:
                    self.custom_logger.error(f"Error accessing {absolute_url}: {e}")
        yield from super().parse(response)

    def parse_item(self, response):
        if time.time() - self.start_time > self.max_runtime:
            self.custom_logger.info("Max runtime reached, closing spider")
            raise CloseSpider("Max runtime reached")
        if 'selenium_response' in response.meta:
            sel = Selector(text=response.meta['selenium_response'])
        else:
            sel = response
        item = Control4ScraperItem()
        issue = sel.css('h1::text, h2::text, h3::text, h4::text, .coh-heading::text, .card-title::text, .panel-title::text, .article-title::text, .document-title::text, .title::text, .support-title::text, .product-title::text').get(default='')
        item['issue'] = str(issue).strip() if issue else ''
        solution = ' '.join(sel.css('div.card-content p::text, div.panel-body p::text, div.top-category-list-content p::text, ul li::text, .faq-answer::text, .instructions::text, div.modal-body p::text, div.content p::text, div.article-content p::text, .article-body p::text, .document-content p::text, .description::text, .support-content p::text, .product-description::text').getall())
        item['solution'] = str(solution).strip() if solution else ''
        product = sel.css('h3::text, .coh-heading::text, .card-title::text, .product-name::text, .product-detail::text, .document-title::text, .product-title::text').get(default='')
        item['product'] = str(product).strip() if product else ''
        item['category'] = (
            'Troubleshooting' if any(x in response.url.lower() for x in ['troubleshoot', 'support', 'technical', 'help', 'faq', 'instructions', 'forums', 'product-files-videos-search'])
            else 'Product' if any(x in response.url.lower() for x in ['product', 'products']) else 'General'
        )
        item['url'] = response.url
        item['depth'] = response.meta.get('depth', 0)

        if item['issue'] or item['solution'] or item['product']:
            self.custom_logger.info(f"Scraped item from {response.url} (depth {item['depth']}): issue='{item['issue'][:50]}...'")
            yield item
        else:
            self.custom_logger.debug(f"Discarded item from {response.url} (depth {response.meta.get('depth', 0)}): no meaningful content")
            safe_url = response.url.replace('/', '_').replace(':', '_').replace('?', '_').replace('&', '_').replace('=', '_')
            with open(f'page_source_{safe_url}.html', 'w') as f:
                f.write(sel.extract())
            self.custom_logger.debug(f"Saved page source to page_source_{safe_url}.html")

    def parse_media(self, response):
        if time.time() - self.start_time > self.max_runtime:
            self.custom_logger.info("Max runtime reached, closing spider")
            raise CloseSpider("Max runtime reached")
        item = Control4ScraperItem()
        item['url'] = response.url
        item['category'] = 'PDF Document' if response.url.endswith('.pdf') else 'Video'
        item['issue'] = response.url.split('/')[-1].replace('.pdf', '').replace('.mp4', '')
        item['product'] = 'Control4 Technical Document'
        item['solution'] = f"{'PDF' if response.url.endswith('.pdf') else 'Video'} link for parsing: {response.url}"
        item['depth'] = response.meta.get('depth', 0)
        self.custom_logger.info(f"Yielded {'PDF' if response.url.endswith('.pdf') else 'Video'} link: {response.url} (depth {item['depth']})")
        yield item

    def closed(self, reason):
        try:
            self.driver.quit()
            self.custom_logger.info("ChromeDriver closed")
        except Exception as e:
            self.custom_logger.error(f"Error closing driver: {e}")
        self.custom_logger.info(f"Spider closed: {reason}")
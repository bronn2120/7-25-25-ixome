# /home/vincent/ixome/scrapy-selenium/control4_scraper/login_snapone.py
# Logs into Snap One, handles dropdowns, saves cookies and sessionStorage, opens browser visibly for manual login if auto fails.
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import Select
from dotenv import load_dotenv
import os
import time
import json
import logging

load_dotenv(dotenv_path='/home/vincent/ixome/.env')
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

def login_snapone():
    options = webdriver.ChromeOptions()
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--enable-third-party-cookies')
    options.add_argument('--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36')
    options.add_experimental_option("excludeSwitches", ["enable-automation"])
    options.add_experimental_option('useAutomationExtension', False)
    options.add_argument('--disable-blink-features=AutomationControlled')
    options.binary_location = '/opt/google/chrome/chrome'
    service = Service('/usr/local/bin/chromedriver')
    driver = webdriver.Chrome(service=service, options=options)

    try:
        driver.get('https://www.snapav.com')
        logger.info("Loaded Snap One home page")
        time.sleep(5)  # Delay for load

        # Accept cookie consent if present
        try:
            cookie_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.ID, 'onetrust-accept-btn-handler'))
            )
            cookie_button.click()
            logger.info("Accepted cookie consent")
        except Exception:
            logger.debug("No cookie consent popup")

        # Click Log In
        try:
            login_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, 'a.login-link, button#login-button, .login, [title="Log In"]'))
            )
            login_button.click()
            logger.info("Clicked Log In")
        except Exception:
            logger.warning("Direct Log In click failed - prompting for manual intervention")
            input("Browser is open. Please manually click the Log In button, fill in credentials, and press Enter here...")

        # Fill login form (auto if possible, manual if not)
        username = os.getenv('SNAPONE_USERNAME')
        password = os.getenv('SNAPONE_PASSWORD')
        if not username or not password:
            logger.error("SNAPONE_USERNAME or SNAPONE_PASSWORD not found in .env")
            raise ValueError("Missing credentials in .env")

        try:
            username_input = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.ID, 'WC_AccountDisplayFormInput_logonId'))
            )
            username_input.send_keys(username)
            password_input = driver.find_element(By.ID, 'WC_AccountDisplayFormInput_logonPassword')
            password_input.send_keys(password)
            login_submit = driver.find_element(By.ID, 'WC_AccountDisplayFormInput_logonButton')
            login_submit.click()
            logger.info("Submitted login form")
        except Exception:
            logger.error("Form not found - assuming manual login completed")
            input("Please complete manual login in the browser and press Enter here...")

        time.sleep(5)  # Delay for login

        # Verify login and handle dropdowns
        dealer_pages = [
            'https://www.snapav.com/shop/en/snapav/for-pros',
            'https://www.snapav.com/shop/en/snapav/product-files-videos-search'
        ]
        for page in dealer_pages:
            driver.get(page)
            time.sleep(5)  # Delay for load
            if 'LogonForm' in driver.current_url:
                logger.warning("Login failed - retry manually")
                input("Login failed. Please retry manual login in the browser and press Enter...")
            else:
                # Verify page content (e.g., dealer-specific elements)
                try:
                    WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located((By.CSS_SELECTOR, 'div.dealer-content, .for-pros-content, .product-files-videos-search-content, h1, h2, h3'))
                    )
                    logger.info(f"Authenticated on {page}")
                    if 'product-files-videos-search' in page:
                        try:
                            # Handle first dropdown (select "Control4")
                            dropdown1 = WebDriverWait(driver, 10).until(
                                EC.presence_of_element_located((By.CSS_SELECTOR, 'select[name="brand"], select#brand, select'))
                            )
                            Select(dropdown1).select_by_visible_text("Control4")
                            logger.info("Selected 'Control4' from first dropdown")
                            time.sleep(3)  # Delay for selection
                            # Second dropdown is optional, skip
                            # Third dropdown (SKU) not needed for search
                            # Trigger search if button exists
                            try:
                                search_button = driver.find_element(By.CSS_SELECTOR, 'button.search-button, button#search-button, input[type="submit"], button[type="submit"]')
                                search_button.click()
                                logger.info("Triggered search on product-files-videos-search")
                                time.sleep(5)  # Delay for results
                            except Exception:
                                logger.debug("No search button found - assuming dropdown selection sufficient")
                        except Exception as e:
                            logger.error(f"Failed to handle dropdowns on {page}: {e}")
                            input("Please manually select 'Control4' from the first dropdown and press Enter here...")
                except Exception:
                    logger.warning(f"Failed to verify content on {page} - retry manually")
                    input(f"Please verify {page} loaded correctly in the browser and press Enter...")

        # Save cookies and sessionStorage
        cookies = driver.get_cookies()
        with open('cookies.json', 'w') as f:
            json.dump(cookies, f)
        logger.info("Cookies saved to cookies.json")
        session_storage = driver.execute_script("return JSON.stringify(sessionStorage);")
        with open('session_storage.json', 'w') as f:
            json.dump(json.loads(session_storage), f)
        logger.info("sessionStorage saved to session_storage.json")

        logger.info("Browser left open for debugging - close manually")
        input("Press Enter to close browser...")
    finally:
        driver.quit()

if __name__ == "__main__":
    login_snapone()
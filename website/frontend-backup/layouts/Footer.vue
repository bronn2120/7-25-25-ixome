<template>
  <div class="footer-area bg-f7fafd">
    <div class="container">
      <div class="row" v-if="footer || error">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <div class="logo">
              <NuxtLink to="/">
                <img v-if="footerLogoUrl" :src="footerLogoUrl" alt="ixome.ai logo" />
                <img v-else src="~/assets/img/logo.png" alt="ixome.ai default logo" />
              </NuxtLink>
            </div>
            <p>{{ footer?.shortDesc || 'Empowering smart homes with AI-driven solutions.' }}</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget pl-5">
            <h3>{{ footer?.title || 'Company' }}</h3>
            <ul class="list">
              <li v-for="company in footer?.companyLists || fallbackCompanyLists" :key="company.id || company.title">
                <NuxtLink v-if="isInternalLink(company.link)" :to="mapInternalLink(company.link)" class="footer-link">{{ company.title }}</NuxtLink>
                <a v-else :href="company.link" target="_blank" class="footer-link">{{ company.title }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>{{ footer?.titleTwo || 'Support' }}</h3>
            <ul class="list">
              <li v-for="support in footer?.supportLists || fallbackSupportLists" :key="support.id || support.title">
                <NuxtLink v-if="isInternalLink(support.link)" :to="mapInternalLink(support.link)" class="footer-link">{{ support.title }}</NuxtLink>
                <a v-else :href="support.link" target="_blank" class="footer-link">{{ support.title }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>{{ footer?.titleThree || 'Contact' }}</h3>
            <ul class="footer-contact-info">
              <li><i class="fas fa-map-marker-alt"></i>{{ footer?.address || '3701 Dorothy Ln' }}</li>
              <li><i class="fas fa-envelope"></i>Email: <a :href="`mailto:${footer?.email || 'pasona@gmail.com'}`">{{ footer?.email || 'pasona@gmail.com' }}</a></li>
              <li><i class="fas fa-phone"></i>Phone: <a :href="`tel:${footer?.phone || '321984754'}`">{{ footer?.phone || '321984754' }}</a></li>
            </ul>
            <ul class="social-links">
              <li v-for="social in footer?.socialLink || fallbackSocialLinks" :key="social.id || social.icon">
                <a :href="parseSocialLink(social.link)" target="_blank" :aria-label="social.title || 'Social Media'"><i :class="social.icon || 'fab fa-facebook'"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="copyright-area">
            <p>Copyright ©{{ currentYear }} IXome. All Rights Reserved</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading footer data...</p>
      </div>
    </div>
    <img src="~/assets/img/map.png" class="map" alt="map" />
    <div class="shape1"><img src="~/assets/img/shape1.png" alt="shape" /></div>
    <div class="shape8 rotateme"><img src="~/assets/img/shape2.svg" alt="shape" /></div>
    <div :class="['go-top', { active: isTop }]" @click="scrollToTop()" role="button" aria-label="Scroll to top">
      <i class="fas fa-arrow-up"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NuxtLink } from '#components';

const isTop = ref(false);
const currentYear = ref(new Date().getFullYear());
const footer = ref(null);
const footerLogoUrl = ref(null);
const STRAPI_BASE_URL = 'http://127.0.0.1:1337';

const fallbackCompanyLists = [
  { title: 'IXome', link: 'ixome.ai' }
];
const fallbackSupportLists = [
  { title: 'president', link: 'ixome.ai' }
];
const fallbackSocialLinks = [
  { link: 'https://facebook.com', icon: 'fab fa-facebook' },
  { link: 'https://twitter.com', icon: 'fab fa-twitter' },
  { link: 'https://linkedin.com', icon: 'fab fa-linkedin-in' },
  { link: 'https://instagram.com', icon: 'fab fa-instagram' }
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const isInternalLink = (link) => {
  return link && (link.startsWith('/') || link === 'ixome.ai');
};

const mapInternalLink = (link) => {
  if (link === 'ixome.ai') {
    return '/';
  }
  return link;
};

const parseSocialLink = (link) => {
  try {
    const parsed = JSON.parse(link.replace('socialLink: ', ''));
    return parsed.link || 'https://facebook.com';
  } catch {
    return link || 'https://facebook.com';
  }
};

onMounted(async () => {
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    isTop.value = scrollPos >= 100;
  });

  try {
    const timestamp = new Date().getTime();
    const footerResponse = await fetch(`${STRAPI_BASE_URL}/api/footers?populate=deep&_=${timestamp}`, {
      headers: {
        Authorization: `Bearer 0cd0e40004e6754b99c87190736e1c94094ae5383fab2896f0cceb79f63df1ce3d788d04f45057fd06830bb22a8d91e9af9d6d79ae28694a94df84dcc4c93b490b3a6c72b795195702e380ec0ca9280ba9ca958cf5ef190d548eba87982c9459453c00d92948c94122606f9f4cee9964bef15f2d406e2e7de45bfac23fc4aa22`
      }
    });
    const footerData = await footerResponse.json();
    footer.value = footerData.data[0]?.attributes || {};

    if (!footer.value?.logo?.data?.attributes?.url) {
      const sitelogoResponse = await fetch(`${STRAPI_BASE_URL}/api/sitelogo?populate=deep&_=${timestamp}`, {
        headers: {
          Authorization: `Bearer 0cd0e40004e6754b99c87190736e1c94094ae5383fab2896f0cceb79f63df1ce3d788d04f45057fd06830bb22a8d91e9af9d6d79ae28694a94df84dcc4c93b490b3a6c72b795195702e380ec0ca9280ba9ca958cf5ef190d548eba87982c9459453c00d92948c94122606f9f4cee9964bef15f2d406e2e7de45bfac23fc4aa22`
        }
      });
      const sitelogoData = await sitelogoResponse.json();
      const relativeUrl = sitelogoData.data?.attributes?.SHT?.data?.attributes?.url || null;
      footerLogoUrl.value = relativeUrl ? `${STRAPI_BASE_URL}${relativeUrl}` : null;
    } else {
      const relativeUrl = footer.value?.logo?.data?.attributes?.url || null;
      footerLogoUrl.value = relativeUrl ? `${STRAPI_BASE_URL}${relativeUrl}` : null;
    }
  } catch (error) {
    console.error('Error fetching footer data:', error);
  }
});
</script>

<style scoped>
.footer-area {
  padding: 50px 0;
  background-color: #f7fafd;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
.single-footer-widget {
  margin-bottom: 30px;
}
.single-footer-widget .logo {
  margin-bottom: 20px;
}
.single-footer-widget .logo img {
  max-width: 150px;
}
.single-footer-widget p {
  font-size: 14px;
  color: #333;
}
.single-footer-widget h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}
.single-footer-widget ul.list {
  list-style: none;
  padding: 0;
}
.single-footer-widget ul.list li {
  margin-bottom: 10px;
}
.footer-link {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: color 0.3s ease;
}
.footer-link:hover {
  color: #007bff;
}
.footer-contact-info {
  list-style: none;
  padding: 0;
}
.footer-contact-info li {
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.footer-contact-info li i {
  margin-right: 10px;
  color: #007bff;
}
.social-links {
  list-style: none;
  padding: 0;
  display: flex;
}
.social-links li {
  margin-right: 10px;
}
.social-links li a {
  font-size: 16px;
  color: #333;
  transition: color 0.3s ease;
}
.social-links li a:hover {
  color: #007bff;
}
.copyright-area {
  text-align: center;
  margin-top: 30px;
  border-top: 1px solid #e5e5e5;
  padding-top: 20px;
}
.copyright-area p {
  font-size: 14px;
  color: #333;
}
.map {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
.shape1, .shape8 {
  position: absolute;
}
.shape1 {
  bottom: 0;
  left: 0;
}
.shape8 {
  top: 0;
  right: 0;
}
.rotateme {
  animation: rotateme 24s linear infinite;
}
@keyframes rotateme {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.go-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1000;
}
.go-top:hover {
  background-color: #0056b3;
}
.go-top.active {
  opacity: 1;
  visibility: visible;
}
</style>
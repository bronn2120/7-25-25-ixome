<template>
  <div class="footer-area bg-f7fafd">
    <div class="container mx-auto px-4">
      <div v-if="footerData" class="row">
        <div class="col-lg-4 col-md-6">
          <h3>{{ footerData.title }}</h3>
          <p v-for="paragraph in footerData.footer" :key="paragraph.id">
            {{ paragraph.children[0].text }}
          </p>
        </div>
        <div class="col-lg-4 col-md-6">
          <h3>{{ footerData.titleTwo }}</h3>
          <ul class="list-none">
            <li v-for="item in footerData.supportLists" :key="item.title">
              <a :href="item.link" class="text-blue-500 hover:text-green-500">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h3>{{ footerData.titleThree }}</h3>
          <p>{{ footerData.address }}</p>
          <p>{{ footerData.email }}</p>
          <p>{{ footerData.phone }}</p>
          <ul class="list-none flex gap-4">
            <li v-for="social in footerData.socialLink" :key="social.link">
              <a :href="social.link" target="_blank" :aria-label="social.icon">
                <i :class="social.icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="text-center text-gray-600">
        <p>Loading footer data...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFetch } from '#app';

const footerData = ref(null);

const { data, error } = await useFetch('/strapi-api/footers?populate=*', {
  baseURL: 'http://127.0.0.1:1337',
  headers: {
    Authorization: `Bearer 0cd0e40004e6754b99c87190736e1c94094ae5383fab2896f0cceb79f63df1ce3d788d04f45057fd06830bb22a8d91e9af9d6d79ae28694a94df84dcc4c93b490b3a6c72b795195702e380ec0ca9280ba9ca958cf5ef190d548eba87982c9459453c00d92948c94122606f9f4cee9964bef15f2d406e2e7de45bfac23fc4aa22`
  }
});

if (error.value) {
  console.error('Error fetching footer data:', error.value);
} else if (data.value && data.value.data && data.value.data.length > 0) {
  footerData.value = data.value.data[0];
  console.log('Footer data loaded:', footerData.value);
} else {
  console.error('No footer data found');
}
</script>

<style scoped>
.footer-area {
  position: relative;
  z-index: 1;
  background-color: #f7fafd;
  padding: 80px 0;
}

.footer-area h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}

.footer-area p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.footer-area ul {
  padding: 0;
  list-style: none;
}

.footer-area ul li {
  margin-bottom: 0.5rem;
}

.footer-area ul li a {
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
}

.footer-area ul li a:hover {
  color: #28a745;
}

@media (max-width: 768px) {
  .footer-area {
    padding: 40px 0;
  }

  .footer-area h3 {
    font-size: 1.25rem;
  }

  .footer-area p {
    font-size: 0.9rem;
  }
}
</style>
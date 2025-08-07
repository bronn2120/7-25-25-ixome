<template>
  <footer class="footer">
    <client-only>
      <div v-if="footerData" class="footer-content">
        <div class="footer-section">
          <h3>{{ footerData.title }}</h3>
          <p>{{ footerData.footer[0]?.children[0]?.text }}</p>
        </div>
        <div class="footer-section">
          <h3>{{ footerData.titleTwo }}</h3>
          <ul>
            <li v-for="item in footerData.supportLists" :key="item.id">
              <a :href="item.link">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>{{ footerData.titleThree }}</h3>
          <p>{{ footerData.address }}</p>
          <p>Email: {{ footerData.email }}</p>
          <p>Phone: {{ footerData.phone }}</p>
        </div>
        <div class="footer-section">
          <h3>Social</h3>
          <ul>
            <li v-for="social in footerData.socialLink" :key="social.id">
              <a :href="social.link" :class="social.icon">{{ social.icon }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div v-else-if="error" class="error">
        <p>Failed to load footer data. Please try again later.</p>
      </div>
      <div v-else>
        <p>Loading footer data...</p>
      </div>
    </client-only>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const footerData = ref(null);
const error = ref(null);

if (process.client) {
  try {
    const { data, error: fetchError } = await useFetch('/strapi-api/api/footers?populate=*', {
      headers: {
        Authorization: `Bearer 0cd0e40004e6754b99c87190736e1c94094ae5383fab2896f0cceb79f63df1ce3d788d04f45057fd06830bb22a8d91e9af9d6d79ae28694a94df84dcc4c93b490b3a6c72b795195702e380ec0ca9280ba9ca958cf5ef190d548eba87982c9459453c00d92948c94122606f9f4cee9964bef15f2d406e2e7de45bfac23fc4aa22`
      }
    });
    if (fetchError.value) {
      console.error('Error fetching footer data:', fetchError.value);
      error.value = fetchError.value;
    } else {
      footerData.value = data.value.data[0].attributes;
    }
  } catch (err) {
    console.error('Error fetching footer data:', err);
    error.value = err;
  }
}
</script>

<style scoped>
.footer {
  padding: 20px;
  background-color: #f8f8f8;
}
.footer-content {
  display: flex;
  justify-content: space-between;
}
.footer-section {
  flex: 1;
  margin-right: 20px;
}
.error {
  text-align: center;
  color: #ff0000;
}
</style>
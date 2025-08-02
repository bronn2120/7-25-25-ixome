<template>
  <footer class="footer">
    <div v-if="footerData" class="footer-content">
      <div class="footer-section">
        <h3>{{ footerData.title }}</h3>
        <p>{{ footerData.footer }}</p>
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
    <div v-else>Loading footer...</div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStrapi } from '#strapi';

const footerData = ref(null);
const { find } = useStrapi();

onMounted(async () => {
  try {
    const response = await find('footer', { populate: 'deep' });
    footerData.value = response.data.attributes;
  } catch (error) {
    console.error('Error fetching footer data:', error);
  }
});
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
</style>

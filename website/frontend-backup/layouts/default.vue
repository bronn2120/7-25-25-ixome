<template>
  <div>
    <HeaderFive />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import HeaderFive from '~/components/Header/HeaderFive.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
</style>
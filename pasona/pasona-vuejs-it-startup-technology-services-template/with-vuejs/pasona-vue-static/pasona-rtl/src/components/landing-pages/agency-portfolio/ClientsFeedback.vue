<template>
  <div class="agency-portfolio-feedback-area ptb-80">
    <div class="container">
      <div class="agency-portfolio-feedback-slides">
        <carousel :autoplay="5000" :settings="settings" pause-autoplay-on-hover>
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="agency-portfolio-feedback-item">
              <img :src="slide.image" alt="image" />
              <p>{{ slide.description }}</p>
            </div>
          </slide>

          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ClientsFeedback",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../../assets/img/client-image/1.jpg"),
        description:
          "Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.",
      },
      {
        id: 2,
        image: require("../../../assets/img/client-image/2.jpg"),
        description:
          "Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.",
      },
      {
        id: 3,
        image: require("../../../assets/img/client-image/3.jpg"),
        description:
          "Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.",
      },
    ],
  }),
});
</script>
<template>
  <div class="ml-projects-area pt-0 ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>Proud Projects That Make Us Stand Out</h2>
        <div class="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <div class="container-fluid">
      <div class="ml-projects-slides">
        <carousel
          :autoplay="5000"
          :settings="settings"
          :wrapAround="true"
          :breakpoints="breakpoints"
          pause-autoplay-on-hover
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-ml-projects-box">
              <img :src="slide.image" alt="image" />

              <div class="plus-icon">
                <a href="#">
                  <span></span>
                </a>
              </div>
            </div>
          </slide>

          <template #addons> </template>
        </carousel>
      </div>
    </div>

    <div class="shape2 rotateme">
      <img src="../../../assets/img/shape2.svg" alt="shape" />
    </div>
    <div class="shape3">
      <img src="../../../assets/img/shape3.svg" alt="shape" />
    </div>
    <div class="shape4">
      <img src="../../../assets/img/shape4.svg" alt="shape" />
    </div>
    <div class="shape6 rotateme">
      <img src="../../../assets/img/shape4.svg" alt="shape" />
    </div>
    <div class="shape7">
      <img src="../../../assets/img/shape4.svg" alt="shape" />
    </div>
    <div class="shape8 rotateme">
      <img src="../../../assets/img/shape2.svg" alt="shape" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "OurProjects",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../../assets/img/projects-img1.jpg"),
      },
      {
        id: 2,
        image: require("../../../assets/img/projects-img2.jpg"),
      },
      {
        id: 3,
        image: require("../../../assets/img/projects-img3.jpg"),
      },
      {
        id: 4,
        image: require("../../../assets/img/projects-img4.jpg"),
      },
      {
        id: 5,
        image: require("../../../assets/img/projects-img5.jpg"),
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      576: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      768: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      1024: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      1200: {
        itemsToShow: 4,
        snapAlign: "center",
      },
    },
  }),
});
</script>
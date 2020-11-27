<template>
  <section class="example">
    <div class="container">
      <SectionTitle :subtitle="subtitle" :title="title" :isCentered="true" />
    </div>
    <div class="container container--4k">
      <div class="preview">
        <VueSlickCarousel ref="sliderNav" v-bind="navCarousel">
          <template #prevArrow="arrowOption">
            <div class="prev-slick">
              {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="next-slick">
              {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            </div>
          </template>
          <div v-for="slide in slides" :key="'slide-' + slide">
            <img :src="slide.cover" :alt="slide.name" class />
          </div>
        </VueSlickCarousel>
        <VueSlickCarousel ref="sliderMain" v-bind="mainCarousel">
          <div v-for="slide in slides" :key="'slide-' + slide">
            <TextureGrid
              :textures="toNuxtTextures(slide.products)"
              :shadow="true"
              :mainpage="true"
            />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import TextureGrid from "@/components/Textures/TextureGrid";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "SectionExample",
  components: {
    SectionTitle,
    TextureGrid,
    VueSlickCarousel,
  },
  mounted() {
    this.navCarousel.asNavFor = this.$refs.sliderMain;
  },
  props: {
    slides: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      subtitle: "Example of usage",
      navCarousel: {
        dots: true,
        infinite: false,
        centerMode: true,
        centerPadding: "1px",
        variableWidth: true,
        asNavFor: {},
      },
      mainCarousel: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "1px",
        variableWidth: true,
        infinite: false,
        draggable: false,
        swipe: false,
      },
      title:
        "With PBR materials present your product in any think able environment",
      image: {
        url: require("~/assets/img/textures/preview-img.jpg"),
        alt: "example of use",
      },
    };
  },
  methods: {
    toNuxtTextures(textures) {
      return textures.map((item) => {
        return {
          image: {
            url: item["image"],
            alt: "jh",
          },
          name: "GGG",
          structure: "jhbk",
          usage: "ygygy",
          url: item["url"],
        };
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_slick.scss";
</style>

<template>
  <section class="realworld">
    <div class="container">
      <div class="explore">
        <div class="explore-content">
          <SectionTitle
            :subtitle="subtitle"
            :title="title"
            :is-centered="false"
          />
          <div class="explore-button-wrap">
            <Button
              link="/textures"
              text="Explore Textures"
              type="primary"
              color="green"
            />
            <Button
              link="/models"
              text="Explore Models"
              type="primary"
              color="blue"
            />
          </div>
        </div>

        <div :class="{ opacity_in: !slidesInits }" class="explore-texture">
          <div class="explore-circle-texture" />
          <div class="slider-wrapper">
            <VueSlickCarousel
              ref="sliderMain"
              v-bind="sliderMain"
              class="default zoom-slider"
              @init="slidesInits = true"
              @beforeChange="beforeChangeSlick"
            >
              <template v-for="slide in slides">
                <div class="slide-wrapper">
                  <img class="static" :src="slide.image" />
                </div>
              </template>
            </VueSlickCarousel>
          </div>

          <div class="explore-circle" />
        </div>
        <div :class="{ opacity_in: !slidesInits }" class="explore-control">
          <div>
            <a class="explore-control-prev" @click="next()"
              ><img src="@/assets/img/icon-arrow.png" alt=""
            /></a>
          </div>
          <VueSlickCarousel
            ref="sliderNav"
            v-bind="sliderNav"
            class="default zoom-slider-nav zoom-slider-wide"
          >
            <template v-for="(slide, key) in slides">
              <p class="explore-texture-number">
                {{ slide.name }}
              </p>
            </template>
          </VueSlickCarousel>

          <p class="explore-texture-title">
            {{ slideSubTitle }}
          </p>
          <div class="button-phone">
            <Button
              :link="slideUrl"
              :text="slideButtonName"
              type="secondary"
              color=""
            />
          </div>
          <div>
            <a class="explore-control-next" @click="prev()"
              ><img src="@/assets/img/icon-arrow.png" alt=""
            /></a>
          </div>
        </div>
        <div class="explore-scroll">
          <div />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import SectionTitle from "@/components/SectionParts/SectionTitle";
import Button from "@/components/Button";

export default {
  name: "SectionRealworld",
  components: {
    SectionTitle,
    Button,
    VueSlickCarousel,
  },
  props: {
    slides: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      sliderMain: {
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        initialSlide: 1,
        vertical: true,
        arrows: false,
        speed: 0,
        useTransform: true,
        useCSS: false,
        infinite: false,
      },
      sliderNav: {
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        initialSlide: 1,
        vertical: true,
        arrows: false,
        speed: 0,
        useTransform: true,
        useCSS: false,
        infinite: false,
      },
      slides_html: "",
      subtitle: "Real World Textures",
      title: "PBR materials and models from the real worldwide manufacturers",
      texture_number: "0059",
      texture_title: "WOODVEENER OAK COPPER2",
      texture_current: require("~/assets/img/spheres/sphere-4-1.png"),
      texture_prev: require("~/assets/img/spheres/sphere-5.png"),
      texture_next: require("~/assets/img/spheres/sphere-6.png"),
      slickCurrentIndex: 1,
      direction: null,
      slidesInits: false,
    };
  },
  computed: {
    slideSubTitle() {
      return this.slides[this.slickCurrentIndex].sub_title;
    },
    slideButtonName() {
      return this.slides[this.slickCurrentIndex].button_name;
    },
    slideUrl() {
      return this.slides[this.slickCurrentIndex].button_url;
    },
  },
  methods: {
    next() {
      this.direction = "down";
      if (this.slickCurrentIndex + 1 === this.slides.length) {
        this.$refs.sliderMain.goTo(1, true);
        this.$refs.sliderNav.goTo(1, true);
      } else {
        this.$refs.sliderMain.next(true);
        this.$refs.sliderNav.next(true);
      }
    },
    prev() {
      this.direction = "up";
      if (this.slickCurrentIndex === 0) {
        this.$refs.sliderMain.goTo(1);
        this.$refs.sliderNav.goTo(1, true);
      } else {
        this.$refs.sliderMain.prev(true);
        this.$refs.sliderNav.prev(true);
      }
    },

    beforeChangeNav(current, next) {
      const toOut = document.querySelector(
        `.slick-slide[data-index='${next}'] .explore-texture-number`
      );
      const toIn = document.querySelector(
        `.slick-slide[data-index='${next}'] .explore-texture-number`
      );
      toOut.classList.add("zoom-out");
      toIn.classList.add("zoom-in");
    },
    beforeChangeSlick(current, next) {
      const after_me = document.querySelector(
        `.slick-slide[data-index='${next + 1}'] .slide-wrapper`
      );
      const before_me = document.querySelector(
        `.slick-slide[data-index='${next - 1}'] .slide-wrapper`
      );
      document
        .querySelectorAll(".slick-slide .slide-wrapper")
        .forEach((item) => {
          item.classList.remove("opacity_in");
        });
      if (after_me) {
        after_me.classList.add("opacity_in");
      }
      if (before_me) {
        before_me.classList.add("opacity_in");
      }
      this.slickCurrentIndex = next;
    },
  },
};
</script>
<style scoped>
.realworld {
  background-color: #fbfbff;
  padding-top: 250px;
}
@media only screen and (max-width: 950px) {
  .realworld {
    padding-top: 150px;
  }
}
</style>

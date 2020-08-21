<template>
  <div
    v-show="hover"
    ref="tooltip"
    class="tooltip"
    @click="showDetails"
    :style="styleObject"
    @mouseover="onHover()"
    @mouseout="onHoverOut()"
  >



    <div class="tooltip-header" />
    <div class="tooltip-content">
      <!--
              <VueSlickCarousel ref="sliderNav2" v-bind="navCarousel">
          <template #prevArrow="arrowOption">
            <div class="prev-slick">
              <span class="button superb">
                <img src="@/assets/img/icon-sliderarr.svg">
              </span>
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="next-slick">
              <span class="button superb">
                <img src="@/assets/img/icon-sliderarr.svg">
              </span>
            </div>
          </template>
          <div class="imageItem">
            <img :src="texture.image.url" :alt="texture.image.alt" >
          </div>
          <div class="imageItem">
            <img :src="texture.image.url" :alt="texture.image.alt" >
          </div>
          <div class="imageItem">
             <img :src="texture.image.url" :alt="texture.image.alt" >
          </div>
          <div class="imageItem">
             <img :src="texture.image.url" :alt="texture.image.alt" >
          </div>
        </VueSlickCarousel> -->

      <VueSlickCarousel ref="sliderNav" v-bind="navCarousel">
        <template #prevArrow="arrowOption">
          <div class="prev-slick">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="next-slick" @click="showDetails">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        <div class="imageItem">
          <img :src="texture.image.url" :alt="texture.image.alt" class>
        </div>
        <div class="imageItem">
          <img :src="texture.image.url" :alt="texture.image.alt" class>
        </div>
        <div class="imageItem">
          <img :src="texture.image.url" :alt="texture.image.alt" class>
        </div>
        <div class="imageItem">
          <img :src="texture.image.url" :alt="texture.image.alt" class>
        </div>
        <div class="imageItem">
          <img :src="texture.image.url" :alt="texture.image.alt" class>
        </div>
        <div class="imageItem">
          <img :src="texture.image.url" :alt="texture.image.alt" class>
        </div>
      </VueSlickCarousel>

      <!-- <VueSlickCarousel ref="sliderNav" v-bind="navCarousel">
          <template #prevArrow="arrowOption">
            <div class="prev-slick">
              <span class="button superb">
                <img src="@/assets/img/icon-sliderarr.svg">
              </span>
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="next-slick">
              <span class="button superb">
                <img src="@/assets/img/icon-sliderarr.svg">
              </span>
            </div>
          </template>
          <div class="imageItem">
            <img src="@/assets/img/textures/coral.svg">
          </div>
          <div class="imageItem">
            <img src="@/assets/img/textures/red.svg">
          </div>
          <div class="imageItem">
            <img src="@/assets/img/textures/blue.svg">
          </div>
          <div class="imageItem">
            <img src="@/assets/img/textures/sand.svg">
          </div>
          <div class="imageItem">
            <img src="@/assets/img/textures/brown.svg">
          </div>
          <div class="imageItem">
            <img src="@/assets/img/textures/blue.svg">
          </div>
        </VueSlickCarousel> -->
    </div>
    <div class="tooltip-footer">
      <div class="title">
        <h3 class="name">
          {{ texture.title }}
        </h3>
      </div>
      <div class="credits-bookmark">
        <div class="credits">
          <h4 class="text">
            {{ texture.credits }} credits
          </h4>
        </div>
        <div class="bookmark">
          <img :src="texture.ribbon">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'TooltipItem',
  components: {
    VueSlickCarousel
  },
  props: {
    texture: {
      type: Object,
      required: true
    },
    showDetail: {
      type: Function
    }
  },
  data () {
    return {
      navCarousel: {
        dots: false,
        infinite: false,
        centerMode: true,
        centerPadding: '1px',
        variableWidth: false,
        asNavFor: {},
        slidesToScroll: 1,
        slidesToShow: 1
      },
      //       navCarousel: {
      //   dots: false,
      //   infinite: false,
      //   centerMode: true,
      //   centerPadding: '1px',
      //   variableWidth: false,
      //   slidesToScroll: 1,
      //   slidesToShow: 3,
      //   asNavFor: {},
      //   initialSlide: 0,
      //   useTranform: false
      // },
      mainCarousel: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '1px',
        variableWidth: true,
        infinite: false,
        draggable: false,
        swipe: false
      },
      hover: true,
      toolChange: false
    };
  },
  computed: {
    styleObject () {
      return this.toolChange ? { right: '0' } : { left: '0' };
    }
  },
  mounted () {
    this.navCarousel.asNavFor = this.$refs.sliderMain;
  },
  methods: {
    onHover () {
      const elementRight = this.$refs.tooltip.getBoundingClientRect().right;
      const windowWidth = window.innerWidth;

      if (elementRight > windowWidth) {
        return this.toolChange = true;
      }
    },
    onHoverOut () {
      return this.toolChange = false;
    },
    showDetails () {
      this.showDetail(this.texture);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_tooltip.scss";
</style>

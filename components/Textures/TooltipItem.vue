<template>
  <div
    v-show="hover"
    ref="tooltip"
    class="tooltip"
    :style="styleObject"
    @mouseover="onHover()"
    @mouseout="onHoverOut()"
  >
    <div class="tooltip-header" />
    <div class="tooltip-content">

      <VueSlickCarousel class="default" v-if="texture.gallery.length" v-bind="slickSlider">
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
        <div v-if="!texture.gallery.length" @click="showDetails" class="imageItem">
          <img :src="texture.cover" :alt="texture.name" class>
        </div>
        <div  @click="showDetails" v-for="(image, index) in texture.gallery" :key="'texture-gallery' + index" class="imageItem">
          <img :src="image.image" :alt="texture.name" class>
        </div>
      </VueSlickCarousel>
    </div>
    <div  @click="showDetails" class="tooltip-footer">
      <div class="title">
        <h3 class="name">
          {{ texture.name }}
        </h3>
      </div>
      <div class="credits-bookmark">
        <div class="credits">
          <h4 class="text">
            {{ texture.credits }} credits
          </h4>
        </div>
        <div v-if="texture.isBookmarked" class="bookmark">
          <img src="@/assets/img/icon-bookmark-3.svg">
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
      slickSlider: {
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToScroll: 1,
        slidesToShow: 1
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
      const path = `${this.texture.category.url}/product-${this.texture.slug}`;
      this.$router.replace({path: path});
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_tooltip.scss";
</style>

<style>
.tooltip-content .slick-slide{
  transform: none !important;
  width: auto !important;
}
</style>

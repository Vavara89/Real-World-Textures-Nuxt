<template>
  <div class="sliderDetail">
    <div class="sliderDetailContent">
      Tool tip
      <div v-if="hovered" :data-slider-selector="'slider-'+id" class="slider opacity_in">
        <VueSlickCarousel @init="init" v-bind="sliderMain" ref="sliderMain" class="default">
          <div class="slide-example red"></div>
          <div class="slide-example green"></div>
          <div class="slide-example white"></div>
        </VueSlickCarousel>

      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  name: 'Card',
  components: {
    VueSlickCarousel
  },
  props: {
    hovered: {
      type: Boolean,
      required: false
    },
    id: {
      type: Number,
      required: false
    }
  },
  methods: {
    init () {
      setTimeout(()=>{
        const slider = document.querySelector(`[data-slider-selector="slider-${this.id}"]`);
        slider.classList.remove('opacity_in');

      }, 1000);

    }
  },
  data () {
    return {
      sliderMain: {
        dots: false,
        infinite: false,
        centerMode: false,
        variableWidth: false,
        slidesToScroll: 1,
      },
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_sliderDetail.scss";
</style>

<template>
  <div class="sliderDetail">
    <div class="sliderDetailContent">
      <div v-if="hovered" :data-slider-selector="'slider-'+id" class="slider opacity_in">
        <VueSlickCarousel ref="sliderMain" v-bind="sliderMain" class="default" @init="init">
          <div class="slide-example red" />
          <div class="slide-example green" />
          <div class="slide-example white" />
        </VueSlickCarousel>
      </div>
      <div class="sliderDetailContent-footer">
        <div class="title">
          <h3 class="name">
            Name
          </h3>
        </div>
        <div class="credits-bookmark">
          <div class="credits">
            <h4 class="text">
              credits
            </h4>
          </div>
          <div class="bookmark">
            <img width="50" src="@/assets/img/icon-bookmark-3.svg">
          </div>
        </div>
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
  data () {
    return {
      sliderMain: {
        dots: false,
        infinite: false,
        centerMode: false,
        variableWidth: false,
        slidesToScroll: 1
      }
    };
  },
  methods: {
    init () {
      setTimeout(() => {
        const slider = document.querySelector(`[data-slider-selector="slider-${this.id}"]`);
        slider.classList.remove('opacity_in');
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_sliderDetail.scss";
</style>

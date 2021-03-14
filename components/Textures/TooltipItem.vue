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
      <VueSlickCarousel v-if="texture.gallery.length" class="default" v-bind="slickSlider">
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
        <div v-if="!texture.gallery.length" class="imageItem" @click="showDetails">
          <img :src="texture.cover" :alt="texture.name" class>
        </div>
        <div v-for="(image, index) in texture.gallery" :key="'texture-gallery' + index" class="imageItem" @click="showDetails">
          <img :src="image.image" :alt="texture.name" class>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="tooltip-footer" @click="showDetails">
      <div class="title">
        <h3 class="name">
          <span v-if="texture.materialNumber">{{ texture.materialNumber }}</span> {{ texture.name }}
        </h3>
      </div>
      <div class="credits-bookmark">
        <div v-if="texture.credits" class="credits">
          <h4 class="text">
            {{ texture.credits }} credits
          </h4>
        </div>
        <div class="bookmark">
          <a href="javascript:void(0)" @click="addBook">
            <img
              v-if="!texture.isBookmarked"
              src="@/assets/img/icon-bookmark-1.svg"
              class="image"
            >
            <img v-else src="@/assets/img/icon-bookmark-3.svg">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import profile from '~/collectors/profile';
import hover from '@/mixins.js/hover';

export default {
  name: 'TooltipItem',
  components: {
    VueSlickCarousel
  },
  mixins: [hover],
  props: {
    texture: {
      type: Object,
      required: true
    },
    showDetail: {
      type: Function
    },
    index: {
      type: Number
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
    addBook () {
      if (!this.$auth.loggedIn) {
        return this.toLogin();
      }
      profile
        .toggleBookMark(this.$route.name, this.texture.id)
        .then((response) => {
          this.texture.isBookmarked = !response.data.deleted;
          this.$store.commit('setBookmarks', response.data.totals);
        });
    },
    onHover () {
      this.handlePointerEvent(false, this.index);
      const elementRight = this.$refs.tooltip.getBoundingClientRect().right;
      const windowWidth = window.innerWidth;

      if (elementRight > windowWidth) {
        return this.toolChange = true;
      }
    },
    onHoverOut () {
      this.handlePointerEvent(true, this.index);
      return this.toolChange = false;
    },
    showDetails () {
      this.$store.commit('setRedirectUrl', this.$route.path)
      if (this.texture.absoluteUrl) {
        this.$router.replace({ path: this.texture.absoluteUrl });
      } else {
        const path = `${this.texture.category.url}/product-${this.texture.slug}`;
        this.$router.replace({ path });
      }
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

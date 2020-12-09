<template>
  <div v-show="value" class="detailModal">
    <div class="detail-container">
      <div class="imageDetails">
        <div class="imageDetails-header">
          <div>
            <a class="button" @click.prevent="close">
              <img
                src="@/assets/img/icon-cross.svg"
                style="margin: 10px"
                width="12"
              />
            </a>
          </div>
          <div class="imageDetails-options">
            <div class="download">
              <a href class="badge-circle color-bck-secondary--purple h4">
                <img src="@/assets/img/icon-download.svg" />
              </a>
            </div>
            <div v-show="texture.free" class="freeMark">
              <a href class="badge-rounded color-bck-secondary--green h4"
                >Free</a
              >
            </div>
          </div>
        </div>
        <div class="imageDetails-content">
          <div v-show="texture.image" class="previewImg">
            <img v-if="'image' in texture" :src="texture.image.url" />
          </div>
          <div v-show="texture.tutorial" class="tutorial">
            <label class="badge-play h4">Tutorial</label>
          </div>
        </div>
        <div class="imageDetails-footer">
          <VueSlickCarousel ref="sliderNav" v-bind="navCarousel">
            <template #prevArrow="arrowOption">
              <div class="prev-slick">
                <a href="#" class="button">
                  <img src="@/assets/img/icon-arrow_left.svg" />
                </a>
              </div>
            </template>
            <template #nextArrow="arrowOption">
              <div class="next-slick">
                <a href="#" class="button">
                  <img src="@/assets/img/icon-arrow_left.svg" />
                </a>
              </div>
            </template>
            <div class="imageItem">
              <img
                v-if="'image' in texture"
                :src="texture.image.url"
                :alt="texture.image.alt"
                class
              />
            </div>
            <div class="imageItem">
              <img
                v-if="'image' in texture"
                :src="texture.image.url"
                :alt="texture.image.alt"
                class
              />
            </div>
            <div class="imageItem">
              <img
                v-if="'image' in texture"
                :src="texture.image.url"
                :alt="texture.image.alt"
                class
              />
            </div>
            <div class="imageItem">
              <img
                v-if="'image' in texture"
                :src="texture.image.url"
                :alt="texture.image.alt"
                class
              />
            </div>
            <div class="imageItem">
              <img
                v-if="'image' in texture"
                :src="texture.image.url"
                :alt="texture.image.alt"
                class
              />
            </div>
            <div class="imageItem">
              <img
                v-if="'image' in texture"
                :src="texture.image.url"
                :alt="texture.image.alt"
                class
              />
            </div>
            <div class="imageItem">
              <img
                v-if="'image' in texture"
                :src="texture.image.url"
                :alt="texture.image.alt"
                class
              />
            </div>
            <div class="imageItem">
              <img
                v-if="'image' in texture"
                :src="texture.image.url"
                :alt="texture.image.alt"
                class
              />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="details">
        <div class="title">
          <h4 class="name">
            {{ texture.title }}
          </h4>
        </div>
        <div class="credits-bookmark">
          <div v-if="texture.credits" class="credits h3">
            <label>{{ texture.credits }}</label>
            credits
          </div>
          <div class="bookmark">
            <img src="@/assets/img/icon-bookmark-1.svg" />
          </div>
        </div>
        <div class="options">
          <div class="option-item resolution">
            <div class="label">
              <label class="h3">Resolutffion:</label>
            </div>
            <div class="option">
              <Dropdown :options="options" />
            </div>
          </div>
          <div class="option-item dimension">
            <div class="label">
              <label class="h3">Texture<br />Dimensions:</label>
            </div>
            <div class="option pad">
              <label class="text">yyy X yyy cm</label>
            </div>
          </div>
          <div class="option-item">
            <div class="label">
              <label class="h3">Consisting of:</label>
            </div>
            <div class="option">
              <ul class="consisting-list">
                <li
                  v-for="(item, index) in texture.consist"
                  :key="'consist-' + index"
                  class="text"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="description">
          <label class="h3">Description:</label>
          <p class="text">
            {{ texture.description }}
          </p>
        </div>
        <div class="brand">
          <div class="label">
            <label class="h3">Brand:</label>
          </div>
          <div v-if="texture.brand" class="option">
            <label class="brand">{{ texture.brand.name }}</label>
            <a class="brand-link" :href="texture.brand.link">{{
              texture.brand.link
            }}</a>
          </div>
        </div>
        <div class="download">
          <button
            v-show="!processing"
            class="button-primary nohover"
            @click="process"
          >
            Download for {{ texture.credits }} credits
          </button>
          <button
            v-show="processing"
            class="button-primary button-primary--blue"
          >
            <img src="@/assets/img/icon-processing-button.svg" />
            Processing... Continue Browsing
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Dropdown from "@/components/Sidebar/Dropdown";

export default {
  name: "DetailModal",
  components: {
    VueSlickCarousel,
    Dropdown,
  },

  props: {
    texture: {
      type: Object,
    },
    value: {
      required: true,
    },
  },

  data() {
    return {
      navCarousel: {
        dots: false,
        infinite: false,
        centerMode: false,
        centerPadding: "1px",
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        asNavFor: {},
        initialSlide: 0,
        useTranform: false,
      },
      options: [
        {
          value: "Choose resolutions",
        },
        {
          value: "1920x1920 px",
        },
        {
          value: "2560x2560 px (2k)",
        },
        {
          value: "4096x4096 px (4k)",
        },
        {
          value: "7680x7680 px (8k)",
        },
        {
          value: "10240x10240 px (10k)",
        },
      ],
      processing: false,
    };
  },

  mounted() {
    this.navCarousel.asNavFor = this.$refs.sliderMain;
  },

  methods: {
    close() {
      this.$emit("input", !this.value);
    },

    process() {
      this.processing = !this.processing;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_detailModal.scss";
</style>

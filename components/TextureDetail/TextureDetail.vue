<template>
  <div v-if="texture" class="detailModal">
    <div class="container">
      <div class="imageDetails">
        <div class="imageDetails-header">
          <div>
            <a class="button" @click.prevent="close">
              <img src="@/assets/img/icon-cross.svg" style="margin:10px;" width="12">
            </a>
          </div>
          <div class="imageDetails-options">

            <div class="download">
              <a href="javascript:void(0)" @click="downLoad" class="badge-circle color-bck-secondary--purple h4">
                <img src="@/assets/img/icon-download.svg">
              </a>
            </div>

            <div v-show="texture.is_free" class="freeMark">
              <a href class="badge-rounded color-bck-secondary--green h4">Free</a>
            </div>
          </div>
        </div>
        <div class="imageDetails-content">
          <VueSlickCarousel ref="sliderMain" v-bind="sliderMain" class="default">

            <div v-for="item_image in texture.gallery" class="previewImg">
              <img :src="item_image.image">
            </div>

          </VueSlickCarousel>

          <div v-if="texture.tutorialUrl" class="tutorial">
            <a :href="texture.tutorialUrl" target="_blank"><label class="badge-play h4">Tutorial</label></a>
          </div>
        </div>
        <div v-if="texture.gallery" class="imageDetails-footer">
          <VueSlickCarousel ref="sliderNav" v-bind="navCarousel">
            <template #prevArrow="arrowOption">
              <div class="prev-slick">
                <a href="#" class="button">
                  <img src="@/assets/img/icon-arrow_left.svg">
                </a>
              </div>
            </template>
            <template #nextArrow="arrowOption">
              <div class="next-slick">
                <a href="#" class="button">
                  <img src="@/assets/img/icon-arrow_left.svg">
                </a>
              </div>
            </template>
            <div v-for="item_image in texture.gallery" class="imageItem">
              <img :src="item_image.image" :alt="texture.name" class>
            </div>

          </VueSlickCarousel>
        </div>
      </div>
      <div class="details">
        <div class="title">
          <h4 class="name">
            {{ texture.name }}
          </h4>
        </div>
        <div class="credits-bookmark">
          <div v-if="texture.credits" class="credits h3">
            <label>{{ texture.credits }}</label>
            credits
          </div>
          <div class="bookmark">
            <a href="javascript:void(0)" @click="toggleBookMark">
              <img v-if="!texture.isBookmarked" src="@/assets/img/icon-bookmark-1.svg">
              <img v-if="texture.isBookmarked" src="@/assets/img/icon-bookmark-2.svg">
            </a>
          </div>
        </div>
        <div class="options">
          <div class="option-item resolution" :class="{error: resolution_error}">
            <div class="label">
              <label class="h3">Resolution:</label>
            </div>
            <div class="option">
              <Dropdown :options="options" v-model="resolution"/>
            </div>
          </div>
          <div class="option-item dimension">
            <div class="label">
              <label class="h3">Texture<br>Dimensions:</label>
            </div>
            <div class="option">
              <label class="text">{{ texture.dimension }}</label>
            </div>
          </div>
          <div class="option-item">
            <div class="label">
              <label class="h3">Consisting of:</label>
            </div>
            <div class="option">
              <ul class="consisting-list">
                <li v-for="(item, index) in texture.maps.slice(0, 5)" :key="'consist-' + index" class="text">
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
            <a target="_blank" class="brand-link" :href="texture.brand.webSite">{{ texture.brand.webSite }}</a>
          </div>
        </div>
        <div class="download">
          <div style="color: red" class="downloadErrors" v-if="downloadErrors">
            <h3>{{ downloadErrors }}</h3>
          </div>
          <button v-show="!processing" class="button-primary" @click="downLoad">
            Download for {{ texture.credits }} credits
          </button>
          <button v-show="processing" class="button-primary button-primary--blue">
            <img src="@/assets/img/icon-processing-button.svg">
            Processing... Continue Browsing
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import Dropdown from '@/components/Sidebar/Dropdown';
import profile from "@/collectors/profile";
import catalog from "@/collectors/catalog";

export default {
  name: 'TextureDetail',
  components: {
    VueSlickCarousel,
    Dropdown
  },

  props: {
    texture: {
      type: Object,
      default: null
    },
  },


  data() {
    return {
      sliderMain: {
        dots: false,
        infinite: false,
        centerMode: true,
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: 1,
      },
      navCarousel: {
        dots: false,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: this.texture.gallery.length && this.texture.gallery.length >= 5 ? 5 : this.texture.gallery.length,
        asNavFor: {},
        focusOnSelect: true,
      },
      options: [],
      processing: false,
      resolution: null,
      resolution_error: false,
      downloadErrors: false
    };
  },

  mounted() {
    this.navCarousel.asNavFor = this.$refs.sliderMain;
  },

  created() {
    this.options.push({
      value: 'Choose resolution'
    });
    this.texture.resolutions.map(item => {
      this.options.push({value: `${item.size}x${item.size} (${item.name})`});
    });
  },

  methods: {
    close() {
      const path = this.$route.path.replace('product-' + this.texture.slug, '');
      this.$router.push({path: path});
    },

    toLogin() {
      this.$router.push({path: '/login'});
    },
    downLoad() {
      if (!this.$auth.loggedIn) {
        this.toLogin();
      }
      if (!this.resolution) {
        this.resolution_error = true;
        return;
      }
      const resolution = this.texture.resolutions.filter(item => {
        const value = {value: `${item.size}x${item.size} (${item.name})`};
        return value.value === this.resolution.value;
      }).pop();
      this.processing = true;

      catalog.download('textures', this.texture.id, resolution.name).then(response=>{
        let interval = undefined;
        const data = response.data;
        if (data.download_link){
          window.location.href = data.download_link;
          this.processing = false;
        }else{
          interval = setInterval(()=>{
            catalog.download('textures',this.texture.id, resolution.name).then(response => {
              const data = response.data;
              if (data.download_link){
                window.location.href = data.download_link;
                clearInterval(interval);
                this.processing = false;
              }
            });
          }, 15000);
        }

      }).catch(error => {
        this.downloadErrors = error.response.data.errors;
        this.processing = false;
      });

    },
    toggleBookMark() {
      if (!this.$auth.loggedIn) {
        return this.toLogin();
      }
      profile.toggleBookMark('textures', this.texture.id).then(response => {
        this.texture.isBookmarked = !response.data.deleted;
        this.$store.commit('setBookmarks', response.data.totals);
      });
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_detailModal.scss";
</style>

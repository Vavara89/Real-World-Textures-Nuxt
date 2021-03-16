<template>
  <div
    v-if="texture"
    class="detailModal with-background"
    :class="{ visuallyscoll: type_code === 'models' }"
  >
    <div class="background" @click.prevent="close" />
    <div class="detail-container">
      <div class="imageDetails">
        <div class="imageDetails-header">
          <div>
            <a class="button" @click.prevent="close">
              <img
                src="@/assets/img/icon-cross.svg"
                style="margin: 10px"
                width="16"
              >
            </a>
          </div>
          <div class="imageDetails-options">
            <div v-if="texture.in_assets" class="download">
              <img src="@/assets/img/icon-download.svg">
            </div>

            <div v-show="texture.is_free" class="freeMark">
              <a
                href
                class="badge-rounded color-bck-secondary--green h4"
              >Free</a>
            </div>
          </div>
        </div>
        <div v-if="texture.gallery.length" class="imageDetails-content">
          <VueSlickCarousel
            v-if="texture.gallery.length"
            ref="sliderMain"
            v-bind="sliderMain"
            class="default"
          >
            <div v-for="item_image in texture.gallery" class="previewImg">
              <img :src="item_image.image">
            </div>
          </VueSlickCarousel>

          <div
            v-if="texture.tutorialUrl && type_code !== 'models'"
            class="tutorial"
          >
            <a
              :href="texture.tutorialUrl"
              target="_blank"
            ><label class="badge-play h4">Tutorial</label></a>
          </div>
        </div>
        <div v-if="texture.gallery.length" class="imageDetails-footer">
          <VueSlickCarousel
            v-if="texture.gallery.length"
            ref="sliderNav"
            v-bind="navCarousel"
          >
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
            <div v-for="(item_image, index) in texture.gallery" :key="index" class="imageItem">
              <img :src="item_image.image" :alt="texture.name">
            </div>
          </VueSlickCarousel>
        </div>

        <div v-if="type_code === 'models' && relatedTextures" class="visuallyshow">
          <div class="relatedtextures">
            <h3>Related<br>textures:</h3>
            <a href="#" class="button-secondary">See all</a>
          </div>
          <div class="relatedslider">
            <!-- Carousel Models start -->
            <div class="imageDetails-footer">
              <VueSlickCarousel
                ref="sliderRelated"
                v-bind="sliderRelated"
                class="default"
              >
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
            <!-- Carousel Models end -->
          </div>
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
          <div class="bookmark changed">
            <a href="javascript:void(0)" @click="toggleBookMark">
              <img
                v-if="!texture.isBookmarked"
                src="@/assets/img/icon-bookmark-1.svg"
                class="image"
              >
              <img
                v-if="!texture.isBookmarked"
                src="@/assets/img/icon-bookmark-2.svg"
                class="hover"
              >
              <img
                v-if="texture.isBookmarked"
                src="@/assets/img/icon-bookmark-2.svg"
              >
            </a>
          </div>
        </div>
        <div class="options">
          <div
            class="option-item resolution"
            :class="{ error: resolution_error }"
          >
            <div class="label">
              <label class="h3">Resolution:</label>
            </div>
            <div class="option">
              <Dropdown
                v-model="resolution"
                :options="options"
                :checkselect="true"
              />
            </div>
          </div>
          <div class="option-item dimension">
            <div class="label">
              <label class="h3">{{ type_title }}<br>Dimensions:</label>
            </div>
            <div class="option pad">
              <label class="text">{{ texture.dimension }}</label>
            </div>
          </div>
          <div class="option-item last">
            <div class="label">
              <label class="h3">Consisting of:</label>
            </div>
            <div class="option scroll">
              <ul class="consisting-list">
                <li
                  v-for="(item, index) in texture.maps"
                  :key="'consist-' + index"
                  class="text"
                >
                  {{ get_map_name(item) }}
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
        <div v-if="texture.brand" class="brand">
          <div class="label">
            <label class="h3">Brand:</label>
          </div>
          <div v-if="texture.brand" class="option scroll">
            <label class="brand">{{ texture.brand.name }}</label>
            <a
              target="_blank"
              class="brand-link"
              :href="formatWebsite(texture.brand.webSite)"
            >{{ texture.brand.webSite }}</a>
          </div>
        </div>
        <div
          v-if="texture.longitude && texture.latitude"
          class="description locator"
        >
          <label class="h3">Location:</label>
          <div class="text">
            <p>
              {{ formatCoords() }}
            </p>
            <p>
              <a target="_blank" :href="getGoogleLink()">show on Google Maps</a>
            </p>
          </div>
        </div>
        <div class="download">
          <div v-if="downloadErrors" style="color: red" class="downloadErrors">
            <h3>{{ downloadErrors }}</h3>
          </div>
          <button
            v-if="!processing"
            class="button-primary nohover"
            @click="downLoad"
          >
            Download for {{ texture.credits }} credits
          </button>
          <button v-if="processing" class="button-primary button-primary--blue">
            <img class="rotate" src="@/assets/img/icon-processing-button.svg">
            Processing...
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
import formatcoords from 'formatcoords';
import Dropdown from '@/components/Sidebar/Dropdown';
import profile from '@/collectors/profile';
import catalog from '@/collectors/catalog';
import users from '@/collectors/users';

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
    type_title: {
      type: String,
      required: true
    },
    type_code: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      sliderMain: {
        dots: false,
        infinite: true,
        centerMode: false,
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: 1
      },
      navCarousel: {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow:
          this.texture.gallery && this.texture.gallery.length >= 5
            ? 5
            : this.texture.gallery.length,
        asNavFor: {},
        focusOnSelect: true
      },
      sliderRelated: {
        dots: false,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow:
          this.texture.gallery && this.texture.gallery.length >= 5
            ? 5
            : this.texture.gallery.length,
        asNavFor: {},
        focusOnSelect: true
      },
      options: [],
      resolution: [],
      resolution_error: false,
      downloadErrors: false,
      processing: false,
      map_titles: {
        AO: 'Ambient occlusion',
        NRM: 'Normal map',
        DISP: 'Displacement',
        DIFF: 'Diffuse',
        COL: 'Color',
        REFL: 'Reflection',
        GLOSS: 'Glosiness',
        ROUGH: 'Roughness',
        METAL: 'Metallic',
        SPEC: 'Specular',
        SPECLVL: 'Specular level',
        IOR: 'IOR',
        SSS: 'Subsurface scattering',
        SSSABSORB: 'SSS absorbtion'
      }
    };
  },
  computed: {
    relatedTextures () {
      return 'relatedTextures' in Object.keys(this.texture) ? this.texture.relatedTextures : [];
    }
  },

  mounted () {
    document.body.style.overflow = 'hidden';
    this.navCarousel.asNavFor = this.$refs.sliderMain;
    this.sliderMain.asNavFor = this.$refs.sliderNav;
    const downloads = this.$store.getters.checkDownload;
    if (downloads.length) {
      this.setProcess(downloads);
      const resolutions = this.downloadingResolutions(downloads);
      if (resolutions.length) {
        this.recursiveDownload(resolutions);
      }
    } else if (this.$auth.user && this.$auth.user.user) {
      users.setToken(this.$auth.user.user.token);
      users.downloading_states().then((response) => {
        if (response.data.length) {
          this.setProcess(response.data);
          const resolutions = this.downloadingResolutions(response.data);
          console.log(resolutions);
          if (resolutions.length) {
            this.recursiveDownload(resolutions);
          }
        }
      });
    }
  },

  created () {
    console.log(this.texture);
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setForDownload') {
        this.setProcess(state.forDownload);
      }
    });

    this.options.push({
      value: 'Choose resolution'
    });
    if (this.texture.resolutions) {
      this.texture.resolutions.map((item) => {
        const model = !!item['notResolution'];
        const label = model ? item.name : `${item.resolution}x${item.resolution}px (${item.name})`;
        this.options.push({ value: label });
        item.label = label;
      });
    }
  },
  methods: {
    downloadingResolutions (data) {
      let resolutions = [];
      data.map((item) => {
        if (
          item.from_book_mark === false &&
          item.id === this.texture.id
        ) {
          resolutions = item.resolutions;
        }
      });
      return resolutions;
    },
    setProcess (data) {
      if (!this.texture) {
        return;
      }
      data.map((item) => {
        if (
          item.from_book_mark === false &&
          item.id === this.texture.id
        ) {
          this.processing = true;
        }
      });
      if (!data.length) {
        this.processing = false;
      }
    },
    close () {
      this.$emit('close');
      const url = this.texture.slug;
      let path = this.$route.path.replace('product-' + url, '');

      if (this.$store.getters.redirectUrl) {
        path = this.$store.getters.redirectUrl;
      }
      this.$router.push({ path });
    },
    tryClose () {},
    formatCoords () {
      return formatcoords(
        this.texture.latitude,
        this.texture.longitude
      ).format();
    },
    getGoogleLink () {
      return `https://maps.google.com/maps?q=${this.texture.latitude},${this.texture.longitude}`;
    },
    formatWebsite (web) {
      if (!web.startsWith('http')) {
        return `http://${web}`;
      }
      return web;
    },
    toLogin () {
      this.$router.push({ path: '/login' });
    },
    downLoad () {
      if (!this.$auth.loggedIn) {
        return this.toLogin();
      }
      this.resolution_error = !this.resolution.length;
      if (!this.resolution.length) {
        return;
      }
      this.downloadErrors = false;
      const resolutions = this.texture.resolutions
        .filter((item) => {
          return this.resolution.includes(item.label);
        })
        .map((item) => {
          return item.resolution;
        });
      this.processing = true;
      this.recursiveDownload(resolutions);
    },
    recursiveDownload (resolutions) {
      clearTimeout(window[`product_${this.texture.id}`]);
      const item = {
        id: this.texture.id,
        type: this.type_code,
        resolutions
      };
      const forDownload = this.$store.getters.forDownload;
      if (
        forDownload.filter((item) => {
          return item.id !== this.texture.id;
        }).length
      ) {
        forDownload.push(item);
        this.$store.commit('setForDownload', forDownload);
      }
      catalog
        .download('textures', this.texture.id, { resolutions })
        .then((response) => {
          const data = response.data;
          if (data.download_link) {
            window.location.href = data.download_link;
            clearTimeout(window[`product_${this.texture.id}`]);
            const forDownload = this.$store.getters.forDownload.filter(
              product => product.id !== this.texture.id
            );
            this.$store.commit('setForDownload', forDownload);
          } else {
            window[`product_${this.texture.id}`] = setTimeout(() => {
              this.recursiveDownload(resolutions);
            }, 5000);
          }
        })
        .catch((error) => {
          this.downloadErrors = error.response.data.errors;
          this.processing = false;
          // clearTimeout(timeout);
        });
    },
    toggleBookMark () {
      if (!this.$auth.loggedIn) {
        return this.toLogin();
      }
      profile
        .toggleBookMark(this.type_code, this.texture.id)
        .then((response) => {
          this.texture.isBookmarked = !response.data.deleted;
          this.$store.commit('setBookmarks', response.data.totals);
        });
    },

    get_map_name (item) {
      if (this.map_titles[item]) {
        return this.map_titles[item];
      }
      return item;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_detailModal.scss";
</style>

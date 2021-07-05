<template>
  <div :style="{ background: '#fbfbff' }">
    <section class="services inprofile dart-section">
      <div class="container container--content">
        <CardGrid :cards="boxes" :is-profile="true" />
        <CardSidebar
          v-for="(card, index) in boxes"
          :key="index"
          :card="card"
        />
      </div>
    </section>
    <section>
      <div class="rows">
        <div class="cols">
          <div class="inner">
            <p class="sub_heading">
              Let's welcome our
            </p>
            <p class="heading">
              New partners
            </p>
            <p class="perx">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit
              amet nibh. Aenean ac malesuada quam, et tempor magna.
            </p>
            <Button
              link="/brands"
              text="Explore all brands"
              type="secondary"
              color=""
            />
          </div>
        </div>
        <div class="cols ">
          <div class="wrappers">
            <div v-for="partner in partners" class="boxes">
              <a :href="partner.link">
                <img :src="partner.image.url" :alt="partner.image.alt">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="dart-section">
      <div class="rows">
        <div class="cols">
          <div class="inner">
            <p class="sub_heading">
              Have you seen
            </p>
            <p class="heading">
              Hot news?
            </p>
            <p class="perx">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit
              amet nibh. Aenean ac malesuada quam, et tempor magna.
            </p>
            <FooterSocial />
            <Button
              link="javascript:;"
              text="Join our community"
              type="secondary"
              color=""
              :style="{ marginTop: '16px' }"
            />
          </div>
        </div>
        <div class="cols news">
          <section class="services view-bottom view-tut">
            <div class="container container--box">
              <!-- <SectionTitle :title="title" :perex="perex" :button="button" :isCentered="true" /> -->
              <CardGrid :cards="tutorials" :is-more="true" :is-tutorial="true" />
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="dart-section" v-if="countWindow == 3">
      <div v-if="textures.length" class="imageDetails-footer imageDetails--gray-bg">
        <SectionTitle :subtitle="subtitle_textures" :title="title_textures" :is-centered="true" />
        <VueSlickCarousel v-if="textures.length" ref="sliderNav2" class="default" v-bind="navCarousel">
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
          <div v-for="item in textures" class="imageItem">
            <img :src="item.cover" :alt="item.name">
          </div>
        </VueSlickCarousel>
      </div>

      <div v-if="models.length" class="imageDetails-footer imageDetails--gray-bg">
        <SectionTitle :subtitle="subtitle_textures2" :title="title_textures2" :is-centered="true" />
        <VueSlickCarousel v-if="models.length" ref="sliderNav2" class="default" v-bind="navCarousel">
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
          <div v-for="item in models" class="imageItem">
            <img :src="item.cover" :alt="item.name">
          </div>
        </VueSlickCarousel>
        <div class="circle-big" />
        <div class="circle-small" />
      </div>

      <div v-if="hdr.length" class="imageDetails-footer imageDetails--gray-bg last">
        <SectionTitle v-if="hdr.length" :subtitle="subtitle_textures3" :title="title_textures3" :is-centered="true" />
        <VueSlickCarousel ref="sliderNav" class="default" v-bind="navCarousel">
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
          <div v-for="item in hdr" class="imageItem">
            <img :src="item.cover" :alt="item.name">
          </div>
        </VueSlickCarousel>
      </div>
    </section>

    <section v-if="countWindow == 5">
      <div v-if="textures.length" class="imageDetails-footer  imageDetails--gray-bg imageDetails--profile">
        <SectionTitle :subtitle="subtitle_textures" :title="title_textures" :is-centered="true" />
        <VueSlickCarousel ref="sliderNav2" class="default" v-bind="navCarousel2">
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

          <div v-for="item in textures" class="imageItem">
            <img :src="item.cover" :alt="item.name">
            <CardSliderDetail :id="item.id" :texture="item" :hovered="true" />
          </div>
        </VueSlickCarousel>
      </div>
      <div v-if="models.length" class="imageDetails-footer models-wrap imageDetails--gray-bg">
        <SectionTitle :subtitle="subtitle_textures2" :title="title_textures2" :is-centered="true" />
        <VueSlickCarousel ref="sliderNav2" class="default" v-bind="navCarousel2">
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
          <div v-for="item in models" class="imageItem">
            <img :src="item.cover" :alt="item.name">
             <CardSliderDetail :id="item.id" :texture="item" :hovered="true" />
          </div>
        </VueSlickCarousel>
        <!-- <div class="circle-big" />
        <div class="circle-small" /> -->
      </div>
      <div v-if="hdr.length" class="imageDetails-footer hdr-wrap imageDetails--gray-bg last2">
        <SectionTitle :subtitle="subtitle_textures3" :title="title_textures3" :is-centered="true" />
        <VueSlickCarousel ref="sliderNav2" class="default" v-bind="navCarousel2">
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
          <div v-for="item in hdr" class="imageItem">
            <img :src="item.cover" :alt="item.name">
            <CardSliderDetail :id="item.id" :texture="item" :hovered="true" />
          </div>
        </VueSlickCarousel>
      </div>
    </section>

    <section class="dart-section" v-if="countWindow == 1">
      <div class="imageDetails-footer imageDetails--gray-bg special">
        <SectionTitle :subtitle="subtitle_textures" :title="title_textures" :is-centered="true" />
        <VueSlickCarousel v-if="textures.length" ref="sliderNav3" class="default" v-bind="navCarousel3">
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
          <div v-for="item in textures" class="imageItem">
            <img :src="item.cover" :alt="item.name">
          </div>
        </VueSlickCarousel>
      </div>

      <div class="imageDetails-footer imageDetails--gray-bg special">
        <SectionTitle :subtitle="subtitle_textures2" :title="title_textures2" :is-centered="true" />
        <VueSlickCarousel v-if="models.length" ref="sliderNav3" class="default" v-bind="navCarousel3">
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
          <div v-for="item in models" class="imageItem">
            <img :src="item.cover" :alt="item.name">
          </div>
        </VueSlickCarousel>
        <div class="circle-big" />
        <div class="circle-small" />
      </div>

      <div v-if="hdr.length" class="imageDetails-footer  imageDetails--gray-bg last2">
        <SectionTitle :subtitle="subtitle_textures3" :title="title_textures3" :is-centered="true" />
        <VueSlickCarousel v-if="hdr.length" ref="sliderNav3" class="default" v-bind="navCarousel3">
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
          <div v-for="item in hdr" class="imageItem">
            <img :src="item.cover" :alt="item.name">
          </div>
        </VueSlickCarousel>
      </div>
    </section>

    <SectionSubscribe :is-profile="true" />
    <div class="bluewrapper" />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import SectionTitle from '@/components/SectionParts/SectionTitle';
import CardGrid from '@/components/Cards/CardGrid';
import SectionSubscribe from '@/components/Sections/SectionSubscribe';
import Button from '@/components/Button';
import TooltipItem from '@/components/Textures/TooltipItem';
import CardSliderDetail from '@/components/CardSliderDetail/CardSliderDetail';
import FooterSocial from '@/components/Footer/FooterSocial';

import CardSidebar from '@/components/Cards/CardSidebar';

import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import catalog from '@/collectors/catalog';
import main from '@/collectors/main';

export default {
  name: 'Tutorials',
  middleware: 'auth',
  components: {
    SectionTitle,
    CardGrid,
    SectionSubscribe,
    Button,
    VueSlickCarousel,
    CardSidebar,
    TooltipItem,
    CardSliderDetail,
    FooterSocial
  },
  async asyncData (ctx) {
    let partners = [];
    let textures = [];
    let models = [];
    let hdr = [];
    let tutorials = [];

    await catalog.products('brands', 'page_size=10&trusted=true').then((response) => {
      partners = response.data.results.map((item) => {
        return {
          link: item.absolute_url,
          image: {
            url: item.logo,
            alt: item.name
          }
        };
      });
    });
    await main.tutorials(4).then((response) => {
      tutorials = response.data.results.map((item) => {
        return {
          image: {
            url: item.cover,
            alt: item.name
          },
          title: item.name,
          subtitle:
            'Looking for nice floor or material for facade? No problem!',
          text: item.description,
          link: item.video_url
        };
      });
    });

    await catalog.products('textures', 'page_size=10').then((response) => {
      textures = response.data.results;
    });

    await catalog.products('hdr', 'page_size=10').then((response) => {
      hdr = response.data.results;
    });
    await catalog.products('models', 'page_size=10').then((response) => {
      models = response.data.results;
    });

    return {
      partners,
      tutorials,
      models,
      hdr,
      textures
    };
  },
  data () {
    return {
      partners: [],
      tutorials: [],
      models: [],
      hdr: [],
      textures: [],

      subtitle: 'Services',
      title: 'Tutorials',
      subtitle_textures: 'Latest releases of',
      title_textures: 'Textures',
      subtitle_textures2: 'Latest releases of',
      title_textures2: 'Models',
      subtitle_textures3: 'Latest releases of',
      title_textures3: 'HDRi',
      perex:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Join our community on FB',
      cards: [
      ],
      boxes: [
        {
          image: {
            url: require('@/assets/img/spheres/textures.png'),
            alt: ''
          },
          title: 'Textures',
          subtitle:
            '',
          text:
            '',
          link: '/textures',
          sidebar: {
            isOpened: false,
            videoCover: '',
            text: '<p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>'
          }
        },
        {
          image: {
            url: require('@/assets/img/spheres/model.png'),
            alt: ''
          },
          title: 'Models',
          subtitle:
            '',
          text:
            '',
          link: '/models',
          sidebar: {
            isOpened: false,
            videoCover: '',
            text: '<p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>'
          }
        },
        {
          image: {
            url: require('@/assets/img/spheres/hdri.png'),
            alt: ''
          },
          title: 'HDRi',
          subtitle:
            '',
          text:
            '',
          link: '/hdr',
          sidebar: {
            isOpened: false,
            videoCover: '',
            text: '<p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>'
          }
        }
      ],
      navCarousel: {
        dots: false,
        infinite: false,
        centerMode: false,
        centerPadding: '1px',
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        asNavFor: {},
        initialSlide: 0,
        useTranform: false
      },
      navCarousel2: {
        dots: false,
        infinite: false,
        centerMode: false,
        centerPadding: '20px',
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        asNavFor: {},
        initialSlide: 0,
        useTranform: false
      },
      navCarousel3: {
        dots: false,
        infinite: false,
        centerMode: false,
        centerPadding: '1px',
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        asNavFor: {},
        initialSlide: 0,
        useTranform: false
      },
      options: [
        {
          value: 'Choose resolutions'
        },
        {
          value: '1920x1920 px'
        },
        {
          value: '2560x2560 px (2k)'
        },
        {
          value: '4096x4096 px (4k)'
        },
        {
          value: '7680x7680 px (8k)'
        },
        {
          value: '10240x10240 px (10k)'
        }
      ],
      processing: false,
      showWindow: false,
      countWindow: 1,
      selectedTexture: {},
      modalOpen: false
    };
  },
  mounted () {
    this.navCarousel.asNavFor = this.$refs.sliderMain;
    this.navCarousel2.asNavFor = this.$refs.sliderMain;
    this.navCarousel3.asNavFor = this.$refs.sliderMain;
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener('resize', this.onResize);
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize () {
      this.showCount();
    },
    showCount () {
      if (window.innerWidth < 450) {
        this.countWindow = 1;
      } else if (window.innerWidth < 950) {
        this.countWindow = 3;
      } else {
        this.countWindow = 5;
      }
    },
    showDetail (selectedTexture) {
      this.selectedTexture = selectedTexture;
      this.modalOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/tutorials.scss";
@import "@/assets/scss/pages/profile.scss";
@import "@/assets/scss/components/_detailModal.scss";
</style>

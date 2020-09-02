<template>
  <div>
    <section class="services inprofile">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna.
            </p>
            <Button
              link="#"
              text="Exploare all brands"
              type="secondary"
              color=""
            />
          </div>
        </div>
        <div class="cols">
          <div class="wrappers">
            <div class="boxes">
              <img src="@/assets/img/partners/1.svg">
            </div>
            <div class="boxes">
              <img src="@/assets/img/partners/2.svg">
            </div>
            <div class="boxes">
              <img src="@/assets/img/partners/3.svg">
            </div>
            <div class="boxes">
              <img src="@/assets/img/partners/1.svg">
            </div>
            <div class="boxes">
              <img src="@/assets/img/partners/2.svg">
            </div>
            <div class="boxes">
              <img src="@/assets/img/partners/3.svg">
            </div>
            <div class="boxes">
              <img src="@/assets/img/partners/1.svg">
            </div>
            <div class="boxes">
              <img src="@/assets/img/partners/2.svg">
            </div>
            <div class="boxes">
              <img src="@/assets/img/partners/3.svg">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna.
            </p>
            <Button
              link="#"
              text="Join our community on FB"
              type="secondary"
              color=""
            />
          </div>
        </div>
        <div class="cols news">
          <section class="services view-bottom">
            <div class="container container--box">
              <!-- <SectionTitle :title="title" :perex="perex" :button="button" :isCentered="true" /> -->
              <CardGrid :cards="cards" :is-more="true" :is-tutorial="true" />
            </div>
          </section>
        </div>
      </div>
    </section>
    <section v-if="countWindow == 3">
      <div class="imageDetails-footer">
        <SectionTitle :subtitle="subtitle_textures" :title="title_textures" :is-centered="true" />
        <VueSlickCarousel ref="sliderNav2" class="default" v-bind="navCarousel">
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
        </VueSlickCarousel>
      </div>

      <div class="imageDetails-footer">
        <SectionTitle :subtitle="subtitle_textures2" :title="title_textures2" :is-centered="true" />
        <VueSlickCarousel ref="sliderNav2" class="default" v-bind="navCarousel">
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
        </VueSlickCarousel>
        <div class="circle-big" />
        <div class="circle-small" />
      </div>

      <div class="imageDetails-footer last">
        <SectionTitle :subtitle="subtitle_textures3" :title="title_textures3" :is-centered="true" />
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
        </VueSlickCarousel>
      </div>
    </section>
    <section v-if="countWindow == 5">
      <div class="imageDetails-footer">
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
        </VueSlickCarousel>
      </div>

      <div class="imageDetails-footer">
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
        </VueSlickCarousel>
        <div class="circle-big" />
        <div class="circle-small" />
      </div>

      <div class="imageDetails-footer last2">
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

import CardSidebar from '@/components/Cards/CardSidebar';

import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'Tutorials',
  components: {
    SectionTitle,
    CardGrid,
    SectionSubscribe,
    Button,
    VueSlickCarousel,
    CardSidebar
  },
  data () {
    return {
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
        {
          image: {
            url: require('@/assets/img/tutorials/0.png'),
            alt: ''
          },
          title: 'For Architects',
          subtitle:
            'Looking for nice floor or material for facade? No problem!',
          text:
            'Choose the best material for your project, make visualisation for your client and buy a surface in the real world.',
          link: '#'
        },
        {
          image: {
            url: require('@/assets/img/tutorials/1.png'),
            alt: ''
          },
          title: 'For 3D Artists',
          subtitle:
            'Take it all! Diffuse, reflection, glosiness, bump, displacement ambient occlusion and even subsurface scattering...',
          text:
            'PBR materials  and 3D models  from real worldwide manufacturers.',
          link: '#'
        },
        {
          image: {
            url: require('@/assets/img/tutorials/2.png'),
            alt: ''
          },
          title: 'For Manufacturers',
          subtitle: "There is no material or model we can't handle with!",
          text:
            'Scann and postprocess your material or model, provide it through our website and get to know architects about your company and  its products.',
          link: '#'
        },
        {
          image: {
            url: require('@/assets/img/tutorials/0.png'),
            alt: ''
          },
          title: 'For Manufacturers',
          subtitle: "There is no material or model we can't handle with!",
          text:
            'Scann and postprocess your material or model, provide it through our website and get to know architects about your company and  its products.',
          link: '#'
        }
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
          link: '#',
          sidebar: {
            isOpened: false,
            videoCover: '',
            text: '<p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>'
          }
        },
        {
          image: {
            url: require('@/assets/img/spheres/models.png'),
            alt: ''
          },
          title: 'Models',
          subtitle:
            '',
          text:
            '',
          link: '#',
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
          link: '#',
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
        centerPadding: '1px',
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: 5,
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
      countWindow: 1
    };
  },
  mounted () {
    this.navCarousel.asNavFor = this.$refs.sliderMain;
    this.navCarousel2.asNavFor = this.$refs.sliderMain;
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
      if (window.innerWidth < 950) {
        this.countWindow = 3;
      } else {
        this.countWindow = 5;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/tutorials.scss";
@import "@/assets/scss/pages/profile.scss";
@import "@/assets/scss/components/_detailModal.scss";
</style>

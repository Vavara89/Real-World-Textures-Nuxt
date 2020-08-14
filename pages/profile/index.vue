<template>
  <div>
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
    <section>
      <div class="imageDetails-footer last">
        <SectionTitle :subtitle="subtitle_textures" :title="title_textures" :is-centered="true" />
        <VueSlickCarousel ref="sliderNav" v-bind="navCarousel">
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
    <SectionSubscribe />
    <SectionFaq :no-padding="true" />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import SectionTitle from '@/components/SectionParts/SectionTitle';
import CardGrid from '@/components/Cards/CardGrid';
import SectionSubscribe from '@/components/Sections/SectionSubscribe';
import SectionFaq from '@/components/Sections/SectionFaq';
import Button from '@/components/Button';

import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'Tutorials',
  components: {
    SectionTitle,
    CardGrid,
    SectionSubscribe,
    SectionFaq,
    Button,
    VueSlickCarousel
  },
  data () {
    return {
      subtitle: 'Services',
      title: 'Tutorials',
      subtitle_textures: 'Latest releases of',
      title_textures: 'Tutorials',
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
      navCarousel: {
        dots: false,
        infinite: false,
        centerMode: false,
        centerPadding: '1px',
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: this.showWindow ? this.showCount() : 0,
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
      showWindow: false
    };
  },
  mounted () {
    this.navCarousel.asNavFor = this.$refs.sliderMain;
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
      this.showWindow = true;

      if (window.innerWidth < 950) {
        console.log(2);
        return 3;
      } else {
        return 5;
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

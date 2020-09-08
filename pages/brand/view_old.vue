<template>
  <div class="page-container">
    <LeftSidebar :brandsdetail="true" />
    <div class="page-content">
      <ContentHeader />
      <section class="branddetail">
        <SectionTitle :title="title" :subtitle="subtitle" />

        <div class="all">
          <div class="column">
            <div class="blue-column">
              <div class="top">
                <div class="flex-row-container">
                  <div class="flex-row-item links" v-bind:style="{ fontSize: 11 + 'px' }">
                    <nuxt-link
                      to="/"
                    >
                      Filter
                    </nuxt-link>
                    <span> | </span>
                    <nuxt-link
                      to="/"
                    >
                      All
                    </nuxt-link>
                    <span> | </span>
                    <nuxt-link
                      to="/"
                    >
                      Concrete
                    </nuxt-link>
                    <span> | </span>
                    <nuxt-link
                      to="/"
                      class="filter is-active"
                      v-bind:style="{ fontSize: 11 + 'px' }"
                    >
                      Mossy
                    </nuxt-link>
                    </h4>
                  </div>
                  <div class="flex-row-item where">
                    <Button
                      link="#"
                      :text="manufactorList[0].site"
                      type="secondary"
                      color=""
                      v-bind:style="{ margin: 0, fontSize: 11 + 'px' }"
                    />
                  </div>
                  <div class="flex-row-item">
                    <button class="toggleOption" @click="toggleOption">
                      Where to buy
                    </button>
                  </div>
                </div>
              </div>
              <p class="text">
                {{ perex }}
              </p>
            </div>
          </div>
          <div class="column">
            <div class="green-column">
              <img src="assets/img/brands/logo.png">
            </div>
          </div>
        </div>
      </section>
      <section class="services view-bottom">
        <TextureGallery :textures="textures" />
      </section>
      <div class="table-cell middle">
        <div class="cell-content">
          <div class="rowes">
            <div class="coles">
              <a href="#" class="button active nobg">
                <img src="assets/img/icon-arrow_left.svg" style="margin:10px 0 10px 6px;" width="12">
                <img src="assets/img/icon-arrow_left.svg" style="margin:10px 6px 10px -7px;" width="12">
              </a>
            </div>
            <div class="coles">
              <a href="#" class="button active nobg">
                <img src="assets/img/icon-arrow_left.svg" style="margin:10px;" width="12">
              </a>
            </div>
            <div class="coles">
              <ul class="list">
                <li><a href="#" class="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
              </ul>
            </div>
            <div class="coles">
              <a href="#" class="button active rotate nobg">
                <img src="assets/img/icon-arrow_left.svg" style="margin:10px;" width="12">
              </a>
            </div>
            <div class="coles">
              <a href="#" class="button active rotate nobg">
                <img src="assets/img/icon-arrow_left.svg" style="margin:10px 0 10px 6px;" width="12">
                <img src="assets/img/icon-arrow_left.svg" style="margin:10px 6px 10px -7px;" width="12">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="modalOpen" :option="modalOpt" :list="manufactorList" />
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionParts/SectionTitle';
import TextureGallery from '@/components/Textures/TextureGallery';
import LeftSidebar from '@/components/Sidebar/LeftSidebar';
import ContentHeader from '@/components/Textures/ContentHeader';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button';

export default {
  name: 'Textures',
  components: {
    SectionTitle,
    TextureGallery,
    LeftSidebar,
    ContentHeader,
    Modal,
    Button
  },
  asyncData () {

  },
  data () {
    return {
      subtitle: '',
      title: 'Marc Jackobs',
      perex:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Join our community on FB',
      modalOpt: 'manufactorList',
      modalOpen: false,
      manufactorList: [
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },

        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        }
      ],
      cards: [
        {
          image: {
            url: require('assets/img/tutorials/0.png'),
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
            url: require('assets/img/tutorials/1.png'),
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
            url: require('assets/img/tutorials/2.png'),
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
            url: require('assets/img/tutorials/0.png'),
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
            url: require('assets/img/tutorials/1.png'),
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
            url: require('assets/img/tutorials/2.png'),
            alt: ''
          },
          title: 'For Manufacturers',
          subtitle: "There is no material or model we can't handle with!",
          text:
            'Scann and postprocess your material or model, provide it through our website and get to know architects about your company and  its products.',
          link: '#'
        }
      ],
      textures: [
        {
          image: {
            url: require('assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        }
      ]
    };
  },
  methods: {
    toggleOption (event) {
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/pages/textures.scss";
</style>

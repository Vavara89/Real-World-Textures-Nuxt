<template>
  <div class="page-container">
    <LeftSidebar :brands="true" />
    <div class="page-content">
      <ContentHeader />
      <section class="services view-bottom">
        <TextureGallery :textures="textures" :detail="false" :isBrand="true" />
      </section>
      <div class="table-cell middle">
        <div class="cell-content">
          <div class="rowes">
            <div class="coles">
              <a href="#" class="button active nobg">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 0 10px 6px;" width="12">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 6px 10px -7px;" width="12">
              </a>
            </div>
            <div class="coles">
              <a href="#" class="button active nobg">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px;" width="12">
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
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px;" width="12">
              </a>
            </div>
            <div class="coles">
              <a href="#" class="button active rotate nobg">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 0 10px 6px;" width="12">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 6px 10px -7px;" width="12">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionParts/SectionTitle';
import CardGrid from '@/components/Cards/CardGrid';
import SectionFaq from '@/components/Sections/SectionFaq';
import TextureGallery from '@/components/Textures/TextureGallery';
import LeftSidebar from '@/components/Sidebar/LeftSidebar';
import ContentHeader from '@/components/Textures/ContentHeader';

export default {
  name: 'Textures',
  components: {
    SectionTitle,
    CardGrid,
    SectionFaq,
    TextureGallery,
    LeftSidebar,
    ContentHeader
  },
  data () {
    return {
      subtitle: 'Services',
      title: 'Textures',
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
        },
        {
          image: {
            url: require('@/assets/img/tutorials/1.png'),
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
            url: require('@/assets/img/tutorials/2.png'),
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
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/pages/textures.scss";
</style>

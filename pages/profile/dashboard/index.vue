<template>
  <div class="page-container">
    <LeftSidebar :profile="true" />
    <div class="page-content">
      <section class="services view-bottom">
        fdfddffddf<br>
        fdfddffddf<br>
        fdfddffddf<br>
        fdfddffddf<br>
        fdfddffddf<br>
        fdfddffddf<br>
        fdfddffddf<br>
      </section>
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
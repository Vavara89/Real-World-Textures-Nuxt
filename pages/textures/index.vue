<template>
  <div class="page-container">
    <CatalogSidebar :filter="filter"/>
    <div class="page-content">
      <ContentHeader/>
      <section class="services view-bottom">
        <TextureGallery :textures="textures"/>
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
              <a href="#" class="button active rotate nobg hover">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px;" width="12">
              </a>
            </div>
            <div class="coles">
              <a href="#" class="button active rotate nobg hover">
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
import TextureGallery from '@/components/Textures/TextureGallery';
import CatalogSidebar from '@/components/Sidebar/CatalogSidebar';
import ContentHeader from '@/components/Textures/ContentHeader';
import catalog from "@/collectors/catalog";
import FilterClass from "@/classes/filter.class.ts";

export default {
  name: 'Textures',
  components: {
    TextureGallery,
    CatalogSidebar,
    ContentHeader
  },
  async asyncData(context) {
    let filter = null;
    try{
      await catalog.filter('textures').then(response => {
        filter = new FilterClass(response.data);
      });

      return {
        filter
      };
    }catch (e){

    }

  },

  data() {
    return {
      filter: null,
      subtitle: 'Services',
      title: 'Textures',
      perex:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Join our community on FB',
      textures: [
        {
          image: {
            url: require('@/assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('@/assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('@/assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('@/assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('@/assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('@/assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('@/assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        },
        {
          image: {
            url: require('@/assets/img/textures/texture-jafholz.png'),
            alt: ''
          },
          title: '0059 WOODVEENER OAK COPPER2'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/textures.scss";
</style>

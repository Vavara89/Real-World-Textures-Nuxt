<template>
  <div class="page-container">
    <CatalogSidebar :filter="filter"/>
    <div class="page-content">
      <ContentHeader/>
      <section class="services view-bottom">
        <TextureGallery :textures="textures" :noscale="true"/>
      </section>
      <div class="table-cell middle">
        <div class="cell-content">
          <div class="rowes">
            <div class="coles">
              <a href="#" class="button active nobg changer">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 0 10px 6px;" width="12" class="one">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 6px 10px -7px;" width="12" class="two">
              </a>
            </div>
            <div class="coles">
              <a href="#" class="button active nobg">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px;" width="12" class="ar">
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
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px;" width="12" class="ar">
              </a>
            </div>
            <div class="coles">
              <a href="#" class="button active rotate nobg hover changer">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 0 10px 6px;" width="12" class="one">
                <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 6px 10px -7px;" width="12" class="two">
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
import TexturesClass from "@/classes/textures.class.ts";

export default {
  name: 'Textures',
  components: {
    TextureGallery,
    CatalogSidebar,
    ContentHeader
  },
  async asyncData(context) {
    const qs = Object.keys(context.route.query)
      .map(key => `${key}=${context.route.query[key]}`)
      .join('&');
    let filter = null;
    let textures = null;
    const filterPromise = catalog.filter('textures', qs).then(response => {
      return filter = new FilterClass(response.data);
    });
    const productsPromise = catalog.products('textures', qs).then(response => {
      const data = response.data;
      return textures = data.results.map(item => new TexturesClass(item));
    });

    await Promise.all([filterPromise, productsPromise])
    return {
      textures: textures,
      filter: filter
    };
  },

  data() {
    return {
      filter: null,
      textures: [],
      // textures: [
      //   {
      //     image: {
      //       url: require('@/assets/img/textures/texture-jafholz.png'),
      //       alt: ''
      //     },
      //     title: '0059 WOODVEENER OAK COPPER2'
      //   },
      //   {
      //     image: {
      //       url: require('@/assets/img/textures/texture-jafholz.png'),
      //       alt: ''
      //     },
      //     title: '0059 WOODVEENER OAK COPPER2'
      //   },
      //   {
      //     image: {
      //       url: require('@/assets/img/textures/texture-jafholz.png'),
      //       alt: ''
      //     },
      //     title: '0059 WOODVEENER OAK COPPER2'
      //   },
      //   {
      //     image: {
      //       url: require('@/assets/img/textures/texture-jafholz.png'),
      //       alt: ''
      //     },
      //     title: '0059 WOODVEENER OAK COPPER2'
      //   },
      //   {
      //     image: {
      //       url: require('@/assets/img/textures/texture-jafholz.png'),
      //       alt: ''
      //     },
      //     title: '0059 WOODVEENER OAK COPPER2'
      //   },
      //   {
      //     image: {
      //       url: require('@/assets/img/textures/texture-jafholz.png'),
      //       alt: ''
      //     },
      //     title: '0059 WOODVEENER OAK COPPER2'
      //   },
      //   {
      //     image: {
      //       url: require('@/assets/img/textures/texture-jafholz.png'),
      //       alt: ''
      //     },
      //     title: '0059 WOODVEENER OAK COPPER2'
      //   },
      //   {
      //     image: {
      //       url: require('@/assets/img/textures/texture-jafholz.png'),
      //       alt: ''
      //     },
      //     title: '0059 WOODVEENER OAK COPPER2'
      //   }
      // ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/textures.scss";
</style>

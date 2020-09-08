<template>
  <div class="page-container">
    <CatalogSidebar :filter="filter" :active-category="activeCategory" :can-clear="false"/>
    <div class="page-content">
      <ContentHeader :path="path"/>
      <section class="services view-bottom">
        <TextureGallery :textures="brands" :is-brand="true" :noscale="true"/>
        <h2 style="text-align: center" v-if="!brands.length">Search result is empty, try to change your search params</h2>
      </section>
      <Pager :pager="pager" />
    </div>
  </div>
</template>

<script>
import TextureGallery from '@/components/Textures/TextureGallery';
import CatalogSidebar from '@/components/Sidebar/CatalogSidebar';
import ContentHeader from '@/components/Textures/ContentHeader';
import catalog from "@/collectors/catalog";
import Pager from "@/components/Pager/Pager"
import Modal from '@/components/Modal/Modal';


export default {
  name: 'Brands',
  components: {
    TextureGallery,
    CatalogSidebar,
    ContentHeader,
    Pager,
    Modal,

  },
  async asyncData(context) {
    let brands = [];
    let activeCategory = null;
    let filter = null;
    let pager = null;
    let product = null;

    await catalog.loadCatalog(context.route, 'brands', context).then(data => {
      filter = data[0];
      brands = data[1].textures;
      pager = data[1].pager;
      activeCategory = data[2];
      product = data[3];
    });
    return {
      brands: brands,
      activeCategory: activeCategory,
      filter: filter,
      pager: pager,
      product: product,
    }
  },

  data() {
    return {
      category_view: !!this.$route.params['slug'],
      brands: [],
      activeCategory: null,
      filter:{},
      pager: {},
      baseUrl: '/brands',
      product: null,
    };
  },
  watch: {
    $route(to, from) {
      const isSearchedChanged = ((from.query['search'] && to.query['to']) && (from.query['search'] !== to.query['to'])) === true;
      const fromRoot = from.matched[0].path;
      const toRoot = to.matched[0].path;
      if (fromRoot === toRoot) {
        catalog.loadCatalog(to, 'brands').then(data => {
          const filter = data[0];
          if(isSearchedChanged){
            delete this.filter['categories'];
          }

          this.filter = {...this.filter, ...filter};
          this.brands = data[1].textures;
          this.pager = data[1].pager;
          this.activeCategory = data[2];
          this.product = data[3];
        }).catch((error => {
          console.log('Errors');
          console.log(error);
        }));
      }
    }
  },
  computed:{
    path(){
      let data = [
        {name: 'Brands', url: this.baseUrl}
      ];
      if(this.activeCategory){
        this.activeCategory.ancestors.map(item => data.push({name: item.name, url:`${this.baseUrl}/${item.slug}`}));
        data.push({
          name: this.activeCategory.name,
          url: `${this.baseUrl}/${this.activeCategory.slug}`
        })
      }
      return data;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/textures.scss";
</style>

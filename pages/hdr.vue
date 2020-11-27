<template>
  <div class="page-container">
    <nuxt-child :product="product"></nuxt-child>
    <CatalogSidebar :filter="filter" :active-category="activeCategory"/>
    <div class="page-content">
      <ContentHeader :path="path"/>
      <section class="services view-bottom">
        <div class="catalog-page">
          <TextureGallery :textures="textures" :noscale="true"/>
          <h2 style="text-align: center" v-if="!textures.length">Search result is empty, try to change your search params</h2>
        </div>
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


export default {
  name: 'Hdr',
  scrollToTop: true,
  components: {
    TextureGallery,
    CatalogSidebar,
    ContentHeader,
    Pager
  },
  async asyncData(context) {
    let textures = [];
    let activeCategory = null;
    let filter = null;
    let pager = null;
    let product = null;
    await catalog.loadCatalog(context.route, 'hdr', context).then(data => {
      filter = data[0];
      textures = data[1].textures;
      pager = data[1].pager;
      activeCategory = data[2];
      product = data[3];

    });
    return {
      textures: textures,
      activeCategory: activeCategory,
      filter: filter,
      pager: pager,
      product: product,
    }
  },

  data() {
    return {
      category_view: !!this.$route.params['slug'],
      textures: [],
      activeCategory: null,
      filter:{},
      pager: {},
      baseUrl: '/hdr',
      product: null
    };
  },
  watch: {
   $route(to, from) {
      const isSearchedChanged = ((from.query['search'] && to.query['to']) && (from.query['search'] !== to.query['to'])) === true;
      const fromRoot = from.matched[0].path;
      const toRoot = to.matched[0].path;
      if (fromRoot === toRoot) {
        catalog.loadCatalog(to, 'hdr').then(data => {
          const filter = data[0];
          if(isSearchedChanged){
             delete this.filter['categories'];
          }
          this.filter = {...this.filter, ...filter};
          this.textures = data[1].textures;
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
        {name: 'HDRis', url: this.baseUrl}
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

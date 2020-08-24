<template>
  <div class="page-container">
    <nuxt-child :product="product"></nuxt-child>
    <CatalogSidebar :filter="filter" :active-category="activeCategory"/>
    <div class="page-content">
      <ContentHeader :path="path"/>
      <section class="services view-bottom">
        <TextureGallery :textures="textures" :noscale="true"/>
        <h2 style="text-align: center" v-if="!textures.length">Search result is empty, try to change your search params</h2>
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
import FilterClass from "@/classes/filter.class.ts";
import TexturesClass from "@/classes/textures.class.ts";
import CategoryClass from "@/classes/category.class.ts";
import PagerClass from "@/classes/pager.class.ts";
import Pager from "@/components/Pager/Pager"

const loadCatalog = async (route, context) => {
  let qs = Object.keys(route.query)
    .map(key => `${key}=${route.query[key]}`)
    .join('&');
  let activeCategory = {};
  let categoryPromise = null;
  let productPromise = null;
  let product = null;
  let categorySlug = route.params.sub ? route.params.slug + "/" + route.params.sub : route.params.slug;
  let productSlug = route.params.product ? route.params.product.replace('product-', '') : false;
  if(context && context.$auth.loggedIn){
    catalog.setToken(context.$auth.user.user.token);
  }

  if(route.params.sub && route.params.sub.startsWith('product-')){
    categorySlug = route.params.slug;
    productSlug = route.params.sub.replace('product-', '');
  }


  if (categorySlug) {
    categoryPromise = await catalog.category('textures', categorySlug, qs).then(response => {
      activeCategory = new CategoryClass(response.data);
      return activeCategory;
    });
    if (activeCategory) {
      qs += `&categories=${activeCategory.id}`;
    }
  }
  if(productSlug){
    productPromise = await catalog.product('textures', productSlug).then(response => {
      product = new TexturesClass(response.data);
      return product;
    });
  }
  const filterPromise = await catalog.filter('textures', qs).then(response => {
    return new FilterClass(response.data);
  });
  const productsPromise = await catalog.products('textures', qs).then(response => {
    const textures = response.data.results.map(item => new TexturesClass(item));
    return {textures: textures, pager: new PagerClass(response.data)}
  });
  return await Promise.all([filterPromise, productsPromise, categoryPromise, productPromise]);
};

export default {
  name: 'Textures',
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
    await loadCatalog(context.route, context).then(data => {
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
      baseUrl: '/textures',
      product: null
    };
  },
  watch: {
   $route(to, from) {
      const isSearchedChanged = ((from.query['search'] && to.query['to']) && (from.query['search'] !== to.query['to'])) === true;
      const fromRoot = from.matched[0].path;
      const toRoot = to.matched[0].path;
      if (fromRoot === toRoot) {
        loadCatalog(to).then(data => {
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
        {name: 'Textures', url: this.baseUrl}
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

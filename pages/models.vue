<template>
  <div class="page-container">
    <nuxt-child :product="product"></nuxt-child>
    <CatalogSidebar :filter="filter" :active-category="activeCategory" />
    <div class="page-content">
      <ContentHeader :path="path" />
      <section class="services view-bottom">
        <div class="catalog-page">
          <TextureGallery :textures="models" :noscale="true" />
          <h2 style="text-align: center" v-if="!models.length">
            Search result is empty, try to change your search params
          </h2>
        </div>
      </section>
      <Pager :pager="pager" />
    </div>
  </div>
</template>

<script>
import TextureGallery from "@/components/Textures/TextureGallery";
import CatalogSidebar from "@/components/Sidebar/CatalogSidebar";
import ContentHeader from "@/components/Textures/ContentHeader";
import catalog from "@/collectors/catalog";
import Pager from "@/components/Pager/Pager";

export default {
  name: "Models",
  layout: "catalog",
  scrollToTop: true,
  components: {
    TextureGallery,
    CatalogSidebar,
    ContentHeader,
    Pager,
  },
  async asyncData(context) {
    let models = [];
    let activeCategory = null;
    let filter = null;
    let pager = null;
    let product = null;
    await catalog.loadCatalog(context.route, "models", context).then((data) => {
      filter = data[0];
      models = data[1].textures;
      pager = data[1].pager;
      activeCategory = data[2];
      product = data[3];
    });
    return {
      models: models,
      activeCategory: activeCategory,
      filter: filter,
      pager: pager,
      product: product,
    };
  },

  data() {
    return {
      category_view: !!this.$route.params["slug"],
      models: [],
      activeCategory: null,
      filter: {},
      pager: {},
      baseUrl: "/models",
      product: null,
    };
  },
  watch: {
    $route(to, from) {
      const isSearchedChanged =
        (from.query["search"] &&
          to.query["to"] &&
          from.query["search"] !== to.query["to"]) === true;
      const fromRoot = from.matched[0].path;
      const toRoot = to.matched[0].path;
      if (fromRoot === toRoot) {
        catalog
          .loadCatalog(to, "models")
          .then((data) => {
            const filter = data[0];
            if (isSearchedChanged) {
              delete this.filter["categories"];
            }

            this.filter = { ...this.filter, ...filter };
            this.models = data[1].textures;
            this.pager = data[1].pager;
            this.activeCategory = data[2];
            this.product = data[3];
            console.log(data);
          })
          .catch((error) => {
            console.log("Errors");
            console.log(error);
          });
      }
    },
  },
  computed: {
    path() {
      let data = [{ name: "Models", url: this.baseUrl }];
      if (this.activeCategory) {
        this.activeCategory.ancestors.map((item) =>
          data.push({ name: item.name, url: `${this.baseUrl}/${item.slug}` })
        );
        data.push({
          name: this.activeCategory.name,
          url: `${this.baseUrl}/${this.activeCategory.slug}`,
        });
      }
      return data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/textures.scss";
</style>

<template>
  <div class="page-container">
    <TextureDetail
      @close="close"
      v-if="opened_detail"
      :type_title="'Texture'"
      :type_code="'textures'"
      :texture="product"
    />
    <CatalogSidebar :filter="filter" :active-category="activeCategory" />
    <div class="page-content">
      <div class="catalog-header">
        <ContentHeader :path="path" />
      </div>
      <section class="services view-bottom">
        <div class="catalog-page">
          <TextureGallery
            :class-list="'catalog'"
            :textures="textures"
            :noscale="true"
          />
          <h2 style="text-align: center" v-if="!textures.length">
            Search result is empty, try to change your search params
          </h2>
        </div>
      </section>
      <Pager :pager="pager" />
    </div>
  </div>
</template>

<script>
import TextureDetail from "@/components/TextureDetail/TextureDetail";
import TextureGallery from "@/components/Textures/TextureGallery";
import CatalogSidebar from "@/components/Sidebar/CatalogSidebar";
import ContentHeader from "@/components/Textures/ContentHeader";
import catalog from "@/collectors/catalog";
import Pager from "@/components/Pager/Pager";

export default {
  name: "Textures",
  layout: "withoutLogo",
  components: {
    TextureGallery,
    CatalogSidebar,
    ContentHeader,
    Pager,
    TextureDetail,
  },
  async asyncData(context) {
    let textures = [];
    let activeCategory = null;
    let filter = null;
    let pager = null;
    let product = null;
    await catalog
      .loadCatalog(context.route, "textures", context)
      .then((data) => {
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
      opened_detail: product !== null,
    };
  },

  data() {
    return {
      category_view: !!this.$route.params["slug"],
      textures: [],
      activeCategory: null,
      filter: {},
      pager: {},
      baseUrl: "/textures",
      product: null,
      opened_detail: false,
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
      const isFromProduct = !!from.params["product"];
      const isToProduct = !!to.params["product"];

      if (fromRoot === toRoot && isToProduct && this.product) {
        this.opened_detail = true;
        return;
      }
      if (fromRoot === toRoot) {
        this.$nuxt.$loading.start();
        catalog
          .loadCatalog(to, "textures")
          .then((data) => {
            const filter = data[0];
            if (isSearchedChanged) {
              delete this.filter["categories"];
            }
            this.filter = { ...this.filter, ...filter };
            this.textures = data[1].textures;
            this.pager = data[1].pager;
            this.activeCategory = data[2];
            this.product = data[3];
            this.opened_detail = this.product !== null;
          })
          .catch((error) => {})
          .finally(() => {
            this.$nuxt.$loading.finish();
          });
      }
    },
  },
  computed: {
    path() {
      let data = [{ name: "Textures", url: this.baseUrl }];
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
  methods: {
    close() {
      document.body.style.overflow = "";
      this.opened_detail = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/textures.scss";

.page-content::-webkit-scrollbar {
  width: 3px;
}
.page-content::-webkit-scrollbar-thumb {
  background: #d0d5e7;
  border-radius: 15px;
}
.page-content::-webkit-scrollbar-track {
  background: transparent;
}
</style>

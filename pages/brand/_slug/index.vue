<template>
  <div class="page-container">
    <CatalogSidebar :filter="filter" :can-clear="false" />

    <div class="page-content page-content-branddetail">
      <ContentHeader :path="path" />

      <section class="branddetail">
        <SectionTitle :title="brand.name" :subtitle="''" />

        <div class="all">
          <div class="column">
            <div class="blue-column">
              <div class="top">
                <div class="flex-row-container">
                  <div v-if="brand.categories.length" class="flex-row-item links" :style="{ fontSize: 11 + 'px' }">
                    <h4>
                      <template v-for="(val,index) of brand.categories" v-if="brand.categories.length">
                        <nuxt-link :to="val.absoluteUrl">
                          {{ val.name }}
                        </nuxt-link>
                        <span v-if="index !== (brand.categories.length - 1)"> | </span>
                      </template>
                    </h4>
                  </div>
                  <div class="flex-row-item where">
                    <Button
                      :link="brand.webSite"
                      :text="brand.webSite"
                      type="secondary"
                      color=""
                      :style="{ margin: 0, fontSize: 11 + 'px' }"
                    />
                  </div>
                  <div class="flex-row-item buys">
                    <button class="toggleOption" @click="openDistributors">
                      Where to buy
                    </button>
                  </div>
                </div>
              </div>
              <p class="text">
                {{ brand.description }}
              </p>
            </div>
          </div>
          <div class="column">
            <div class="green-column">
              <img :src="brand.logo" :alt="brand.name">
            </div>
          </div>
        </div>
      </section>
      <section class="services view-bottom">
        <TextureGallery :textures="[...products.textures, ...products.models]" />
      </section>
    </div>
    <Modal v-model="modalOpen" :can-search="false" :brand="brand" :option="'manufactorList'" :list="distributors" />
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionParts/SectionTitle';
import TextureGallery from '@/components/Textures/TextureGallery';
import LeftSidebar from '@/components/Sidebar/LeftSidebar';
import ContentHeader from '@/components/Textures/ContentHeader';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button';
import catalog from '@/collectors/catalog';
import CatalogSidebar from '@/components/Sidebar/CatalogSidebar';

export default {
  name: 'Textures',
  components: {
    SectionTitle,
    TextureGallery,
    LeftSidebar,
    ContentHeader,
    Modal,
    Button,
    CatalogSidebar
  },
  async asyncData (context) {
    let brand = [];
    let filter = null;
    let products = null;
    let distributors = null;

    await catalog.loadBrand(context.route, 'brands', context.route.params.slug).then((data) => {
      filter = data[0];
      brand = data[1];
      products = data[2];
      distributors = data[3];
    });
    return {
      brand,
      filter,
      products,
      distributors
    };
  },
  data () {
    return {
      brand: null,
      filter: null,
      products: null,
      distributors: null,
      modalOpen: false
    };
  },
  computed: {
    path () {
      const data = [
        { name: 'Brands', url: '/brands' }
      ];
      data.push({
        name: this.brand.name,
        url: this.brand.absoluteUrl
      });
      return data;
    }
  },
  methods: {
    openDistributors () {
      this.modalOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/pages/textures.scss";
</style>

<template>
  <div class="page-container">
    <CatalogSidebar :filter="filter" :canClear="false"/>

    <div class="page-content">
      <ContentHeader :path="path"/>

      <section class="branddetail">
        <SectionTitle :title="brand.name" :subtitle="''" />

        <div class="all">
          <div class="column">
            <div class="blue-column">
              <div class="top">
                <div class="flex-row-container">
                  <div class="flex-row-item links" v-bind:style="{ fontSize: 11 + 'px' }">
                    <h4>
                      <template v-if="brand.categories.length" v-for="(val,index) of brand.categories">
                          <nuxt-link :to="val.absoluteUrl" > {{ val.name }} </nuxt-link>
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
                      v-bind:style="{ margin: 0, fontSize: 11 + 'px' }"
                    />
                  </div>
                  <div class="flex-row-item">
                    <button  class="toggleOption" @click="openDistributors">
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
  async asyncData(context) {
    let brand = [];
    let filter = null;
    let products = null;
    let distributors = null;

    await catalog.loadBrand(context.route, 'brands', context.route.params.slug).then(data => {
      filter = data[0];
      brand = data[1];
      products = data[2];
      distributors = data[3];
    });
    return {
      brand: brand,
      filter: filter,
      products: products,
      distributors: distributors
    }
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
  computed:{
    path(){
      let data = [
        {name: 'Brands', url: '/brands'}
      ];
      data.push({
        name: this.brand.name,
        url: this.brand.absoluteUrl,
      })
      return data;
    }
  },
  methods:{
    openDistributors(){
      this.modalOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/pages/textures.scss";
</style>
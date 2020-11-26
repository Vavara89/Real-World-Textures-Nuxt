<template>
  <div class="textgallery">
    <ul class="textures">
      <li
        v-for="(brand, index) in brands"
        :key="'brand-' + index"
        class="texture brands"
      >
        <nuxt-link :to="brand.absoluteUrl">
          <div class="texture__block">
            <div class="texture__image brands noscale">
              <img :src="brand.logo" :alt="brand.name" />
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <div class="clear" />
  </div>
</template>

<script>
import TextureItem from "@/components/Textures/TextureItem";
import TooltipItem from "@/components/Textures/TooltipItem";
import DetailModal from "@/components/DetailModal/DetailModal";

export default {
  name: "BrandGallery",
  components: {
    TextureItem,
    TooltipItem,
    DetailModal,
  },
  props: {
    brands: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedTexture: {},
      modalOpen: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_texturegallery.scss";
</style>

<template>
  <div :class="classList" class="textgallery">
    <ul class="textures">
      <li
        v-for="(texture, index) in textures"
        :key="'texture-' + index"
        class="texture"
        :data-index="index"
        :class="{ brands: isBrand }"
      >
        <TextureItem
          :texture="texture"
          :shadow="shadow"
          :isBrand="isBrand"
          :noscale="noscale"
          :showContent="false"
        />
        <TooltipItem
          v-if="detail"
          :texture="texture"
          :show-detail="showDetail"
          :isBrand="isBrand"
          :index="index"
        />
        <div v-if="texture.isBookmarked" class="book">
          <img src="@/assets/img/icon-bookmark-3.svg" alt />
        </div>
        <div v-if="texture.isFree" class="free">
          <img src="@/assets/img/icon-free.svg" alt />
        </div>
        <div v-if="texture.in_assets" class="download">
          <img src="@/assets/img/icon-download-badge.svg" alt />
        </div>
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
  name: "TextureGallery",
  components: {
    TextureItem,
    TooltipItem,
    DetailModal,
  },
  props: {
    textures: {
      type: Array,
      required: true,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    detail: {
      type: Boolean,
      default: true,
    },
    isBrand: {
      type: Boolean,
      default: false,
    },
    noscale: {
      type: Boolean,
      default: false,
    },
    classList: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedTexture: {},
      modalOpen: false
    };
  },
  methods: {
    showDetail(selectedTexture) {
      this.selectedTexture = selectedTexture;
      this.modalOpen = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_texturegallery.scss";
</style>

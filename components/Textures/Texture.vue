<template>
  <div class="texture__block" :class="shadow ? 'texture--shadow' : ''">
    <div class="texture__image">
      <img :src="texture.image.url" :alt="texture.image.alt">
    </div>
    <div
      v-if="texture.name || texture.structure || texture.usage"
      class="texture__content"
    >
      <h3 v-if="texture.name" class="texture__name name">
        {{ texture.name }}
      </h3>
      <h4 v-if="texture.structure" class="texture__structure h3">
        {{ texture.structure }}
      </h4>
      <p v-if="texture.usage" class="texture__usage text">
        {{ texture.usage }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Texture',
  props: {
    texture: {
      type: Object,
      required: true
    },
    shadow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>

.texture__content {
  display: block;
  text-align: left;
  margin-top: 4rem;
  margin-left: 5rem;
}

.texture__block .texture__image:not(.brands) {
  width: 250px;
  height: 250px;
}
.hdr-gallery .texture__block .texture__image {
  width: auto;
  height: auto;
}
</style>

<template>
  <div>
    <ul class="textures" :class="{'mainpage': mainpage}">
      <div :class="{'textures--center': mainpage}">
      <li class="texture" v-for="(texture, index) in textures" :key="'texture-' + index">
        <Texture v-if="!texture.url" :texture="texture" :shadow="shadow"/>
        <nuxt-link v-if="texture.url" :to="texture.url">
          <Texture v-if="texture.url" :texture="texture" :shadow="shadow"/>
        </nuxt-link>

      </li>
            </div>
      <div class="clear"></div>
    </ul>
  </div>
</template>

<script>
import Texture from '@/components/Textures/Texture';

export default {
  name: 'TextureGrid',
  components: {
    Texture,
  },
  props: {
    textures: {
      type: Array,
      required: true
    },
    shadow: {
      type: Boolean,
      default: false
    },
    mainpage: {
      type: Boolean,
      default: false
    }
  }
};

</script>

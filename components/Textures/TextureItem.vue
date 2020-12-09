 <template>
  <div class="texture__block" :class="shadow ? 'texture--shadow' : ''">
    <div class="texture__image" :class="{ brands: isBrand, noscale: noscale }">
      <img
        :width="'100px'"
        height="'50px'"
        v-if="isBrand"
        :src="getCover()"
        :alt="texture.name"
      />
      <img v-if="!isBrand" :src="getCover()" :alt="texture.name" />
    </div>
    <template v-if="!isBrand && showContent">
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
    </template>
  </div>
</template>

<script>
export default {
  name: "TextureItem",
  props: {
    texture: {
      type: Object,
      required: true,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    isBrand: {
      type: Boolean,
      default: true,
    },
    noscale: {
      type: Boolean,
      default: false,
    },
    showContent: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    getCover() {
      if (this.texture.cover) {
        return this.texture.cover;
      }
      return this.texture.logo;
    },
  },
};
</script>

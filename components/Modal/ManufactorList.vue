<template>
  <div>
    <div v-if="!set" class="manufactors">
      <ul class="manufactor-list">
        <li v-for="(item, index) in list" :key="'logo-' + index" class="manufactor-item">
          <div class="manufactor-company">
            <p class="filter">
              {{ item.name }}
            </p>
          </div>
          <div class="manufactor-location">
            <p class="filter">
              {{ item.address }}
            </p>
          </div>
          <div class="manufactor-site">
            <p class="button-secondary button-secondary--undefined">
              {{ item.website }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="set" class="manufactors">
      <ul class="manufactor-list">
        <li v-for="(item, index) in list" :key="'logo-' + index" class="manufactor-item">
          <div class="manufactor-company">
            <p class="filter">
              <label :for="'brand-'+item.id">
                <input v-model="selected_brands" @change="$emit('change', selected_brands)" :id="'brand-'+item.id" type="checkbox" :value="item.id">
                <span class="perx">{{ item.name }}</span>
              </label>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ManufactorList',
  props: {
    list: {
      type: Array,
      required: true
    },
    set: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selected_brands:[],
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_manufactorList.scss";
</style>

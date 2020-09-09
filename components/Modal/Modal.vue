<template>
  <div v-show="value" class="modal" :class="[option]">
    <div class="modal-container">
      <div class="modal-header">
        <div class="modal-close">
          <a href="#" class="button" @click.prevent="close">
            <img src="@/assets/img/icon-cross.svg" style="margin:10px;" width="12">
          </a>
        </div>
        <div class="modal-title">
          <h2 v-if="!set" class="h2">
            Official distributors of<br>{{ brand.name }}
          </h2>
          <h2 v-if="set" class="h2">
            Select real world<br>manufacturers
          </h2>
        </div>
        <div v-if="canSearch">
          <input v-model="term"  type="text" placeholder="E.g. Ton">
          <button @click="search" class="toggleOption">
            Confirm
          </button>
        </div>
      </div>
      <div class="modal-body">
        <ManufactorList :list="search()" :set="set" />
      </div>
      <div class="modal-footer" />
    </div>
  </div>
</template>
<script>
import ManufactorList from '@/components/Modal/ManufactorList';

export default {
  name: 'Modal',
  components: {
    ManufactorList
  },
  props: {
    option: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    set: {
      type: Boolean,
      default: false
    },
    canSearch: {
      type: Boolean,
      default: true
    },
    brand:{
      type: Object,
      required: false
    }
  },
  data () {
    return {
      term: '',
      timeOut: undefined,
    };
  },
  methods: {
    close () {
      this.$emit('input', !this.value);
    },
    search(){
      return this.list.filter((item)=>{
          return this.term ? item.name.indexOf(this.term) > -1 : true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_modal.scss";

                    .toggleOption {
                    margin: 0 -1.7rem;
                    padding: 1rem 3.3rem;
                    border: none;
                    font-weight: bold;
                    border-radius: 5rem;
                    background-color: $color-primary-700;
                    color: $color-white;
                    text-transform: uppercase;
                }
</style>

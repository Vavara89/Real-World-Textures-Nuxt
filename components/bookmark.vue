<template>
  <div class="bookmark" :style="{ zIndex: 100000 - index }">
    <div class="bookmark__part">
      <div class="bookmark__part__left">
        <div
          class="bookmark__select"
          :class="{ 'bookmark__select--selected': item.selected }"
          @click="toggleSelected()"
        />
        <div class="bookmark__img">
          <img :src="item.image" :alt="item.name">
        </div>
      </div>
      <div class="bookmark__desc">
        {{ item.name }}
      </div>
    </div>
    <div class="option">
      <DropdownWithTitle
        v-if="!inProgress"
        v-model="resolution"
        :options="options"
        :title="item.type === 'models' ? 'Choose format' : 'Choose resolution'"
        :checkselect="true"
        :index="index"
        @input="onChange"
      />
      <p v-else style="width:200px;padding-left:20px">
        Downloading...
      </p>
    </div>
    <div class="bookmark__part">
      <div class="bookmark__cost">
        {{ item.cost }} {{ appendText }}
      </div>
      <div class="bookmark__btn" @click="deleteBookmark(item)">
        delete
      </div>
    </div>
  </div>
</template>

<script>
import DropdownWithTitle from '@/components/Sidebar/DropdownWithTitle';
export default {
  name: 'Bookmark',
  components: {
    DropdownWithTitle
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      resolution: [],
      options: [],
      inProgress: false
    };
  },
  computed: {
    appendText () {
      if (this.item.cost < 1 || this.item.cost > 1) {
        return 'credits';
      } else {
        return 'credit';
      }
    },
    resolutionName () {
      return (item) => {
        if (this.type_code === 'hdr') {
          return item.name;
        }
        if (item.resolutionSide) {
          return `${item.resolution}x${item.resolutionSide}px (${item.name})`;
        }
        return `${item.resolution}px (${item.name})`;
      };
    }
  },
  created () {
    if (this.item.resolutions) {
      this.item.resolutions.map((data) => {
        if (this.item.type === 'hdr') {
          this.options.push({ value: data.name });
          data.label = data.name;
        } else {
          const label = isNaN(data.resolution)
            ? data.name
            : this.resolutionName(data);
          this.options.push({ value: label });
          data.label = label;
        }
      });
    }
  },
  mounted () {
    this.$store.subscribe((mutation, state) => {
      console.log('state update', state.forDownload);
      if (mutation.type === 'setForDownload') {
        const pks = state.forDownload.map((item) => {
          return item.id;
        });
        this.inProgress = pks.includes(this.item.id);
      }
    });
  },
  methods: {
    onChange (val) {
      this.$emit('change', val);
    },
    toggleSelected () {
      this.item.selected = !this.item.selected;
      // this.$emit('change', this.item)
    },
    deleteBookmark (item) {
      this.$emit('deleteBookmark', item);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_bookmark.scss";
</style>

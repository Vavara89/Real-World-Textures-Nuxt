<template>
  <div class="sortoption">
    <h4 class="text">Sort By:</h4>
    <Dropdown @input="sortChanged" v-model="sort" :options="options" :selected_option="selected_option"/>
  </div>
</template>
<script>
import Dropdown from "@/components/Sidebar/Dropdown";

export default {
  name: "SortOption",
  components: {
    Dropdown,
  },
  created(){
    const query = this.$route.query;
    const ordering = query['ordering'] ? query['ordering'] : null;
    const sort = ordering ? this.sorts.filter(item => item[1] === ordering).pop() : null;
    this.selected_option = sort ? {value:sort[0]} : null;
  },
  data() {
    return {
      sort: null,
      selected_option: null,
      options: [
        {
          value: "Latest"
        },
        {
          value: "Name A-Z"
        },
        {
          value: "Name Z-A"
        },
      ],
      sorts: [
        ["Latest", '-created_at'],
        ["Name A-Z", 'name'],
        ["Name Z-A", '-name'],
      ]
    }
  },
  methods: {
    sortChanged(e) {
      const sort = this.sorts.filter(item => item[0] === this.sort.value).pop();
      const query = {};
      Object.assign(query, this.$route.query);
      query['ordering'] = sort[1];
      this.$router.push({path: this.$route.path, query: query})
    },
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_sortoption.scss"
</style>

<template>
  <div v-if="canPaginate" class="table-cell middle">
    <div class="cell-content">
      <div class="rowes">
        <div class="coles">
          <a @click="toFirst" v-if="havePrev" href="#" class="button nobg changer">
            <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 0 10px 6px;" width="12" class="one">
            <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 6px 10px -7px;" width="12" class="two">
          </a>
        </div>
        <div class="coles">
          <a @click="toPrev" v-if="havePrev" href="#" class="button active nobg">
            <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px;" width="12" class="ar">
          </a>
        </div>
        <div class="coles">
          <ul class="list">
            <li v-for="(pageNum, index) in getPages" :key="'page-pager-' + index">
              <a v-if="pageNum > 0" href="#" @click="paginate(pageNum)" :class="{'active': isActive(pageNum)}">{{ pageNum }}</a>
              <span v-else>● ● ●</span>
            </li>
          </ul>
        </div>
        <div v-if="haveNext" class="coles">
          <a @click="toNext" class="button active rotate nobg hover">
            <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px;" width="12" class="ar">
          </a>
        </div>
        <div v-if="haveNext" class="coles">
          <a @click="toLast" href="#" class="button active rotate nobg hover changer">
            <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 0 10px 6px;" width="12" class="one">
            <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px 6px 10px -7px;" width="12" class="two">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pager",
  props: {
    pager: {
      type: Object,
      required: true
    },
    isLastPage: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  methods:{
    isActive(page){
      return this.activePage === page;
    },
    paginate(page){
      const query = {};
      Object.assign(query, this.$route.query);
      query[this.pager.page_query_param] = page;
      this.activePage = page;
      this.$router.push({path: this.$route.path, query: query});
    },
    toFirst(){
      this.paginate(1);
    },
    toLast(){
      const last = this.getPages.slice(-1).pop();
      this.paginate(last);
    },
    toPrev(){
      this.paginate(this.pager.current - 1);
    },
    toNext(){
      this.paginate(this.pager.current + 1);
    }
  },
  computed:{
    perPage(){
      return 20;
    },
    havePrev(){
      return !!this.pager.previous;
    },
    haveNext(){
      return !this.isLastPage;
    },
    canPaginate(){
      return this.pager.count > this.pager.page_size;
    },
    activePage(){
      return this.pager.current;
    },
    getPages(){
      let pages = [];
      const currentPage = this.pager.current;
      const allPages = this.pager.pages_count;
      if (currentPage + 10 > allPages) {
        for (let i = 0; i < 10; i++) {
          pages.push(allPages - 9 + i);
        }
      }
      else {
        for (let i = 0; i < 10; i++) {
          pages.push(currentPage + i);
        }
        if (currentPage + 10 < allPages) pages.push(0);
        pages.push(allPages);
      }
      return pages;
    },
  },
};
</script>

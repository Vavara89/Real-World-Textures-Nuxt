<template>
  <div>
    <section class="bookmarks">
      <div class="container container--box">
        <div class="bookmarks__list" v-if="bookmarks.length > 0">
          <Bookmark v-for="(item,index) in bookmarks"
            @deleteBookmark="deleteBookmark"
            :item="item"
            :index="index"
            :key="index"
          />
        </div>
        <div class="bookmarks__credits">
          <div class="bookmarks__credits__part">
            <div class="bookmarks__credits__title">
              Your Credits Left:
            </div>
            <div class="bookmarks__credits__subscription">
              {{ subscriptionCredits }} Subscription
            </div>
            <Button :link="subscriptionLink" text="Upgrade Subscription" type="secondary"/>
          </div>
          <div class="bookmarks__credits__part">
            <div class="bookmarks__credits__title">
              Total Credits: <span>{{ totalCredits }} {{ appendText }}</span>
            </div>
            <div class="bookmarks__credits__title">
              Total Items: <span>{{ selectedBookmarks }}</span>
            </div>
            <Button :link="subscriptionLink" text="Download Selected" type="primary" color="large"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Bookmark from "@/components/Bookmark";
import Button from "@/components/Button";

export default {
  name: "Bookmarks",
  components: {
    Bookmark,
    Button
  },
  data() {
    return {
      subscriptionCredits: 565,
      subscriptionLink: "",
      bookmarks: [
        {
          image: {
            url: require("@/assets/img/textures/texture-technistone.png"),
            alt: "Logo"
          },
          desc: "Cliff Grey Chunky 008",
          cost: 8,
          selected: false,
        },
        {
          image: {
            url: require("@/assets/img/textures/texture-technistone.png"),
            alt: "Logo"
          },
          desc: "Cliff Grey Chunky 008",
          cost: 1,
          selected: false,
        },
        {
          image: {
            url: require("@/assets/img/textures/texture-technistone.png"),
            alt: "Logo"
          },
          desc: "Cliff Grey Chunky 008",
          cost: 0,
          selected: false,
        },
        {
          image: {
            url: require("@/assets/img/textures/texture-technistone.png"),
            alt: "Logo"
          },
          desc: "Cliff Grey Chunky 008",
          cost: 23,
          selected: false,
        },
      ],
    };
  },
  methods: {
    deleteBookmark($event) {
      this.bookmarks.splice($event, 1);
      console.log('ahoj');
    },
  },
  computed: {
    selectedBookmarks() {
      const result = this.bookmarks.filter(bookmark => bookmark.selected === true);
      return result.length;
    },
    totalCredits() {
      let sum = 0;
      this.bookmarks.forEach(bookmark => {
        sum += bookmark.cost;
      });
      return sum;
    },
    appendText() {
      if (this.totalCredits < 1 || this.totalCredits > 1) {
        return "Credits";
      } else {
        return "Credit";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/bookmarks.scss";
</style>

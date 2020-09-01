<template>
  <div>
    <section class="bookmarks">
      <div class="container container--box">
        <h2 v-if="!bookmarks.length">Your bookmarks is empty for now</h2>
        <div class="bookmarks__list" v-if="bookmarks.length > 0">
          <Bookmark v-for="(item,index) in bookmarks"
                    @deleteBookmark="deleteBookmark"
                    :item="item"
                    :index="index"
                    :key="index"
          />
        </div>
        <div v-if="bookmarks.length > 0" class="bookmarks__credits">
          <div class="bookmarks__credits__part">
            <div class="bookmarks__credits__title">
              Your Credits Left:
            </div>
            <div class="bookmarks__credits__subscription">
              {{ profile.credits }} credits
            </div>
            <Button :link="subscriptionLink"  :text="'Upgrade Subscription'" type="secondary"/>
          </div>
          <div class="bookmarks__credits__part">
            <div class="bookmarks__credits__title">
              Total Credits: <span>{{ totalCredits }} {{ appendText }}</span>
            </div>
            <div class="bookmarks__credits__title">
              Total Items: <span>{{ selectedBookmarks }}</span>
            </div>
            <Button :link="'javascript:void(0)'" @click="download" :text="buttonText" type="primary" color="large"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Bookmark from "@/components/Bookmark";
import Button from "@/components/Button";
import profile from "@/collectors/profile";
import BookmarkClass from "@/classes/bookmark.class.ts";

export default {
  name: "Bookmarks",
  components: {
    Bookmark,
    Button
  },
  async asyncData(context) {
    if (context && context.$auth.loggedIn) {
      profile.setToken(context.$auth.user.user.token);
    }
    const bookmarks = [];
    await profile.getBookmarks().then((response) => {
      ['textures', 'models', 'hdr'].forEach((type) => {
        response.data[type].map((item) => {
          const data = {
            id: item.id,
            image: item.cover,
            name: item.name,
            type: type,
            cost: item.credits,
            selected: false
          };
          bookmarks.push(new BookmarkClass(data))
        });
      });
    });
    return {
      bookmarks: bookmarks
    }
  },
  data() {
    return {
      subscriptionLink: "/profile/dashboard",
      bookmarks: [],
      buttonText: 'Download Selected'
    };
  },
  methods: {
    deleteBookmark(item) {
      this.$nuxt.$loading.start();
      profile.toggleBookMark(item.type, item.id).then((response)=>{
        this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== item.id);
        this.$nuxt.$loading.finish();
        this.$store.commit('setBookmarks', response.data.totals);
      });
    },
    download(){
      this.buttonText = 'Please wait, preparing assets';
    },
  },
  computed: {
    profile(){
      return this.$auth.user.user.profile;
    },
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

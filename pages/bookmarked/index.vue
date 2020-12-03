<template>
  <div>
    <section class="bookmarks">
      <div class="container container--box">
        <h2 v-if="!bookmarks.length">Your bookmarks is empty for now</h2>
        <div v-if="bookmarks.length" class="bookmarks__header">
          <div @click="selectAllBookmark" class="bookmarks__header-selectAll">
            select all
          </div>
          <div class="bookmarks__header-selected">
            {{ selectedBookmarks }} items selected
          </div>
          <div class="bookmarks__header-totalCredits">
            {{ totalCredits }} credits total
          </div>
          <div @click="deletAllBookmark" class="bookmarks__header-deleteAll">
            delete all
          </div>
        </div>
        <div class="bookmarks__list" v-if="bookmarks.length > 0">
          <Bookmark
            v-for="(item, index) in bookmarks"
            @deleteBookmark="deleteBookmark"
            :item="item"
            :index="index"
            :key="index"
          />
        </div>
        <div v-if="bookmarks.length > 0" class="bookmarks__credits">
          <div class="bookmarks__credits__part">
            <div class="bookmarks__credits__title">Your Credits Left:</div>
            <div class="bookmarks__credits__subscription">
              {{ profile.credits }} Subscription
            </div>
            <Button
              :link="subscriptionLink"
              :text="'Upgrade Subscription'"
              type="secondary"
            />
          </div>
          <div class="bookmarks__credits__part">
            <div class="bookmarks__credits__title">
              Total Credits: <span>{{ totalCredits }} {{ appendText }}</span>
            </div>
            <div class="bookmarks__credits__title">
              Total Items: <span>{{ selectedBookmarks }}</span>
            </div>
            <button
              @click="downloads"
              class="button-primary button-primary--large"
              :class="{ 'button-primary--blue': downloading }"
            >
              <img
                v-if="downloading"
                class="rotate"
                src="@/assets/img/icon-processing-button.svg"
              />
              <span v-if="downloading">Processing... Continue Browsing</span>
              <span v-if="!downloading">Download Selected</span>
            </button>
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
import catalog from "@/collectors/catalog";
import users from "@/collectors/users";

export default {
  name: "Bookmarks",
  components: {
    Bookmark,
    Button,
  },
  async fetch() {
    if (this.$auth.loggedIn) {
      profile.setToken(this.$auth.user.user.token);
      users.setToken(this.$auth.user.user.token);
    }
    await profile.getBookmarks().then((response) => {
      ["textures", "models", "hdr"].forEach((type) => {
        response.data[type].map((item) => {
          const data = {
            id: item.id,
            image: item.cover,
            name: item.name,
            type: type,
            cost: item.credits,
            selected: false,
          };
          this.bookmarks.push(new BookmarkClass(data));
        });
      });
    });
    await users.downloading_states().then((response) => {
      this.server_downloading = response.data;
      const book_marks = this.server_downloading
        .filter((item) => {
          return item["from_book_mark"] === true;
        })
        .map((item) => {
          return item["id"];
        });
      this.bookmarks.map((item) => {
        item.selected = book_marks.includes(item.id);
      });
      this.downloading =
        this.bookmarks.filter((bookmark) => bookmark.selected === true).length >
        0;
    });
  },
  data() {
    return {
      subscriptionLink: "/profile/pricing",
      bookmarks: [],
      mountains: [],
      buttonText: "Download Selected",
      downloading: false,
      selectError: false,
      starting_download: false,
      server_downloading: [],
      processOfDeleting: false,
    };
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "setForDownload") {
        this.downloading = state.forDownload.length > 0;
        const pks = state.forDownload.map((item) => {
          return item["id"];
        });
        this.bookmarks.forEach((item) => {
          item.selected = pks.indexOf(item["id"]) > -1;
        });
        if (!pks) {
          this.bookmarks.forEach((item) => {
            item.selected = false;
          });
        }
      }
    });
    if (this.$store.getters.checkDownload.length) {
      const pk_list = this.$store.getters.checkDownload.map((item) => {
        return item["id"];
      });

      this.bookmarks.forEach((bookmark) => {
        if (pk_list.indexOf(bookmark.id) > -1) {
          this.runDownload(bookmark);
        }
      });
    }
  },

  methods: {
    deleteBookmark(item) {
      this.$nuxt.$loading.start();
      profile.toggleBookMark(item.type, item.id).then((response) => {
        this.bookmarks = this.bookmarks.filter(
          (bookmark) => bookmark.id !== item.id
        );
        this.$nuxt.$loading.finish();
        this.$store.commit("setBookmarks", response.data.totals);
      });
    },

    async deletAllBookmark() {
      this.$nuxt.$loading.start();
      await this.bookmarks.map(async (item) => {
        await profile.toggleBookMark(item.type, item.id);
        this.bookmarks = this.bookmarks.filter(
          (bookmark) => bookmark.id !== item.id
        );
      });
      this.$nuxt.$loading.finish();
      this.$store.commit("setBookmarks", 0);
    },

    selectAllBookmark() {
      this.$nuxt.$loading.start();
      this.bookmarks.forEach(function (item) {
        item.selected = !item.selected;
      });
      this.$nuxt.$loading.finish();
    },

    downloads() {
      const forDownload = this.bookmarks.filter(
        (bookmark) => bookmark.selected === true
      );
      this.selectError = !forDownload.length;
      if (this.selectError) {
        return false;
      }
      this.starting_download = true;
      forDownload.forEach((item) => {
        this.runDownload(item);
      });
    },

    runDownload(item) {
      const forDownload = this.$store.getters.forDownload;
      if (forDownload.indexOf(item) === -1) {
        forDownload.push(item);
        item.resolutions = [0];
        this.$store.commit("setForDownload", forDownload);
      }

      let interval;
      catalog
        .download(item.type, item.id, { resolutions: item.resolutions })
        .then((response) => {
          const data = response.data;
          if (data.download_link) {
            window.location.href = data.download_link;
            const forDownload = this.$store.getters.forDownload.filter(
              (product) => product["id"] !== item["id"]
            );
            this.$store.commit("setForDownload", forDownload);
            clearInterval(interval);
          } else {
            interval = setTimeout(() => {
              this.runDownload(item);
            }, 5000);
          }
        })
        .catch((error) => {
          clearTimeout(interval);
          this.downloadErrors = error.response.data.errors;
        });
    },
  },
  computed: {
    profile() {
      return this.$auth.user.user.profile;
    },
    selectedBookmarks() {
      const result = this.bookmarks.filter(
        (bookmark) => bookmark.selected === true
      );
      return result.length;
    },

    totalCredits() {
      let sum = 0;
      this.bookmarks.forEach((bookmark) => {
        if (bookmark.selected) {
          sum += bookmark.cost;
        }
      });
      return sum;
    },

    appendText() {
      if (this.totalCredits < 1 || this.totalCredits > 1) {
        return "Credits";
      } else {
        return "Credit";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/bookmarks.scss";
</style>

<template>
  <div>
    <span @click="toggleMessage(modal)" class="cursor">{{ text }}</span>
    <div v-if="taken" class="modal">
      <div class="inner">
        <span @click="toggleMessage(modal)" class="close"></span>
        <img src="@/assets/img/icon-taken.svg" alt />
        <h2>The email has already been taken.</h2>
        <p class="style">forgotten password?</p>
        <a href="#" class="style green">reset it</a>
      </div>
    </div>
    <div v-if="captcha" class="modal">
      <div class="inner">
        <span @click="toggleMessage(modal)" class="close"></span>
        <img src="@/assets/img/icon-captcha.svg" alt />
        <h2>The captcha field is required.</h2>
        <p class="style">no materials for robots. sorry.</p>
        <a href="#" class="style green">try it again</a>
      </div>
    </div>
    <div v-if="bookmarked" class="modal">
      <div class="inner">
        <span @click="toggleMessage(modal)" class="close"></span>
        <img src="@/assets/img/icon-bookmarked.svg" alt />
        <h2>Succesfully bookmarked</h2>
        <p class="style">You can download it from</p>
        <a href="#" class="style green">bookmark section</a>
      </div>
    </div>
    <div v-if="wrong" class="modal">
      <div class="inner">
        <span @click="toggleMessage(modal)" class="close"></span>
        <img src="@/assets/img/icon-wrong.svg" alt />
        <h2>Something went wrong</h2>
        <p class="style">omg we're sorry. please, check it later.</p>
        <a href="#" class="style green">or get help</a>
      </div>
    </div>
    <div v-if="reset" class="modal">
      <div class="inner">
        <span @click="toggleMessage(modal)" class="close"></span>
        <h2>Reset your password</h2>
        <form @submit="checkEmail" method="post" class="email">
          <label class="email">Your email adress</label>
          <input
            class="email"
            :class="{'email--error': errors.length && !added}"
            type="text"
            id="email"
            v-model="email"
            name="email"
          />
          <div class="errors" :class="{'success': added}">
            <span v-if="errors.length">{{ errors[0] }}</span>
          </div>
          <button type="submit" class="email">confirm</button>
        </form>
      </div>
    </div>
    <div
      v-if="taken || captcha || bookmarked || wrong || reset"
      @click="toggleMessage(modal)"
      class="silkscreen"
    ></div>
  </div>
</template>

<script>
export default {
  name: "LoginModals",
  components: {},
  props: {
    text: {
      type: String,
      required: true
    },
    modal: {
      type: String,
      required: true
    }
  },
  data: () => ({
    // Reset password
    errors: [],
    email: null,
    added: false,

    // Modals
    taken: false,
    captcha: false,
    bookmarked: false,
    wrong: false,
    reset: false
  }),
  methods: {
    scrollSwitcher(state) {
      if (state) {
        window.scrollTo(0, 0);
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
    toggleMessage(message) {
      if (message === "taken") {
        this.taken = !this.taken;
        this.scrollSwitcher(this.taken);
      }
      if (message === "captcha") {
        this.captcha = !this.captcha;
        this.scrollSwitcher(this.captcha);
      }
      if (message === "bookmarked") {
        this.bookmarked = !this.bookmarked;
        this.scrollSwitcher(this.bookmarked);
      }
      if (message === "wrong") {
        this.wrong = !this.wrong;
        this.scrollSwitcher(this.wrong);
      }
      if (message === "reset") {
        this.reset = !this.reset;
        this.scrollSwitcher(this.reset);
        this.resetForm();
      }
    },
    checkEmail(e) {
      e.preventDefault();
      this.errors = [];

      if (!this.email) {
        this.errors.push("* Please, enter your email address.");
        this.added = false;
      } else if (!this.validEmail(this.email)) {
        this.errors.push("* Please, enter valid email address.");
        this.added = false;
      } else if (this.validEmail(this.email)) {
        this.errors.push("Your email was successfully added");
        this.added = true;
        return true;
      }
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    resetForm(state) {
      this.email = '';
      this.errors = [];
    },
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>
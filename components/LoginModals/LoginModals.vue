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
        <form class="email">
          <label class="email">Your email adress</label>
          <input class="email" type="text" />
          <div class="errors"><span v-if="isEmailError">* Please, enter valid email address</span></div>
          <button class="email">confirm</button>
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
        // Errors
        isEmailError: true,

        // Modals
        taken: false,
        captcha: false,
        bookmarked: false,
        wrong: false,
        reset: false
    }),
  methods: {
    scrollSwitcher(state){
        if(state){
            window.scrollTo(0, 0)
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
        }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>
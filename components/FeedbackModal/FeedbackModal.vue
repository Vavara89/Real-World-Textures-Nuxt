<template>
  <div v-if="opened">
    <div class="modal centered-window">
      <div class="inner">
        <span class="close" @click="scrollSwitcher(false)"/>
        <div v-if="send" class="success-message">
            <img src="@/assets/img/icon-bookmarked.svg" alt>
            <h2>Your message success send</h2>
            <p class="style">
              We will keep in touch with your soon as it possible.
            </p>
        </div>
        <div v-if="!send">
        <h2>Please let us know how we can help you</h2>
          <form method="post" class="email faq__inner" @submit="process">
            <input
              id="email"
              v-model="email"
              class="input"
              :class="{'email--error': formErrors['email'].length && !send}"
              type="text"
              placeholder="Your email address"
              name="email"
            />
            <div class="errors" :class="{'success': send, 'email--error--faq': formErrors['email'].length && !send}">
              <span v-if="formErrors['email'].length">{{ formErrors['email'][0] }}</span>
            </div>

            <input
              id="name"
              v-model="name"
              class="input"
              :class="{'email--error': formErrors['name'].length && !send}"
              type="text"
              placeholder="Your name"
              name="name"
            />
            <div class="errors" :class="{'success': send}">
              <span v-if="formErrors['name'].length">{{ formErrors['name'][0] }}</span>
            </div>

            <textarea
              id="question"
              v-model="question"
              class="input"
              :class="{'email--error': formErrors['question'].length && !send}"
              placeholder="Question here"
              name="question"
            >
            </textarea>
            <div class="errors" :class="{'success': send}">
              <span v-if="formErrors['question'].length">{{ formErrors['question'][0] }}</span>
            </div>

            <button :class="[isSubmitted ? 'loading' : '']" type="submit" class="email autos">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="silkscreen"/>
  </div>
</template>

<script>

import main from "@/collectors/main";
import keysToCamel from "@/classes/keysToCamel.ts";

export default {
  name: 'FeedbackModal',
  data: () => ({
    formErrors: {
      'name': [],
      'email': [],
      'question': []
    },
    email: null,
    name: null,
    question: null,
    opened: false,
    send: false,
    isSubmitted: false
  }),
  methods: {
    scrollSwitcher(state) {
      if (state) {
        document.body.style.overflow = 'hidden';
      } else {
        this.send = false;
        document.body.style.overflow = 'auto';
      }
      this.opened = !this.opened;
    },

    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    process(e) {
      e.preventDefault();
      this.cleanErrors();
      this.isSubmitted = true;
      main.feedback({
        email: this.email,
        name: this.name,
        question: this.question
      }).then(data => {
        this.send = true;
        this.email = null;
        this.name = null;
        this.question = null;
      }).catch(errors => {
        if (errors.response.status === 400) {
          const dataErrors = keysToCamel(errors.response.data);
          Object.keys(dataErrors).map((key) => {
            this.formErrors[key] = dataErrors[key]
          });
        }
      }).finally(this.isSubmitted = false);
      return false;
    },
    cleanErrors() {
      Object.keys(this.formErrors).map((key) => this.cleanError(key));
    },
    cleanError(input) {
      this.formErrors[input] = [];
    },

  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>

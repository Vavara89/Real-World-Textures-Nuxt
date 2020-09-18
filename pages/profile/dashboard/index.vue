<template>
  <div class="page-container">
    <ProfileSidebar :profile="true"/>
    <div class="page-content">
      <section class="services view-bottom">
        <div class="wrapper-profile">
          <div class="wrapper-inner">
            <div class="containers">
              <div class="iconic"/>
              <div class="left">
                <h2>{{ profile }}</h2>
                <h3>{{ email }}</h3>
                <div class="tabs">
                  <ul>
                    <li
                      :class="{'selected': cardProfile}"
                      @click="toggleSelected('profile')"
                    >
                      Profile
                    </li>
                    <li
                      :class="{'selected': cardBilling}"
                      @click="toggleSelected('billing')"
                    >
                      Billing info
                    </li>
                    <li
                      :class="{'selected': cardPassword}"
                      @click="toggleSelected('password')"
                    >
                      Change password
                    </li>
                  </ul>
                </div>
                <div class="tabs-content">
                  <div v-if="cardProfile" class="is-profile">
                    <ProfileForm></ProfileForm>
                  </div>
                  <div v-if="cardBilling" class="is-profile">
                    <CardBilling></CardBilling>
                  </div>
                  <div v-if="cardPassword" class="is-profile">
                    <ChangePassword></ChangePassword>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="clearfix">
                  <div class="c100 p75 big scaled">
                    <span class="isscaled">
                      {{ credits }}</span>
                    <div class="slice">
                      <div class="bar"/>
                      <div class="fill"/>
                    </div>
                    <span class="topas">Subscription Credits</span>
                  </div>
<!--                  <button class="toggleOption2 bot">-->
<!--                    buy more credits-->
<!--                  </button>-->
                </div>
                <div class="credit">
                  <p>Hobby Monthly</p>
                  <p>Credits renew on 20/09/2020</p>
<!--                  <div class="logout">-->
<!--                    <nuxt-link to="/">-->
<!--                      Cancel Subscription-->
<!--                    </nuxt-link>-->
<!--                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import LeftSidebar from '@/components/Sidebar/LeftSidebar';
import ChangePassword from "~/components/Profile/ChangePassword"
import ProfileSidebar from '@/components/Sidebar/ProfileSidebar';
import CardBilling from '@/components/Profile/CardBilling';
import ProfileForm from '@/components/Profile/ProfileForm';

export default {
  name: 'Dashboard',
  middleware: 'auth',
  components: {
    ProfileSidebar,
    LeftSidebar,
    CardBilling,
    ProfileForm,
    ChangePassword

  },
  data () {
    return {
      cardProfile: true,
      cardBilling: false,
      cardPassword: false,
      openAddress: false,
      openPayment: false,
      email: this.$auth.user.user.email,
    };
  },
  methods: {
    toggleSelected (data) {
      if (data === 'profile') {
        this.cardProfile = true;
        this.cardBilling = false;
        this.cardPassword = false;
      }

      if (data === 'billing') {
        this.cardProfile = false;
        this.cardBilling = true;
        this.cardPassword = false;
      }

      if (data === 'password') {
        this.cardProfile = false;
        this.cardBilling = false;
        this.cardPassword = true;
      }
    },
  },
  computed: {
    user () {
      return this.$auth.user.user;
    },
    profile () {
      if (this.user.subscribe) {
        return this.user.subscribe.name;
      }
      return [this.user.profile.first_name, this.user.profile.last_name].join(' ');
    },
    credits () {
      return this.profile.subscribe ? this.profile.subscribe.credits : 0;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>

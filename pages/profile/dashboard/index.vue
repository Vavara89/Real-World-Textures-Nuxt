<template>
  <div class="page-container">
    <ProfileSidebar v-if="width > 950" :profile="true"/>
    <UnsubscribeModal ref="unsubscribe_modal"/>
    <PaymentMoreModal ref="payment_modal"/>
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
                    <ProfileForm/>
                  </div>
                  <div v-if="cardBilling" class="is-profile">
                    <CardBilling ref="card_billing"/>
                  </div>
                  <div v-if="cardPassword" class="is-profile">
                    <ChangePassword/>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="clearfix">
                  <div class="c100 p75 big scaled">
                    <div v-if="user.subscription" class="points">
                      + {{ userCredits }}
                    </div>
                    <span class="isscaled">
                      {{ credits }}</span>
                    <div v-if="user.subscription" class="slice">
                      <div class="bar"/>
                      <div class="fill"/>
                    </div>
                    <span class="topas">Subscription Credits</span>
                  </div>
                  <button class="toggleOption2 bot">
                    <a href="javascript:void(0)" @click="openPaymentMore()">buy more credits</a>
                  </button>
                </div>
                <div v-if="user.subscription" class="credit">
                  <p>{{ user.subscription.name }}</p>
                  <p v-if="user.subscription.stripe_data">Credits renew on {{ until(user.subscription.stripe_data.current_period_end) }}</p>
                  <div v-if="user.subscription.stripe_data" class="logout">
                    <a @click="openUnsubscribe()">
                      Cancel Subscription
                    </a>
                  </div>
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
import ChangePassword from '~/components/Profile/ChangePassword';
import ProfileSidebar from '@/components/Sidebar/ProfileSidebar';
import CardBilling from '@/components/Profile/CardBilling';
import ProfileForm from '@/components/Profile/ProfileForm';
import UnsubscribeModal from '@/components/Profile/UnsubscribeModal';
import PaymentMoreModal from '@/components/Profile/PaymentMoreModal';

export default {
  layout: "withoutLogo",
  name: 'Dashboard',
  middleware: 'auth',
  components: {
    ProfileSidebar,
    LeftSidebar,
    CardBilling,
    ProfileForm,
    ChangePassword,
    UnsubscribeModal,
    PaymentMoreModal

  },
  data() {
    return {
      cardProfile: true,
      cardBilling: false,
      cardPassword: false,
      openAddress: false,
      openPayment: false,
      email: this.$auth.user.user.email,
      width: null
    };
  },
  computed: {
    user() {
      console.log('user', this.$auth.user.user);
      return this.$auth.user.user;
    },
    profile() {
      if (this.user.subscribe) {
        return this.user.subscribe.name;
      }
      return [this.user.profile.first_name, this.user.profile.last_name].join(' ');
    },
    credits() {
      return this.user.subscription ? this.user.credits : 0;
    },
    userCredits() {
      return (this.user.subscription && this.user.subscription.product) ? this.user.subscription.product.credits : 0;
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener('resize', this.onResize);
    if (this.$route.query['payment']) {
      this.toggleSelected('billing');
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    until(date) {
      const dt = new Date(date * 1000);
      return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
    },
    onResize() {
      this.innerWidth();
    },
    innerWidth() {
      this.width = window.innerWidth;
    },
    toggleSelected(data) {
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
    openUnsubscribe() {
      this.$refs.unsubscribe_modal.scrollSwitcher(true);
    },
    openPaymentMore(){
      this.$refs.payment_modal.scrollSwitcher(true);
    }

  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>

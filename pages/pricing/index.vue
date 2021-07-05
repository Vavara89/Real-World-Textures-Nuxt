<template>
  <div class="page-container">
    <ConfirmModal ref="confirm_subscribe" :description="confirmTitle" @confirmed="subscribe"/>

    <div class="page-content">
      <section class="services view-bottom">
        <div v-if="width > 1000" class="pricing notmobile selfpage">
          <table>
            <tbody>
            <tr>
              <td style="min-width: 280px;">
                &nbsp;
              </td>
              <td v-if="!user" style="width: 300px; text-align: center; border-left: 1px solid #DDE0ED;" class="head padd-20">
                Free
              </td>
              <td style="width: 300px; text-align: center; border-left: 1px solid #DDE0ED;" class="head padd-20">
                Basic
              </td>
              <td style="width: 300px; text-align: center; border-left: 1px solid #DDE0ED;" class="head padd-20">
                Professional
              </td>
              <!-- <td style="width: 200px; border-left: 1px solid #DDE0ED;">
              &nbsp;
              </td> -->
            </tr>
            <tr>
              <td style="padding-left: 20px;">
                <ToggleSwitch
                  v-if="width > 1000"
                  first_text="Monthly plans"
                  second_text="Annual plans"
                  @setDuration="childMessageReceived"
                />
              </td>
              <td v-if="!user" style="text-align: center; border-left: 1px solid #DDE0ED;" class="price">
                <span>0$</span>
              </td>
              <td style="text-align: center; border-left: 1px solid #DDE0ED;" class="price">
                <span v-if="isMonth">{{ idleMonth.amount }}$</span>
                <span v-if="!isMonth">{{ idleYears.amount / 12 }}$</span>
              </td>
              <td style="text-align: center; border-left: 1px solid #DDE0ED;" class="price">
                <span v-if="isMonth">{{ proMonth.amount }}$</span>
                <span v-if="!isMonth">{{ proYears.amount / 12 }}$</span>
              </td>
              <!-- <td style="border-left: 1px solid #DDE0ED;">
              &nbsp;
              </td> -->
            </tr>
            <tr>
              <td>
                &nbsp;
              </td>
              <td v-if="!user" style="text-align: center; padding-bottom: 20px; border-left: 1px solid #DDE0ED;">
                per month
              </td>
              <td style="text-align: center; padding-bottom: 20px; border-left: 1px solid #DDE0ED;">
                per month
              </td>
              <td style="text-align: center; padding-bottom: 20px; border-left: 1px solid #DDE0ED;">
                per month
              </td>
              <!-- <td style="border-left: 1px solid #DDE0ED;">
              &nbsp;
              </td> -->
            </tr>
            <tr>
              <td style="padding: 20px 0 20px 40px; background-color: #F2F3F9;">
                Credits Per Month
              </td>
              <td
                v-if="!user"
                style="text-align: center; padding: 20px 0; background-color: #F2F3F9; border-left: 1px solid #DDE0ED;"
              >
                <span v-if="isMonth">Unlimited for free content</span>
                <span v-if="!isMonth">Unlimited for free content</span>
              </td>
              <td
                style="text-align: center; padding: 20px 0; background-color: #F2F3F9; border-left: 1px solid #DDE0ED;"
              >
                <span v-if="isMonth">{{ idleMonth.credits }}</span>
                <span v-if="!isMonth">{{ idleYears.credits / 12 }}</span>
              </td>
              <td
                style="text-align: center; padding: 20px 0; background-color: #F2F3F9; border-left: 1px solid #DDE0ED;"
              >
                <span v-if="isMonth">{{ proMonth.credits }}</span>
                <span v-if="!isMonth">{{ proYears.credits / 12 }}</span>
              </td>
              <!-- <td style="background-color: #F2F3F9; border-left: 1px solid #DDE0ED;">
              &nbsp;
              </td> -->
            </tr>
            <tr>
              <td style="padding: 20px 40px 20px 40px;">
                  Number of months for credit rollover
                </td>
                <td
                  v-if="!user"
                  style="text-align: center; padding: 20px 16px; border-left: 1px solid #DDE0ED;"
                >
                  <span>-</span>
                </td>
                <td
                  style="text-align: center; padding: 20px 16px; border-left: 1px solid #DDE0ED;"
                >
                  <span>1</span>
                </td>
                <td
                  style="text-align: center; padding: 20px 16px; border-left: 1px solid #DDE0ED;"
                >
                  <span>3</span>
                </td>
            </tr>
            <tr>
              <td>
                &nbsp;
              </td>
              <td v-if="!user" style="padding: 50px 0 20px 0; text-align: center;">
                <button class="toggleOption green staticwidth" @click="()=>this.$router.replace('/signup')">
                  Get Free
                </button>
              </td>
              <td style="padding: 50px 0 20px 0; text-align: center;">
                <button v-if="currentIs(false, !isMonth)" class="toggleOption gray staticwidth">
                  {{ status() }}
                </button>
                <button v-if="!currentIs(false, !isMonth)" class="toggleOption green staticwidth"
                        @click="confirm(false)">
                  Get Basic
                </button>
              </td>
              <td style="padding: 50px 0 20px 0; text-align: center;">
                <button v-if="currentIs(true, !isMonth)" class="toggleOption gray staticwidth">
                  {{ status() }}
                </button>
                <button v-if="!currentIs(true, !isMonth)" class="toggleOption green staticwidth" @click="confirm(true)">
                  Get Professional
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div v-if="width < 1000" class="pricing ismobile">
          <table>
            <tbody>
            <tr>
              <td style="min-width: 280px;">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style="padding-left: 20px; display: flex; justify-content: center;">
                <ToggleSwitch
                  v-if="width < 1000"
                  first_text="Monthly plans"
                  second_text="Annual plans"
                  @setDuration="childMessageReceived"
                />
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;
              </td>
            </tr>

            <tr>
              <td style="text-align: center;" class="head padd-20">
                Free
              </td>
            </tr>
            <tr>
              <td style="text-align: center;" class="price">
                <span>0$</span>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding-bottom: 20px;">
                per month
              </td>
            </tr>
            <tr>
              <td
                style="text-align: center; padding: 20px 0; background-color: #F2F3F9;"
              >
                <span v-if="isMonth">Unlimited for free content</span>
                <span v-if="!isMonth">Unlimited for free content</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 50px 0 50px 0; text-align: center;">
                <button v-if="currentIs(false, !isMonth)" class="toggleOption gray staticwidth">
                  {{ status() }}
                </button>
                <button v-if="!currentIs(false, !isMonth)" class="toggleOption green staticwidth"
                        @click="confirm(false)">
                  Get Free
                </button>
              </td>
            </tr>


            <tr>
              <td style="text-align: center;" class="head padd-20">
                Basic
              </td>
            </tr>
            <tr>
              <td style="text-align: center;" class="price">
                <span v-if="isMonth">{{ idleMonth.amount }}$</span>
                <span v-if="!isMonth">{{ idleYears.amount / 12 }}$</span>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding-bottom: 20px;">
                per month
              </td>
            </tr>
            <tr>
              <td
                style="text-align: center; padding: 20px 0; background-color: #F2F3F9;"
              >
                <span v-if="isMonth">Credits Per Month: {{ idleMonth.credits }}</span>
                <span v-if="!isMonth">Credits Per Month: {{ idleYears.credits / 12 }}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 50px 0 50px 0; text-align: center;">
                <button v-if="currentIs(false, !isMonth)" class="toggleOption gray staticwidth">
                  {{ status() }}
                </button>
                <button v-if="!currentIs(false, !isMonth)" class="toggleOption green staticwidth"
                        @click="confirm(false)">
                  Get Basic
                </button>
              </td>
            </tr>

            <tr>
              <td style="width: 300px; text-align: center;" class="head padd-20">
                Professional
              </td>
            </tr>
            <tr>
              <td style="text-align: center;" class="price">
                <span v-if="isMonth">{{ proMonth.amount }}$</span>
                <span v-if="!isMonth">{{ proYears.amount / 12 }}$</span>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding-bottom: 20px;">
                per month
              </td>
            </tr>
            <tr>
              <td
                style="text-align: center; padding: 20px 0; background-color: #F2F3F9;"
              >
                <span v-if="isMonth">Credits Per Month: {{ proMonth.credits }}</span>
                <span v-if="!isMonth">Credits Per Month: {{ proYears.credits / 12 }}</span>
              </td>
            </tr>
            </tr>

            <tr>
              <td style="padding: 50px 0 50px 0; text-align: center;">
                <button v-if="currentIs(true, !isMonth)" class="toggleOption gray staticwidth">
                  {{ status() }}
                </button>
                <button v-if="!currentIs(true, !isMonth)" class="toggleOption green staticwidth" @click="confirm(true)">
                  Get Professional
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <!-- DivTable.com -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ToggleSwitch from '@/components/ToggleSwitch';
import ProfileSidebar from '@/components/Sidebar/ProfileSidebar';
import users from '@/collectors/users';
import ConfirmModal from '@/components/Confirm/ConfirmModal';
import {subscribeCurrentIs, subscribeStatus, subscriptionActive} from '@/utils';

export default {
  layout: "default",
  name: 'Pricing',
  components: {
    ProfileSidebar,
    ToggleSwitch,
    ConfirmModal
  },
  data() {
    return {
      subtitle: 'Services',
      title: 'Textures',
      button: 'Join our community on FB',
      isMonth: false,
      selectedPrice: {},
      subscribed: null,
      width: null
    };
  },
  computed: {
    user() {
      console.log('this.$auth.user', this.$auth.user);
      return this.$auth.user;
    },
    payment() {
      if (this.$auth.user && this.$auth.user.user.payment) {
        const payment = this.$auth.user.user.payment;
        if (payment && payment.last4) {
          return payment;
        }
      }
      return false;
    },
    proYears() {
      return this.getPro().filter(item => item.is_year === true)[0];
    },
    proMonth() {
      return this.getPro().filter(item => item.is_year === false)[0];
    },
    idleYears() {
      return this.getIdle().filter(item => item.is_year === true)[0];
    },
    idleMonth() {
      return this.getIdle().filter(item => item.is_year === false)[0];
    },

    confirmTitle() {
      if (this.selectedPrice) {
        const amount = this.selectedPrice.is_year ? this.selectedPrice.amount / 12 : this.selectedPrice.amount;
        const credits = this.selectedPrice.credits;
        return `After you will confirm, from your bank account will reserve ever month ${amount}$, and you will get ${credits} credits`;
      }
      return '';
    }

  },
  created() {
    this.fetchSubscribed();
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener('resize', this.onResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.innerWidth();
    },
    innerWidth() {
      this.width = window.innerWidth;
    },
    childMessageReceived(duration) {
      if (duration === 'month') {
        this.isMonth = true;
      }
      if (duration === 'year') {
        this.isMonth = false;
      }
    },
    getPro() {
      const prices = this.$store.getters.prices;
      console.log('prices', prices);
      return prices ? prices.filter(item => item.stripe_product.is_pro === true) : [];
    },
    getIdle() {
      const prices = this.$store.getters.prices;
      console.log('prices', prices);
      return prices ? prices.filter(item => item.stripe_product.is_pro === false) : [];
    },

    confirm(isPro = false) {
      if (!this.payment) {
        return this.$router.replace('/profile/dashboard?payment=true')
      }
      const prices = this.$store.getters.prices;
      this.selectedPrice = prices.filter(item => item.stripe_product.is_pro === isPro && item.is_year === !this.isMonth).pop();
      this.$refs.confirm_subscribe.scrollSwitcher();
    },

    subscribe() {
      users.subscribe(this.selectedPrice.id).then((data) => {
        this.$auth.fetchUser();
        this.fetchSubscribed();
        this.$refs.confirm_subscribe.scrollSwitcher();
      }).catch(() => {
        alert('Sorry, something was badly');
      });
    },
    currentIs(pro = false, year = false) {
      return subscribeCurrentIs(pro, year, this.subscribed);
    },
    fetchSubscribed() {
      // this.subscribed = this.$store.getters.subscription;
    },
    status() {
      return subscribeStatus(this.subscribed);
    },
    haveActive() {
      return subscriptionActive(this.subscribed);
    }

  }

};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
@import "@/assets/scss/pages/buttons.scss";
</style>

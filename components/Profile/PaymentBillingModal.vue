<template>
  <div v-if="opened">
    <div class="modal card is-background centered-window">
      <div class="inner address is-card">
        <span class="close" @click="toggleMessage()" />
        <h2>Update Payment Method</h2>
        <div class="success-holder-center">
          <Success :success="saved" :title="'Payment method successfully saved'" />
        </div>
        <h3 class="upper">
          Secured and encrypted by Stripe
        </h3>
        <form method="post" class="email" @submit="save">
          <table style="text-align: left; margin-top: 60px;">
            <tbody>
              <tr>
                <td colspan="1">
                  Card Number
                </td>
                <td
                  colspan="3"
                  :class="{'card-bottom--error': formErrors['number'].length}"
                >
                  <input
                    v-model="number"
                    v-mask="card_number_mask"
                    :class="{'email--error': formErrors['number'].length}"
                    type="text"
                    class="input"
                    name="card_number"
                    :readonly="is_update"
                    :disabled="is_update"
                    placeholder=""
                  >
                  <div class="errors">
                    <span v-if="formErrors['number'].length">{{ formErrors['number'][0] }}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Expiration Date</td>
                <td>
                  <input
                    v-model="exp_date"
                    v-mask="exp_date_mask"
                    :class="{'email--error': formErrors['exp_date'].length}"
                    type="text"
                    placeholder="MM/YY"
                    class="input small"
                    name="suit"
                  >
                  <div class="errors">
                    <span v-if="formErrors['exp_date'].length">{{ formErrors['exp_date'][0] }}</span>
                  </div>
                </td>
                <td style="width: 65px; text-align: right; padding-left: 10px; padding-right: 10px;">
                  CVV
                </td>
                <td>
                  <input
                    v-model="cvc"
                    v-mask="cvv_mask"
                    :class="{'email--error': formErrors['cvc'].length}"
                    type="password"
                    placeholder=""
                    class="input small"
                    name="cvv"
                    :readonly="is_update"
                    :disabled="is_update"
                  >
                  <div v-if="width > 500" class="errors">
                    <span v-if="formErrors['cvc'].length">{{ formErrors['cvc'][0] }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <button type="submit" class="email special" @click="save">
          <template v-if="!send">
            <span>Update Payment Method</span>
            <span>Update now</span>
            <div class="ar" />
          </template>
          <template v-if="send">
            Please wait...
          </template>
        </button>
      </div>
    </div>
    <div class="silkscreen" />
  </div>
</template>

<script>
import Success from '@/components/Success/Success';
import users from '@/collectors/users';

export default {
  components: {
    Success
  },
  data () {
    return {
      opened: false,
      saved: false,
      send: false,
      number: null,
      exp_date: null,
      cvc: null,
      card_number_mask: null,
      exp_date_mask: '##/##',
      cvv_mask: null,
      formErrors: {
        number: [],
        exp_date: [],
        cvc: []
      },
      width: null
    };
  },
  computed: {
    is_update () {
      const payment = this.user.payment;
      if (payment && payment.last4) {
        return true;
      }
      return false;
    },
    user () {
      return this.$auth.user.user;
    },
    last4 () {
      const payment = this.user.payment;
      if (payment && payment.last4) {
        return payment.last4;
      }
      return null;
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener('resize', this.onResize);
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize);
  },
  created () {
    this.number = this.is_update ? `**** **** **** ${this.last4}` : '';
    this.exp_date = this.is_update ? '22/12' : '';
    this.cvc = this.is_update ? '***' : '';
    if (!this.is_update) {
      this.card_number_mask = '#### #### #### ?#?#?#?# ?#?#?#';
      this.cvv_mask = '###?#';
    }
  },
  methods: {
    onResize () {
      this.innerWidth();
    },
    innerWidth () {
      this.width = window.innerWidth;
    },
    scrollSwitcher (state) {
      if (state) {
        document.body.style.overflow = 'hidden';
      } else {
        this.send = false;
        this.saved = false;
        document.body.style.overflow = 'auto';
      }
      this.opened = !this.opened;
    },
    toggleMessage (close = false) {
      this.scrollSwitcher(close);
    },
    save () {
      if (this.send) {
        return false;
      }
      this.cleanErrors();
      const years_month = this.exp_date.split('/');
      let data = {};
      let method = () => {};

      if (this.is_update) {
        data = {
          exp_month: years_month[0],
          exp_year: years_month[1]
        };
        method = users.updatePayment;
      } else {
        data = {
          number: this.number.replace(/\s/g, ''),
          exp_month: years_month[0],
          exp_year: years_month[1],
          cvc: this.cvc
        };
        method = users.savePayment;
      }

      this.send = true;
      method(data).then(() => {
        this.saved = true;
        this.$auth.fetchUser();
      }).catch((errors) => {
        if (errors.response.status === 400) {
          Object.keys(errors.response.data).map((key) => {
            this.formErrors[key] = errors.response.data[key];
          });
          if (errors.response.data.exp_month) {
            this.formErrors.exp_date = errors.response.data.exp_month;
          }
          if (errors.response.data.exp_year) {
            this.formErrors.exp_date = [...this.formErrors.exp_date, ...errors.response.data.exp_year];
          }
          if (errors.response.data.stripe_errors) {
            this.formErrors.number = [...this.formErrors.number, ...errors.response.data.stripe_errors];
          }
        }
      }).finally(() => {
        this.send = false;
      });
    },

    cleanErrors () {
      Object.keys(this.formErrors).map(key => this.cleanError(key));
    },
    cleanError (input) {
      this.formErrors[input] = [];
    },
    cleanAttributes () {
      this.number = null;
      this.cvc = null;
      this.exp_date = null;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>

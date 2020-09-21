<template>
  <div v-if="opened">
    <div class="modal card is-background centered-window">
      <div class="inner address is-card">
        <span class="close" @click="toggleMessage()"/>
        <h2>Update Payment Method</h2>
        <div class="success-holder-center">
          <Success :success="saved" :title="'Address successfully saved'"></Success>
        </div>
        <h3 class="upper">Secured and encrypted by Stripe</h3>
        <form method="post" class="email" @submit="save">
          <table style="text-align: left; margin-top: 60px;">
            <tbody>
            <tr>
              <td colspan="1">
                Card Number
              </td>
              <td colspan="3">
                <input
                  :class="{'email--error': formErrors['number'].length}"
                  type="text"
                  class="input"
                  name="card_number"
                  v-model="number"
                  v-mask="card_number_mask"
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
                  :class="{'email--error': formErrors['exp_date'].length}"
                  type="text"
                  placeholder="MM/YY"
                  class="input small"
                  name="suit"
                  v-mask="exp_date_mask"
                  v-model="exp_date"
                >
                <div class="errors">
                  <span v-if="formErrors['exp_date'].length">{{ formErrors['exp_date'][0] }}</span>
                </div>
              </td>
              <td style="width: 65px; text-align: right;">
                CVV
              </td>
              <td>
                <input
                  :class="{'email--error': formErrors['cvc'].length}"
                  type="text"
                  placeholder=""
                  class="input small"
                  name="cvv"
                  v-model="cvc"
                  v-mask="cvv_mask"
                >
                <div class="errors">
                  <span v-if="formErrors['cvc'].length">{{ formErrors['cvc'][0] }}</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </form>
        <button @click="save" type="submit" class="email special">
          <template v-if="!send">
            <span>Update Payment Method</span>
            <span>Update now</span>
            <div class="ar"/>
          </template>
          <template v-if="send">
            Please wait...
          </template>

        </button>
      </div>
    </div>
    <div class="silkscreen"/>
  </div>

</template>

<script>
import Success from '@/components/Success/Success';
import users from "@/collectors/users";

export default {
  data() {
    return {
      opened: false,
      saved: false,
      send: false,
      number: '',
      exp_date: '',
      cvc: '',
      card_number_mask: '#### #### #### ?#?#?#?# ?#?#?#',
      exp_date_mask: '##/##',
      cvv_mask: '###?#',
      formErrors: {
        number: [],
        exp_date: [],
        cvc: []
      },
    }
  },
  components: {
    Success,
  },
  methods: {
    scrollSwitcher(state) {
      if (state) {
        document.body.style.overflow = 'hidden';
      } else {
        this.send = false;
        this.saved = false;
        document.body.style.overflow = 'auto';
      }
      this.opened = !this.opened;
    },
    toggleMessage(close = false) {
      this.scrollSwitcher(close);
    },
    save() {
      if(this.send){
        return false;
      }
      this.cleanErrors();
      const years_month = this.exp_date.split('/');
      const data = {
        number: this.number.replace(/\s/g,''),
        exp_month: years_month[0],
        exp_year: years_month[1],
        cvc: this.cvc
      }
      this.send = true;
      users.savePayment(data).then(() => {
        this.saved = true;
        this.$auth.fetchUser();
        this.exp_date ='';
        this.number ='';
        this.cvc ='';
        this.exp_date_mask ='';
      }).catch(errors => {
        if (errors.response.status === 400) {
          Object.keys(errors.response.data).map((key) => {
            this.formErrors[key] = errors.response.data[key]
          });
          if (errors.response.data['exp_month']) {
            this.formErrors.exp_date = errors.response.data['exp_month'];
          }
          if (errors.response.data['exp_year']) {
            this.formErrors.exp_date = [...this.formErrors.exp_date, ...errors.response.data['exp_year']];
          }
          if(errors.response.data['stripe_errors']){
            this.formErrors.number = [...this.formErrors.number, ...errors.response.data['stripe_errors']];
          }
          console.log(this.formErrors);
        }
      }).finally(() => {
        this.send = false;
      });
    },

    cleanErrors() {
      Object.keys(this.formErrors).map((key) => this.cleanError(key));
    },
    cleanError(input) {
      this.formErrors[input] = [];
    },
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>


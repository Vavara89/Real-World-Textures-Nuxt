<template>
  <div>
    <CardBillingModal ref="billing_form"></CardBillingModal>
    <PaymentBillingModal ref="payment_form"></PaymentBillingModal>
    <table style="width: 621px;">
      <tbody>
        <tr >
          <td style="width: 250px;" class="is-first">
            Payment Method
          </td>
          <td v-if="!payment" colspan="3">
            <a @click="openPayment()" href="#" class="button-primary button-secondary">Add new</a>
          </td>
          <template v-if="payment">
            <td  style="width: 200px;">
              CC Ending with 4329
            </td>
            <td  style="width: 134px;">
              <img src="@/assets/img/cards/mastercard.png" class="bank">
            </td>
            <td style="width: 92px;">
                <span><a @click="openPayment()" href="#" class="buttonek">Edit</a></span>
            </td>
            <td style="width: 92px;">
              <span><a href="#" class="buttonek">Remove</a></span>
            </td>
          </template>

        </tr>
        <tr>
          <td style="width: 250px;" class="is-first top">
            Billing Address
          </td>
          <template v-if="address">
            <td  style="width: 200px;">
              {{address.street}} {{address.apartments}}
              {{address.zip_code}} {{address.city}}
              {{address.country}}
              <br><br>

            </td>
            <td style="width: 134px;">
              &nbsp;
            </td>
            <td  style="width: 92px;">
                            <span>
                              <a href="#" class="buttonek"
                                     @click="openAddress()">Edit</a></span>
            </td>
            <td style="width: 92px;">
              &nbsp;
            </td>
          </template>
          <td v-if="!address" colspan="3">
            <a href="#" class="button-primary button-secondary" @click="openAddress()">Add new</a>
          </td>

        </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
import Success from "~/components/Success/Success"
import LoginModals from '@/components/LoginModals/LoginModals';
import CardBillingModal from '@/components/Profile/CardBillingModal';
import PaymentBillingModal from "@/components/Profile/PaymentBillingModal";

export default {
  name: "CardBilling",
  data() {
    return {
    };
  },
  components:{
    Success,
    LoginModals,
    CardBillingModal,
    PaymentBillingModal
  },
  methods: {
    openAddress(){
      this.$refs.billing_form.scrollSwitcher(true);
    },
    openPayment(){
      this.$refs.payment_form.scrollSwitcher(true);
    },
    childMessageReceived (duration) {
      if (duration === 'payment') {
        this.openPayment = false;
      }

      if (duration === 'address') {
        this.openAddress = false;
      }
    }
  },
  computed:{
    address(){
      const address = this.user.address;
      if(address.street){
        return address;
      }
      return false;
    },
    payment(){
      const payment = this.user.payment;
      if(payment && payment.last4){
        return payment;
      }
      return false;
    },
    empty(){
      console.log(!this.payment);
      console.log(this.address);
      return !this.payment && !this.address;
    },
    user () {
      return this.$auth.user.user;
    },
    profile () {
      return this.user.profile;
    },
  }
}

</script>


<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>

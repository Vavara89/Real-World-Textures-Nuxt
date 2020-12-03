<template>
  <div>
    <CardBillingModal ref="billing_form"></CardBillingModal>
    <PaymentBillingModal ref="payment_form"></PaymentBillingModal>
    <ConfirmModal @confirmed="delete_payment" title="Are you sure for delete this payment method?"
                  ref="remove_payment_accept"></ConfirmModal>
    <table style="max-width: 621px;">
      <tbody>
      <tr>
        <td style="width: 250px;" class="is-first">
          Payment Method
        </td>
        <td v-if="!payment" colspan="3">
          <a @click="openPayment()" href="#" class="button-secondary" style="text-transform: uppercase;">Add new</a>
        </td>
        <template v-if="payment">
          <td style="width: 200px;">
            CC Ending with {{ payment.last4 }}
          </td>
          <td style="width: 134px;">
            <img width="50" v-if="payment.brand" :src="payment.brand" class="bank">
          </td>
          <td style="width: 92px;">
            <span><a @click="openPayment()" href="#" class="buttonek">Edit</a></span>
          </td>
          <td style="width: 92px;">
            <span><a @click="removePayment()" href="#" class="buttonek">Remove</a></span>
          </td>
        </template>

      </tr>
      <tr>
        <td style="width: 250px;" class="is-first top">
          Billing Address
        </td>
        <template v-if="address">
          <td style="width: 200px;">
            {{ address.street }} {{ address.apartments }}
            {{ address.zip_code }} {{ address.city }}
            {{ address.country }}
            <br><br>

          </td>
          <td style="width: 134px;">
            &nbsp;
          </td>
          <td style="width: 92px;">
            <span>
              <a href="#" class="buttonek" @click="openAddress()">Edit</a>
            </span>
          </td>
          <td style="width: 92px;">
            &nbsp;
          </td>
        </template>
        <td v-if="!address" colspan="3">
          <a href="#" class="button-secondary" @click="openAddress()" style="text-transform: uppercase;">Add new</a>
        </td>

      </tr>
      <tr v-if="address.tax_id && address.tax_verification">
          <td style="width: 250px;" class="is-first top">
              Tax ID
          </td>
          <td colspan="3" style="width: 134px;">
            Status: {{address.tax_verification.status}}
          </td>
      </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
import Success from '~/components/Success/Success';
import LoginModals from '@/components/LoginModals/LoginModals';
import CardBillingModal from '@/components/Profile/CardBillingModal';
import PaymentBillingModal from '@/components/Profile/PaymentBillingModal';
import ConfirmModal from '@/components/Confirm/ConfirmModal';
import users from '@/collectors/users';

export default {
  name: 'CardBilling',
  data () {
    return {};
  },
  components: {
    Success,
    LoginModals,
    CardBillingModal,
    PaymentBillingModal,
    ConfirmModal
  },
  methods: {
    openAddress () {
      this.$refs.billing_form.scrollSwitcher(true);
    },
    openPayment () {
      this.$refs.payment_form.scrollSwitcher(true);
    },
    childMessageReceived (duration) {
      if (duration === 'payment') {
        this.openPayment = false;
      }

      if (duration === 'address') {
        this.openAddress = false;
      }
    },
    removePayment () {
      this.$refs.remove_payment_accept.scrollSwitcher(true);
    },
    delete_payment () {
      this.$refs.remove_payment_accept.processing = true;
      users.deletePayment().then(() => {
        this.$auth.fetchUser().then(() => {
          this.$refs.remove_payment_accept.processing = false;
          this.$refs.remove_payment_accept.scrollSwitcher(false);
          this.$refs.payment_form.cleanAttributes();
        });

      });
    }
  },
  computed: {
    address () {
      const address = this.user.address;
      if (address.street) {
        return address;
      }
      return false;
    },
    payment () {
      const payment = this.user.payment;
      if (payment && payment.last4) {
        return payment;
      }
      return false;
    },
    empty () {
      return !this.payment && !this.address;
    },
    user () {
      return this.$auth.user.user;
    },
    profile () {
      return this.user.profile;
    },
  }
};

</script>


<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>

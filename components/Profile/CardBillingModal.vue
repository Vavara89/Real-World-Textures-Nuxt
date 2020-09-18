<template>
  <div v-if="opened">
    <div class="modal is-address is-background centered-window">
      <div class="inner address">
        <span class="close" @click="toggleMessage()"/>
        <h2>Edit Your Billing address</h2>
        <div class="success-holder-center">
          <Success :success="saved" :title="'Address successfully saved'"></Success>
        </div>

        <form method="post" class="email" @submit="save">
          <table style="text-align: left;">
            <tbody>
            <tr>
              <td>Street Address</td>
              <td>
                <input
                  :class="{'email--error': formErrors.length && !saved}"
                  type="text"
                  class="input"
                  name="address"
                  v-model="data.street"
                  placeholder="Street name"
                >
                <div class="errors" :class="{'success': send}">
                  <span v-if="formErrors['street'].length">{{ formErrors['street'][0] }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Apt, suit, etc (optional)</td>
              <td>
                <input
                  :class="{'email--error': formErrors.length && !saved}"
                  type="text"
                  placeholder=""
                  v-model="data.apartments"
                  class="input"
                  name="suit"
                >
                <div class="errors" :class="{'success': send}">
                  <span v-if="formErrors['apartments'].length">{{ formErrors['apartments'][0] }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input
                  :class="{'email--error': formErrors.length && !saved}"
                  type="text"
                  placeholder=""
                  class="input"
                  name="city"
                  v-model="data.city"
                >

                <div class="errors" :class="{'success': send}">
                  <span v-if="formErrors['city'].length">{{ formErrors['city'][0] }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Postal Code / Zip Code</td>
              <td>
                <input
                  :class="{'email--error': formErrors.length && !saved}"
                  type="text"
                  placeholder=""
                  class="input"
                  name="zip"
                  v-model="data.zip_code"
                >
                <div class="errors" :class="{'success': send}">
                  <span v-if="formErrors['zip_code'].length">{{ formErrors['zip_code'][0] }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Country</td>
              <td>
                <input
                  :class="{'email--error': formErrors.length && !saved}"
                  type="text"
                  placeholder=""
                  class="input"
                  name="country"
                  v-model="data.country"
                >
                <div class="errors" :class="{'success': send}">
                  <span v-if="formErrors['country'].length">{{ formErrors['country'][0] }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>State/Territory</td>
              <td>
                <input
                  :class="{'email--error': formErrors.length && !saved}"
                  type="text"
                  placeholder=""
                  class="input"
                  name="country"
                  v-model="data.state"
                >
                <div class="errors" :class="{'success': send}">
                  <span v-if="formErrors['state'].length">{{ formErrors['state'][0] }}</span>
                </div>
              </td>
            </tr>

            </tbody>
          </table>

          <button @click="save" type="submit" class="email special">
            <span v-if="!process">Update billing address</span>
            <span v-if="!process">Update now</span>
            <span v-if="process">Please wait...</span>
            <div v-if="!process" class="ar"/>
          </button>
        </form>
      </div>
    </div>
    <div class="silkscreen"/>
  </div>
</template>

<script>
import Dropdown from '@/components/Sidebar/Dropdown';
import users from "~/collectors/users";
import Success from '@/components/Success/Success';

export default {
  name: 'CardBillingModal',
  components: {
    Dropdown,
    Success
  },
  middleware: 'auth',
  props: {
    opened: false,
    send: false,
    isSubmitted: false
  },
  data(){
    return {
      formErrors: {
        country:[],
        state:[],
        zip_code:[],
        city:[],
        apartments:[],
        street:[],
      },
      saved: false,
      data:  {
        zip_code: this.$auth.user.user.address ? this.$auth.user.user.address.zip_code : '',
        street: this.$auth.user.user.address ? this.$auth.user.user.address.street : '',
        city: this.$auth.user.user.address ? this.$auth.user.user.address.city : '',
        country: this.$auth.user.user.address ? this.$auth.user.user.address.country : '',
        state: this.$auth.user.user.address ? this.$auth.user.user.address.state : '',
        apartments: this.$auth.user.user.address ? this.$auth.user.user.address.apartments : '',
      },
      process: false,
      options: [
        {
          value: 'Moldave'
        },
        {
          value: 'Czech Republic'
        },
        {
          value: 'England'
        },
        {
          value: 'United States'
        },
        {
          value: 'France'
        },
        {
          value: 'Nebraska'
        }
      ]
    };
  },
  methods: {
    save(e){
      e.preventDefault();
      this.process = true;
      this.cleanErrors();
      users.saveAddress(this.data).then((data)=>{
        this.process = false;
        this.saved = true;

      }).catch(errors=>{
        console.log(errors.response.status);
        if(errors.response.status === 400){
          Object.keys(errors.response.data).map((key)=>{this.formErrors[key] = errors.response.data[key]});
          console.log(this.formErrors);
        }
      });
      return false;
    },
    scrollSwitcher(state) {
      if (state) {
        document.body.style.overflow = 'hidden';
      } else {
        this.send = false;
        document.body.style.overflow = 'auto';
      }
      this.opened = !this.opened;
    },
    toggleMessage() {
      this.scrollSwitcher(true);
    },
    hasErrors(input) {
      return this.getErrors(input).length > 0;
    },

    getErrors(input) {
      return this.formErrors[input].length ? this.formErrors[input] : [];
    },
    cleanErrors() {
      Object.keys(this.formErrors).map((key) => this.cleanError(key));
    },
    cleanError(input) {
      this.formErrors[input] = [];
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
.success-holder-center{
  display: flex;
  justify-content: center;
}
</style>

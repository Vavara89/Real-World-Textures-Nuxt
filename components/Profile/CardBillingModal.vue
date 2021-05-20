<template>
  <div v-if="opened">
    <div class="modal is-address is-background centered-window">
      <span class="close" @click="toggleMessage()"/>
      <div class="inner address">
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
              <td>State/Territory</td>
              <td>
                <select v-model="data.state" class="input">
                  <option
                    v-for="(country, code) in $store.getters.getCountries"
                    :key="code"
                    :value="code">
                    {{ country }}
                  </option>
                </select>
                <div class="errors" :class="{'success': send}">
                  <span v-if="formErrors['state'].length">{{ formErrors['state'][0] }}</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>Tax id</td>
              <td>
                <input
                    :class="{'email--error': formErrors.length && !saved}"
                    type="text"
                    placeholder=""
                    class="input"
                    name="tax_id"
                    v-model="data.tax_id"
                >
                <div class="errors" :class="{'success': send}">
                  <span v-if="formErrors['tax_id'].length">{{ formErrors['tax_id'][0] }}</span>
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
import users from '~/collectors/users';
import Success from '@/components/Success/Success';

export default {
  name: 'CardBillingModal',
  components: {
    Dropdown,
    Success
  },
  middleware: 'auth',
  data () {
    return {
      send: false,
      isSubmitted: false,
      opened: false,
      formErrors: {
        country: [],
        state: [],
        zip_code: [],
        city: [],
        apartments: [],
        street: [],
        tax_id: [],
      },
      saved: false,
      data: {
        zip_code: this.$auth.user.user.address ? this.$auth.user.user.address.zip_code : '',
        street: this.$auth.user.user.address ? this.$auth.user.user.address.street : '',
        city: this.$auth.user.user.address ? this.$auth.user.user.address.city : '',
        country: this.$auth.user.user.address ? this.$auth.user.user.address.country : '',
        state: this.$auth.user.user.address ? this.$auth.user.user.address.state : '',
        apartments: this.$auth.user.user.address ? this.$auth.user.user.address.apartments : '',
        tax_id: this.$auth.user.user.tax_id ? this.$auth.user.user.address.tax_id : '',
      },
      process: false,
      remoteCountries: [],
    };
  },
  async mounted () {
    const keys = Object.keys(this.$store.getters.getCountries);
    console.log('keys');
    if (!keys.includes(this.data.state)) {
      this.data.state = keys[0];
    }
  },
  methods: {
    save (e) {
      e.preventDefault();
      this.process = true;
      this.cleanErrors();
      const data = this.data;
      if (data['tax_id']) {
        data['tax_type'] = 10;
      }
      users.saveAddress(data).then((data) => {
        this.process = false;
        this.saved = true;
        this.$auth.fetchUser();
      }).catch(errors => {
        if (errors.response.status === 400) {
          Object.keys(errors.response.data).map((key) => {
            this.formErrors[key] = errors.response.data[key];
          });
          this.process = false;
        }
      });
      return false;
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
    hasErrors (input) {
      return this.getErrors(input).length > 0;
    },

    getErrors (input) {
      return this.formErrors[input].length ? this.formErrors[input] : [];
    },
    cleanErrors () {
      Object.keys(this.formErrors).map((key) => this.cleanError(key));
    },
    cleanError (input) {
      this.formErrors[input] = [];
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";

.success-holder-center {
  display: flex;
  justify-content: center;
}
</style>

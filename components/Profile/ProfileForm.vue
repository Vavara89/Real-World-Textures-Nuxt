<template>

  <div class="success-holder">
    <div v-if="saved">
      <div class="success-info">
        <h2>Data success saved</h2>
      </div>
    </div>
    <table style="width: 621px;">
      <tbody>
      <tr>
        <td style="width: 150px;" class="is-first">
          First Name
        </td>
        <td style="width: 370px;" class="is-second">
          <input v-model="first_name" type="text" name="name" placeholder="Enter name">
          <form-input-errors v-if="hasErrors('first_name')" :errors="getErrors('first_name')"/>

        </td>
      </tr>
      <tr>
        <td style="width: 150px;" class="is-first">
          Last Name
        </td>
        <td style="width: 370px;" class="is-second">
          <input v-model="last_name" type="text" name="surname" placeholder="Enter last name">
          <form-input-errors v-if="hasErrors('last_name')" :errors="getErrors('last_name')"/>


        </td>
      </tr>
      <tr>
        <td style="width: 150px;" class="is-first">
          Email Address
        </td>
        <td style="width: 370px;" class="is-second">
          <input v-model="email" type="text" name="email" placeholder="Enter email">
          <form-input-errors v-if="hasErrors('email')" :errors="getErrors('email')"/>
        </td>
      </tr>
      <tr>
        <td style="width: 150px;" class="is-first">
          Business Name
        </td>
        <td style="width: 370px;" class="is-second">
          <input v-model="business_name" type="text" name="company" placeholder="Enter company">
          <form-input-errors v-if="hasErrors('business_name')" :errors="getErrors('business_name')"/>
        </td>
      </tr>
      <tr>
        <td style="text-align: center;" colspan="2">
          <button @click="saveProfile()" class="toggleOption">
            Update info
          </button>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>


<script>
import users from "~/collectors/users";
import keysToCamel from "~/classes/keysToCamel";
import FormInputErrors from '@/components/Forms/FormInputErrors'
export default {
  components: {
    FormInputErrors
  },
  name: "ProfileForm",
  data() {
    return {
      first_name: this.$auth.user.user.profile.first_name,
      last_name: this.$auth.user.user.profile.last_name,
      email: this.$auth.user.user.email,
      business_name: this.$auth.user.user.profile.business_name,
      saved: false,
      formErrors:{
        first_name: [],
        last_name: [],
        email: [],
        business_name: [],
      },
    };
  },
  methods: {
    saveProfile() {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        business_name: this.business_name,
      };
      this.isSubmitted = true;
      this.saved = false;
      this.cleanErrors();
      users.saveProfile(data).then(data => {
          this.saved = true;
          this.$notify({
            type: 'success',
            title: 'Hello there',
            message: 'That\'s the success!'
          });
      }).catch(errors => {
        if(errors.response.status === 400){
          const dataErrors = keysToCamel(errors.response.data);
          Object.keys(dataErrors).map((key)=>{this.formErrors[key] = dataErrors[key]});
        }
      }).finally(()=>{
        this.isSubmitted = false;
      });
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
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>

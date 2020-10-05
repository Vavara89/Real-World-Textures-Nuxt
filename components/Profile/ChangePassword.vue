<template>
  <div>
    <Success :success="saved" :title="'Password successfully changed'"></Success>
    <table style="max-width: 521px;">
      <tbody>
      <tr>
        <td style="width: 150px;" class="is-first">
          Old Password
        </td>
        <td style="width: 370px;" class="is-second">
          <input v-model="old_password" type="password" name="oldpwd" placeholder="Old password">
        </td>
      </tr>
      <tr>
        <td style="width: 150px;" class="is-first">
          New Password
        </td>
        <td style="width: 370px;" class="is-second">
          <input v-model="new_password" type="password" name="newpwd" placeholder="New password">
        </td>
      </tr>
      <tr>
        <td style="width: 150px;" class="is-first">
          Confirm Password
        </td>
        <td style="width: 370px;" class="is-second">
          <input v-model="repeat_password" type="password" name="newpwdconf"
                 placeholder="New password confirmation">
        </td>
      </tr>
      <tr v-if="password_errors">
        <td colspan="2">
          {{ password_errors }}
        </td>
      </tr>
      <tr>
        <td style="text-align: center;" colspan="2">
          <button @click="changePassword()" class="toggleOption">
            Update password
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import users from "~/collectors/users";
import Success from "~/components/Success/Success"

export default {
  data() {
    return {
      old_password: '',
      new_password: '',
      repeat_password: '',
      password_errors: false,
      password_success: false,
      saved: false
    }
  },
  components:{
    Success
  },
  methods: {
    changePassword() {

      if (this.new_password !== this.repeat_password) {
        this.password_errors = 'Please check passwords. These passwords do not match';
        return false;
      }
      if (!this.new_password || !this.old_password) {
        this.password_errors = 'Old password and new password field should be filled';
        return false;
      }

      const data = {
        old_password: this.old_password,
        new_password: this.new_password
      };
      this.password_success = false;
      this.password_errors = false;

      users.changePassword(data).then(data => {
        this.saved = true;
        setTimeout(() => {
          this.save = false
        }, 5000);
      }).catch(response => {
        const errors = [];
        if (response.response.data['password']) {
          errors.push(response.response.data['password'][0]);
        }
        if (response.response.data.old_password) {
          errors.push(response.response.data.old_password[0]);
        }
        this.password_errors = errors.join('<br/>');
      });
    },
  }
}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>

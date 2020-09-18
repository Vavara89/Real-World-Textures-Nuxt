<template>
  <div class="page-container">
    <ProfileSidebar :profile="true"/>
    <LoginModals text="" modal="address" :openaddress="openAddress" @setDuration="childMessageReceived"/>
    <LoginModals text="" modal="payment" :openpayment="openPayment" @setDuration="childMessageReceived"/>
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
                    <ProfileForm></ProfileForm>
                  </div>
                  <div v-if="cardBilling" class="is-profile">
                    <CardBilling></CardBilling>
                  </div>
                  <div v-if="cardPassword" class="is-profile">
                    <table style="width: 521px;">
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
                      <tr v-if="password_success">
                        <td colspan="2">
                          {{ password_success }}
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
                </div>
              </div>
              <div class="right">
                <div class="clearfix">
                  <div class="c100 p75 big scaled">
                    <span class="isscaled">
                      {{ credits }}</span>
                    <div class="slice">
                      <div class="bar"/>
                      <div class="fill"/>
                    </div>
                    <span class="topas">Subscription Credits</span>
                  </div>
<!--                  <button class="toggleOption2 bot">-->
<!--                    buy more credits-->
<!--                  </button>-->
                </div>
                <div class="credit">
                  <p>Hobby Monthly</p>
                  <p>Credits renew on 20/09/2020</p>
<!--                  <div class="logout">-->
<!--                    <nuxt-link to="/">-->
<!--                      Cancel Subscription-->
<!--                    </nuxt-link>-->
<!--                  </div>-->
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
import LoginModals from '@/components/LoginModals/LoginModals';
import users from '@/collectors/users';
import ProfileSidebar from '@/components/Sidebar/ProfileSidebar';
import CardBilling from '@/components/Profile/CardBilling';
import ProfileForm from '@/components/Profile/ProfileForm';

export default {
  name: 'Dashboard',
  middleware: 'auth',
  components: {
    ProfileSidebar,
    LeftSidebar,
    LoginModals,
    CardBilling,
    ProfileForm

  },
  data () {
    return {
      cardProfile: true,
      cardBilling: false,
      cardPassword: false,
      openAddress: false,
      openPayment: false,

      first_name: this.$auth.user.user.profile.first_name,
      last_name: this.$auth.user.user.profile.last_name,
      email: this.$auth.user.user.email,
      business_name: this.$auth.user.user.profile.business_name,

      old_password: '',
      new_password: '',
      repeat_password: '',
      password_errors: false,
      password_success: false,
    };
  },
  methods: {
    toggleSelected (data) {
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
    childMessageReceived (duration) {
      if (duration === 'payment') {
        this.openPayment = false;
      }

      if (duration === 'address') {
        this.openAddress = false;
      }
    },
    toggleMessage (data) {
      if (data === 'address') {
        this.openAddress = !this.openAddress;
      }

      if (data === 'payment') {
        this.openPayment = !this.openPayment;
      }
    },
    saveProfile () {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        business_name: this.business_name,
      };
      users.saveProfile(data).then(data => {
        console.log(data.response);
      }).catch(error => {
        console.log(error.response);
      });
    },
    changePassword () {

      if(this.new_password !== this.repeat_password){
        this.password_errors ='Please check passwords. These passwords do not match';
        return  false;
      }
      if(!this.new_password || !this.old_password){
        this.password_errors ='Old password and new password field should be filled';
        return  false;
      }

      const data = {
        old_password: this.old_password,
        new_password: this.new_password
      };
      this.password_success = false;
      this.password_errors = false;

      users.changePassword(data).then(data => {
        this.password_success = 'Password updated';
      }).catch(response => {
        const errors = [];
        if(response.response.data['password']){
          errors.push(response.response.data['password'][0]);
        }
        if(response.response.data.old_password){
          errors.push(response.response.data.old_password[0]);
        }
        this.password_errors = errors.join('<br/>');
      });
    },
  },
  computed: {
    user () {
      return this.$auth.user.user;
    },
    profile () {
      if (this.user.subscribe) {
        return this.user.subscribe.name;
      }
      return [this.user.profile.first_name, this.user.profile.last_name].join(' ');
    },
    credits () {
      return this.profile.subscribe ? this.profile.subscribe.credits : 0;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>

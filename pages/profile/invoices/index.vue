<template>
  <div class="page-container">
    <ProfileSidebar v-if="width > 1200" :profile="true" />
    <div class="page-content">
      <section class="services view-bottom">
        <h2 class="invoice-title">Invoices</h2>
        <div class="invoices">
          <div class="table-wrapper">
            <table style="width: 100%;  margin-bottom: 70px;">
              <tbody v-if="!invoices.length">
              <tr>
                <td colspan="5">
                  <h3 style="text-align: center">
                    You don't have invoices yet
                  </h3>
                </td>
              </tr>
              </tbody>
              <tbody v-else>
                <tr v-for="invoice in invoices">
                  <td >{{invoice.created}}</td>
                  <td >{{invoice.invoice_date}}</td>
                  <td >{{invoice.payed_date}}</td>
                  <td >{{invoice.status}}</td>
                  <td>
                    <button class="toggleOption" @click="openLink(`${invoice.pdf}`)">
                      Download Receipt
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProfileSidebar from '@/components/Sidebar/ProfileSidebar';
import profile from "@/collectors/profile";
import users from "~/collectors/users";
const resource = 'users/profile/';
export default {
  layout: "withoutLogo",
  name: 'Invoice',
  middleware: 'auth',
  components: {
    ProfileSidebar
  },
  data () {
    return {
      subtitle: 'Services',
      title: 'Textures',
      perex:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Join our community on FB',
      width: null,
      invoices: []
    };
  },
  async fetch() {
    if (this.$auth.loggedIn) {
      profile.setToken(this.$auth.user.user.token);
      users.setToken(this.$auth.user.user.token);
    }
    await profile.getInvoices().then((response) => {
      this.invoices = response.data.filter((item)=>{return item.status === 'payed'});
    });
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
  methods: {
    onResize () {
      this.innerWidth();
    },
    innerWidth () {
      this.width = window.innerWidth;
    },
    openLink(link){
      window.open(link, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>

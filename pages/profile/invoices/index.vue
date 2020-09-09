<template>
  <div class="page-container">
    <ProfileSidebar :profile="true" />
    <div class="page-content">
      <section class="services view-bottom">
        <div class="invoices">
          <h2>Invoices</h2>

          <table style="width: 930px;">
            <tbody>
<!--              <tr style="height: 23px;">-->
<!--                <td style="width: 111px; height: 23px; text-align: center;">-->
<!--                  03/31/2020-->
<!--                </td>-->
<!--                <td style="width: 155px; height: 23px; text-align: center;">-->
<!--                  Subscription-->
<!--                </td>-->
<!--                <td style="width: 204px; height: 23px; text-align: center;">-->
<!--                  $15.00-->
<!--                </td>-->
<!--                <td style="width: 196px; height: 23px;">-->
<!--                  Processor Declined-->
<!--                </td>-->
<!--                <td style="width: 258px; height: 23px; text-align: center;">-->
<!--                  <button class="toggleOption">-->
<!--                    Download receipt-->
<!--                  </button>-->
<!--                </td>-->
<!--              </tr>-->
              <tr>
                <td colspan="5">
                  <h3 style="text-align: center">You don't have invoices yet</h3>
                </td>
              </tr>
<!--              <tr style="height: 23px;">-->
<!--                <td style="width: 111px; height: 23px; text-align: center;">-->
<!--                  03/31/2020-->
<!--                </td>-->
<!--                <td style="width: 155px; height: 23px; text-align: center;">-->
<!--                  Subscription-->
<!--                </td>-->
<!--                <td style="width: 204px; height: 23px; text-align: center;">-->
<!--                  $15.00-->
<!--                </td>-->
<!--                <td style="width: 196px; height: 23px;">-->
<!--                  Processor Declined-->
<!--                </td>-->
<!--                <td style="width: 258px; height: 23px; text-align: center;">-->
<!--                  <button class="toggleOption">-->
<!--                    Download receipt-->
<!--                  </button>-->
<!--                </td>-->
<!--              </tr>-->
<!--              <tr style="height: 23px;">-->
<!--                <td style="width: 111px; height: 23px; text-align: center;">-->
<!--                  03/31/2020-->
<!--                </td>-->
<!--                <td style="width: 155px; height: 23px; text-align: center;">-->
<!--                  Subscription-->
<!--                </td>-->
<!--                <td style="width: 204px; height: 23px; text-align: center;">-->
<!--                  $15.00-->
<!--                </td>-->
<!--                <td style="width: 196px; height: 23px;">-->
<!--                  Processor Declined-->
<!--                </td>-->
<!--                <td style="width: 258px; height: 23px; text-align: center;">-->
<!--                  <button class="toggleOption">-->
<!--                    Download receipt-->
<!--                  </button>-->
<!--                </td>-->
<!--              </tr>-->
<!--              <tr style="height: 23px;">-->
<!--                <td style="width: 111px; height: 23px; text-align: center;">-->
<!--                  03/31/2020-->
<!--                </td>-->
<!--                <td style="width: 155px; height: 23px; text-align: center;">-->
<!--                  Subscription-->
<!--                </td>-->
<!--                <td style="width: 204px; height: 23px; text-align: center;">-->
<!--                  $15.00-->
<!--                </td>-->
<!--                <td style="width: 196px; height: 23px;">-->
<!--                  Processor Declined-->
<!--                </td>-->
<!--                <td style="width: 258px; height: 23px; text-align: center;">-->
<!--                  <button class="toggleOption">-->
<!--                    Download receipt-->
<!--                  </button>-->
<!--                </td>-->
<!--              </tr>-->
            </tbody>
          </table>
          <!-- DivTable.com -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProfileSidebar from '@/components/Sidebar/ProfileSidebar';

export default {
  name: 'Textures',
  components: {
    ProfileSidebar
  },
  data () {
    return {
      subtitle: 'Services',
      title: 'Textures',
      perex:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Join our community on FB'
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>

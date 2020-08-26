<template>
  <div class="page-container">
    <LeftSidebar :profile="true" />
    <div class="page-content">
      <section class="services view-bottom">
        <div class="pricing">
          <table>
            <tbody>
              <tr>
                <td style="width: 380px;">
&nbsp;
                </td>
                <td style="width: 300px; text-align: center; border-left: 1px solid #DDE0ED;" class="head padd-20">
                  Indie licence
                </td>
                <td style="width: 300px; text-align: center; border-left: 1px solid #DDE0ED;" class="head padd-20">
                  Pro licence
                </td>
                <td style="width: 200px; border-left: 1px solid #DDE0ED;">
&nbsp;
                </td>
              </tr>
              <tr>
                <td style="padding-left: 20px;">
                  <ToggleSwitch first_text="Monthly plans" second_text="Annual plans" />
                </td>
                <td style="text-align: center; border-left: 1px solid #DDE0ED;" class="price">
                  13$
                </td>
                <td style="text-align: center; border-left: 1px solid #DDE0ED;" class="price">
                  27$
                </td>
                <td style="border-left: 1px solid #DDE0ED;">
&nbsp;
                </td>
              </tr>
              <tr>
                <td>
&nbsp;
                </td>
                <td style="text-align: center; padding-bottom: 20px; border-left: 1px solid #DDE0ED;">
                  per month
                </td>
                <td style="text-align: center; padding-bottom: 20px; border-left: 1px solid #DDE0ED;">
                  per month
                </td>
                <td style="border-left: 1px solid #DDE0ED;">
&nbsp;
                </td>
              </tr>
              <tr>
                <td style="padding: 20px 0 20px 40px; background-color: #F2F3F9;">
                  Credits Per Month
                </td>
                <td style="text-align: center; padding: 20px 0; background-color: #F2F3F9; border-left: 1px solid #DDE0ED;">
                  200
                </td>
                <td style="text-align: center; padding: 20px 0; background-color: #F2F3F9; border-left: 1px solid #DDE0ED;">
                  700
                </td>
                <td style="background-color: #F2F3F9; border-left: 1px solid #DDE0ED;">
&nbsp;
                </td>
              </tr>
              <tr>
                <td style="padding: 20px 0 20px 40px;">
                  Company Revenue Return
                </td>
                <td style="text-align: center; padding: 20px 0 40px 0; border-left: 1px solid #DDE0ED;">
                  up to 100K $
                </td>
                <td style="text-align: center; padding: 20px 0 40px 0; border-left: 1px solid #DDE0ED;">
                  above 100K $
                </td>
                <td style="border-left: 1px solid #DDE0ED;">
&nbsp;
                </td>
              </tr>
              <tr>
                <td>
&nbsp;
                </td>
                <td style="padding: 20px 0; text-align: center;">
                  <button class="toggleOption gray">
                    Owned
                  </button>
                </td>
                <td style="padding: 20px 0; text-align: center;">
                  <button class="toggleOption green">
                    Upgrade
                  </button>
                </td>
                <td>
&nbsp;
                </td>
              </tr>
              <tr>
                <td>
&nbsp;
                </td>
                <td style="text-align: center; padding-left: 32px;">
                  <a href="#" class="button-tertiary button-tertiary--green">cancle subscription</a>
                </td>
                <td>
&nbsp;
                </td>
                <td>
&nbsp;
                </td>
              </tr>
            </tbody>
          </table>
          <!-- DivTable.com -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import LeftSidebar from '@/components/Sidebar/LeftSidebar';
import ToggleSwitch from '@/components/ToggleSwitch';
import Button from '@/components/Button';

export default {
  name: 'Textures',
  components: {
    LeftSidebar,
    ToggleSwitch,
    Button
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
@import "@/assets/scss/pages/buttons.scss";
</style>

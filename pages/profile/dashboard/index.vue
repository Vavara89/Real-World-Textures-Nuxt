<template>
  <div class="page-container">
    <LeftSidebar :profile="true" />
    <div class="page-content">
      <section class="services view-bottom">
        <div class="wrapper-profile">
          <div class="wrapper-inner">
            <div class="containers">
              <div class="iconic" />
              <div class="left">
                <h2>Jiří Slovák</h2><h3>jirislovak@email.com<h3 /></h3>
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
                    <table style="width: 621px;">
                      <tbody>
                        <tr>
                          <td style="width: 150px;" class="is-first">
                            First Name
                          </td>
                          <td style="width: 370px;" class="is-second">
                            <input type="text" name="name" placeholder="Enter name">
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 150px;" class="is-first">
                            Last Name
                          </td>
                          <td style="width: 370px;" class="is-second">
                            <input type="text" name="surname" placeholder="Enter last name">
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 150px;" class="is-first">
                            Email Address
                          </td>
                          <td style="width: 370px;" class="is-second">
                            <input type="text" name="email" placeholder="Enter email">
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 150px;" class="is-first">
                            Business Name
                          </td>
                          <td style="width: 370px;" class="is-second">
                            <input type="text" name="company" placeholder="Enter company">
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: center;" colspan="2">
                            <button class="toggleOption">
                              Update info
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-if="cardBilling" class="is-profile">
                    <table style="width: 621px;">
                      <tbody>
                        <tr>
                          <td style="width: 250px;" class="is-first">
                            Payment Method
                          </td>
                          <td style="width: 200px;">
                            CC Ending with 4329
                          </td>
                          <td style="width: 134px;">
                            <img src="@/assets/img/cards/mastercard.png" class="bank">
                          </td>
                          <td style="width: 92px;">
                            <span>Edit</span>
                          </td>
                          <td style="width: 92px;">
                            <span>Remove</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 250px;" class="is-first top">
                            Billing Address
                          </td>
                          <td style="width: 200px;">
                            Vyhoňkopec 1471
                            735 32 Rychvald
                            Czech republic
                            <br><br>
                            VAT: 12345678
                          </td>
                          <td style="width: 134px;">
&nbsp;
                          </td>
                          <td style="width: 92px;">
                            <span>Edit</span>
                          </td>
                          <td style="width: 92px;">
&nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-if="cardPassword" class="is-profile">
                    <table style="width: 521px;">
                      <tbody>
                        <tr>
                          <td style="width: 150px;" class="is-first">
                            Old Password
                          </td>
                          <td style="width: 370px;" class="is-second">
                            <input type="text" name="oldpwd" placeholder="Old password">
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 150px;" class="is-first">
                            New Password
                          </td>
                          <td style="width: 370px;" class="is-second">
                            <input type="text" name="newpwd" placeholder="New password">
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 150px;" class="is-first">
                            Confirm Password
                          </td>
                          <td style="width: 370px;" class="is-second">
                            <input type="text" name="newpwdconf" placeholder="New password confirmation">
                          </td>
                        </tr>

                        <tr>
                          <td style="text-align: center;" colspan="2">
                            <button class="toggleOption">
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
                card
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionParts/SectionTitle';
import CardGrid from '@/components/Cards/CardGrid';
import SectionFaq from '@/components/Sections/SectionFaq';
import TextureGallery from '@/components/Textures/TextureGallery';
import LeftSidebar from '@/components/Sidebar/LeftSidebar';
import ContentHeader from '@/components/Textures/ContentHeader';

export default {
  name: 'Textures',
  components: {
    SectionTitle,
    CardGrid,
    SectionFaq,
    TextureGallery,
    LeftSidebar,
    ContentHeader
  },
  data () {
    return {
      cardProfile: true,
      cardBilling: false,
      cardPassword: false,

      subtitle: 'Services',
      title: 'Textures',
      perex:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Join our community on FB',
      cards: [
        {
          image: {
            url: require('@/assets/img/tutorials/0.png'),
            alt: ''
          },
          title: 'For Architects',
          subtitle:
            'Looking for nice floor or material for facade? No problem!',
          text:
            'Choose the best material for your project, make visualisation for your client and buy a surface in the real world.',
          link: '#'
        },
        {
          image: {
            url: require('@/assets/img/tutorials/1.png'),
            alt: ''
          },
          title: 'For 3D Artists',
          subtitle:
            'Take it all! Diffuse, reflection, glosiness, bump, displacement ambient occlusion and even subsurface scattering...',
          text:
            'PBR materials  and 3D models  from real worldwide manufacturers.',
          link: '#'
        },
        {
          image: {
            url: require('@/assets/img/tutorials/2.png'),
            alt: ''
          },
          title: 'For Manufacturers',
          subtitle: "There is no material or model we can't handle with!",
          text:
            'Scann and postprocess your material or model, provide it through our website and get to know architects about your company and  its products.',
          link: '#'
        },
        {
          image: {
            url: require('@/assets/img/tutorials/0.png'),
            alt: ''
          },
          title: 'For Manufacturers',
          subtitle: "There is no material or model we can't handle with!",
          text:
            'Scann and postprocess your material or model, provide it through our website and get to know architects about your company and  its products.',
          link: '#'
        },
        {
          image: {
            url: require('@/assets/img/tutorials/1.png'),
            alt: ''
          },
          title: 'For Manufacturers',
          subtitle: "There is no material or model we can't handle with!",
          text:
            'Scann and postprocess your material or model, provide it through our website and get to know architects about your company and  its products.',
          link: '#'
        },
        {
          image: {
            url: require('@/assets/img/tutorials/2.png'),
            alt: ''
          },
          title: 'For Manufacturers',
          subtitle: "There is no material or model we can't handle with!",
          text:
            'Scann and postprocess your material or model, provide it through our website and get to know architects about your company and  its products.',
          link: '#'
        }
      ],
      textures: [
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        },
        {
          image: {
            url: require('@/assets/img/brands/logo.png'),
            alt: ''
          }
        }
      ]
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>

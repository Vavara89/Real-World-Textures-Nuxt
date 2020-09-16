<template>
  <footer class="footer">
    <div class="container container--content footer__grid">
      <div class="footer__info">
        <h3 class="footer__title">
          Real World Textures
        </h3>
        <p
          class="footer__text"
        >
          We are lorem ipsum nteger euismod a tellus sit amet sagittis. Etiam at felis tellus. Integer vel nisl quis
          neque porta sodales. Aliquam nec laoreet libero.
        </p>
        <FooterSocial/>
      </div>
      <FooterNav :footernavs="footernavs"/>
      <div class="footer__community">
        <h3 class="footer__title">
          Join our community
        </h3>
        <FooterMailForm/>
      </div>
      <div class="footer__policy">
        <FooterLinks/>
        <div class="footer__copyright">
          &copy; REALWORLD TEXTURES. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterSocial from '@/components/Footer/FooterSocial';
import FooterNav from '@/components/Footer/FooterNav';
import FooterMailForm from '@/components/Footer/FooterMailForm';
import FooterLinks from '@/components/Footer/FooterLinks';

export default {
  name: 'Footer',
  components: {
    FooterSocial,
    FooterNav,
    FooterMailForm,
    FooterLinks
  },
  data() {
    return {
      footernavs: [
        {
          title: 'Company',
          sub_menus: [
            {
              'url': '/content/about',
              'name': 'About',
            },
            {
              'url': '/brands',
              'name': 'Partners',
            },
          ],
        },
        {
          title: 'Learning',
          sub_menus: [
            {
              'url': '/tutorials',
              'name': 'Tutorials',
            },
            {
              'url': '/',
              'name': 'FAQ',
              'hash': 'faq'
            },
          ]
        },
        {
          title: 'Get in Touch',
          sub_menus: [{
            'url': `mailto:${process.env.contacts.email}`,
            'name': 'E-mail Us',
            'external': true
          },
          {
            'url': process.env.contacts.facebook_link,
            'name': "Facebook",
            'external': true
          },
            {
              'url': process.env.contacts.instagram_link,
              'name': "Instagram",
              'external': true
            },
            {
              'url': process.env.contacts.youtube_link,
              'name': "Youtube",
              'external': true
            },
          ]
        }
      ]
    };
  }
};
</script>

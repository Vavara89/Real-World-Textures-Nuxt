<template>
    <ul class="footer-social">
        <li v-for="social in socials" class="footer-social__item">
            <a target="_blank" :href="social.url" class="footer-social__link">
                <img :src="social.icon" />
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "FooterSocial",
    data(){
      return {
        socials: [
          {
            'url': process.env.contacts.facebook_link,
            'icon': require("~/assets/img/social-facebook.svg"),
            'external': true
          },
          {
            'url': process.env.contacts.instagram_link,
            'icon': require("~/assets/img/social-instagram.svg"),
            'external': true
          },
          {
            'url': process.env.contacts.youtube_link,
            'icon': require("~/assets/img/social-youtube.svg"),
            'external': true
          },
        ]
      }
    }
};
</script>

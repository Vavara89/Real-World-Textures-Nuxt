<template>
    <ul class="footer-social">
        <li v-for="social in socials" class="footer-social__item">
            <a target="_blank" :href="social.url" class="footer-social__link">
                <img :src="social.icon" />
                <img :src="social.iconactive" class="icongreen" />
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
            'iconactive': require("~/assets/img/social-facebook-green.svg"),
            'external': true
          },
          {
            'url': process.env.contacts.instagram_link,
            'icon': require("~/assets/img/social-instagram.svg"),
            'iconactive': require("~/assets/img/social-instagram-green.svg"),
            'external': true
          },
          {
            'url': process.env.contacts.youtube_link,
            'icon': require("~/assets/img/social-youtube.svg"),
            'iconactive': require("~/assets/img/social-youtube-green.svg"),
            'external': true
          },
        ]
      }
    }
};
</script>

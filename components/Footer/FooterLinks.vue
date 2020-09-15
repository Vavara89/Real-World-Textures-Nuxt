<template>
    <ul class="footer-links">
        <li class="footer-links__item">
          <router-link
            class="footer-links__link"
            :to="'/content/terms-and-conditions'">
            Terms and Conditions
          </router-link>
        </li>
        <li class="footer-links__item">
          <router-link
            class="footer-links__link"
            :to="'/content/privacy-policy'">
            Privacy Policy
          </router-link>
        </li>
        <li class="footer-links__item">
          <router-link
            class="footer-links__link"
            :to="'/content/cookies'">
            Cookies
          </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "FooterLinks"
};
</script>

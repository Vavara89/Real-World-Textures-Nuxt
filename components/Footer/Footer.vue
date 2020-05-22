<template>
    <footer class="footer">
        <div class="container container--content footer__grid">
            <div class="footer__info">
                <h3 class="footer__title">Real World Textures</h3>
                <p
                    class="footer__text"
                >We are lorem ipsum nteger euismod a tellus sit amet sagittis. Etiam at felis tellus. Integer vel nisl quis neque porta sodales. Aliquam nec laoreet libero.</p>
                <FooterSocial />
            </div>
            <FooterNav />
            <div class="footer__community">
                <h3 class="footer__title">Join our community</h3>
                <FooterMailForm />
            </div>
            <div class="footer__policy">
                <FooterLinks />
                <div class="footer__copyright">&copy; REALWORLD TEXTURES. All rights reserved.</div>
            </div>
        </div>
    </footer>
</template>

<script>
import FooterSocial from "@/components/Footer/FooterSocial";
import FooterNav from "@/components/Footer/FooterNav";
import FooterMailForm from "@/components/Footer/FooterMailForm";
import FooterLinks from "@/components/Footer/FooterLinks";

export default {
    name: "Footer",
    components: {
        FooterSocial,
        FooterNav,
        FooterMailForm,
        FooterLinks
    }
};
</script>
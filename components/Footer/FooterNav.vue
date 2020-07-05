<template>
    <div class="footer-nav">
        <FooterMenu v-for="(footernav, index) in footernavs" :key="'id-' + index" :footernav="footernav" />
    </div>
</template>

<script>
import FooterMenu from "@/components/Footer/FooterMenu";

export default {
    name: "FooterNav",
    components: {
        FooterMenu
    },
    props: {
        footernavs: {
            type: Array,
            required: true
        }
    }
};
</script>
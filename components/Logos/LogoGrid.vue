<template>
    <ul class="logos">
        <li class="logo" v-for="(logo, index) in logos" :key="'logo-' + index">
            <Logo :logo="logo" />
        </li>
    </ul>
</template>

<script>
import Logo from "@/components/Logos/Logo";

export default {
    name: "LogoGrid",
    components: {
        Logo
    },
    props: {
        logos: {
            type: Array,
            required: true
        }
    }
};
</script>
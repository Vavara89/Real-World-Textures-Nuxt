<template>
    <ul class="logos">
        <li class="logos__logo" v-for="(logo, index) in logos" :key="index">
            <Logo :logo="logo" />
        </li>
    </ul>
</template>

<script>
import Logo from "@/components/Logo";

export default {
    name: "Logos",
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
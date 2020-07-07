<template>
    <div class="wrapper">
        <Header />
        <nuxt />
        <Footer v-if="$route.name !== 'login' && $route.name !== 'signup'"/>
    </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {
    components: {
        Header,
        Footer
    }
};
</script>

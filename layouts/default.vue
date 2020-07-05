<template>
    <div class="wrapper">
        <Header />
        <nuxt />
        <Footer v-if="$route.name !== 'login'"/>
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

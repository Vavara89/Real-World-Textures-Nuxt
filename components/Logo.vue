<template>
    <a class="logos__link" :href="logo.link" v-if="logo.image.url">
        <img class="logos__image" :src="logo.image.url" :alt="logo.image.alt" />
    </a>
    <img v-else class="logos__image" :src="logo.image.url" :alt="logo.image.alt" />
</template>

<script>
export default {
    name: "Logo",
    props: {
        logo: {
            type: Object,
            required: true
        }
    }
};
</script>
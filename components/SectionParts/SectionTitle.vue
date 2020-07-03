<template>
    <div
        class="section__heading"
        :class="{'section__heading--centered': isCentered, 'section__heading--inverted': isInverted}"
    >
        <h3 v-if="subtitle" class="h3 section__subtitle">{{ subtitle }}</h3>
        <h2 class="h1 section__title" :class="{'section__title--perexed': perex}">{{ title }}</h2>
        <p class="p section__perex" v-if="perex">{{ perex }}</p>
    </div>
</template>

<script>
export default {
    name: "SectionTitle",
    props: {
        subtitle: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        perex: {
            type: String,
            required: false
        },
        isCentered: {
            type: Boolean,
            default: false
        },
        isInverted: {
            type: Boolean,
            default: false
        }
    }
};
</script>
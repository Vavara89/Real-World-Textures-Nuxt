<template>
    <ul class="cards">
        <li class="card"
            :class="{'view-margin': isMore}"
            v-for="(card, index) in cards" :key="'logo-' + index">
            <Card :card="card" />
        </li>
    </ul>
</template>

<script>
import Card from "@/components/Cards/Card";

export default {
    name: "CardGrid",
    components: {
        Card
    },
    props: {
        cards: {
            type: Array,
            required: true
        },
        isMore: {
            type: Boolean,
            required: false
        }
    }
};
</script>
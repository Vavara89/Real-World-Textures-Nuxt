<template>
    <ul class="cards">
        <li class="card" v-for="(card, index) in cards" :key="'logo-' + index">
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
        }
    }
};
</script>
<template>
    <ul class="pricecards">
        <li class="pricecard" v-for="(card, index) in cards" :key="'logo-' + index">
            <PriceCard :card="card" />
        </li>
    </ul>
</template>

<script>
import PriceCard from "@/components/Cards/PriceCard";

export default {
    name: "PriceCardGrid",
    components: {
        PriceCard
    },
    props: {
        cards: {
            type: Array,
            required: true
        }
    }
};
</script>
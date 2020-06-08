<template>
    <div class="pricecard__block">
        <div class="pricecard__content">
            <p class="pricecard__title">{{ card.title }}</p>
            <p class="pricecard__subtitle">{{ card.subtitle }}</p>
            <p class="pricecard__price">{{ card.currency }}{{ card.price }}</p>
            <p class="pricecard__desc">{{ card.desc }}</p>
            <Button :link="card.buttonlink" :text="card.buttontext" type="primary" width="wide" />
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button";

export default {
    name: "PriceCard",
    components: {
        Button
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    }
};
</script>
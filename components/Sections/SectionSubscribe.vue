<template>
    <section class="subscribe">
        <div class="container container--content">
            <div class="subscribe-outer">
                <div class="subscribe-inner">
                    <SectionTitle :title="title" :isCentered="false" :isInverted="true" />
                    <div class="toggle-button-wrap">
                        <ToggleSwitch />
                    </div>
                    <div class="price-table">
                        <PriceCardGrid :cards="cards" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import ToggleSwitch from "@/components/ToggleSwitch";
import PriceCardGrid from "@/components/Cards/PriceCardGrid";

export default {
    name: "SectionSubscribe",
    components: {
        SectionTitle,
        ToggleSwitch,
        PriceCardGrid
    },
    data() {
        return {
            title: "Subscribe",
            cards: [
                {
                    title: "Freelancer",
                    subtitle: "per month/person",
                    currency: "$",
                    price: "15",
                    desc: "200 credits/month",
                    buttontext: "Get Freelancer",
                    buttonlink: "/"
                },
                {
                    title: "Studio",
                    subtitle: "per month/seat",
                    currency: "$",
                    price: "32",
                    desc: "700 credits/month",
                    buttontext: "Get Studio",
                    buttonlink: "/"
                }
            ]
        }
    }
}
</script>
<template>
    <div>
        <SectionHeader />
        <SectionRealworld />
        <SectionExample />
        <SectionPhilosophy />
        <SectionServices />
        <SectionSubscribe />
        <SectionFaq />
        <SectionCompatibility />
        <SectionPartners />
        <SectionOffer :subtitle="offer.subtitle" :title="offer.title" :button="offer.button" />
    </div>
</template>

<script>
import SectionHeader from "@/components/Header/Header";
import SectionRealworld from "@/components/Sections/SectionRealworld";
import SectionExample from "@/components/Sections/SectionExample";
import SectionPhilosophy from "@/components/Sections/SectionPhilosophy";
import SectionServices from "@/components/Sections/SectionServices";
import SectionSubscribe from "@/components/Sections/SectionSubscribe";
import SectionFaq from "@/components/Sections/SectionFaq";
import SectionCompatibility from "@/components/Sections/SectionCompatibility";
import SectionPartners from "@/components/Sections/SectionPartners";
import SectionOffer from "@/components/Sections/SectionOffer";

export default {
    components: {
        SectionHeader,
        SectionRealworld,
        SectionExample,
        SectionPhilosophy,
        SectionServices,
        SectionSubscribe,
        SectionFaq,
        SectionCompatibility,
        SectionPartners,
        SectionOffer
    },
    data() {
        return {
            offer: {
                subtitle: "Try Real world textures and",
                title: "Get 10 materials for free",
                button: {
                    text: "Login to get 10 free textures",
                    link: "#"
                }
            }
        };
    }
};
</script>
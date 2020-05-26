<template>
    <div>
        <SectionExample />
        <SectionPhilosophy />
        <SectionServices />
        <SectionFaq />
        <SectionCompatibility />
        <SectionPartners />
        <SectionOffer :subtitle="offer.subtitle" :title="offer.title" :button="offer.button" />
    </div>
</template>

<script>
import SectionExample from "@/components/Sections/SectionExample";
import SectionPhilosophy from "@/components/Sections/SectionPhilosophy";
import SectionServices from "@/components/Sections/SectionServices";
import SectionFaq from "@/components/Sections/SectionFaq";
import SectionCompatibility from "@/components/Sections/SectionCompatibility";
import SectionPartners from "@/components/Sections/SectionPartners";
import SectionOffer from "@/components/Sections/SectionOffer";

export default {
    components: {
        SectionExample,
        SectionPhilosophy,
        SectionServices,
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
<template>
    <section class="philosophy">
        <div class="container container--box">
            <SectionTitle :title="title" :subtitle="subtitle" />
            <Halves :items="items" :image="image" />
        </div>
    </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import Halves from "@/components/Halves";

export default {
    name: "SectionPhilosophy",
    components: {
        SectionTitle,
        Halves
    },
    data() {
        return {
            subtitle: "Philosophy",
            title:
                "We are connecting architects and surface manufacturers through architectural visualisation",
            image: {
                url: "_nuxt/assets/img/philosophy/philosophy.png",
                alt: "philosophy"
            },
            items: [
                {
                    title: "As an architect",
                    text:
                        "You are always looking for particular materials or products for your architectural visualisation to present your project in a realistic and credible way. Afterwards, you have to find their equivalents on the market to give your client what they are expecting."
                },
                {
                    title: "As a 3D artist",
                    text:
                        "You are happy to have a library of pre-prepared materials, which saves you time by you not having to create your own material from scratch."
                },
                {
                    title: "As a manufacturer",
                    text:
                        "Of any kind of surface (wooden floorboards, fabrics, plaster etc.), you want architects to know your company and its products."
                }
            ]
        };
    },
    methods: {
        // TODO: Delete when connected to API
        getImage(fileName) {
            const flags = require.context(
                "../../assets/img/philosophy",
                false,
                /\.png$/
            );
            return flags(`./${fileName}.png`);
        }
    }
};
</script>
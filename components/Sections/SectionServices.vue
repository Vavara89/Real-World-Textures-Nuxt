<template>
    <section class="services">
        <div class="container container--content">
            <SectionTitle :title="title" :subtitle="subtitle" />
            <CardGrid :cards="cards" />
        </div>
    </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import CardGrid from "@/components/Cards/CardGrid";

export default {
    name: "SectionServices",
    components: {
        SectionTitle,
        CardGrid
    },
    data() {
        return {
            subtitle: "Services",
            title: "What are we providing?",
            cards: [
                {
                    image: {
                        url: "_nuxt/assets/img/spheres/sphere-1.png",
                        alt: ""
                    },
                    title: "For Architects",
                    subtitle:
                        "Looking for nice floor or material for facade? No problem!",
                    text:
                        "Choose the best material for your project, make visualisation for your client and buy a surface in the real world.",
                    link: "#"
                },
                {
                    image: {
                        url: "_nuxt/assets/img/spheres/sphere-2.png",
                        alt: ""
                    },
                    title: "For 3D Artists",
                    subtitle:
                        "Take it all! Diffuse, reflection, glosiness, bump, displacement ambient occlusion and even subsurface scattering...",
                    text:
                        "PBR materials  and 3D models  from real worldwide manufacturers.",
                    link: "#"
                },
                {
                    image: {
                        url: "_nuxt/assets/img/spheres/sphere-3.png",
                        alt: ""
                    },
                    title: "For Manufacturers",
                    subtitle:
                        "There is no material or model we can't handle with!",
                    text:
                        "Scann and postprocess your material or model, provide it through our website and get to know architects about your company and  its products.",
                    link: "#"
                }
            ]
        };
    },
    methods: {
        // TODO: Delete when connected to API
        getImage(fileName) {
            const flags = require.context(
                "../../assets/img/spheres",
                false,
                /\.png$/
            );
            return flags(`./${fileName}.png`);
        }
    }
};
</script>
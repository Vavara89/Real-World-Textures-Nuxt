<template>
    <section class="example">
        <div class="container">
            <SectionTitle :subtitle="subtitle" :title="title" :isCentered="true" />
            <img :src="image.url" :alt="image.alt" class="example__image" />
            <TextureGrid :textures="textures" :shadow="true" />
        </div>
    </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import TextureGrid from "@/components/Textures/TextureGrid";

export default {
    name: "SectionExample",
    components: {
        SectionTitle,
        TextureGrid
    },
    data() {
        return {
            subtitle: "Example of usage",
            title:
                "With real surfaces make your renderings even more realistic",
            image: {
                url: "_nuxt/assets/img/textures/example.png",
                alt: "example of use"
            },
            textures: [
                {
                    image: {
                        url: "_nuxt/assets/img/textures/texture-backhausen.png",
                        alt: "Backhausen"
                    },
                    name: "Backhausen",
                    structure: "Viola",
                    usage: "fabric over bar stool"
                },
                {
                    image: {
                        url: "_nuxt/assets/img/textures/texture-shipwood.png",
                        alt: "Shipwood"
                    },
                    name: "Shipwood",
                    structure: "Pyramids",
                    usage: "kitchen island"
                },
                {
                    image: {
                        url: "_nuxt/assets/img/textures/texture-jafholz.png",
                        alt: "Jafholz"
                    },
                    name: "Jafholz",
                    structure: "Cedar",
                    usage: "kitchen cabinet"
                },
                {
                    image: {
                        url:
                            "_nuxt/assets/img/textures/texture-princparket.png",
                        alt: "Princ Parket"
                    },
                    name: "Princ Parket",
                    structure: "Volcano",
                    usage: "wooden floor"
                },
                {
                    image: {
                        url:
                            "_nuxt/assets/img/textures/texture-technistone.png",
                        alt: "Technistone"
                    },
                    name: "Technistone",
                    structure: "Cloudy Onyx",
                    usage: "kitchen countertop"
                }
            ]
        };
    },
    methods: {
        // TODO: Delete when connected to API
        getImage(fileName) {
            const flags = require.context(
                "../../assets/img/textures",
                false,
                /\.png$/
            );
            return flags(`./${fileName}.png`);
        }
    }
};
</script>
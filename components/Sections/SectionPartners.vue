<template>
    <section class="partners">
        <div class="container container--content">
            <SectionTitle :subtitle="subtitle" :title="title" />
            <Logos :logos="logos" />
        </div>
    </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import Logos from "@/components/Logos";

export default {
    name: "SectionPartners",
    components: {
        SectionTitle,
        Logos
    },
    data() {
        return {
            subtitle: "Our partners",
            title: "Trusted by",
            logos: [
                {
                    link: "#",
                    image: {
                        url: "_nuxt/assets/img/partners/logo-mafi.png",
                        alt: "mafi logo"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "_nuxt/assets/img/partners/logo-princparket.png",
                        alt: "Princ Parket logo"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "_nuxt/assets/img/partners/logo-dreambeds.png",
                        alt: "Dreambeds logo"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "_nuxt/assets/img/partners/logo-polstrin.png",
                        alt: "polstrin logo"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "_nuxt/assets/img/partners/logo-shipwood.png",
                        alt: "ShipWood logo"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "_nuxt/assets/img/partners/logo-shipwood.png",
                        alt: "ShipWood logo"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "_nuxt/assets/img/partners/logo-polstrin.png",
                        alt: "polstrin logo"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "_nuxt/assets/img/partners/logo-mafi.png",
                        alt: "mafi logo"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "_nuxt/assets/img/partners/logo-princparket.png",
                        alt: "Princ Parket logo"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "_nuxt/assets/img/partners/logo-dreambeds.png",
                        alt: "dreambeds logo"
                    }
                }
            ]
        };
    },
    methods: {
        // TODO: Delete when connected to API
        getImage(fileName) {
            const flags = require.context(
                "../../assets/img/partners",
                false,
                /\.png$/
            );
            return flags(`./${fileName}.png`);
        }
    }
};
</script>
<template>
    <section class="partners">
        <div class="container">
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
                        url: "",
                        alt: "Some image"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "",
                        alt: "Some image"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "",
                        alt: "Some image"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "",
                        alt: "Some image"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "",
                        alt: "Some image"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "",
                        alt: "Some image"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "",
                        alt: "Some image"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "",
                        alt: "Some image"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "",
                        alt: "Some image"
                    }
                },
                {
                    link: "#",
                    image: {
                        url: "",
                        alt: "Some image"
                    }
                }
            ]
        };
    },
    methods: {
        getImage() {
            const flags = require.context(
                "../../assets/img/partners",
                false,
                /\.png$/
            );
            // const flag = this.logos.logo.image.url.toLowerCase();
            return flags(`./${flag}.png`);
        }
    }
};
</script>
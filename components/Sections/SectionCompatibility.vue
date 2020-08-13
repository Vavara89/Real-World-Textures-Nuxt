<template>
    <section class="compatibility">
        <div class="container container--content">
            <SectionTitle :subtitle="subtitle" :title="title" />
            <LogoGrid :logos="logos" />
        </div>
    </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import LogoGrid from "@/components/Logos/LogoGrid";

export default {
    name: "SectionCompatibility",
    components: {
        SectionTitle,
        LogoGrid
    },
    data() {
        return {
            subtitle: "Compatibility",
            title: "Works in any 3D Software",
            logos: [
                {
                    image: {
                        url: require("~/assets/img/programs/logo-cinema4d.png"),
                        alt: "Cinema 4D"
                    }
                },
                {
                    image: {
                        url: require("~/assets/img/programs/logo-maya.png")
                    }
                },
                {
                    image: {
                        url: require("~/assets/img/programs/logo-autodesk.png")
                    }
                },
                {
                    image: {
                        url: require("~/assets/img/programs/logo-blender.png")
                    }
                }
            ]
        };
    },
    methods: {
        // TODO: Delete when connected to API
        getImage(fileName) {
            const flags = require.context(
                "../../assets/img/programs",
                false,
                /\.png$/
            );
            return flags(`./${fileName}.png`);
        }
    }
};
</script>
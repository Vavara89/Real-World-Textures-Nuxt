<template>
    <section class="compatibility">
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
    name: "SectionCompatibility",
    components: {
        SectionTitle,
        Logos
    },
    data() {
        return {
            subtitle: "Compatibility",
            title: "Works in any 3D Software",
            logos: [
                {
                    image: {
                        url: "_nuxt/assets/img/programs/logo-cinema4d.png",
                        alt: "Cinema 4D"
                    }
                },
                {
                    image: {
                        url: "_nuxt/assets/img/programs/logo-maya.png"
                    }
                },
                {
                    image: {
                        url: "_nuxt/assets/img/programs/logo-autodesk.png"
                    }
                },
                {
                    image: {
                        url: "_nuxt/assets/img/programs/logo-blender.png"
                    }
                }
            ]
        };
    }
};
</script>
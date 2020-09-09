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
    props: {
      logos:{
        type: Array,
        required: false
      },
    },
    data() {
        return {
            subtitle: "Compatibility",
            title: "Works in any 3D Software",
        };
    },
};
</script>

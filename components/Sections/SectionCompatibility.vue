<template>
    <section class="compatibility">
        <div class="container">
            <SectionTitle :subtitle="subtitle" :title="title" />
        </div>
    </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";

export default {
    name: "SectionCompatibility",
    components: {
        SectionTitle
    },
    data() {
        return {
            subtitle: "Compatibility",
            title: "Works in any 3D Software"
        };
    }
};
</script>
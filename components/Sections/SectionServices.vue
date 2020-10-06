<template>
  <section id="services" class="services">
    <div class="container container--content">
      <SectionTitle :title="title" :subtitle="subtitle" />
      <CardGrid :cards="cards" />
      <CardSidebar v-for="(card, index) in cards"
        :card="card"
        :key="index"/>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import CardGrid from "@/components/Cards/CardGrid";
import CardSidebar from "@/components/Cards/CardSidebar";

export default {
  name: "SectionServices",
  components: {
    SectionTitle,
    CardGrid,
    CardSidebar
  },
  props:{
    cards:{
      type: Array,
      required: false
    }
  },
  data() {
    return {
      subtitle: "Services",
      title: "What are we providing?",
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

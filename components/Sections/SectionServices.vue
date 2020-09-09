<template>
  <section class="services">
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
  data() {
    return {
      subtitle: "Services",
      title: "What are we providing?",
      cards: [
        {
          image: {
            url: require("@/assets/img/spheres/sphere-1.png"),
            alt: ""
          },
          title: "For Architects",
          subtitle:
            "Looking for nice floor or material for facade? No problem!",
          text:
            "Choose the best material for your project, make visualisation for your client and buy a surface in the real world.",
          link: "#",
          sidebar: {
            isOpened: false,
            videoCover: "",
            text: "<p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>"
          },
          video: 'https://www.youtube.com/embed/iZMkzjrA5hM'
        },
        {
          image: {
            url: require("@/assets/img/spheres/sphere-2.png"),
            alt: ""
          },
          title: "For 3D Artists",
          subtitle:
            "Textures sets for both Specular/Glossiness andMetal/Roughness workflow",
          text:
            "PBR materials and 3D models from real worldwide manufacturers.",
          link: "#",
          sidebar: {
            isOpened: false,
            videoCover: "",
            text: "<p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>"
          }
        },
        {
          image: {
            url: require("@/assets/img/spheres/sphere-3.png"),
            alt: ""
          },
          title: "For Manufacturers",
          subtitle: "There is no material or model we can't handle with!",
          text:
            "Scan and postprocess your material or model, provide it through our website and get to know architects about your company and  its products.",
          link: "#",
          sidebar: {
            isOpened: false,
            videoCover: "",
            text: "<p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p><p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>"
          }
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

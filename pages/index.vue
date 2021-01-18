<template>
  <div>
    <SectionRealworld v-if="top_slider.length" :slides="top_slider"/>
    <SectionExample v-if="examples_slider.length" :slides="examples_slider"/>
    <SectionPhilosophy/>
    <SectionServices :cards="services"/>
    <SectionSubscribe/>
    <SectionFaq :id="'faq'" :faqs="faqs"/>
    <SectionCompatibility :logos="soft"/>
    <SectionPartners :logos="brands"/>
    <SectionOffer
      :subtitle="offer.subtitle"
      :title="offer.title"
      :button="offer.button"
    />
  </div>
</template>

<script>
import SectionRealworld from "@/components/Sections/SectionRealworld";
import SectionExample from "@/components/Sections/SectionExample";
import SectionPhilosophy from "@/components/Sections/SectionPhilosophy";
import SectionServices from "@/components/Sections/SectionServices";
import SectionSubscribe from "@/components/Sections/SectionSubscribe";
import SectionFaq from "@/components/Sections/SectionFaq";
import SectionCompatibility from "@/components/Sections/SectionCompatibility";
import SectionPartners from "@/components/Sections/SectionPartners";
import SectionOffer from "@/components/Sections/SectionOffer";
import main from "@/collectors/main";
import catalog from "@/collectors/catalog";

export default {
  components: {
    SectionRealworld,
    SectionExample,
    SectionPhilosophy,
    SectionServices,
    SectionSubscribe,
    SectionFaq,
    SectionCompatibility,
    SectionPartners,
    SectionOffer,
  },
  async asyncData(ctx) {
    let faqs = [];
    let brands = [];
    let soft = [];
    let services = [];
    let top_slider = [];
    let examples_slider = [];

    try {
      await main.faqs().then((response) => {
        faqs = response.data.results;
      });

      await catalog.products("brands", "page_size=10").then((response) => {
        brands = response.data.results.map((item) => {
          return {
            link: item.absolute_url,
            image: {
              url: item.logo,
              alt: item.name,
            },
          };
        });
      });

      await main.software().then((response) => {
        soft = response.data.results.map((item) => {
          return {
            image: {
              url: item.logo,
              alt: item.name,
            },
          };
        });
      });

      await main.service().then((response) => {
        services = response.data.results.map((item) => {
          return {
            image: {
              url: item.cover,
              alt: item.name,
            },
            title: item.name,
            subtitle: item.sub_title,

            text: item.content,
            link: "#",
            sidebar: {
              isOpened: false,
              videoCover: "",
              text: item.content,
            },
            video: item.video,
          };
        });
      });

      await main.main_feed().then((response) => {
        top_slider = response.data.top_slider;
        examples_slider = response.data.examples_slider;
      });

    } catch (e) {
      console.log(e);
    }


    return {
      faqs: faqs,
      brands: brands,
      soft: soft,
      services: services,
      examples_slider: examples_slider,
      top_slider: top_slider,
    };
  },
  data() {
    return {
      offer: {
        subtitle: "Try Real world textures and",
        title: "Use free materials in your project",
        button: {
          text: "Login to get free textures",
          link: "/login",
        },
      },
      faqs: [],
      brands: [],
      soft: [],
      services: [],
      examples_slider: [],
      top_slider: [],
    };
  },
};
</script>

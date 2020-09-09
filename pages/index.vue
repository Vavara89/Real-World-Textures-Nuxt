<template>
    <div>
        <SectionRealworld />
        <SectionExample />
        <SectionPhilosophy />
        <SectionServices />
        <SectionSubscribe />
        <SectionFaq :faqs="faqs"/>
        <SectionCompatibility :logos="soft"/>
        <SectionPartners :logos="brands"/>
        <SectionOffer :subtitle="offer.subtitle" :title="offer.title" :button="offer.button" />
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
import main from '@/collectors/main';
import catalog from '@/collectors/catalog';

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
        SectionOffer
    },
  async asyncData (ctx) {
      let faqs = [];
      let brands = [];
      let soft = [];

      await main.faqs().then(response => {
        faqs = response.data.results;
      });

      await catalog.products('brands', 'page_size=10').then(response => {
        brands = response.data.results.map((item)=>{
            return {
              link: item.absolute_url,
              image: {
                url: item.logo,
                alt: item.name,
              }
            };
        });
      });

      await main.software().then(response => {
        soft = response.data.results.map(item => {
          return {
            image: {
              url: item.logo,
              alt: item.name
            }
          };
        })
      });
      return {
        faqs: faqs,
        brands: brands,
        soft: soft
      };
  },
  data() {
        return {
            offer: {
                subtitle: "Try Real world textures and",
                title: "Get 10 materials for free",
                button: {
                    text: "Login to get 10 free textures",
                    link: "/login"
                }
            },
          faqs:[],
          brands: [],
          soft: []
        };
    }
};
</script>

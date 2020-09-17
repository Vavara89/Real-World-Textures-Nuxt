<template>
  <div>
    <section class="services view-bottom">
      <div class="container container--box">
        <SectionTitle :title="title" :perex="perex" :button="button" :isCentered="true" :button-link="buttonLink"/>
        <CardGrid :cards="cards" :isMore="true" :isTutorial="true"/>
        <p class="centered top160" v-if="next_pager">
          <a @click="paginate" class="button-primary">Load more tutorials</a>
        </p>
      </div>
    </section>
    <SectionFaq :faqs="faqs" :noPadding="true"/>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import CardGrid from "@/components/Cards/CardGrid";
import SectionFaq from "@/components/Sections/SectionFaq";
import main from "@/collectors/main";

export default {
  name: "Tutorials",
  components: {
    SectionTitle,
    CardGrid,
    SectionFaq
  },
  async asyncData(context) {
    let cards = [];
    let faqs = {};
    let next_pager = false;
    await main.faqs().then(response => {
      faqs = response.data.results;
    });
    const page = context['route'].query['page'] ? parseInt(context['route'].query['page'], 10) : 1;
    let request = 1;
     while (page >= request){
       await main.tutorials(8, request).then((response) => {
        response.data.results.forEach(item => {
          cards.push({
            image: {
              url: item.cover,
              alt: ""
            },
            title: item.id + item.name,
            subtitle: item.sub_title,
            text: item.text,
            link: item.video_url,
            sidebar:{
              isOpened: false,
              video: item.video_url,
              text: item.text
            }
          });
        });
        next_pager = response.data.next_page;
        console.log(next_pager);
      });
      request+=1;
    }

    return {
      faqs: faqs,
      cards: cards,
      next_pager: next_pager
    };
  },
  data() {
    return {
      subtitle: "Services",
      title: "Tutorials",
      button: "Join our community on FB",
      buttonLink: process.env.contacts.facebook_link,
      cards: [],
      faqs: [],
      next_pager: false
    };
  },
  computed: {
    perex() {
      const data = this.$store.getters.textBlocks.filter(item => item.key === 'tutorials');
      if (data.length) {
        return data.pop().content;
      }
      return '';
    }
  },
  methods: {
    paginate(e) {
      e.preventDefault();
      const query = {};
      Object.assign(query, this.$route.query);
      query['page'] = this.next_pager;
      this.$router.push({path: this.$route.path, query: query});
    },
  },
  watch: {
    $route(to, from) {
      const page = to.query['page'];
      if (page > 1) {
        main.tutorials(8, page).then(response => {
          response.data.results.forEach(item => {
            this.cards.push({
              image: {
                url: item.cover,
                alt: ""
              },
              title: item.title,
              subtitle: item.sub_title,
              text: item.text,
              link: item.video_url,
            });
          });
          this.next_pager = response.data.next_page;
        });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/tutorials.scss";
</style>

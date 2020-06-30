<template>
    <section class="example">
        <div class="container">
            <SectionTitle :subtitle="subtitle" :title="title" :isCentered="true" />
            <!-- <img :src="image.url" :alt="image.alt" class="example__image" /> -->
        </div>
        <div class="container container--4k">
          <div class="preview">
            <VueSlickCarousel ref="sliderNav" v-bind="navCarousel">
              <div><img :src="image.url" :alt="image.alt" class="" /></div>
              <div><img :src="image.url" :alt="image.alt" class="" /></div>
              <div><img :src="image.url" :alt="image.alt" class="" /></div>
            </VueSlickCarousel>
            <VueSlickCarousel ref="sliderMain" v-bind="mainCarousel">
              <div>
                <TextureGrid :textures="textures" :shadow="true" />
              </div>
              <div>
                <TextureGrid :textures="textures" :shadow="true" />
              </div>
              <div>
                <TextureGrid :textures="textures" :shadow="true" />
              </div>
            </VueSlickCarousel>
          </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import TextureGrid from "@/components/Textures/TextureGrid";
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: "SectionExample",
    components: {
        SectionTitle,
        TextureGrid,
        VueSlickCarousel
    },
    data() {
        return {
            subtitle: "Example of usage",
            navCarousel: {
              focusOnSelect: false,
              dots: true,
              infinite: false,
              centerMode: true,
              centerPadding: '1px',
              variableWidth: true,
              asNavFor: this.$refs.sliderMain
            },
            mainCarousel: {
              arrows: false,
              focusOnSelect: false,
              slidesToScroll: 1,
              slidesToShow: 1,
              centerMode: true,
              centerPadding: '1px',
              variableWidth: true,
              infinite: false,
              draggable: false,
              swipe: false,
              asNavFor: this.$refs.sliderNav
            },
            title:
                "With real surfaces make your renderings even more realistic",
            image: {
                url: "_nuxt/assets/img/textures/example.png",
                alt: "example of use"
            },
            textures: [
                {
                    image: {
                        url: "_nuxt/assets/img/textures/texture-backhausen.png",
                        alt: "Backhausen"
                    },
                    name: "Backhausen",
                    structure: "Viola",
                    usage: "fabric over bar stool"
                },
                {
                    image: {
                        url: "_nuxt/assets/img/textures/texture-shipwood.png",
                        alt: "Shipwood"
                    },
                    name: "Shipwood",
                    structure: "Pyramids",
                    usage: "kitchen island"
                },
                {
                    image: {
                        url: "_nuxt/assets/img/textures/texture-jafholz.png",
                        alt: "Jafholz"
                    },
                    name: "Jafholz",
                    structure: "Cedar",
                    usage: "kitchen cabinet"
                },
                {
                    image: {
                        url:
                            "_nuxt/assets/img/textures/texture-princparket.png",
                        alt: "Princ Parket"
                    },
                    name: "Princ Parket",
                    structure: "Volcano",
                    usage: "wooden floor"
                },
                {
                    image: {
                        url:
                            "_nuxt/assets/img/textures/texture-technistone.png",
                        alt: "Technistone"
                    },
                    name: "Technistone",
                    structure: "Cloudy Onyx",
                    usage: "kitchen countertop"
                }
            ]
        };
    },
    methods: {
        // TODO: Delete when connected to API
        getImage(fileName) {
            const flags = require.context(
                "../../assets/img/textures",
                false,
                /\.png$/
            );
            return flags(`./${fileName}.png`);
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_slick.scss";
</style>

<template>
    <div class="tooltip" v-on:click="showDetails" v-show="hover">
        <div class="tooltip-header"></div>
        <div class="tooltip-content">
            <VueSlickCarousel ref="sliderNav" v-bind="navCarousel">
                <template #prevArrow="arrowOption">
                    <div class="prev-slick">{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</div>
                </template>
                <template #nextArrow="arrowOption">
                    <div class="next-slick">{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</div>
                </template>
                <div class="imageItem">
                    <img :src="texture.image.url" :alt="texture.image.alt" class />
                </div>
            </VueSlickCarousel>
        </div>
        <div class="tooltip-footer">
            <div class="title">
                <h3 class="name">{{texture.title}}</h3>
            </div>
            <div class="credits-bookmark">
                <div class="credits"><h4 class="text">{{texture.credits}} credits</h4></div>
                <div class="bookmark"><img :src="texture.ribbon"></div>
            </div>
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    name: "TooltipItem",
    components: {
        VueSlickCarousel
    },
    props: {
        texture: {
            type: Object,
            required: true
        },
        showDetail: {
            type: Function
        }
    },
    mounted() {
        this.navCarousel.asNavFor = this.$refs.sliderMain;
    },
    data() {
        return{
            navCarousel: {
                dots: false,
                infinite: false,
                centerMode: true,
                centerPadding: "1px",
                variableWidth: true,
                asNavFor: {}
            },
            mainCarousel: {
                arrows: false,
                slidesToScroll: 1,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "1px",
                variableWidth: true,
                infinite: false,
                draggable: false,
                swipe: false
            },
            hover: true
        }
    },
    methods : {
        showDetails() {
            // this.hover = false;
            this.showDetail(this.texture);
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_tooltip.scss"
</style>
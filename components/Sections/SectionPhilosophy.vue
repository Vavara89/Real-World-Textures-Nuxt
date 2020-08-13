<template>
                        <div class="philosophy">
                            <ul class="philosophy-list">
                                <li class="philosophy-list-itm view-first" @mouseover="onHover('first')" @mouseleave="onHoverOut('first')">
                                    <div class="title view-sm">
                                        As an architect
                                    </div>
                                    <div class="wysiwyg view-light">
                                        <p>
                                            You are always looking for particular materials or products for your architectural visualisation to present your project in a realistic and credible way. Afterwards, you have to find their equivalents on the market to give your client what they are expecting.
                                        </p>
                                    </div>
                                </li>
                                <li class="philosophy-list-itm view-second" @mouseover="onHover('second')" @mouseleave="onHoverOut('second')">
                                    <div class="title view-sm">
                                        As 3D artist
                                    </div>
                                    <div class="wysiwyg view-light">
                                        <p>
                                            You are happy to have a library of pre-prepared materials, which saves you time by you not having to create your own material from scratch.
                                        </p>
                                    </div>
                                </li>
                                <li class="philosophy-list-itm view-third" @mouseover="onHover('third')" @mouseleave="onHoverOut('third')">
                                    <div class="title view-sm">
                                        As a manufacturer 
                                    </div>
                                    <div class="wysiwyg view-light">
                                        <p>
                                            Of any kind of surface (wooden floorboards, fabrics, plaster etc.), you want architects to know your company and its products.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div class="philosophy-img">
                                <img id="arrow" class="img" src="https://reawote.com/assets/img/philosophy/philosophy-arrow.svg" alt="" :class="{'view-second': second, 'view-third': third }">
                                <div class="philosophy-img-circle">
                                    <div class="philosophy-img-circle-itm view-first" :class="{'view-active': first}">
                                        Architects
                                    </div>
                                    <div class="philosophy-img-circle-itm view-second" :class="{'view-active': second}">
                                        Visualisation
                                    </div>
                                    <div class="philosophy-img-circle-itm view-third" :class="{'view-active': third}">
                                        Manufacturers
                                    </div>
                                    <div class="philosophy-img-circle-pic" :class="{'view-second': second, 'view-third': third }">
                                        <img class="img view-first"
                                            src="@/assets/img/philosophy/philosophy-11x.png"
                                            alt="">
                                        <img class="img view-second"
                                             src="@/assets/img/philosophy/philosophy-21x.png"
                                            alt="">
                                        <img class="img view-third"
                                            src="@/assets/img/philosophy/philosophy-31x.png"
                                            alt="">
                                    </div>
                                    <div class="philosophy-img-circle-shadow"></div>
                                </div>
                            </div>
                        </div>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import Halves from "@/components/Halves";

export default {
    name: "SectionPhilosophy",
    components: {
        SectionTitle,
        Halves
    },
    data() {
        return {
            first: false,
            second: false,
            third: false,
            subtitle: "Philosophy",
            title:
                "We are connecting architects and surface manufacturers through architectural visualisation",
            image: {
                url: require("~/assets/img/philosophy/philosophy.png"),
                alt: "philosophy"
            },
            items: [
                {
                    title: "As an architect",
                    text:
                        "You are always looking for particular materials or products for your architectural visualisation to present your project in a realistic and credible way. Afterwards, you have to find their equivalents on the market to give your client what they are expecting."
                },
                {
                    title: "As a 3D artist",
                    text:
                        "You are happy to have a library of pre-prepared materials, which saves you time by you not having to create your own material from scratch."
                },
                {
                    title: "As a manufacturer",
                    text:
                        "Of any kind of surface (wooden floorboards, fabrics, plaster etc.), you want architects to know your company and its products."
                }
            ]
        };
    },
    methods: {
        // TODO: Delete when connected to API
        getImage(fileName) {
            const flags = require.context(
                "../../assets/img/philosophy",
                false,
                /\.png$/
            );
            return flags(`./${fileName}.png`);
        },
    onHover(data) {
      if(data === 'first'){
          this.first = true;
      }
      if(data === 'second'){
          this.second = true;
      }
      if(data === 'third'){
          this.third = true;
      }
    },
    onHoverOut(data) {
      if(data === 'first'){
          this.first = false;
      }
      if(data === 'second'){
          this.second = false;
      }
      if(data === 'third'){
          this.third = false;
      }
    },
  
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_sectionphilosophy.scss";
</style>
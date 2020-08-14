<template>
    <div class="textgallery">
        <ul class="textures">
            <li class="texture" v-for="(texture, index) in textures" :key="'texture-' + index">
                <TextureItem :texture="texture" :shadow="shadow" />
                <TooltipItem :texture="texture" :showDetail="showDetail"/>
            </li>
        </ul>
        <DetailModal :texture="selectedTexture" v-model="modalOpen"/>
        <div class="clear"></div>
    </div>
</template>

<script>
import TextureItem from "@/components/Textures/TextureItem";
import TooltipItem from "@/components/Textures/TooltipItem";
import DetailModal from "@/components/DetailModal/DetailModal";

export default {
    name: "TextureGallery",
    components: {
        TextureItem,
        TooltipItem,
        DetailModal
    },
    props: {
        textures: {
            type: Array,
            required: true
        },
        shadow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selectedTexture: {},
            modalOpen : false
        }
    },
    methods: {
        showDetail(selectedTexture) {
            this.selectedTexture = selectedTexture;
            this.modalOpen = true;
        }
    }
};

</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_texturegallery.scss"
</style>
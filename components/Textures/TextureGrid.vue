<template>
    <div>
        <ul class="textures">
            <li class="texture" v-for="(texture, index) in textures" :key="'texture-' + index">
                <Texture :texture="texture" :shadow="shadow" />
            </li>
        </ul>
    </div>
</template>

<script>
import Texture from "@/components/Textures/Texture";

export default {
    name: "TextureGrid",
    components: {
        Texture,
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
    }
};

</script>
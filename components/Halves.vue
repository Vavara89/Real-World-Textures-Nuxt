<template>
    <div class="halves">
        <ul class="half half--list">
            <li class="half__item" v-for="(item, index) in items" :key="'item-' + index">
                <h3 class="half__title name">{{ item.title }}</h3>
                <div class="half__text text" v-html="item.text"></div>
            </li>
        </ul>
        <div class="half half--image">
            <img :src="image.url" :alt="image.alt" class="half__image" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Halves",
    props: {
        image: {
            type: Object,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    }
};
</script>
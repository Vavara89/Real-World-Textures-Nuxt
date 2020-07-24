<template>
    <div class="manufactors">
        <ul class="manufactor-list">
            <li class="manufactor-item" v-for="(item, index) in list" :key="'logo-' + index">
                <div class="manufactor-company"><p class="filter">{{ item.company }}</p></div>
                <div class="manufactor-location"><p class="filter">{{ item.location }}</p></div>
                <div class="manufactor-site"><p class="button-secondary button-secondary--undefined">{{ item.site }}</p></div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "ManufactorList",
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_manufactorList.scss";
</style>
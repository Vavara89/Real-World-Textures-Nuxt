<template>
    <div>
        <h3 class="h3">{{ options.title }}</h3>
        <ul>
            <li v-for="(item, index) in options.items" :key="'item-' + index" class="h4 item">
                <a v-bind:class="{'active':(item.active)}">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        options: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_leftSidebar.scss";
</style>
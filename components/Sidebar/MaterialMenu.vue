<template>
    <ul>
        <li v-for="(item, index) in list" :key="'item-' + index" class="text item">
            <a v-if="!item.subitems" v-bind:class="{'active':(item.active)}">{{ item.title }}</a>
            <a v-if="item.subitems" href="javascript:;" v-bind:class="{'active':(item.active)}">
                {{item.title}}
                <ul class="subItems">
                    <li v-for="(child, index) in item.subitems" :key="'item-' + index" class="item">
                        <a v-bind:class="{'active':(child.active)}">{{ child.title }}</a>
                    </li>
                </ul>
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_leftSidebar.scss";
</style>
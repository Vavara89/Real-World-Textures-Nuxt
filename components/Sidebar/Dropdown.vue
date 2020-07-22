<template>
    <div class="dropdown">
        <select class="filter is-active">
            <option v-for="(item, index) in options" :key="'item-' + index"> {{ item.value }}</option>
        </select>
    </div>
</template>
<script>
export default {
    name: "Dropdown",
    props: {
        options: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_dropdown.scss"
</style>
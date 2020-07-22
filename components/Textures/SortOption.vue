<template>
    <div class="sortoption">
        <h4 class="text">Sort By:</h4>
        <Dropdown :options="options"/>
    </div>
</template>
<script>
import Dropdown from "@/components/Sidebar/Dropdown";
export default {
    name: "SortOption",
    components: {
        Dropdown,
    },
    data() {
        return{
            options: [
                {
                    value: "Latest"
                },
                {
                    value: "Option 2"
                },
                {
                    value: "Option 3"
                },
                {
                    value: "Option 4"
                },
                {
                    value: "Option 5"
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_sortoption.scss"
</style>
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
                    value: "Name A-Z"
                },
                {
                    value: "Name Z-A"
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_sortoption.scss"
</style>
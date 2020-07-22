<template>
    <div class="content-header">
        <Filters />
        <SortOption />
    </div>
</template>
<script>
import SortOption from "@/components/Textures/SortOption";
import Filters from "@/components/Textures/Filters";

export default {
    name:  "ContentHeader",
    components: {
        SortOption,
        Filters
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_contentHeader.scss";
</style>
<template>
    <div>
        <button class="toggleOption" v-on:click="toggleOption">Select a manufacturer</button>
        <div v-if="enabled">
            <h3 class="h3">Manufactured in</h3>
            <Dropdown :options="confidents"/>
            <div class="header-search">
                <input type="text" name="s" placeholder="Search a Country" autocomplete="off" />
            </div>
        </div>
    </div>
</template>
<script>
import Dropdown from "@/components/Sidebar/Dropdown";
export default {
    components: {
        Dropdown,
    },

    data() {
        return {
            enabled: true
        }
    },

    props: {
        confidents: {
            type: Array,
            required: true
        }
    },

    methods: {
        toggleOption: function (event) {
            this.enabled = !this.enabled;
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_leftSidebar.scss";
</style>
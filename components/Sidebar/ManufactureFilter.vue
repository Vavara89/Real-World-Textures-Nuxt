<template>
    <div>
        <button class="toggleOption" v-on:click="toggleOption">Select a manufacturer</button>
        <div>
            <h3 class="h3">Manufactured in</h3>
            <Dropdown :options="confidents"/>
            <div class="header-search">
                <input type="text" name="s" placeholder="Search a Country" autocomplete="off" />
            </div>
        </div>
        <Modal :option="modalOpt" :list="manufactorList" v-model="modalOpen"/>
    </div>
</template>
<script>
import Dropdown from "@/components/Sidebar/Dropdown";
import Modal from "@/components/Modal/Modal";

export default {
    name: "ManufactureFilter",
    components: {
        Dropdown,
        Modal,
    },

    data() {
        return {
            modalOpt: "manufactorList",
            modalOpen: false,
            manufactorList: [
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },

                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
                {
                    company: "Company name like Stone",
                    location: "Ostrava, Czech Rep.",
                    site: "companynamestone.cz"
                },
            ]
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
            this.modalOpen = !this.modalOpen;
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_leftSidebar.scss";
</style>
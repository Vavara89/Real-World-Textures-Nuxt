<template>
    <div class="modal" v-show="value" :class=[option]>
        <div class="modal-container">
            <div class="modal-header">
                <div class="modal-close">
                    <a href="#" class="button" @click.prevent="close">
                        <img src="@/assets/img/icon-cross.svg" style="margin:10px;" width="12" />
                    </a>
                </div>
                <div class="modal-title">
                    <h2 class="h2">Official distributors of<br/>Technistone</h2>
                </div>
            </div>
            <div class="modal-body">
                <ManufactorList :list="list"/>
            </div>
            <div class="modal-footer"></div>
        </div>
    </div>
</template>
<script>
import ManufactorList from "@/components/Modal/ManufactorList";

export default {
    name: "Modal",
    components: {
        ManufactorList,
    },
    props: {
        option: {
            type: String,
            required: true,
        },
        value: {
            required: true,
        },
        list: {
            type:Array,
            required: true
        } 
    },
    data() {
        return {

        }
    },
    methods: {
        close() {
            this.$emit("input", !this.value)
        },
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_modal.scss";
</style>
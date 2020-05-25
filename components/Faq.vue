<template>
    <div class="faq__block" @click="openFaq">
        <h3 class="faq__title">{{ faq.title }}</h3>
        <div class="faq__text">
            <div class="faq__wysiwyg" v-html="faq.text"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Faq",
    props: {
        faq: {
            type: Object,
            required: true
        }
    },
    methods: {
        openFaq() {
            this.$el.classList.toggle("is-active");
            const text = this.$el.children[1];
            if (text.style.maxHeight) {
                text.style.maxHeight = null;
            } else {
                text.style.maxHeight = text.scrollHeight + "px";
            }
        }
    }
};
</script>
<template>
    <section class="offer">
        <div class="container container--box">
            <div class="offer__box">
                <SectionTitle
                    :subtitle="subtitle"
                    :title="title"
                    :isCentered="true"
                    :isInverted="true"
                />
                <a :href="button.link" class="offer__button button-primary">{{ button.text }}</a>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";

export default {
    name: "SectionOffer",
    components: {
        SectionTitle
    },
    props: {
        subtitle: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        button: {
            type: Object,
            required: true
        }
    }
};
</script>
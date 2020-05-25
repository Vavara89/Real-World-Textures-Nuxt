<template>
    <section class="faq">
        <div class="container container--content">
            <SectionTitle :subtitle="subtitle" :title="title" :isInverted="true" />
            <FaqGrid :faqs="faqs" />

            <footer class="faq__footer">
                <div class="faq__tagline" v-html="tagline"></div>
                <div class="faq__cta">
                    <SectionTitle title="Any other questions?" :isInverted="true" />
                    <Button
                        link="#contact"
                        text="Get help"
                        type="primary"
                        color="medium"
                        width="wide"
                    />
                </div>
            </footer>
        </div>
    </section>
</template>

<script>
import SectionTitle from "@/components/SectionParts/SectionTitle";
import Button from "@/components/Button";
import FaqGrid from "@/components/Faqs/FaqGrid";

export default {
    name: "SectionFAQ",
    components: {
        SectionTitle,
        FaqGrid,
        Button
    },
    data() {
        return {
            subtitle: "You ask – we answer",
            title: "Frequently asked questions",
            tagline:
                "We make community.</br> We create creative environment. </br> We search for the best textures.",
            faqs: [
                {
                    title: "What does it cost?",
                    text:
                        "Publishing your materials in the library is free of charge. You pay only for the processing of each of your material, but once it is processed, architects and designers can work with your products forever in any 3D software! Please contact us for further information about the price of digitalisation."
                },
                {
                    title:
                        "Can I try to digitise a few of my materials for free?",
                    text:
                        "Yes! If you want to try it first, we can process two of your materials to PBR standard for free. Contact us via the button above this section."
                },
                {
                    title: "Why digitalise my materials?",
                    text:
                        "Digitised materials bring you new possibilities in your marketing communication. With them, your materials might be presented in any thinkable environment. No matter if you wish to show your material in the futuristic house on the tropical coast or some cosy chalet in the mountains. Presentation in the 3D world has no limits, and it is a low budget compare to real photo shooting in such places. And most important it helps architects and designers to introduce your materials directly to the clients using photorealistic visualisations."
                },
                {
                    title: "Why should I publish my material in your library?",
                    text:
                        "Our library is a complex web application with dedicated tools ensuring fluent workflow between architects, designers and manufacturers. The library guarantees the hi-quality standard of processed materials and the possibility of universal usage in any 3D software. From each of your material in our library will be a direct link to your website. So, architects and designers can easily download your PBR materials through our web application, work with them immediately, explore your website and discover your brand and products. Above that, we offer you limitless storage for your PBR materials, so you won't have to dedicate part of your website to those huge data, and this service is entirely free for you."
                },
                {
                    title:
                        "Does it worth to publish only a few of my materials in the library?",
                    text:
                        "Yes! From each of your material published within our library will be a direct link to your website. So, one material means one link to your website and chance to discover your brand and its products. More materials = more links = more chance to discover your brand."
                },
                {
                    title:
                        "I already have my PBR materials. Can I publish them within your library?",
                    text:
                        "Yes! We will be grateful for your PBR materials. We will check their quality, and if it's ok, we will publish them in our library for free. We offer you limitless storage and place from where architects and designers can easily download your data and discover your brand."
                },
                {
                    title:
                        "What is unique on Reawote in comparison with other existing libraries?",
                    text:
                        "Our library connects the functionality of advanced web libraries for PBR materials well established in the 3D modelling world and classical online libraries from the field of architecture and engineering. First mentioned are dedicated to 3D artist and contains imitations of materials without any specification of manufactures or physical properties. The second mentioned are the databases of connections. They provide contacts to manufacturers and some supporting materials maintained by manufacturers. Since they sell just information, they usually display the content of the library only to paying subscribers. Architects and other professionals need PRB materials for visualisations. Those are currently in PBR libraries with fake materials unrelated to real production on the market. They also need contacts to possible producers of materials which are available in closed libraries with various unrelated content. Our library connects both – we provide hi-quality PBR materials of the real products for utilisation in 3D visualisations along with profiles of manufacturers and their contact information. Since we are selling PBR materials and not just information, we allow all users of the internet to display the content of the library along with information of manufacturers."
                },
                {
                    title: "What type of material can I digitise?",
                    text:
                        "You can digitise any type of surfaces! For example, fabrics, woods concrete, plasters, stones, tiles and even the materials like roof tiles or organic surfaces like grass. Contact us, and we will tell you more."
                }
            ]
        };
    }
};
</script>
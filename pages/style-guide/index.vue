<template>
    <main class="main">
        <div class="container">
            <h1 class="h1">Lorem ipsum dolor sit amet.</h1>
            <h2 class="h2">Lorem ipsum dolor sit amet.</h2>
            <h3 class="h3">Lorem ipsum dolor sit amet.</h3>
            <h4 class="h4">Lorem ipsum dolor sit amet.</h4>
            <div class="name">Lorem ipsum dolor sit amet.</div>
            <div class="filter">Lorem ipsum dolor sit amet.</div>
            <div class="filter is-active">Lorem ipsum dolor sit amet.</div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum aut reiciendis, vitae eos tenetur obcaecati suscipit soluta quae exercitationem?</p>
            <div class="detail">Lorem ipsum dolor sit amet.</div>
        </div>
        <div class="container">
            <a href="#" class="button-primary">Primary Button</a>
            <a href="#" class="button-primary button-primary--blue">Primary Button</a>
            <a href="#" class="button-primary button-primary--light">Primary Button</a>
            <a href="#" class="button-primary button-primary--red">Primary Button</a>
            <a href="#" class="button-primary button-primary--inverted">Primary Button</a>
        </div>
        <div class="container">
            <a href="#" class="button-secondary">Secondary Button</a>
            <a href="#" class="button-secondary button-secondary--inverted">Secondary Button</a>
            <a href="#" class="button-secondary button-secondary--play">Secondary Button</a>
            <a
                href="#"
                class="button-secondary button-secondary--inverted button-secondary--play"
            >Secondary Button</a>
        </div>
        <div class="container">
            <a href="#" class="button-tertiary">Tertiary Button</a>
            <a href="#" class="button-tertiary button-tertiary--red">Tertiary Button</a>
            <a href="#" class="button-tertiary button-tertiary--green">Tertiary Button</a>
            <a href="#" class="button-tertiary button-tertiary--blue">Tertiary Button</a>
        </div>
        <div class="container">
            <ToggleSwitch />
        </div>
    </main>
</template>

<script>
import ToggleSwitch from "@/components/ToggleSwitch";

export default {
    components: {
        ToggleSwitch
    }
};
</script>
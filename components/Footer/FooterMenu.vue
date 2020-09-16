<template>
    <div class="footer-nav__menu">
        <h3 class="footer-nav__title">{{ footernav.title }}</h3>
        <ul class="footer-nav__list">
            <li class="footer-nav__item" v-for="(submenu, index) in footernav.sub_menus" :key="'id-' + index">
              <nuxt-link v-if="!submenu.external" :to="{ path: submenu.url ,hash:submenu.hash}" :target="submenu.external ? 'blank' : ''">{{ submenu.name }}</nuxt-link>
              <a v-if="submenu.external" :href="submenu.url" :target="submenu.external ? 'blank' : ''">{{ submenu.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Footernav",
    props: {
        footernav: {
            type: Object,
            required: true
        }
    }
};
</script>

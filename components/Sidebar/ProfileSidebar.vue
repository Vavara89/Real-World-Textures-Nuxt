<template>
  <div class="leftsidebar profileside">
    <ul class="profile">
      <li>
        <nuxt-link to="/profile/dashboard" :class="{'active': isActive('profile')}">
          Profile
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/textures?assets=true">
          My assets
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/profile/invoices">
          My invoices
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/profile/discount">
          Discount code
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/profile/pricing">
          Pricing and plans
        </nuxt-link>
      </li>
    </ul>
    <div class="logout">
      <nuxt-link to="/">
        Log out
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import Dropdown from '@/components/Sidebar/Dropdown';
import MaterialMenu from '@/components/Sidebar/MaterialMenu';
import RefineFilter from '@/components/Sidebar/RefineFilter';
import ManufactureFilter from '@/components/Sidebar/ManufactureFilter';
import ColorFilter from '@/components/Sidebar/ColorFilter';

export default {
  name: 'ProfileSidebar',
  components: {
    Dropdown,
    MaterialMenu,
    RefineFilter,
    ManufactureFilter,
    ColorFilter
  },
  props: {
    brands: {
      type: Boolean,
      default: false
    },
    brandsdetail: {
      type: Boolean,
      default: false
    },
    profile: {
      type: Boolean,
      default: false
    },
    active: {
      type: String,
      default: 'profile'
    }
  },
  data () {
    return {};
  },
  methods: {
    isActive (type) {
      return type === this.active;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_leftSidebar.scss";

.fil {
  text-align: center;
}

.toggleOption {
  margin: 0 -1.7rem;
  margin-top: 60px;
  padding: 1rem 3.3rem;
  border: none;
  font-weight: bold;
  border-radius: 5rem;
  background-color: $color-primary-700;
  color: $color-white;
  text-transform: uppercase;
}

.profile {

  li {
    text-align: center;
    margin: 5px 0;

    a {
      width: 100%;
      padding: 20px 0;
      display: block;
      border-radius: 100px;
      text-transform: uppercase;
    }

    a:hover {
      background-color: #f2f3f9;
    }

    .active {
      background-color: #f2f3f9;
    }
  }
}
</style>

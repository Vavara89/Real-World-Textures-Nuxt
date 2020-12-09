<template>
  <div>
    <div v-if="!profile" class="leftsidebar">

      <Dropdown :options="options" />

      <div class="materials-menu">
        <MaterialMenu :list="[]" />
      </div>

      <div v-if="!brands" class="refine-filter">
        <RefineFilter :options="refineList" />
      </div>

      <div v-if="!(brands || brandsdetail)" class="brands-filter">
        <RefineFilter :options="brandsList" />
      </div>

      <div v-if="!brandsdetail" class="manufacture-filter">
        <ManufactureFilter :countries="confidents" :brands="brands" />
      </div>

      <div v-if="!(brands || brandsdetail)" class="color-filter">
        <ColorFilter :options="colorList" />
      </div>

      <div v-if="!(brands || brandsdetail)">
        <button class="clearFilter h4">Clear all Filters</button>
      </div>
      <div v-if="brands" class="fil">
        <button class="toggleOption">Clear all filters</button>
      </div>
    </div>
    <div v-if="profile" class="leftsidebar profileside">
      <ul class="profile">
        <li>
          <nuxt-link to="/" class="active"> Profile </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/"> My assets </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/"> My invoices </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/"> Discount code </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/"> Pricing and plans </nuxt-link>
        </li>
      </ul>
      <div class="logout">
        <nuxt-link to="/"> Log out </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from "@/components/Sidebar/Dropdown";
import MaterialMenu from "@/components/Sidebar/MaterialMenu";
import RefineFilter from "@/components/Sidebar/RefineFilter";
import ManufactureFilter from "@/components/Sidebar/ManufactureFilter";
import ColorFilter from "@/components/Sidebar/ColorFilter";

export default {
  name: "LeftSidebar",
  components: {
    Dropdown,
    MaterialMenu,
    RefineFilter,
    ManufactureFilter,
    ColorFilter,
  },
  props: {
    brands: {
      type: Boolean,
      default: false,
    },
    brandsdetail: {
      type: Boolean,
      default: false,
    },
    profile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      subtitle: "Services",
      title: "Tutorials",
      perex:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: false,
        },
        {
          href: "/",
          title: "Dashboard",
        },
        {
          href: "/charts",
          title: "Charts",
          child: [
            {
              href: "/charts/sublink",
              title: "Sub Link",
            },
          ],
        },
      ],
      options: [
        {
          value: "Textures",
          count: "46",
        },
        {
          value: "Models",
          count: "5",
        },
        {
          value: "HDRis",
          count: "88",
        },
        {
          value: "Brands",
          count: "13",
        },
      ],
      materials: [
        {
          title: "Artificial",
          link: "artificial",
          active: false,
        },
        {
          title: "Artworks",
          link: "artworks",
          active: false,
        },
        {
          title: "Bricks",
          link: "bricks",
          active: false,
        },
        {
          title: "Brushes",
          link: "brushes",
          active: false,
        },
        {
          title: "City surfaces",
          link: "city-surfaces",
          active: false,
        },
        {
          title: "Concrete",
          active: true,
          subitems: [
            {
              title: "Drity",
              link: "dirty",
              active: false,
            },
            {
              title: "Leaking",
              link: "leaking",
              active: false,
            },
            {
              title: "Mossy",
              link: "mossy",
              active: true,
            },
            {
              title: "New",
              link: "new",
              active: false,
            },
            {
              title: "Scratched",
              link: "scratched",
              active: false,
            },
          ],
        },
        {
          title: "Fabrics",
          link: "fabrics",
          active: false,
        },
        {
          title: "Graphics",
          link: "graphics",
          active: false,
        },
        {
          title: "Ground",
          link: "ground",
          active: false,
        },
        {
          title: "HDRs",
          link: "hdrs",
          active: false,
        },
        {
          title: "Imperfections",
          link: "imperfections",
          active: false,
        },
        {
          title: "Metal",
          link: "metal",
          active: false,
        },
        {
          title: "Nature",
          link: "nature",
          active: false,
        },
        {
          title: "Plaster",
          link: "plaster",
          active: false,
        },
        {
          title: "Rust",
          link: "rust",
          active: false,
        },
        {
          title: "Stones",
          link: "stones",
          active: false,
        },
        {
          title: "Tiles",
          link: "tiles",
          active: false,
        },
        {
          title: "Wood",
          link: "wood",
          active: false,
        },
      ],
      refineList: {
        title: "Refine By",
        items: [
          {
            title: "Free",
            link: "free",
            active: false,
          },
          {
            title: "My Assets",
            link: "assets",
            active: true,
          },
          {
            title: "Favourites",
            link: "favourites",
            active: false,
          },
        ],
      },
      brandsList: {
        title: "Brands",
        items: [],
      },
      confidents: [
        {
          value: "Asia",
        },
        {
          value: "Africa",
        },
        {
          value: "Australia",
        },
        {
          value: "Europe",
        },
        {
          value: "North America",
        },
        {
          value: "South America",
        },
      ],
      colorList: {
        title: "Color",
        items: [
          {
            name: "Brown",
            value: "#772E2E",
            active: false,
          },
          {
            name: "DarkGreen",
            value: "#385332",
            active: false,
          },
          {
            name: "SlateBlue",
            value: "#332E77",
            active: true,
          },
          {
            name: "White",
            value: "#ffffff",
            active: false,
          },
          {
            name: "LightGray",
            value: "#CFCFCF",
            active: false,
          },
        ],
      },
    };
  },
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

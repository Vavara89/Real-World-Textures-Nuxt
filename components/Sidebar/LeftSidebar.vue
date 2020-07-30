<template>
  <div class="leftsidebar">
    <Dropdown :options="options"/>
    <div class="materials-menu">
      <MaterialMenu :list="materials" />
    </div>
    <div class="refine-filter">
      <RefineFilter :options="refineList" />
    </div>
    <div class="brands-filter">
      <RefineFilter :options="brandsList" />
    </div>
    <div class="manufacture-filter">
      <ManufactureFilter :confidents="confidents"/>
    </div>
    <div class="color-filter">
      <ColorFilter :options="colorList" />
    </div>
    <div>
      <button class="clearFilter h4">Clear all Filters</button>
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
    ColorFilter
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
          title: 'Main Navigation',
          hiddenOnCollapse: false
        },
        {
          href: '/',
          title: 'Dashboard',
        },
        {
          href: '/charts',
          title: 'Charts',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link'
            }
          ]
        }
      ],
      options: [
        {
          value: "Textures",
          count: "555"
        },
        {
          value: "Models",
          count: "111"
        },
        {
          value: "HDRis",
          count: "11"
        },
        {
          value: "Brands",
          count: "11"
        },
      ],
      materials: [
        {
          title: "Artificial",
          link: "artificial",
          active: false
        },
        {
          title: "Artworks",
          link: "artworks",
          active: false
        },
        {
          title: "Bricks",
          link: "bricks",
          active: false
        },
        {
          title: "Brushes",
          link: "brushes",
          active: false
        },
        {
          title: "City surfaces",
          link: "city-surfaces",
          active: false
        },
        {
          title: "Concrete",
          active: true,
          subitems: [
            {
              title: "Drity",
              link: "dirty",
              active: false
            },
            {
              title: "Leaking",
              link: "leaking",
              active: false
            },
            {
              title: "Mossy",
              link: "mossy",
              active: true
            },
            {
              title: "New",
              link: "new",
              active: false
            },
            {
              title: "Scratched",
              link: "scratched",
              active: false
            },
          ]
        },
        {
          title: "Fabrics",
          link: "fabrics",
          active: false
        },
        {
          title: "Graphics",
          link: "graphics",
          active: false
        },
        {
          title: "Ground",
          link: "ground",
          active: false
        },
        {
          title: "HDRs",
          link: "hdrs",
          active: false
        },
        {
          title: "Imperfections",
          link: "imperfections",
          active: false
        },
        {
          title: "Metal",
          link: "metal",
          active: false
        },
        {
          title: "Nature",
          link: "nature",
          active: false
        },
        {
          title: "Plaster",
          link: "plaster",
          active: false
        },
        {
          title: "Rust",
          link: "rust",
          active: false
        },
        {
          title: "Stones",
          link: "stones",
          active: false
        },
        {
          title: "Tiles",
          link: "tiles",
          active: false
        },
        {
          title: "Wood",
          link: "wood",
          active: false
        },
      ],
      refineList: {
        title: "Refine By",
        items: [
          {
            title: "Free",
            link: "free",
            active: false
          },
          {
            title: "My Assets",
            link: "assets",
            active: true
          },
          {
            title: "Favourites",
            link: "favourites",
            active: false
          },
        ]
      },
      brandsList: {
        title: "Brands",
        items: []
      },
      confidents:[
        {
          value: "Select a Confident"
        }
      ],
      colorList: {
        title: "Color",
        items: [
          {
            name: "Brown",
            value: "#772E2E",
            active: false
          },
          {
            name: "DarkGreen",
            value: "#385332",
            active: false
          },
          {
            name: "SlateBlue",
            value: "#332E77",
            active: true
          },
          {
            name: "White",
            value: "#ffffff",
            active: false
          },
          {
            name: "LightGray",
            value: "#CFCFCF",
            active: false
          },
        ]
      }
    };
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/scss/components/_leftSidebar.scss";
</style>

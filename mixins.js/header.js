export default {
  data () {
    return {
      account: false,
      subscribe: null,
      logged: this.$auth.loggedIn,
      bookmarked: null,
      hover: false,
      catalogMenu: [
        {
          title: 'Textures',
          link: '/textures'
        },
        {
          title: 'Models',
          link: '/models'
        },
        {
          title: 'Hdris',
          link: '/hdr'
        },
        {
          title: 'Brands',
          link: '/brands'
        }
      ],
      mainMenu: [
        {
          title: 'Digitization Services',
          link: '/services'
        },
        {
          title: 'Pricing',
          link: '/pricing'
        }
      ],
      profileMenu: [
        {
          title: 'What\'s new',
          link: '/profile'
        },
        {
          title: 'Profile',
          link: '/profile/dashboard'
        },
        {
          title: 'Tutorials',
          link: '/tutorials'
        },
        {
          title: 'My assets',
          link: '/textures?assets=true'
        },
        {
          title: 'My invoices',
          link: '/profile/invoices'
        },
        {
          title: 'My discount',
          link: '/profile/discount'
        },
        {
          title: 'Pricing',
          link: '/profile/pricing'
        },
        {
          title: 'Bookmarks',
          link: '/bookmarked'
        }
      ]
    };
  },

  computed: {
    user () {
      return !!this.$auth.user && !!this.$auth.user.user
        ? this.$auth.user.user
        : null;
    },

    profile () {
      if (this.user.subscribe) {
        return this.user.subscribe.name;
      }
      return [this.user.profile.first_name, this.user.profile.last_name].join(
        ' '
      );
    },

    credits () {
      return this.profile.subscribe ? this.profile.subscribe.credits : 0;
    },

    counts: {
      get () {
        if (this.bookmarked === null) {
          this.bookmarked = this.user.profile.total_bookmarked;
        }
        return this.bookmarked;
      },

      set (value) {
        this.bookmarked = value;
      }
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setBookmarks') {
        this.counts = state.bookmarks;
      }
    });
  },
  methods: {
    getCatalogRoutes () {
      const catalogRoutes = ['textures', 'hdr', 'models', 'brands'];
      catalogRoutes.map((route) => {
        catalogRoutes.push(route + '-slug');
      });
      return catalogRoutes;
    },

    isCatalogRoute () {
      const catalogRoutes = this.getCatalogRoutes();
      return catalogRoutes.includes(this.$route.name);
    },

    trigger (state) {
      if (state !== 'on') {
        this.myToid = setTimeout(() => {
          this.hover = false;
        }, 0);
      }

      if (state === 'on') {
        clearTimeout(this.myToid);
      }
    },

    externalClick (event) {
      this.showAccount();
      this.hover = false;
    },

    showAccount (state) {
      this.account = !this.account;
      this.toggleProfileMenu();
    },

    toggleProfileMenu () {
      const element = document.getElementById('profile-menu');
      const action = element.classList.contains('active') ? 'remove' : 'add';
      document.getElementById('profile-menu').classList[action]('active');
    },
    async logout () {
      this.account = false;
      await this.$auth.logout();
      return this.$router.push({ path: '/login' });
    },

    toBookmarks () {
      return this.$router.push({ path: '/bookmarked' });
    },

    getIsLogged () {
      return (
        !!this.$auth.user &&
        !!this.$auth.user.user &&
        !!this.$auth.user.user.profile
      );
    },

    hideMenu () {
      const toggleButton = document.getElementById('menu-btn');
      if (toggleButton.checked === true) {
        toggleButton.checked = false;
      } else {
        toggleButton.checked = true;
      }
    }
  }
};

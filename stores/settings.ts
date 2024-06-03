export const useSettingsStore = defineStore("settingsStore", {
  state: () =>
    ({
      spaces: [
        {
          name: "Main",
          color: "#003529",
          icon: "",
          currentTab: 4,
          favorites: [
            {
              id: 0,
              name: "Github",
              icon: "https://github.com/",
              url: "https://github.com/",
            },
            {
              id: 1,
              name: "Youtube",
              icon: "https://youtube.com/",
              url: "https://youtube.com/",
            },
          ],
          pinned: [
            {
              id: 2,
              name: "Github Waradu",
              icon: "https://github.com/Waradu",
              url: "https://github.com/Waradu",
            },
            {
              id: 3,
              name: "Youtube @waradu",
              icon: "https://youtube.com/@waradu",
              url: "https://youtube.com/@waradu",
            },
          ],
          tabs: [
            {
              id: 4,
              name: "Waradu",
              icon: "https://waradu.dev/",
              url: "https://waradu.dev/",
            },
          ],
        },
        {
          name: "Dev",
          color: "#FF5733",
          icon: "",
          currentTab: 2,
          favorites: [
            {
              id: 0,
              name: "NuxtJS",
              icon: "https://nuxtjs.org",
              url: "https://nuxtjs.org",
            },
            {
              id: 1,
              name: "Vue.js",
              icon: "https://vuejs.org",
              url: "https://vuejs.org",
            },
          ],
          pinned: [
            {
              id: 2,
              name: "Stack Overflow",
              icon: "https://stackoverflow.com",
              url: "https://stackoverflow.com",
            },
            {
              id: 3,
              name: "MDN Web Docs",
              icon: "https://developer.mozilla.org",
              url: "https://developer.mozilla.org",
            },
          ],
          tabs: [
            {
              id: 4,
              name: "Nuxt",
              icon: "https://nuxtjs.org",
              url: "https://nuxtjs.org",
            },
          ],
        },
        {
          name: "Social",
          color: "#4287f5",
          icon: "",
          currentTab: 1,
          favorites: [
            {
              id: 0,
              name: "Facebook",
              icon: "https://facebook.com",
              url: "https://facebook.com",
            },
            {
              id: 1,
              name: "Instagram",
              icon: "https://instagram.com",
              url: "https://instagram.com",
            },
          ],
          pinned: [
            {
              id: 2,
              name: "Reddit",
              icon: "https://reddit.com",
              url: "https://reddit.com",
            },
            {
              id: 3,
              name: "Twitter",
              icon: "https://twitter.com",
              url: "https://twitter.com",
            },
          ],
          tabs: [
            {
              id: 4,
              name: "Twitter",
              icon: "https://twitter.com",
              url: "https://twitter.com",
            },
          ],
        },
      ],
      currentSpace: 0,
      sidebarWidth: 250,
      sidebarFloating: false,
    } as Settings),

  actions: {
    getCurrentSpace() {
      return this.spaces[this.currentSpace];
    },
    getSidebarWidth() {
      return this.sidebarWidth + "px";
    },
    getSidebarFloating() {
      return this.sidebarFloating;
    },
    getTabById(id: number) {
      const currentSpace = this.spaces[this.currentSpace];
      const allItems = [
        ...currentSpace.favorites,
        ...currentSpace.pinned,
        ...currentSpace.tabs,
      ];
      return allItems.find((item) => item.id === id);
    },
    setActiveSpace(id: number) {
      this.currentSpace = id;
    }
  },
});

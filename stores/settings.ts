export const useSettingsStore = defineStore("settingsStore", {
  state: () => ({
    spaces: [
      {
        name: "Main",
        color: "#003529",
        icon: "",
        pinned: [
          {
            name: "Github Waradu",
            icon: "",
            url: "https://github.com/Waradu",
          },
          {
            name: "Youtube @waradu",
            icon: "",
            url: "https://youtube.com/@waradu",
          }
        ],
        favorites: [
          {
            name: "Websites",
            content: [
              {
                name: "Github",
                icon: "",
                url: "https://github.com/",
              },
              {
                name: "Youtube",
                icon: "",
                url: "https://youtube.com/",
              }
            ]
          }
        ],
        tabs: [
          {
            name: "Waradu",
            icon: "",
            url: "https://waradu.dev/",
          }
        ],
      },
      {
        "name": "Dev",
        "color": "#FF5733",
        "icon": "",
        "pinned": [
          {
            "name": "Stack Overflow",
            "icon": "",
            "url": "https://stackoverflow.com"
          },
          {
            "name": "MDN Web Docs",
            "icon": "",
            "url": "https://developer.mozilla.org"
          }
        ],
        "favorites": [
          {
            "name": "Documentation",
            "content": [
              {
                "name": "NuxtJS",
                "icon": "",
                "url": "https://nuxtjs.org"
              },
              {
                "name": "Vue.js",
                "icon": "",
                "url": "https://vuejs.org"
              }
            ]
          }
        ],
        "tabs": [
          {
            "name": "Nuxt",
            "icon": "",
            "url": "https://nuxtjs.org"
          }
        ]
      },
      {
        "name": "Social",
        "color": "#4287f5",
        "icon": "",
        "pinned": [
          {
            "name": "Reddit",
            "icon": "",
            "url": "https://reddit.com"
          },
          {
            "name": "Twitter",
            "icon": "",
            "url": "https://twitter.com"
          }
        ],
        "favorites": [
          {
            "name": "Social Media",
            "content": [
              {
                "name": "Facebook",
                "icon": "",
                "url": "https://facebook.com"
              },
              {
                "name": "Instagram",
                "icon": "",
                "url": "https://instagram.com"
              }
            ]
          }
        ],
        "tabs": [
          {
            "name": "Twitter",
            "icon": "",
            "url": "https://twitter.com"
          }
        ]
      }
    ]
  } as Settings),
  
  actions: {
    
  }
});
<template>
  <div class="sidebar">
    <div
      class="space"
      v-for="(space, index) in store.spaces"
      :id="index.toString()"
    >
      <div class="favorites">
        <template v-for="tab in space.favorites">
          <div class="fav-tab" :class="{ active: tab.id == space.currentTab }">
            <div class="icon">
              <img
                :src="
                  'https://www.google.com/s2/favicons?sz=128&domain=' + tab.icon
                "
                v-if="tab.icon != ''"
              />
            </div>
          </div>
        </template>
      </div>
      <div class="info">
        <div class="space-name">{{ space.name }}</div>
        <div class="edit">Edit</div>
      </div>
      <div class="pinned">
        <template v-for="tab in space.pinned">
          <Tab
            :name="tab.name"
            :icon="tab.icon"
            :active="tab.id == space.currentTab"
          />
        </template>
      </div>
      <hr />
      <div class="tabs">
        <button class="newtab">+ New Tab</button>
        <template v-for="tab in space.tabs">
          <Tab
            :name="tab.name"
            :icon="tab.icon"
            :active="tab.id == space.currentTab"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSettingsStore();
const width = ref(store.getSidebarWidth());

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            const index = parseInt(id);
            store.setActiveSpace(index);
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll(".space").forEach((space) => {
    observer.observe(space);
  });
});
</script>

<style lang="scss">
.sidebar {
  min-width: v-bind(width);
  max-width: v-bind(width);
  height: 100%;
  display: flex;
  overflow: scroll;
  gap: 10px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  .space {
    scroll-snap-align: start;
    flex-direction: column;
    gap: 10px;
    min-width: v-bind(width);
    max-width: v-bind(width);

    .info {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      padding: 5px;
      padding-inline: 0;
      font-weight: 100;
      color: #ffffff50;

      .edit {
        opacity: 0;
        transition: 0.2s;
      }

      &:hover {
        .edit {
          opacity: 1;
        }
      }
    }

    .tabs {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .favorites {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      gap: 5px;

      .fav-tab {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.2s;
        background-color: #ffffff10;

        .icon {
          min-width: 20px;
          max-width: 20px;
          min-height: 20px;
          max-height: 20px;
          border-radius: 2px;

          &:not(:has(img)) {
            background-color: #ffffff10;
          }

          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
        }

        &:hover {
          background-color: #ffffff15;

          .close {
            opacity: 0.2;
          }
        }

        &.active {
          background-color: #ffffff20;
        }
      }
    }

    .pinned {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }

  hr {
    height: 1px;
    background-color: #ffffff20;
    margin-top: 5px;
    margin-bottom: 5px;
    border: none;
  }
}

.newtab {
  width: 100%;
  height: 40px;
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  background-color: transparent;
  color: #ffffff50;
  font-size: 16px;
  font-weight: 100;
  border: none;
  transition: 0.2s;
  outline: none;

  .icon {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background-color: #ffffff10;
  }

  &:hover {
    background-color: #ffffff10;
  }
}
</style>

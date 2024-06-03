<template>
  <div class="sidebar">
    <div class="space" v-for="space in store.spaces">
      <div class="favorites"></div>
      <div class="pinned">
        <template v-for="tab in space.pinned">
          <Tab :name="tab.name" :icon="tab.icon" :active="tab.id == space.currentTab" />
        </template>
      </div>
      <hr />
      <div class="tabs">
        <button class="newtab">+ New Tab</button>
        <template v-for="tab in space.tabs">
          <Tab :name="tab.name" :icon="tab.icon" :active="tab.id == space.currentTab" />
        </template>
      </div>
      {{ store.currentSpace }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSettingsStore();
const width = ref(store.getSidebarWidth());

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            const index = parseInt(id.split('-')[1], 10);
            store.setActiveSpace(index);
          }
        }
      });
    },
    {
      threshold: 0.5 // Trigger when 50% of the element is visible
    }
  );

  document.querySelectorAll('.space').forEach(space => {
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

    .tabs {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .favorites {
      display: flex;
      flex-direction: column;
      gap: 5px;
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

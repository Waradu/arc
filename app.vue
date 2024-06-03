<template>
  <div class="app">
    <Titlebar />
    <div class="content">
      <Sidebar />
      <div class="page">
        <iframe :src="store.getTabById(space.currentTab)?.url" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from "./stores/settings";

const store = useSettingsStore();
const space = ref(store.getCurrentSpace());
const color = ref(space.value.color)
</script>

<style lang="scss">
@import url("~/assets/styles/global.scss");

.app {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: v-bind(color);

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px;
    padding-top: 0;
    gap: 10px;

    .page {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      box-shadow: 0 4px 10px -1px #00000040;
      overflow: hidden;

      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

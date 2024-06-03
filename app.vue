<template>
  <Titlebar />
  <div class="content">
    <Sidebar />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from './stores/settings';

const store = useSettingsStore();
</script>

<style lang="scss">
@import url('~/assets/styles/global.scss');
</style>

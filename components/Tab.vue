<template>
  <div class="tab" :class="{ active: active }">
    <div class="icon">
      <img
        :src="'https://www.google.com/s2/favicons?sz=128&domain=' + url"
        v-if="url != ''"
      />
    </div>
    <div class="name">{{ name }}</div>
    <div class="close" @click.stop="store.removeTab(id)">X</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: String,
  url: String,
  active: Boolean,
});
const store = useSettingsStore();
</script>

<style lang="scss">
.tab {
  width: 100%;
  height: 40px;
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  line-height: normal;
  transition: 0.2s;

  .icon {
    min-width: 20px;
    max-width: 20px;
    min-height: 20px;
    max-height: 20px;
    border-radius: 2px;
    padding: 1px;

    &:not(:has(img)) {
      background-color: #ffffff10;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .name {
    line-height: 1;
    font-size: 14px;
    margin-top: 1px;
    width: 100%;
  }

  .close {
    opacity: 0;
    min-width: 20px;
    max-width: 20px;
    min-height: 20px;
    max-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
    border-radius: 2px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #00000080;
      opacity: 0.3 !important;
    }
  }

  &:hover {
    background-color: #ffffff10;

    .close {
      opacity: 0.2;
    }
  }

  &.active {
    background-color: #ffffff20;
  }
}
</style>

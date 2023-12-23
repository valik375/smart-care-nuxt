<template>
  <div class="tabs">
    <div
      v-for="(tab, index) in list"
      :key="tab.text"
      class="tab__item"
      :class="{'active': activeTabIndex === index}"
      @click="changeTab(index, tab.handler)"
    >
      <slot name="tabItem" v-bind="{ tab }" />
    </div>
    <div class="tab__item-active-bg" :class="[activeTabIndex === 0 ? 'left' : 'right']"></div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Tabs',

  props: {
    list: {
      type: Array,
      default: () => []
    },
    activeTab: {
      type: Number,
      default: 0
    }
  },

  mounted() {
    this.activeTabIndex = this.activeTab
  },

  data() {
    return {
      activeTabIndex: 0
    }
  },

  methods: {
    changeTab(index, callback) {
      this.activeTabIndex = index
      callback(index)
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.tabs {
  width: 100%;
  height: 48px;
  background: $dark-800;
  border-radius: 10px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 24px;
  z-index: 99;
}

.tab__item {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: $dark-500;
  position: relative;
  z-index: 2;
  transition: all .3s ease;
  cursor: pointer;

  &.active {
    color: $white;

    :deep(svg path) {
      fill: $white;
    }
    .convenient-control__tab-active {
      transform: translateX(0);
    }
  }

  :deep(svg path) {
    transition: all .3s ease;
  }

  &:hover {
    color: $white;

    svg path {
      fill: $white;
    }
  }
}

.tab__item-active-bg {
  position: absolute;
  width: 50%;
  z-index: 1;
  height: calc(100% - 12px);
  background: $blue;
  border-radius: 8px;
  transition: all .3s ease;

  &.right {
    transform: translateX(100%);
  }
}

</style>
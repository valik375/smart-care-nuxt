<template>
  <NuxtLink class="dropdown-link" :to="url">
    <span class="dropdown-link-icon">
      <AsyncImage :svg="icon" :alt="text"/>
    </span>
    <span>{{ text }}</span>
  </NuxtLink>
</template>

<script>
import {defineComponent} from 'vue'
import AsyncImage from "~/UI/AsyncImage.vue";

export default defineComponent({
  name: 'DropdownLink',
  components: {AsyncImage},

  props: {
    url: {
      type: String,
      default: '/'
    },
    icon: {
      type: String
    },
    text: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.dropdown-link {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;

  .dropdown-link-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: $dark-600;
    margin-right: 12px;

    img {
      width: 20px;
      height: 20px;
    }
  }

  span {
    font-size: 13px;
    font-weight: 700;
    line-height: 150%;
    color: $white;
  }
}
</style>
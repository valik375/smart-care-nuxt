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
  padding: 0 8px 0 12px;
  border-radius: 8px;
  transition: all .3s ease;

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

  &:hover {
    background: $dark-700;
  }

  @media only screen and (min-width: 760px) {

    span {
      font-size: 14px;
    }
  }
}
</style>
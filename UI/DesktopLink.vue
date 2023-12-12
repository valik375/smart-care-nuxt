<template>
  <a v-if="href" class="desktop-link" :href="href">
    <slot />
  </a>
  <NuxtLink v-else class="desktop-link" :to="url">
    <slot />
  </NuxtLink>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'DesktopLink',

  props: {
    url: {
      type: String,
      default: '/'
    },
    href: {
      type: String,
      default: ''
    },
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.desktop-link {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: $white;
  border-radius: 8px;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    background: lighten($dark-900, 10%);
  }
}
</style>
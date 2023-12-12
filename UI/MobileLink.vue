<template>
  <a v-if="href" class="mobile-link" :href="href">
    <slot />
  </a>
  <NuxtLink v-else class="mobile-link" :to="url">
    <slot />
  </NuxtLink>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MobileLink',

  props: {
    url: {
      type: String,
      default: '/'
    },
    text: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.mobile-link {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: $white;
  height: 48px;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid $dark-700;
}
</style>
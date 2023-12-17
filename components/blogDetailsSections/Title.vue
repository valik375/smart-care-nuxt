<template>
  <h2 class="title">{{ section.title }}</h2>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Title',

  components: {

  },

  props: {
    section: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.title {
  font-size: 22px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.22px;
  color: $white;
  margin-top: 40px;
}
</style>
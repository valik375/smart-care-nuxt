<template>
  <h3 class="subtitle">{{ section.title }}</h3>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Subtitle',

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

.subtitle {
  font-size: 19px;
  font-weight: 700;
  line-height: 150%;
  color: $white;
  margin-top: 32px;

  @media only screen and (min-width: 1160px) {
    margin-top: 24px;
  }
}
</style>
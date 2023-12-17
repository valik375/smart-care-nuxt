<template>
  <p class="text-section text">{{ section.text }}</p>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Text',

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

.text-section {
  font-size: 15px;
  margin-top: 16px;

  @media only screen and (min-width: 1160px) {
    margin-top: 24px;
  }
}
</style>
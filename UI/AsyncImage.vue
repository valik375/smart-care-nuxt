<template>
  <img v-if="url && (svg || img)" :src="url" :alt="alt">
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'AsyncImage',

  props: {
    svg: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },

  async created() {
    if (this.svg) {
      const image = await import(`~/assets/${this.svg}.svg`)
      this.url = await image.default
    }
    if (this.img) {
      const image = await import(`~/assets/${this.img}.png`)
      this.url = await image.default
    }
  },

  data() {
    return {
      url: ''
    }
  }
})
</script>
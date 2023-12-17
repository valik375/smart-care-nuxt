<template>
  <div class="badge" :class="type">
    <AsyncImage v-if="icon" :svg="icon" alt="Icon" />
<!--    <img v-if="url" :src="url" alt="">-->
    <span>{{ text }}</span>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import AsyncImage from "~/UI/AsyncImage.vue";

export default defineComponent({
  name: 'Badge',
  components: {AsyncImage},

  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },

  // async created() {
  //   if (this.icon) {
  //     const image = await import(`~/assets/${this.icon}.svg`)
  //     this.url = await image.default
  //   }
  // },
  //
  // data() {
  //   return {
  //     url: ''
  //   }
  // }
})
</script>

<style scoped lang="scss">
@import 'vars';

.badge {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $dark-600;
  padding: 4px 10px;
  border-radius: 100px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  span {
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    color: $white;
  }

  &.blue {
    background: $blue;
  }
}
</style>
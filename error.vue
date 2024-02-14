<template>
  <div class="error">
    <div class="error__wrapper">
      <div class="error__status">{{ error.statusCode }}</div>
      <div class="error__message">{{ error.message }}</div>
      <Button class="header__nav-button blue" @click="$router.push('/')">На головну</Button>
    </div>
  </div>
</template>

<script>

import {defineComponent} from 'vue'
import Button from "~/UI/Button.vue";

export default defineComponent({
  components: {Button},
  props: ['error']
})
</script>

<style lang="scss" scoped>
.error {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.error__wrapper {
  margin: 0 auto;
}
.error__status {
  font-size: 84px;
  font-weight: 600;
  color: #fff;
}
.error__message {
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 10px;
  opacity: .6;
}
</style>


<template>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Loader',
})
</script>

<style scoped lang="scss">
@import 'vars';

.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999999;
  background: #17181c;
  transition: all .5s ease;
}
.loader.hidden {
  opacity: 0;
  pointer-events: none;
}
.spinner {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.spinner::before,
.spinner:after {
  content: "";
  position: absolute;
  border-radius: inherit;
}
.spinner:before {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #5D75EF 0%, #17181c 100%);
  animation: spin8932 .5s infinite linear;
}
.spinner:after {
  width: 85%;
  height: 85%;
  background-color: #17181c;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@keyframes spin8932 {
  to {
    transform: rotate(360deg);
  }
}
</style>
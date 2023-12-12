<template>
  <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.5355702184384!2d30.6525356!3d50.393855699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c45b25de7de9%3A0x57a59fa1c4a45b9d!2z0YPQuy4g0JLQuNGI0L3Rj9C60L7QstGB0LrQsNGPLCAyLCDQmtC40LXQsiwg0KPQutGA0LDQuNC90LAsIDAyMTQw!5e0!3m2!1sru!2spl!4v1701283037952!5m2!1sru!2spl" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Map'
})
</script>

<style scoped lang="scss">
@import 'vars';

.map {
  width: 100%;
  height: 430px;
  border-radius: 16px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    filter: grayscale(100%) invert(100%) contrast(80%);
  }
}
</style>
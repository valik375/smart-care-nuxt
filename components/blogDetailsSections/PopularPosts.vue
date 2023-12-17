<template>
  <div class="popular-posts">
    <div class="popular-posts__title">Популярні статті</div>
    <div class="popular-posts__list">
      <NuxtLink to="/" class="popular-posts__item">
        <img src="~/assets/about-us-team-3.png" alt="Post image">
        <span>Еволюція зручності: Як системи розумного будинку впливають на наш побут</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'PopularPosts',
})
</script>

<style scoped lang="scss">
@import 'vars';

.popular-posts {
  padding-top: 32px;
}

.popular-posts__title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 20px;
}

.popular-posts__item {
  display: flex;
  align-items: center;
  gap: 14px;

  img {
    min-width: 72px;
    height: 48px;
    object-fit: cover;
    border: 1px solid $dark-600;
    border-radius: 8px;
    overflow: hidden;
  }

  span {
    font-size: 13px;
    font-weight: 700;
    line-height: 155%;
    color: $white;
  }
}
</style>
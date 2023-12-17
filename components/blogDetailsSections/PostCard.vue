<template>
  <article class="post-card__item card">
    <NuxtLink to="/blog/test-page">
      <div class="post-card__item-image">
        <img src="~/assets/anti-flood-image.png" alt="Blog item">
      </div>
      <div class="post-card__date text">12 грудня, 2023</div>
      <div class="post-card__title">Скільки можна заощадити на комунальних платіжках завдяки смарт будинку?</div>
      <div class="post-card__author">
        <div class="post-card__author-left">
          <img src="~/assets/about-us-team-3.png" alt="Person image">
        </div>
        <div class="post-card__author-right">
          <div class="post-card__author-name">Кирило Важинський</div>
          <div class="post-card__author-position text">Головний майстер монтажу Smart Care</div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'PostCard',
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
.post-card__item {

  @media only screen and (min-width: 760px) {
    width: calc(50% - 8px);
  }

  @media only screen and (min-width: 1160px) {
    width: calc(33% - 8px);
  }
}

.post-card__item-image {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.post-card__date {
  font-size: 13px;
  margin-bottom: 8px;
}

.post-card__title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 16px;
}

.post-card__author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.post-card__author-left {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.post-card__author-name {
  font-size: 14px;
  font-weight: 500;
  line-height: 165%;
  color: $white;
}

.post-card__author-position {
  font-size: 13px;
}
</style>
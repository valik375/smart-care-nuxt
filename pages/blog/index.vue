<template>
  <section class="blog-banner">
    <div class="blog-banner__container container">
      <BreadCrumbs :list="[{ name: 'Блог', path: '/blog' }]"/>
      <div class="blog-banner__wrapper">
        <h1 class="blog-banner__title">Блог і новини</h1>
        <p class="blog-banner__text text">Дізнавайтеся про найсвіжіші новини та корисні поради. Ми пропонуємо глибокі
          аналізи, цікаві статті та найкращі практики в галузі smart home.</p>
      </div>

      <div class="blog-list__wrapper post-list">

        <article class="blog-list__item post-list__item card">
          <NuxtLink to="/blog/test-page">
            <div class="post-list__item-image">
              <img src="~/assets/anti-flood-image.png" alt="Blog item">
            </div>
            <div class="post-list__date text">12 грудня, 2023</div>
            <div class="post-list__title">Скільки можна заощадити на комунальних платіжках завдяки смарт будинку?</div>
            <div class="post-list__author">
              <div class="post-list__author-left">
                <img src="~/assets/about-us-team-3.png" alt="Person image">
              </div>
              <div class="post-list__author-right">
                <div class="post-list__author-name">Кирило Важинський</div>
                <div class="post-list__author-position text">Головний майстер монтажу Smart Care</div>
              </div>
            </div>
          </NuxtLink>
        </article>

      </div>
    </div>
  </section>
  <BuildSystemSection />
</template>

<script>
import {defineComponent} from 'vue'
import BuildSystemSection from "~/components/indexSections/BuildSystemSection.vue";

export default defineComponent({
  name: 'Blog',

  components: {
    BuildSystemSection

  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.blog-banner {
  padding-top: 100px;
  padding-bottom: 40px;

  @media only screen and (min-width: 760px) {
    padding-bottom: 100px;
  }
  @media only screen and (min-width: 1160px) {
    padding-bottom: 150px;
    padding-top: 150px;
  }
}

.blog-banner__wrapper {
  margin-top: 20px;
  text-align: center;

  @media only screen and (min-width: 760px) {
    width: 100%;
    max-width: 610px;
    margin: 20px auto 0;
  }
}

.blog-banner__title {
  font-size: 26px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.52px;
  color: $white;
  margin-bottom: 12px;
}

.blog-banner__text {
  font-size: 15px;
}

.blog-list__wrapper .post-list__item {

  @media only screen and (min-width: 1160px) {
    width: calc(33% - 8px);

    &:nth-child(6n), &:first-child {
      width: calc(66% - 8px);

      .blog-list__item-image {
        height: 200px;
      }

      .blog-list__title {
        min-height: 60px;
      }
    }
  }
}


.post-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;

  @media only screen and (min-width: 760px) {
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media only screen and (min-width: 760px) {
    padding-top: 48px;
  }
}

.post-list__item {
  border: 1px solid transparent;
  transition: all .3s ease;

  &:hover {
    border-color: $dark-550;
    background: $dark-700;
  }

  @media only screen and (min-width: 760px) {
    width: calc(50% - 8px);
  }

  @media only screen and (min-width: 1160px) {
    width: calc(33% - 8px);
  }
}

.post-list__item-image {
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

.post-list__date {
  font-size: 13px;
  margin-bottom: 8px;
}

.post-list__title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 16px;
}

.post-list__author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.post-list__author-left {
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

.post-list__author-name {
  font-size: 14px;
  font-weight: 500;
  line-height: 165%;
  color: $white;
}

.post-list__author-position {
  font-size: 13px;
}
</style>
<template>
  <div class="banner">

    <BreadCrumbs
      :list="[{ name: 'Блог', path: '/blog'}, { name: section.title, path: ''}]"
    />

    <div class="banner__title">{{ section.title }}</div>
    <div class="banner__info">
      <div class="banner__date text">{{ section.date }}</div>
      <div class="banner__author">
        <AsyncImage class="banner__author-image" :img="section.authorImg" alt="Banner Image" />
        <div class="banner__author-info">
          <div class="banner__author-name">{{ section.authorName }}</div>
          <div class="banner__author-position text">{{ section.authorPosition }}</div>
        </div>
      </div>
    </div>
    <div class="banner__image">
      <AsyncImage :img="section.authorImg" alt="Banner Image" />
    </div>
    <div class="banner__text text">{{ section.text }}</div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";
import CardDropdown from "~/UI/CardAccordion.vue";
import Button from "~/UI/Button.vue";
import AsyncImage from "~/UI/AsyncImage.vue";

export default defineComponent({
  name: 'Banner',

  components: {
    AsyncImage,
    CardDropdown,
    SectionTitle,
    Button
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

.banner__title {
  font-size: 26px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.52px;
  color: $white;
  margin-bottom: 8px;
  margin-top: 20px;

  @media only screen and (min-width: 1160px) {
    font-size: 40px;
    margin-bottom: 16px;
  }
}

.banner__info {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-bottom: 40px;
  }
}

.banner__date {
  font-size: 13px;
  margin-bottom: 12px;

  @media only screen and (min-width: 1160px) {
    margin-bottom: 0;
  }
}

.banner__author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  @media only screen and (min-width: 1160px) {
    margin-bottom: 0;
  }
}

.banner__author-image {
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 100px;
  overflow: hidden;
}

.banner__author-name {
  font-size: 14px;
  font-weight: 500;
  line-height: 165%;
  color: $white;
}

.banner__author-position {
  font-size: 13px;
}

.banner__image {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 760px) {
    height: 300px;
  }

  @media only screen and (min-width: 1160px) {
    height: 400px;
    margin-bottom: 40px;
  }
}

.banner__text {
  font-size: 15px;
}
</style>
<template>
  <div class="image-template card">
    <div class="image-template__image">
      <AsyncImage :img="section.img" alt="Image"/>
    </div>
    <div class="image-template__body">
      <div class="image-template__content">
        <div class="image-template__title">Девайс на фото</div>
        <div class="image-template__name text">{{ section.imgText }}</div>
      </div>
      <button class="image-template__button button blue" type="button">
        <span>Замовити функцію з цим девайсом</span>
        <img src="~/assets/white-arrow-right.svg" alt="Arrow Icon">
      </button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import AsyncImage from "~/UI/AsyncImage.vue";

export default defineComponent({
  name: 'Image',

  components: {
    AsyncImage

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

.image-template {
  margin-top: 24px;

  @media only screen and (min-width: 760px) {
    padding: 32px;
  }
}

.image-template__image {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 760px) {
    height: 260px;
  }

  @media only screen and (min-width: 1160px) {
    height: 400px;
    margin-bottom: 20px;
  }
}

.image-template__body {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.image-template__button {

  @media only screen and (min-width: 1160px) {
    width: auto;
  }
}

.image-template__title {
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  color: $white;
}

.image-template__name {
  font-size: 14px;
  margin-bottom: 12px;

  @media only screen and (min-width: 1160px) {
    margin-bottom: 0;
  }
}

.image-template__button {
  font-size: 13px;
}
</style>
<template>
  <section class="choose">
    <div class="choose__container container">
      <div class="choose__left">
        <div class="choose__title-wrapper section-title-wrapper">
          <h3 class="choose__subtitle section-subtitle">як обрати</h3>
          <h2 class="choose__subtitle section-title">{{ section.title }}</h2>
        </div>
        <p class="choose__text text">{{ section.text }}</p>
        <button class="choose__button button blue" @click="toggleConsultationModal">
          <span>Замовити консультацію</span>
          <img src="~/assets/white-arrow-right.svg" alt="Arrow Icon">
        </button>
      </div>
      <div class="choose__right">
        <img class="choose__house-image" src="~/assets/choose-house.png" alt="Choose Image" />
        <div class="choose__icon">
          <AsyncImage :svg="section?.icon" alt="Choose Image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AsyncImage from "~/UI/AsyncImage.vue";

export default defineComponent({
  name: 'Choose',
  components: {AsyncImage},

  inject: ['toggleConsultationModal'],
  
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

.choose {
  padding-top: 50px;

  @media only screen and (min-width: 760px) {
    padding-top: 100px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.choose__container {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
  }
}

.choose__left {
  margin-bottom: 40px;

  @media only screen and (min-width: 1160px) {
    width: calc(100% - 500px);
    margin-bottom: 0;
  }
}

.choose__text {
  font-size: 15px;
  margin-bottom: 24px;
}

.choose__button {
  @media only screen and (min-width: 1160px) {
    width: fit-content;
  }
}

.choose__right {
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url('~/assets/two-column-section-bg.png');
  background-size: cover;
  overflow: hidden;
  border-radius: 20px;
  padding: 20px;

  .choose__house-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .choose__icon {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    background: $dark-600;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    box-shadow: 0 0 100px 30px rgba(0, 0, 0, 0.87);

    img {
      width: 24px;
      height: 24px;
    }
  }

  @media only screen and (min-width: 760px) {
    height: 320px;

    .choose__icon {
      width: 72px;
      height: 72px;

      img {
        width: 32px;
        height: 32px;
      }
    }
  }

  @media only screen and (min-width: 1160px) {
    width: 500px;
    height: 440px;
  }
}
</style>
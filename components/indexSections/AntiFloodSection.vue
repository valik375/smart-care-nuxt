<template>
  <section class="anti-flood">
    <div class="anti-flood__container container">
      <div class="anti-flood__card card">
        <div class="anti-flood__info">
          <SectionTitle
            class="anti-flood__title-wrapper"
            subtitle="Інноваційна система антипотопу"
            title="Не допустіть потопу, попередьте його"
            text="Новітня розробка від Tuya керується віддалено через телефон, а також працює зі
            сценаріями автоматизації. Розумний кран попередить потоп, зупинивши подачу води, якщо тиск у системі вище норми,
            або надішле вам повідомлення, якщо води у системі немає."
          />
          <button class="anti-flood__button button blue" @click="toggleConsultationModal">
            <span>Я хочу таку функцію</span>
            <img src="~/assets/white-arrow-right.svg" alt="Arrow Icon">
          </button>
        </div>
        <div class="anti-flood__image">
          <img loading="lazy" src="~/assets/anti-flood-image.png" alt="anti flood image">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";

export default defineComponent({
  name: 'AntiFloodSection',

  components: {SectionTitle},

  inject: ['toggleConsultationModal']
})
</script>

<style scoped lang="scss">
@import 'vars';

.anti-flood {
  padding-top: 48px;

  @media only screen and (min-width: 760px) {
    padding-top: 90px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.anti-flood__title-wrapper {
  margin-bottom: 20px;
}

.anti-flood__card {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 56px;
  }
}

.anti-flood__info {

  @media only screen and (min-width: 1160px) {
    width: calc(100% - 476px);
  }
}

.anti-flood__text {
  margin-bottom: 32px;
}

.anti-flood__button {

  @media only screen and (min-width: 1160px) {
    max-width: 220px;
  }
}

.anti-flood__image {
  width: 100%;
  max-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 1160px) {
    width: 376px;
    height: 305px;
    margin-top: 0;
  }
}
</style>
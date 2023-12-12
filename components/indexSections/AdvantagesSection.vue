<template>
  <section class="advantages">
    <div class="advantages__wrapper bordered-top-section">
      <div class="advantages__container container">

        <div class="advantages__info">
          <div class="advantages__title-wrapper section-title-wrapper">
            <h3 class="advantages__subtitle section-subtitle">Наші переваги</h3>
            <h2 class="advantages__title section-title">
              Крокуйте у майбутнє разом з нами
            </h2>
          </div>
          <p class="advantages__text text">Наша мета - бути вашим надійним провідником у світі інноваційних
            технологій розумного будинку.</p>
        </div>
        <AboutCardList class="advantages__list" :list="cardList"/>
        <NuxtLink to="/calculator" class="advantages__button button blue">
          Розрахувати вартість
        </NuxtLink>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AboutCardList from "~/UI/AboutCardList.vue";
import whiteFast from '~/assets/white-fast.svg'
import whiteHeadphones from '~/assets/white-headphones.svg'
import whiteMoneyLabel from '~/assets/white-money-label.svg'

export default defineComponent({
  name: 'AdvantagesSection',

  components: {
    AboutCardList
  },

  data() {
    return {
      cardList: [
        {
          icon: whiteFast,
          title: 'Швидкість',
          badge: 'До 7 днів',
          text: 'Наші проекти займають значно менше часу, порівняно з провідними системами, адже ми уникаємо затяжних робіт з прокладання кабелів.',
        },
        {
          icon: whiteMoneyLabel,
          title: 'Приємна ціна, яка залежить від:',
          badge: 'Ціни від 1500$',
          text: `
            <p class="card-text text bullet-text">обраних функцій безпеки та комфорту;</p>
            <p class="card-text text bullet-text">кількості приміщень;</p>
            <p class="card-text text bullet-text">площі приміщень.</p>
          `
        },
        {
          icon: whiteHeadphones,
          title: 'Консультація та підтримка',
          badge: 'Безкоштовно',
          text: 'Виконаємо усе необхідне за вас! Ми на зв’язку після встановлення та завжди готові допомогти адаптувати функції під ваші актуальні потреби.',
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.advantages {
  background: $dark-950;
}

.advantages__wrapper {
  padding-top: 48px;
  background: $dark-900;

  @media only screen and (min-width: 760px) {
    padding-top: 90px;
  }

  @media only screen and (min-width: 1160px) {
    border-radius: 40px 40px 0 0;
  }
}

.advantages__info {
  text-align: center;
  margin-bottom: 32px;

  @media only screen and (min-width: 1160px) {
    width: 100%;
    max-width: 616px;
    margin: 0 auto 64px;
  }
}

.advantages__list {
  @media only screen and (min-width: 1160px) {
    align-items: stretch;
  }
}

.advantages__item {
  @media only screen and (min-width: 1160px) {
    &:nth-child(2) {
      order: 3;
    }
    &:last-child {
      order: 2;
    }
  }
}

.advantages__button {
  margin-top: 24px;

  @media only screen and (min-width: 1160px) {
    max-width: 230px;
    margin: 24px auto 0;
  }
}
</style>
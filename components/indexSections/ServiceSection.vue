<template>
  <section class="service">
    <div class="service__container bg-lines">
      <div class="service__info container">
        <SectionTitle
          class="service__title-wrapper"
          subtitle="Сервіс"
          title="Підберемо, доставимо і встановимо все обладнання під ваші цілі <span>всього до 7 днів</span>"
          text="Залиште всі ваші потреби на наших плечах! Просто зателефонуйте, і ми допоможемо обрати найкраще обладнання, забезпечимо його безкоштовну доставку та професійно втілимо усі ваші бажання під час установки."
        />
      </div>
      <AboutCardList class="advantages__list container" :list="list"/>

      <img loading="lazy" class="bg-lines__image desktop" src="~/assets/service-bg-lines-desktop.png" alt="Background lines">
      <img loading="lazy" class="bg-lines__image mobile" src="~/assets/service-bg-lines-mobile.png" alt="Background lines">
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";
import whiteMessage from "~/assets/white-message.svg";
import whiteTools from "~/assets/white-tools.svg";
import whiteHeadphones from "~/assets/white-headphones.svg";
import Badge from "~/UI/Badge.vue";
import AboutCardList from "~/UI/AboutCardList.vue";

export default defineComponent({
  name: 'ServiceSection',

  components: {
    AboutCardList,
    Badge,
    SectionTitle
  },

  data() {
    return {
      list: [
        {
          icon: whiteMessage,
          badge: 'Надійно',
          title: 'Прозорість умов',
          text: 'Ми пропонуємо гнучку систему оплати за наші послуги, де 30% оплати вноситься перед початком робіт, а ' +
            'решта 70% - після їх виконання, відповідно до умов договору.',
        },
        {
          icon: whiteTools,
          badge: 'Встановлюємо',
          title: 'Втілюємо протягом до 7 днів',
          text: 'Ми гарантуємо якісне встановлення всього за 5 годин на добу протягом 7-ми зручних для вас днів. За ' +
            'цей час ви отримаєте проєктування та тестування всіх функцій.',
        },
        {
          icon: whiteHeadphones,
          badge: 'Допомагаємо 24/7',
          title: 'Підтримуємо на кожному кроці',
          text: 'Служба підтримки надає сервісну допомогу  протягом усього терміну експлуатації системи. Зв\'яжіться з ' +
            'нами і ми вирішимо будь-які завдання та виконаємо за вас усі необхідні дії!',
        },
      ]
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';


.service {
  padding-top: 48px;

  @media only screen and (min-width: 760px) {
    padding-top: 90px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.service__info {
  margin-bottom: 32px;
  text-align: center;

  @media only screen and (min-width: 760px) {
    width: 100%;
    max-width: 616px;
    margin: 0 auto 64px;
    padding: 0;
  }
}

.service__title-wrapper, .service__text {
  position: relative;
  z-index: 2;
}

.service__title {

  @media only screen and (min-width: 760px) {
    font-size: 28px !important;
  }
}
</style>

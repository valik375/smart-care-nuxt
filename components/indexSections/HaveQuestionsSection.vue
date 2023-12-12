<template>
  <section class="have-questions">
    <div class="have-questions__bordered bordered-bottom-section">
      <div class="have-questions__container container">

        <div class="have-questions__wrapper">
          <div class="have-questions__card card">
            <h2 class="have-questions__title">Залишились питання?</h2>
            <p class="have-questions__text text">Якщо ви не знайшли відповіді на своє питання - зв'яжіться з
              нами для детальної консультації. Ми завжді раді допомогти!</p>
            <button class="have-questions__button button blue" @click="toggleConsultationModal">
              <span>Безкоштовна консультація</span>
              <img src="~/assets/white-arrow-right.svg" alt="Arrow Icon">
            </button>
            <div>
              <img loading="lazy" class="have-questions__card-image" src="~/assets/have-questions-price.png" alt="Cart with text">
              <img loading="lazy" class="have-questions__card-image" src="~/assets/have-questions-price.png" alt="Cart with text">
              <img loading="lazy" class="have-questions__card-image" src="~/assets/have-questions-price.png" alt="Cart with text">
              <img loading="lazy" class="have-questions__card-image" src="~/assets/have-questions-price.png" alt="Cart with text">
              <img loading="lazy" class="have-questions__card-image" src="~/assets/have-questions-time.png" alt="Cart with text">
              <img loading="lazy" class="have-questions__card-image" src="~/assets/have-questions-time.png" alt="Cart with text">
            </div>
          </div>

          <div class="have-questions__dropdown-list dropdown-list">
            <CardDropdown
              active
              index="01"
              title="Так скільки коштує?"
              text="На нашому сайті ви знайдете зручний калькулятор, який дозволяє приблизно розрахувати вартість для вашої
                конкретної ситуації. Однак кожен розумний будинок унікальний, тому точніше вам підкаже наш майстер під
                час безкоштовної консультації. Але ми впевнені, що ціна вас приємно здивує, адже розумний будинок
                це не так дорого, як всі звикли вважати!"
            />
            <CardDropdown
              index="02"
              title="Скільки часу займає встановлення?"
              text="200+ наших клієнтів насолоджується розумним будинком вже через 3 дні після замовлення. Приєднуйтесь до
                ексклюзивної спільноти задоволених клієнтів всього в 3 кроки: 1. Подзвоніть нам для безкоштовної
                консультації та отримайте зрозумілі відповіді. 2. Отримайте рекомендації від нашого майстра при огляді об’єкту.
                3. Довірте спеціалістам професійне встановлення та якісне налаштування всіх функцій системи."
            />
            <CardDropdown
              index="03"
              title="Чи можу я розширити свою систему розумного будинку у майбутньому?"
              text="Так, система бездротового розумного будинку зроблена з урахуванням масштабованості. Ви зможете
                додавати нові пристрої, різні сценарії для ваших приладів та функціональні можливостів майбутньому."
            />
            <CardDropdown
              index="04"
              title="Чи складно встановити розумний будинок?"
              text="Бездротова технологія значно спрощує процес встановлення, оскільки відсутні кабелі, які потребують складної
                прокладки. Ви зможете швидко насолоджуватися всіма перевагами розумного будинку без
                зайвих клопотів за короткий проміжок часу."
            />
            <CardDropdown
              index="05"
              title="Які пристрої можна інтегрувати в розумний будинок?"
              text="Майже всі, що працюють, використовуючи електроенергію."
            />
            <CardDropdown
              index="06"
              title="Чи можу я інтегрувати розумний будинок, не купуючи нову техніку?"
              text="В більшості випадків - так. Практично всі сучасні пристрої мають можливість під’єднання до бездротового
                розумного будинку, саме в цьому полягає перевага цієї системи. Проте умови бувають різні, наш майстер
                оцінить вашу ситуацію та дасть остаточну відповідь під час консультації."
            />
            <CardDropdown
              index="07"
              title="Які можливості керування доступні для розумного будинку?"
              text="Ви зможете зручно керувати вашим розумним будинком через мобільний додаток на смартфоні або планшеті,
                а також за допомогою голосових помічників, що забезпечить комфорт у кожному куточку вашої оселі."
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CardDropdown from "~/UI/CardAccordion.vue";

export default defineComponent({
  name: 'HaveQuestionsSection',

  components: {CardDropdown},

  inject: ['toggleConsultationModal']
})
</script>

<style scoped lang="scss">
@import 'vars';

.have-questions {
  background: $dark-950;
}

.have-questions__bordered {
  padding: 48px 0;
  background: $dark-900;

  @media only screen and (min-width: 760px) {
    padding: 90px 0;
  }

  @media only screen and (min-width: 1160px) {
    padding: 160px 0;
  }
}

.have-questions__wrapper {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}

.have-questions__card {
  margin-bottom: 32px;
  padding-bottom: 111px;
  position: relative;

  @media only screen and (min-width: 1160px) {
    width: 480px;
    padding-bottom: 162px;
  }
}


.have-questions__title {
  font-size: 22px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.22px;
  color: $white;
  margin-bottom: 4px;
}

.have-questions__text {
  font-size: 15px;
  margin-bottom: 24px;
}

.have-questions__button {
  max-width: 260px;
}

.have-questions__card-image {
  position: absolute;
  height: 23px;

  &:nth-child(1) {
    left: -11px;
    bottom: 49px;
    transform: rotate(47deg);
    z-index: 2;
  }

  &:nth-child(2) {
    left: 61px;
    bottom: 47px;
    transform: rotate(-17deg);
  }

  &:nth-child(3) {
    left: 150px;
    bottom: 2px;
    transform: rotate(0);
  }

  &:nth-child(4) {
    left: 255px;
    bottom: 110px;
    transform: rotate(-76deg);
  }

  &:nth-child(5) {
    left: 102px;
    bottom: 33px;
    transform: rotate(-22deg);
  }

  &:nth-child(6) {
    left: 222px;
    bottom: 58px;
    transform: rotate(48deg);
  }

  @media only screen and (min-width: 1160px) {
    height: 34px;

    &:nth-child(2) {
      left: 102px;
      bottom: 60px;
    }

    &:nth-child(3) {
      left: 236px;
    }

    &:nth-child(4) {
      right: -41px;
      left: auto;
      bottom: 150px;
    }

    &:nth-child(5) {
      left: 154px;
      bottom: 38px;
    }

    &:nth-child(6) {
      right: 10px;
      left: auto;
      bottom: 57px;
    }
  }
}

.have-questions__dropdown-list {

  @media only screen and (min-width: 1160px) {
    width: calc(100% - 530px);
  }
}
</style>
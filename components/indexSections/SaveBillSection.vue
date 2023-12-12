<template>
  <section class="save-bills">
    <div class="save-bills__container container two-column-section">

      <div class="save-bills__left column-left">
        <div class="column-image">
          <img loading="lazy" src="~/assets/save-bills-image.png" alt="Phone with Mobile App">
        </div>
      </div>

      <div class="save-bills__right column-right">
        <div class="save-bills__info">
          <SectionTitle
            class="save-bills__title-wrapper"
            subtitle="Заощаджуйте на рахунках"
            title="Контролюйте споживання електроенергії, води та газу"
            text="Бездротовий розумний будинок - це нова ера в сфері розумних систем,  де комфорт,
            безпека та енергоефективність поєднуються в одному рішенні. Відкрийте для себе магію технологій без зайвих
            проводів і обмежень."
          />
        </div>
        <div class="save-bills__image column-image">
          <img loading="lazy" src="~/assets/save-bills-image.png" alt="Phone with Mobile App">
        </div>

        <div class="save-bills__dropdown-list dropdown-list">
          <CardDropdown
            active
            index="01"
            title="Заощаджуйте до 40% на рахунках за електроенергію"
            text="За допомогою додатку ви зможете ідентифікувати енергозатратні пристрої та оптимізувати їх роботу,
              розподіляючи енергію в найефективніший спосіб. Це дозволить суттєво знизити витрати, що сприятиме
              економії вашого бюджету."
          />
          <CardDropdown
            index="02"
            title="Окупіть систему вже через 2 роки"
            text="Розумний будинок - це ще й вигідна інвестиція! Заощадження, отримані завдяки оптимізації споживання,
              дозволять вам швидко окупити витрати на систему. Ви отримаєте не тільки комфорт та безпеку, але
              й вигоду фінансової раціональності."
          />
          <CardDropdown
            index="03"
            title="Отримуйте персоналізовані звіти та рекомендації"
            text="Додаток надає персоналізовані рекомендації щодо оптимізації споживання та зменшення витрат. Ви зможете
              встановлювати цілі, відстежувати свій прогрес та отримувати цінні поради щодо зниження споживання ресурсів."
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";
import CardDropdown from "~/UI/CardAccordion.vue";

export default defineComponent({
  name: 'SaveBillSection',
  components: {CardDropdown, SectionTitle}
})
</script>

<style scoped lang="scss">
@import 'vars';

.save-bills {
  padding-top: 48px;

  @media only screen and (min-width: 760px) {
    padding-top: 90px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.save-bills__container {
  @media only screen and (min-width: 1160px) {
    flex-direction: row-reverse;
  }
}

.save-bills__info {
  margin-bottom: 32px;
}

.save-bills__left {

  @media only screen and (min-width: 1160px) {
    height: 590px;
  }
}
</style>
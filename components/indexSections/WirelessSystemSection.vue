<template>
  <section class="wireless-system">
    <div class="wireless-system__container container two-column-section">

      <div class="wireless-system__left column-left">
        <div class="column-image">
          <img loading="lazy" src="~/assets/wireless-system-image.png" alt="Card with wireless signal">
        </div>
      </div>

      <div class="wireless-system__right column-right">
        <div class="wireless-system__info">
          <SectionTitle
            class="wireless-system__title-wrapper"
            subtitle="Бездротова система"
            title="Переваги системи бездротового розумного будинку"
            text="Бездротовий розумний будинок - це нова ера в сфері розумних систем,  де комфорт,
            безпека та енергоефективність поєднуються в одному рішенні. Відкрийте для себе магію технологій без зайвих
            проводів і обмежень."
          />
        </div>
        <div class="wireless-system__image column-image">
          <img loading="lazy" src="~/assets/wireless-system-image.png" alt="Card with wireless signal">
        </div>

        <div class="wireless-system__dropdown-list dropdown-list">
          <CardDropdown
            active
            index="01"
            title="Швидка та легка інтеграція на будь-якому етапі"
            text="Система бездротового розумного будинку дозволяє здійснювати просту інсталяцію незалежно від типу приміщення,
              без зайвих дротів та шнурів, не потребуючи втручання у готовий ремонт будівлі, залишаючи стіни цілими."
          />
          <CardDropdown
            index="02"
            title="Приваблива вартість"
            text="Порівняно з дротовими системами, бездротовий розумний будинок пропонує економічність завдяки меншій
              кількості необхідного обладнання та зменшеному обсягу робіт. Це дозволяє вам отримати передові технології без переплат."
          />
          <CardDropdown
            index="03"
            title="Легке інтегрування нових або додаткових елементів"
            text="Передові технології забезпечують швидке і просте інтегрування будь-яких нових пристроїв, дозволяючи
              розширювати функціонал вашого будинку та насолоджуватися останніми інноваціями у світі розумних пристроїв."
          />
          <CardDropdown
            index="04"
            title="Керування без Інтернету"
            text="Керування без інтернету у бездротовому розумному будинку можливе завдяки локальним мережам і технологіям,
              що дозволяють пристроям безперебійно взаємодіяти один з одним."
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
  name: 'WirelessSystemSection',
  components: {CardDropdown, SectionTitle}
})
</script>

<style scoped lang="scss">
@import 'vars';

.wireless-system {
  padding-top: 48px;

  @media only screen and (min-width: 760px) {
    padding-top: 90px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.wireless-system__info {
  margin-bottom: 32px;
}

.wireless-system__left .column-image {
  @media only screen and (min-width: 1160px) {
    height: 678px;
  }
}
</style>
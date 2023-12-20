<template>
  <section class="about-us-history">
    <div class="bordered-bottom-section">
      <div class="about-us-history__container container">
      <div class="about-us-history__info">
        <SectionTitle
          subtitle="Наша історія"
          title="Як усе починалося"
          text="Ласкаво просимо в історію SmartCare! Заснована у 2016 році, наша компанія
          віддана перетворенню будинків у розумні простори. Завдяки передовим системам управління, ми забезпечуємо
          безпеку, комфорт та ефективність вашого житла, надаючи унікальний досвід розумного життя."
        />
        <button class="about-us-history__button button blue" @click="toggleConsultationModal">
          <span>Замовити консультацію</span>
          <img src="~/assets/white-arrow-right.svg" alt="Arrow Icon">
        </button>
      </div>
      <div class="about-us-history__image">
        <img src="~/assets/white-logo.svg" alt="Logo">
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";

export default defineComponent({
  name: 'History',

  components: {
    SectionTitle
  },

  inject: ['toggleConsultationModal']
})
</script>

<style scoped lang="scss">
@import 'vars';

.about-us-history {
  background: $dark-950;
}
.about-us-history__container {
  padding: 50px 0;

  @media only screen and (min-width: 760px) {
    padding: 100px 0;
  }

  @media only screen and (min-width: 1160px) {
    padding: 150px 0;
  }
}

.about-us-history__container {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.about-us-history__info {
  margin-bottom: 24px;

  @media only screen and (min-width: 1160px) {
    width: calc(100% - 600px);
  }
}

.about-us-history__text {
  margin-bottom: 24px;
}

.about-us-history__button {

  @media only screen and (min-width: 1160px) {
    width: auto;
    margin-top: 32px;
  }
}

.about-us-history__image {
  width: 100%;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('~/assets/two-column-section-bg.png');
  background-size: cover;
  overflow: hidden;
  border-radius: 20px;

  img {
    width: 100%;
    max-width: 250px;
  }

  @media only screen and (min-width: 1160px) {
    width: 480px;
    height: 320px;
  }
}
</style>
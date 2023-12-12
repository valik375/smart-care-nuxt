<template>
  <section class="calculator-banner">
    <div class="calculator-banner__container container bg-lines">
      <div class="calculator-banner__banner">
        <h1 class="calculator-banner__title">Розумний будинок доступніший, ніж ви вважали</h1>
        <p class="calculator-banner__text text">Пройдіть швидке опитування, щоб дізнатися скільки орієнтовно коштуватиме розумний
          будинок під ваші вимоги.</p>
        <Button class="calculator-banner__button button blue" @click="$emit('openModal')">
          Розрахувати вартість
        </Button>
        <img class="calculator-banner__image image-loaded" src="~/assets/calculator-banner-image.png" alt="Image">
      </div>
      <div class="calculator-banner__label">
        <div class="calculator-banner__label-image">
          <img src="~/assets/white-info.svg" alt="Info Icon">
        </div>
        <span>
          Ми підрахуємо орієнтовану вартість розумного згідно ваших потреб. Додатковими чинниками, що формують вартість
          є, виробник пристроїв, кількість сценаріїв автоматизації та складність монтажу системи.
        </span>
      </div>

      <img loading="lazy" class="bg-lines__image desktop" src="~/assets/calculator-bg-lines-desktop.png" alt="Background lines">
      <img loading="lazy" class="bg-lines__image mobile" src="~/assets/calculator-bg-lines-mobile.png" alt="Background lines">
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";
import CardDropdown from "~/UI/CardAccordion.vue";
import Button from "~/UI/Button.vue";

export default defineComponent({
  name: 'Banner',

  components: {
    CardDropdown,
    SectionTitle,
    Button
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.calculator-banner__container {
  padding-bottom: 56px;

  .bg-lines__image {
    top: 56px;
  }

  @media only screen and (min-width: 760px) {
    padding-bottom: 100px;

    .bg-lines__image {
      top: 100px;
    }
  }

  @media only screen and (min-width: 1160px) {
    padding-bottom: 180px;

    .bg-lines__image {
      top: 160px;
    }
  }
}
.calculator-banner__banner {
  padding-top: 116px;
  padding-bottom: 56px;

  @media only screen and (min-width: 760px) {
    max-width: 620px;
    margin: 0 auto;
    display: block;
    padding-bottom: 80px;
    padding-top: 190px;
  }
}
.calculator-banner__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: .56px;
  color: $white;
  text-align: center;
  margin-bottom: 12px;

  @media only screen and (min-width: 760px) {
    font-size: 40px;
    line-height: 150%;
    letter-spacing: .8px;
  }
}
.calculator-banner__text {
  font-size: 15px;
  text-align: center;
  margin-bottom: 32px;
}
.calculator-banner__button {
  margin-bottom: 32px;

  @media only screen and (min-width: 760px) {
    max-width: 200px;
    margin: 0 auto 40px;
  }
}
.calculator-banner__image {
  width: 100%;
  object-fit: contain;
}
.calculator-banner__label {
  width: 100%;
  border-radius: 14px;
  background: $dark-800;
  box-shadow: 0 8px 30px 0 rgba(4,5,6,.06);
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  span {
    font-size: 13px;
    font-weight: 700;
    line-height: 140%;
    color: #eeeff1;
    width: calc(100% - 60px);
  }

  @media only screen and (min-width: 760px) {
    max-width: 685px;
    margin: 0 auto;
  }
}
.calculator-banner__label-image {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #22242a;
}
</style>
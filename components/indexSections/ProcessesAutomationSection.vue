<template>
  <section class="processes-automation">
    <div class="processes-automation__container container">

      <div class="processes-automation__info">
        <SectionTitle
          class="processes-automation__title-wrapper"
          subtitle="Автоматизація всіх процесів"
          title="Налаштуйте власні сценарії вашого комфорту та безпеки будинку"
          text="Автоматизація розумного будинку дозволяє вам налаштувати 150+
          індивідуальних сценаріїв, які взаємодіють з будь-якими подіями відповідно до вашого бажання. Ви обираєте
          персоналізовні реакції для різноманітних ситуацій, щоб система втілювала саме ваше уявлення про комфорт
          та безпеку."
        />

        <div class="processes-automation__button-group">
          <button class="processes-automation__button button blue" @click="toggleScenarioModal">
            <img src="~/assets/white-file.svg" alt="File Icon">
            <span>Приклади сценаріїв</span>
          </button>
          <div class="processes-automation__label">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="25" viewBox="0 0 9 25" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 0.5C6.29086 0.5 4.5 2.29086 4.5 4.5V5.387C4.5 6.10509 4.24243 6.79935 3.77407 7.34368L0.587682 11.0469C-0.0423047 11.7791 -0.0590035 12.8569 0.547997 13.6082L3.8336 17.6751C4.26479 18.2089 4.5 18.8743 4.5 19.5604V20.5C4.5 22.7091 6.29086 24.5 8.5 24.5V0.5Z" fill="#2E3038"/>
            </svg>
            150+ сценаріїв
          </div>
        </div>
      </div>

      <div class="processes-automation__image-wrapper">
        <img loading="lazy" class="processes-automation__image-bg" src="~/assets/processes-automation-bg.png" alt="Gradient Background">
        <img loading="lazy" class="processes-automation__image-left" src="~/assets/processes-automation-left.png" alt="Card image">
        <img loading="lazy" class="processes-automation__image-right" src="~/assets/processes-automation-right.png" alt="Card image">
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";

export default defineComponent({
  name: 'ProcessesAutomationSection',

  components: {SectionTitle},

  inject: ['toggleScenarioModal']
})
</script>

<style scoped lang="scss">
@import 'vars';

.processes-automation {
  padding-top: 48px;

  @media only screen and (min-width: 760px) {
    padding-top: 90px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.processes-automation__container {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.processes-automation__info {
  margin-bottom: 40px;

  @media only screen and (min-width: 1160px) {
    width: calc(50% - 50px);
  }
}

.processes-automation__button-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;

  @media only screen and (min-width: 1160px) {
    max-width: 340px;
  }
}

.processes-automation__button {
  width: calc(100% - 120px);

  img {
    margin-left: 0 !important;
  }
}

.processes-automation__label {
  width: 108px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $dark-600;
  border-radius: 0 5px 5px 0;
  position: relative;
  font-size: 13px;
  font-weight: 700;
  line-height: 150%;
  color: $white;

  svg {
    position: absolute;
    left: -8px;
    top: 0;
  }
}

.processes-automation__image-wrapper {
  width: 100%;
  height: 284px;
  position: relative;

  @media only screen and (min-width: 1160px) {
    width: calc(50% - 50px);
    height: 440px;
  }
}

.processes-automation__image-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
}

.processes-automation__image-left {
  width: 320px;
  left: calc(50% - 215px);
  top: 10px;
  position: absolute;
  z-index: 2;

  @media only screen and (min-width: 1160px) {
    width: 476px;
    left: calc(50% - 327px);
    top: 15px;
  }
}

.processes-automation__image-right {
  width: 320px;
  right: calc(50% - 250px);
  bottom: -61px;
  position: absolute;
  z-index: 1;

  @media only screen and (min-width: 1160px) {
    width: 476px;
    right: calc(50% - 404px);
    bottom: -66px;
  }
}
</style>
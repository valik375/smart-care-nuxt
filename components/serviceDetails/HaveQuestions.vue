<template>
  <section class="have-questions">
    <div class="have-questions__bordered bordered-bottom-section">
      <div class="have-questions__container container">

        <div class="have-questions__wrapper">
          <div class="have-questions__card card">
            <h2 class="have-questions__title">Залишились питання?</h2>
            <p class="have-questions__text text">Якщо ви не знайшли відповіді на своє питання - зв'яжіться з
              нами для детальної консультації. Ми завжди раді допомогти!</p>
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
              v-for="(item, index) in section"
              :key="index"
              :id="index"
              :index="`0${index + 1}`"
              :isActive="activeDropdown"
              :title="item.title"
              :text="item.text"
              @toggleVisibility="setActiveDropdown"
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
  name: 'HaveQuestions',

  components: {CardDropdown},

  props: {
    section: {
      type: Object,
      default: () => {}
    }
  },

  inject: ['toggleConsultationModal'],

  data() {
    return {
      activeDropdown: 0
    }
  },

  methods: {
    setActiveDropdown(index) {
      this.activeDropdown = index
    }
  }
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
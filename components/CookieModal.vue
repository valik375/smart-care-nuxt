<template>
  <Modal class="cookie" :isOpen="isOpen">
    <div class="cookie__container">
      <div class="cookie__body" :class="{'open': showAccordion}">
        <div class="cookie__header">
          <div class="cookie__header-title">Ми цінуємо вашу конфеденційність</div>
          <div class="cookie__header-text text">Ми використовуємо кукі-файли, щоб забезпечити для вас якнайкращі враження
            від користування сайтом та покращити доцільність наших контактів з вами.</div>
        </div>
        <div class="cookie__agreements">
          <div class="cookie__item">
            <div class="cookie__item-left">
              <div class="cookie__item-title">Дозволяю кукі-файли, що відповідають за аналітику</div>
              <div class="cookie__item-text text">Збирайте інформацію про те, як ви користуєтесь нашим веб-сайтом.
                Допоможіть нам покращити функції, виявивши будь-яку помилку на нашому веб-сайті.</div>
            </div>
            <div class="cookie__item-right">
              <label class="input-checkbox" for="cookie-analytics">
                <input v-model="cookieAnalytics" type="checkbox" id="cookie-analytics" checked>
                <span class="circle"></span>
              </label>
            </div>
          </div>
          <div class="cookie__item">
            <div class="cookie__item-left">
              <div class="cookie__item-title">Дозволяю кукі-файли, що відповідають за маркетинг</div>
              <div class="cookie__item-text text">Збирайте інформацію про те, як ви користуєтесь нашим веб-сайтом.
                Допоможіть нам покращити функції, виявивши будь-яку помилку на нашому веб-сайті.</div>
            </div>
            <div class="cookie__item-right">
              <label class="input-checkbox" for="cookie-marketing">
                <input v-model="cookieMarketing" type="checkbox" id="cookie-marketing" checked>
                <span class="circle"></span>
              </label>
            </div>
          </div>
          <div class="cookie__item">
            <div class="cookie__item-left">
              <div class="cookie__item-title">Дозволяю кукі-файли, що передають дані соцмережам</div>
              <div class="cookie__item-text text">Підтримка функцій обміну на веб-сайтах партнерів.Реклама
                нашої продукції на веб-сайтах партнерів та соціальних мереж.</div>
            </div>
            <div class="cookie__item-right">
              <label class="input-checkbox" for="cookie-social">
                <input v-model="cookieSocial" type="checkbox" id="cookie-social" checked>
                <span class="circle"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="cookie__nav">
        <button class="cookie__button-params button dark" @click="showAccordion = !showAccordion">{{ paramsButtonText }}</button>
        <button class="cookie__button-submit button blue" @click="submit">{{ submitButtonText }}</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import {defineComponent} from 'vue'
import SimpleDropdown from "~/UI/SimpleDropdown.vue";
import Accordion from "~/UI/Accordion.vue";
import DropdownLink from "~/UI/DropdownLink.vue";
import ArrowLink from "~/UI/ArrowLink.vue";
import CalculateButton from "~/UI/CalculateButton.vue";
import MobileLink from "~/UI/MobileLink.vue";
import DesktopLink from "~/UI/DesktopLink.vue";
import Button from "~/UI/Button.vue";
import Modal from "~/UI/Modal.vue";
import Input from "~/UI/Input.vue";

export default defineComponent({
  name: 'CookieModal',

  components: {
    Button,
    Input,
    Modal
  },

  inject: ['toggleCookieModal'],

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      cookieAnalytics: true,
      cookieMarketing: true,
      cookieSocial: true,
      showAccordion: false,
    }
  },

  methods: {
    submit() {
      const cookieSettings = {
        isApproved: true,
        analytics: this.cookieAnalytics,
        marketing: this.cookieMarketing,
        social: this.cookieSocial
      }
      localStorage.setItem('cookie', JSON.stringify(cookieSettings))
      this.toggleCookieModal()
    }
  },

  computed: {
    submitButtonText() {
      return this.showAccordion ? 'Зберегти' : 'Прийняти усі'
    },

    paramsButtonText() {
      return this.showAccordion ? 'Назад' : 'Змінити параметри'
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

:deep(.modal) {
  max-width: 350px;
  padding: 24px;

  @media only screen and (min-width: 760px) {
    max-width: 616px;
  }
}
:deep(.modal__close) {
  display: none;
}

.cookie {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  padding: 16px;
  display: flex;
  align-items: flex-end;
  background: rgba(5, 5, 6, 0.80);
}

.cookie__body {
  overflow: hidden;
  max-height: 170px;
  transition: all .3s ease;

  &.open {
    max-height: 800px;
  }

  @media only screen and (min-width: 760px) {
    max-height: 82px;
  }
}

.cookie__header {
  padding-bottom: 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid $dark-600;
}

.cookie__header-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 8px;
}

.cookie__header-text {
  font-size: 14px;
}

.cookie__item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid $dark-600;
  padding-bottom: 16px;
  margin-bottom: 16px;

  &:last-child {
    border-bottom: none;
  }
}

.cookie__item-title {
  font-size: 14px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 8px;
}

.cookie__item-text {
  font-size: 13px;
}

.cookie__nav {

  @media only screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;
  }
}

.cookie__button-params {
  margin-bottom: 12px;

  @media only screen and (min-width: 760px) {
    margin-bottom: 0;
    width: calc(50% - 6px) !important;
  }
}

.cookie__button-submit {

  @media only screen and (min-width: 760px) {
    width: calc(50% - 6px) !important;
  }
}
</style>
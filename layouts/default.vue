<template>
<div class="layout">
  <Header :links="serviceLinks" />
  <slot />
  <ShowRoomModal :isOpen="isShowRoomModalOpen" />
  <ConsultationModal :isOpen="isConsultationModalOpen" />
  <ConfirmModal :isOpen="isConfirmModalOpen" />
  <ScenarioModal :isOpen="isScenarioModalOpen" />
  <CookieModal :isOpen="isCookieModalOpen" />
  <Footer :links="serviceLinks" />
</div>
</template>

<script>
import {defineComponent} from 'vue'
import { useRoute } from 'vue-router'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  name: 'default',

  components: {
    Header,
    Footer,
  },

  provide() {
    return {
      toggleShowRoomModal: () => this.toggleShowRoom(),
      toggleConsultationModal: () => this.toggleConsultation(),
      toggleConfirmModal: () => this.toggleConfirm(),
      toggleScenarioModal: () => this.toggleScenario(),
      toggleCookieModal: () => this.toggleCookie(),
    }
  },

  setup() {
    const route = useRoute()
    useHead(() => ({
      link: [
        { rel: 'canonical', href: 'https://thecaresmart.com' },
      ],
    }))
  },

  created() {
    if (process.client) {
      setTimeout(() => {
        const cookie = JSON.parse(localStorage.getItem('cookie'))
        if (cookie?.isApproved) {
          this.isCookieModalOpen = false
        } else {
          this.isCookieModalOpen = true
        }
      }, 100)
    }
  },

  data() {
    return {
      isShowRoomModalOpen: false,
      isConsultationModalOpen: false,
      isConfirmModalOpen: false,
      isScenarioModalOpen: false,
      isCookieModalOpen: false,
      serviceLinks: [
        {
          title: 'Функції безпеки',
          titleShort: 'БЕЗПЕКА',
          type: 'security',
          links: [
            {
              icon: 'white-fire',
              text: 'Протипожежна система',
              url: '/service/fire-protection-system'
            },
            {
              icon: 'white-drop',
              text: 'Антипотоп система',
              url: '/service/antiflood-system',
            },
            {
              icon: 'white-lock',
              text: 'Розумні замки',
              url: '/service/smart-lock',
            },
            {
              icon: 'white-camera',
              text: 'Система відеоспостереження',
              url: '/service/video-surveillance',
            },
            {
              icon: 'white-intercom',
              text: 'Розумний домофон',
              url: '/service/smart-intercom',
            },
          ]
        },
        {
          title: 'Функції комфорту',
          titleShort: 'КОМФОРТ',
          type: 'comfort',
          links: [
            {
              icon: 'white-light',
              text: 'Розумне освітлення',
              url: '/service/smart-light',
            },
            {
              icon: 'white-heating',
              text: 'Розумне опалення',
              url: '/service/smart-heating',
            },
            {
              icon: 'white-blinds',
              text: 'Автоматичні штори',
              url: '/service/automatic-curtains',
            },
            {
              icon: 'white-micro',
              text: 'Голосове управління',
              url: '/service/voice-control',
            },
          ]
        }
      ]
    }
  },

  methods: {
    toggleCookie() {
      this.isCookieModalOpen = !this.isCookieModalOpen
      this.hideBodyOverflow(this.isCookieModalOpen)
    },

    toggleShowRoom() {
      this.isShowRoomModalOpen = !this.isShowRoomModalOpen
      this.hideBodyOverflow(this.isShowRoomModalOpen)
    },

    toggleConsultation() {
      this.isConsultationModalOpen = !this.isConsultationModalOpen
      this.hideBodyOverflow(this.isConsultationModalOpen)
    },

    toggleConfirm() {
      this.isConfirmModalOpen = !this.isConfirmModalOpen
      this.hideBodyOverflow(this.isConfirmModalOpen)
    },

    toggleScenario() {
      this.isScenarioModalOpen = !this.isScenarioModalOpen
      this.hideBodyOverflow(this.isConfirmModalOpen)
    },

    hideBodyOverflow(isModalOpen) {
      document.body.style.overflowY = isModalOpen ? 'hidden' : 'auto'
    }
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
@import 'vars';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
}

body {
  background: $dark-900;
  overflow-x: hidden;

  &.overflow-hidden {
    overflow: hidden;
  }
}

.bordered-top-section {
  border-radius: 20px 20px 0 0;
  background: $dark-900;

  @media only screen and (min-width: 1160px) {
    border-radius: 40px 40px 0 0;
  }
}

.bordered-bottom-section {
  border-radius:  0 0 20px 20px;
  background: $dark-900;

  @media only screen and (min-width: 1160px) {
    border-radius: 0 0 40px 40px;
  }
}

.main {
  overflow-x: hidden;
}

.container {
  width: 100%;
  padding: 0 20px;

  @media only screen and (min-width: 760px) {
    padding: 0 30px;
  }

  @media only screen and (min-width: 1160px) {
    padding: 0;
    margin: 0 auto;
    max-width: 1160px;
  }
}

.button-shine {
  width: 20px;
  height: 120%;
  transform: rotate(25deg);
  filter: blur(10px);
  position: absolute;
  display: block;
  z-index: 2;
  left: 0;
  top: 0;
  background: transparentize($white, .5);
  animation: button-shine 10s ease infinite;
}

@keyframes button-shine {
  0% {
    left: -30px;
    opacity: 1;
  }
  20% {
    left: 100%;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.button {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  padding: 0 20px;

  &.blue {
    background: $blue;
    color: $white;

    img {
      margin-left: 4px;
    }

    &:hover {
      background: lighten($blue, 7%);
    }
  }

  &.dark {
    background: $dark-700;
    color: $gray;

    img {
      margin-left: 4px;
    }

    &:hover {
      background: lighten($dark-700, 7%);
    }
  }

  &.consultation {

    img {
      margin-left: 4px;
      transition: all .3s ease;
    }

    &:hover {
      img {
        transform: translateX(5px);
      }
    }
  }

  &.gray {
    border-radius: 8px;
    background: $dark-700;
    font-size: 14px;
    font-weight: 700;
    line-height: 160%;
    color: $gray;
    padding: 0;

    svg path {
      transition: all .3s ease;
    }

    &:hover {
      background: $dark-600;
      color: $white;

      svg path {
        fill: $white;
      }
    }
  }

  &.animated {
    position: relative;
    overflow: hidden;
  }
}

.card {
  background: $dark-800;
  padding: 24px;
  border-radius: 16px;
}

.text {
  color: $dark-500;
  font-weight: 500;
  line-height: 165%;
}

.section-title-wrapper {
  margin-bottom: 12px;

  .section-subtitle {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.12px;
    text-transform: uppercase;
    color: $blue;
    margin-bottom: 4px;

    @media only screen and (min-width: 1160px) {
      font-size: 15px;
      line-height: 150%;
      letter-spacing: 0.15px;
    }
  }

  .section-title {
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0.22px;
    color: $white;

    span {
      color: $blue;
    }

    @media only screen and (min-width: 1160px) {
      font-size: 28px;
      line-height: 150%;
      letter-spacing: 0.28px;
    }
  }
}

.line-background {
  position: relative;
  background: url('../assets/convenient-control-bg.png');
  background-size: contain;

  &:after {
    content: '';
    width: 100%;
    height: 200px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(180deg, #17181c 10%, rgba(15, 15, 15, 0) 100%);
  }

  &:before {
    content: '';
    width: 100%;
    height: 200px;
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, #17181c 10%, rgba(15, 15, 15, 0) 100%);
    transform: rotate(180deg);
  }

  @media only screen and (min-width: 1160px) {
    background-size: auto;
    background-position: center;
  }
}

.icon-blue {
  width: 40px;
  height: 40px;
  background: #5d75ef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-list {

  .card {
    margin-bottom: 12px;

    @media only screen and (min-width: 1160px) {
      width: calc(33.3333333333% - 20px);
    }
  }

  .card-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .card-tag {
    font-size: 13px;
    font-weight: 700;
    line-height: 140%;
    color: #eeeff1;
  }

  .card-title {
    font-size: 17px;
    font-weight: 700;
    line-height: 155%;
    color: #eeeff1;
    margin-bottom: 8px;
  }

  .card-text {
    font-size: 14px;
  }

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
}

.dropdown-list {

  .dropdown-item {
    border-radius: 14px;
    background: $dark-800;
    margin-bottom: 12px;
    transition: all .3s ease;

    &.active {

      .dropdown-item__toggle span:nth-child(1) {
        transform: rotate(0deg);
        left: 3px;
        top: 45%;
      }

      .dropdown-item__body {
        padding: 0 16px 16px 16px;
        max-height: 400px;
      }

      &:hover {
        background: $dark-800;

        .dropdown-item__value {
          background: $dark-700;
        }

        .dropdown-item__toggle {
          transform: rotate(0);
        }
      }
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      background: $dark-600;

      .dropdown-item__value {
        background: $dark-500;
      }

      .dropdown-item__toggle {
        transform: rotate(90deg);
      }
    }
  }

  .dropdown-item__head {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .dropdown-item__value {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $dark-700;
    border-radius: 7px;
    font-size: 14px;
    color: $white;
    font-weight: 700;
    line-height: 155%;
    transition: all .3s ease;
  }

  .dropdown-item__title {
    width: calc(100% - 88px);
    font-size: 14px;
    font-weight: 700;
    line-height: 155%;
    color: $white;
  }

  .dropdown-item__toggle {
    width: 20px;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;

    span {
      width: 14px;
      height: 2px;
      background: $white;
      border-radius: 100px;
      transition: all .3s ease;

      &:nth-child(1) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }

  .dropdown-item__body {
    font-size: 14px;
    padding: 0 16px;
    max-height: 0;
    overflow: hidden;
    transition: all .3s ease;
  }
}

.two-column-section {

  .column-left {
    display: none;

    @media only screen and (min-width: 1160px) {
      display: block;
      width: 511px;
    }
  }

  .column-right {

    @media only screen and (min-width: 1160px) {
      width: calc(100% - 631px);

      .column-image {
        display: none;
      }
    }
  }

  .column-image {
    width: 100%;
    height: 328px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../assets/two-column-section-bg.png');
    background-size: cover;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 32px;

    img {
      width: 100%;
      height: 100%;
      padding: 20px 0;
      object-fit: contain;
    }

    @media only screen and (min-width: 1160px) {
      padding: 0;
      height: 610px;
      margin-bottom: 0;
    }
  }

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}

.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .label {
    font-size: 11px;
    font-weight: 700;
    line-height: 130%;
    color: $gray-100;
    margin-bottom: 2px;
  }

  .input {
    height: 41px;
    border-radius: 8px;
    border: 1px solid $dark-600;
    padding: 0 12px;
    background: transparent;
    color: $gray-100;
    outline: none;

    &:focus {
      border-color: $blue;
    }

    &::placeholder {
      font-size: 14px;
      font-weight: 500;
      line-height: 165%;
      color: $dark-500;
    }

    &[type="date"]::-webkit-calendar-picker-indicator {
      color: rgba(0, 0, 0, 0);
      opacity: 1;
      display: block;
      background: url('../assets/white-calendar.svg') no-repeat center;
      background-size: contain;
      width: 20px;
      height: 20px;
      border-width: thin;
    }
  }
}

.bg-lines {
  position: relative;

  .bg-lines__image {
    display: none;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    mix-blend-mode: lighten;
    pointer-events: none;

    &.mobile {
      display: block;
    }
  }

  @media only screen and (min-width: 760px) {

    .bg-lines__image {
      top: -90px;

      &.mobile {
        display: none;
      }

      &.desktop {
        display: block;
      }
    }
  }

  @media only screen and (min-width: 1160px) {

    .bg-lines__image {
      top: -160px;
    }
  }
}

.input-checkbox {
  height: 24px;
  width: 42px;
  display: block;
  background: $dark-550;
  border-radius: 100px;
  padding: 3px;
  cursor: pointer;
  position: relative;
  transition: all .3s ease;

  &:has(> input:checked) {
    background: $blue;
  }

  input {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;

    &:checked + .circle {
      transform: translateX(100%);
    }
  }

  .circle {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: $white;
    display: block;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.24));
    transform: translateX(0);
    transition: all .3s ease;
  }
}

.tooltip {
  position: relative;

  &:hover {

    .tooltip__wrapper {
      opacity: 1;
      pointer-events: all
    }
  }

  &.top {

    .tooltip__wrapper {
      bottom: calc(100% + 4px);
      top: auto;

      svg {
        top: auto;
        bottom: -4px;
        transform: rotate(180deg);
      }
    }
  }
}

.tooltip__wrapper {
  top: calc(100% + 4px);
  left: -100px;
  position: absolute;
  width: max-content;
  max-width: 360px;
  padding: 8px;
  border-radius: 5px;
  background: $dark-600;
  font-size: 13px;
  font-weight: 700;
  line-height: 150%;
  color: $white;
  transition: all .3s ease;
  opacity: 0;
  pointer-events: none;

  svg {
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media only screen and (min-width: 760px) {
    max-width: 490px;
    transform: translateX(-50%);
    left: 50%;
  }
}

.bullet-text {
  position: relative;
  padding-left: 12px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 100px;
    background: $dark-500;
  }
}

.swiper-prev,
.swiper-next {
  display: none;

  @media only screen and (min-width: 1160px) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 8px;
    border: 1px solid $dark-550;
    background: $dark-600;
    z-index: 2;
    transition: background .3s ease;
    cursor: pointer;

    &.swiper-button-disabled {
      svg {
        opacity: .5;
      }
      &:hover {
        background: $dark-550;
      }
    }

    &:hover {
      background: $dark-500;
    }
  }
}

.swiper-prev {
  @media only screen and (min-width: 1160px) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
}

.swiper-next {
  position: absolute;
  @media only screen and (min-width: 1160px) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
}

.value-badge {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px 4px;
  border-radius: 40px;
  background: $dark-700;
  margin-bottom: 12px;

  .value-badge__icon {
    width: 40px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5B8CA1;
    border-radius: 30px;
    margin-right: 8px;

    img {
      width: 16px;
      height: 16px;
    }
  }

  .value-badge__text {
    font-size: 10px;
    font-weight: 700;
    line-height: 160%;
    letter-spacing: 0.1px;
    text-transform: uppercase;
    color: $white;

    @media only screen and (min-width: 1160px) {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 1160px) {
    padding: 8px 12px 8px;
    margin-bottom: 16px;
  }
}



.form-modal {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.form-modal__left {
  background: url('../assets/form-modal-bg.png') center no-repeat;
  background-size: cover;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 24px;
  padding: 32px;

  @media only screen and (min-width: 1160px) {
    width: 374px;
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 0;
  }
}

.form-modal__right {

  @media only screen and (min-width: 1160px) {
    width: calc(100% - 422px);
  }
}

.form-modal__icon {
  margin-bottom: 20px;
  width: 32px;
  height: 34px;

  @media only screen and (min-width: 1160px) {
    width: 40px;
    height: 42px;
  }
}

.form-modal__title {
  font-size: 19px;
  font-weight: 700;
  line-height: 150%;
  color: $white;
  margin-bottom: 8px;

  @media only screen and (min-width: 1160px) {
    font-size: 20px;
  }
}

.form-modal__text {
  font-size: 13px;
  font-weight: 500;
  line-height: 155%;
  color: $white;
  opacity: .8;
}

.form-modal__form {
  width: 100%;

  .input-group {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 24px;
    }
  }
}

.form-modal__form-title {
  font-size: 13px;
  font-weight: 700;
  line-height: 150%;
  color: $gray-100;
  margin-bottom: 16px;
}

.form-modal__button {
  margin: 24px 0;
}

.form-modal__location {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: 500;
  line-height: 165%;
  color: $dark-500;

  img {
    margin-right: 4px;
  }
}

.form-modal__contact-title {
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 16px;
  color: $dark-500;
}

.form-modal__contacts {
  display: flex;
  align-items: center;
}

.form-modal__contact-item {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.phone {
    padding: 5px;
    background: $dark-600;
    border-radius: 6px;
  }
}


</style>
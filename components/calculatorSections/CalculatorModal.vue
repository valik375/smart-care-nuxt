<template>
  <Modal class="calculator" :isOpen="isOpen" @closeModal="toggleModal">
    <div class="calculator__container">
      <div class="calculator__wrapper">
        <ChoiceTemplate
          v-if="currentStep === 0"
          :template="templates[currentStep]"
        />
        <ChoiceTemplate
          v-if="currentStep === 1"
          :template="templates[currentStep]"
          multipleChoice
        />
        <ChoiceTemplate
          v-if="currentStep === 2"
          :template="templates[currentStep]"
          multipleChoice
        />
        <RoomsTemplate
          v-if="currentStep === 3"
          :template="templates[currentStep]"
        />
        <RangeTemplate
          v-if="currentStep === 4"
          :template="templates[currentStep]"
        />
        <FormTemplate
          v-if="currentStep === 5"
          :templates="templates"
        />
      </div>
      <div v-if="currentStep !== 5" class="calculator-modal__nav">
        <div class="calculator-modal__progress">
          <div
            v-for="(item, index) in Array(5)"
            class="calculator-modal__step"
            :class="{'active': currentStep >= index}"
          ></div>
        </div>
        <div class="calculator-modal__button-group">
          <button
            class="calculator-modal__back button"
            :class="{'disabled': isPrevDisabled}"
            @click="prevHandler"
          >Назад</button>
          <button
            class="calculator-modal__next button blue"
            :class="{'disabled': isNextDisabled}"
            @click="nextHandler"
          >
            Далі
            <img src="~/assets/white-arrow-right.svg" alt="Icon">
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import {defineComponent} from 'vue'
import Modal from "~/UI/Modal.vue";
import ChoiceTemplate from "~/components/calculatorSections/ChoiceTemplate.vue";

import whiteFlat from '~/assets/white-flat.svg'
import whiteHouse from '~/assets/white-house.svg'
import whiteCase from '~/assets/white-case.svg'

import whiteBalaclava from '~/assets/white-balaclava.svg'
import whiteCamera from '~/assets/white-camera.svg'
import whiteUser from '~/assets/white-user.svg'
import whiteShield from '~/assets/white-shield.svg'
import whiteLock from '~/assets/white-lock.svg'
import whiteFire from '~/assets/white-fire.svg'
import whiteDrop from '~/assets/white-drop.svg'

import whiteLight from '~/assets/white-light.svg'
import whiteTemperature from '~/assets/white-temperature.svg'
import whiteBlinds from '~/assets/white-blinds.svg'
import whiteWentilation from '~/assets/white-wentilation.svg'
import whiteHeating from '~/assets/white-heating.svg'
import whiteMicro from '~/assets/white-micro.svg'
import whiteRobot from '~/assets/white-robot.svg'
import RoomsTemplate from "~/components/calculatorSections/RoomsTemplate.vue";
import RangeTemplate from "~/components/calculatorSections/RangeTemplate.vue";
import FormTemplate from "~/components/calculatorSections/FormTemplate.vue";

export default defineComponent({
  name: 'CalculatorModal',

  components: {
    FormTemplate,
    RangeTemplate,
    RoomsTemplate,
    ChoiceTemplate,
    Modal
  },

  inject: ['toggleModal'],

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentStep: 0,
      templates: [
        {
          title: 'Який <span>тип приміщення</span> потребує системи розумного будинку?',
          text: 'Ця інформація допоможе нам підібрати ідеальні рішення, які відповідатимуть особливостям вашого приміщення.',
          variants: [
            {
              text: 'Квартира',
              label: 'flat',
              icon: whiteFlat,
              selected: false
            },
            {
              text: 'Приватний будинок',
              label: 'house',
              icon: whiteHouse,
              selected: false
            },
            {
              text: 'Офіс',
              label: 'office',
              icon: whiteCase,
              selected: false
            }
          ]
        },
        {
          title: 'Які <span>функції безпеки</span> повинні бути у вашому розумному будинку?',
          text: 'Оберіть необхідні функції безпеки. Кількість необмежена.',
          subtext: 'Не знайшли потрібної функції? Вкажіть її при телефонній розмові або переписці з нами та ми обовʼязково додамо її для вас.',
          variants: [
            {
              text: 'Захист від <br>вторгнення',
              label: 'protectionAgainstIntrusion',
              icon: whiteBalaclava,
              price: {
                flat: 300,
                house: 300,
                office: 300
              },
              selected: false
            },
            {
              text: 'Система <br>відеоспостереження',
              label: 'videoSurveillanceSystem',
              icon: whiteCamera,
              price: {
                flat: 400,
                house: 400,
                office: 400
              },
              selected: false
            },
            {
              text: 'Імітація <br>присутності',
              label: 'imitationOfPresence',
              icon: whiteUser,
              price: {
                flat: 300,
                house: 300,
                office: 300
              },
              roomType: ['bedroom'],
              selected: false
            },
            {
              text: 'Інтеграція зі <br>службою охорони',
              label: 'integrationWithTheSecurityService',
              icon: whiteShield,
              price: {
                flat: 130,
                house: 130,
                office: 130
              },
              selected: false
            },
            {
              text: 'Розумні замки',
              label: 'smartLocks',
              icon: whiteLock,
              price: {
                flat: 600,
                house: 600,
                office: 600
              },
              selected: false
            },
            {
              text: 'Протипожежна <br>система',
              label: 'fireProtectionSystem',
              icon: whiteFire,
              price: {
                flat: 250,
                house: 250,
                office: 250
              },
              selected: false
            },
            {
              text: 'Антипотоп система',
              label: 'antiFloodSystem',
              icon: whiteDrop,
              price: {
                flat: 150,
                house: 150,
                office: 350
              },
              roomType: ['kitchen', 'bathroom'],
              selected: false
            }
          ]
        },
        {
          sectionType: 'choose',
          title: 'Які <span>функції комфорту</span> повинні бути у вашому розумному будинку?',
          text: 'Оберіть необхідні функції комфорту. Кількість необмежена.',
          subtext: 'Не знайшли потрібної функції? Вкажіть її при телефонній розмові або переписці з нами та ми обовʼязково додамо її для вас.',
          variants: [
            {
              text: 'Контроль <br>освітлення',
              label: 'controlOfLighting',
              icon: whiteLight,
              price: {
                flat: 175,
                house: 175,
                office: 75
              },
              roomType: ['kitchen', 'bedroom', 'bathroom'],
              selected: false
            },
            {
              text: 'Клімат-контроль',
              label: 'climateControl',
              icon: whiteTemperature,
              price: {
                flat: 500,
                house: 500,
                office: 500
              },
              selected: false
            },
            {
              text: 'Автоматичні ролети',
              label: 'automaticDoorsAndRollerShutters',
              icon: whiteBlinds,
              price: {
                flat: 400,
                house: 400,
                office: 400
              },
              roomType: ['bedroom'],
              selected: false
            },
            {
              text: 'Автоматизація <br>ветниляції',
              label: 'automationOVetting',
              icon: whiteWentilation,
              price: {
                flat: 70,
                house: 70,
                office: 70
              },
              roomType: ['kitchen', 'bathroom'],
              selected: false
            },
            {
              text: 'Керування системами <br>опалення',
              label: 'managementOfHeatingSystems',
              icon: whiteHeating,
              price: {
                flat: 75,
                house: 75,
                office: 75
              },
              roomType: ['bedroom', 'livingRoom'],
              selected: false
            },
            {
              text: 'Голосовий <br>ассистент',
              label: 'voiceAssistant',
              icon: whiteMicro,
              price: {
                flat: 200,
                house: 200,
                office: 200
              },
              selected: false
            },
            {
              text: 'Розумний <br>прибиральник',
              label: 'smartCleaner',
              icon: whiteRobot,
              price: {
                flat: 50,
                house: 50,
                office: 50
              },
              selected: false
            }
          ]
        },
        {
          title: 'Які <span>кімнати</span> потребують системи розумного будинку?',
          text: 'Оберіть тип кімнат та їх кількість. Завдяки цьому ми підрахуємо вартість саме для вашого випадку.',
          rooms: [
            {
              id: 0,
              name: 'Кухня',
              label: 'kitchen',
              value: 1
            },
            {
              id: 1,
              name: 'Санвузол',
              label: 'bathroom',
              value: 1
            },
            {
              id: 2,
              name: 'Вітальня/коридор/лоджія',
              label: 'livingRoom',
              value: 1
            },
            {
              id: 3,
              name: 'Спальня',
              label: 'bedroom',
              value: 1
            },
            {
              id: 4,
              name: 'Нежилі, технічні <br> приміщення тощо',
              label: 'etc',
              value: 1
            },
          ]
        },
        {
          title: 'Яка площина <span>вашого</span> приміщення?',
          text: 'Від площини приміщення залежить кількість та тип пристроїв системи розумного будинку.',
          rangeValue: 40,
          label: 'SizeOfFlat'
        }
      ],
    }
  },

  methods: {
    prevHandler() {
      if (this.currentStep === 0) {
        return
      }
      this.currentStep--
    },

    nextHandler() {
      if (this.currentStep >= 5) {
        return
      }
      this.currentStep++
    }
  },

  computed: {
    isPrevDisabled() {
      return this.currentStep === 0
    },

    isNextDisabled() {
      return this.templates[this.currentStep]?.variants ? !this.templates[this.currentStep].variants.find(item => item.selected === true) : false
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.calculator {
  padding: 0;
}
:deep(.modal) {
  width: 100%;
  max-width: 100%;
  height: 100vh;
  border-radius: 0;
  overflow: auto;

  @media only screen and (min-width: 1160px) {
    padding-top: 44px;
  }
}
.calculator__container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 56px;

  @media only screen and (min-width: 760px) {
    padding: 0 30px;
  }

  @media only screen and (min-width: 1160px) {
    padding: 0;
    margin: 0 auto;
    max-width: 1160px;
  }
}
.calculator__wrapper {
  width: 100%;

  @media only screen and (min-width: 760px) {
    max-width: 618px;
    margin: 0 auto;
  }
}
.calculator-modal__nav {
  width: 100%;
}
.calculator-modal__progress {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.calculator-modal__progress {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.calculator-modal__step {
  width: calc(20% - 6px);
  height: 4px;
  border-radius: 8px;
  background: $dark-700;

  &.active {
    background: $dark-300;
  }
}
.calculator-modal__button-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
}
.calculator-modal__back {
  width: auto;
  background: transparent;
  font-size: 14px;
  font-weight: 700;
  line-height: 160%;
  color: $white;
  pointer-events: all;

  &.disabled {
    color: #2e3038;
    pointer-events: none;
  }
}
.calculator-modal__next {
  max-width: 110px;
  transition: all .3s ease;

  &.disabled {
    pointer-events: none;
    opacity: .5;
  }
}
</style>
<template>
  <div class="calculator-modal_final">
    <div class="calculator-modal_final-title">Готово! Орієнтована вартість вашого розумного будинку:</div>
    <div class="calculator-modal_final-dropdown" :class="{'active': isDropdownOpen}">
      <div class="calculator-modal_final-dropdown-header" @click="isDropdownOpen = !isDropdownOpen">
        <div class="calculator-modal_final-dropdown-left">
          <div class="calculator-modal_final-dropdown-title total">~ ${{ totalPrice }}</div>
          <div class="calculator-modal_final-dropdown-icon">
            <img src="~/assets/gray-information.svg" alt="Icon">
            <div class="calculator-modal_final-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="5" viewBox="0 0 13 5" fill="none">
                <path d="M12.5 5L7.95308 1.08768C7.2209 0.457695 6.1431 0.440996 5.39176 1.048L0.5 5L12.5 5Z" fill="#2E3038"></path>
              </svg>
              Ціна розрахована на основі необхідного мінімуму для обраних функцій,
              типу та кількості кімнат. Наприклад, якщо у будинку одна ванна кімната
              та одна кухня, системі антипотопу у базі необхідно 2 датчика води
              (по одному у кожну з кімнат).
            </div>
          </div>
        </div>
        <div class="calculator-modal_final-dropdown-right">
          <span>Детальні розрахунки</span>
          <img src="~/assets/min-white-arrow-right.svg" alt="Arrow icon">
        </div>
      </div>
      <div class="calculator-modal_final-dropdown-body">

        <div class="calculator-modal_final-dropdown-item">
          <div class="calculator-modal_final-dropdown-item-wrapper">
            <div class="calculator-modal_final-dropdown-item-title">Smart Hub</div>
            <div class="calculator-modal_final-dropdown-item-text text">Пристрій, що буде керувати усіма системами та датчиками.</div>
          </div>
          <div class="calculator-modal_final-dropdown-item-value">$220</div>
        </div>

        <div class="calculator-modal_final-dropdown-item">
          <div class="calculator-modal_final-dropdown-item-wrapper">
            <div class="calculator-modal_final-dropdown-item-title">Безпека та захист</div>
            <div
              v-for="item in securityFunctionsText"
              :key="item"
              v-html="removeBrFromText(item)"
              class="calculator-modal_final-dropdown-item-text text"
            ></div>
          </div>
          <div class="calculator-modal_final-dropdown-item-value">${{ securityFunctionsTotal }}</div>
        </div>


        <div class="calculator-modal_final-dropdown-item">
          <div class="calculator-modal_final-dropdown-item-wrapper">
            <div class="calculator-modal_final-dropdown-item-title">Комфорт та продуктивність</div>
            <div
              v-for="item in comfortFunctionsText"
              :key="item"
              v-html="removeBrFromText(item)"
              class="calculator-modal_final-dropdown-item-text text"
            ></div>
          </div>
          <div class="calculator-modal_final-dropdown-item-value">${{ comfortFunctionsTotal }}</div>
        </div>

        <div class="calculator-modal_final-dropdown-item">
          <div class="calculator-modal_final-dropdown-item-wrapper">
            <div class="calculator-modal_final-dropdown-item-title">Проектування</div>
            <div class="calculator-modal_final-dropdown-item-text text">Ми узгодимо з вами функції та бюджет і спроектуємо систему та
              розміщення вузлів розумного будинку. </div>
          </div>
          <div class="calculator-modal_final-dropdown-item-value">$110</div>
        </div>
        <div class="calculator-modal_final-dropdown-item">
          <div class="calculator-modal_final-dropdown-item-wrapper">
            <div class="calculator-modal_final-dropdown-item-title">Монтаж та налаштування</div>
            <div class="calculator-modal_final-dropdown-item-text text">Після схвалення проекту розумного будинку ми встановимо все необхідне
              обладнання та програмне забезпечення, а також надамо вам детальні інструкції щодо його використання. Вам залишається займатися
              своїми справами, поки розумний будинок виконує все за вас!</div>
          </div>
          <div class="calculator-modal_final-dropdown-item-value">$290-560</div>
        </div>

      </div>
    </div>
    <p class="calculator-modal_final-text text">Вище наведена лише орієнтована вартість. Вона залежить у першу
      чергу від виробників пристроїв, бажаних сценаріїв автоматизації, а також складності встановлення
      обладнання. Ми можемо змінювати вказану суму, адаптуючи її під ваші потреби та можливості, для цього
      достатньо лише зв'язатися з нами!</p>

    <form class="calculator-modal_final-form" @submit.prevent="submit">
      <div class="calculator-modal_final-form-title">Залиште свій контакт, щоб детальніше дізнатись про встановлення Розумного дому</div>
      <Input
        v-model="name"
        class="calculator-modal_final-form-group"
        label="Імʼя*"
        id="name-consultation"
        placeholder="Введіть ваше імʼя"
        required
      />
      <Input
        v-model="phone"
        class="calculator-modal_final-form-group"
        label="Телефон*"
        id="phone"
        type="tel"
        name="Телефон"
        placeholder="+380XXXXXXXXX"
        pattern="^\+380[0-9]{9}$"
        required
      />
      <Input
        v-model="email"
        class="calculator-modal_final-form-group"
        label="Email"
        id="email"
        type="email"
        placeholder="Введіть ваш email"
      />
      <button class="calculator-modal_final-form-submit button blue" type="submit">Звʼяжіться зі мною</button>
    </form>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Input from "~/UI/Input.vue";

export default defineComponent({
  name: 'FormTemplate',

  components: {
    Input

  },

  props: {
    templates: {
      type: Array,
      default: () => []
    }
  },

  inject: ['toggleConfirmModal'],

  mounted() {
    const selectedSpace = this.templates[0].variants.find(spot => spot.selected)
    const selectedSpaceType = selectedSpace.label
    const selectedRooms = this.templates[3].rooms
    const flatSquare = this.templates[4].rangeValue
    this.selectedSecurityFunctions = this.templates[1].variants.filter(item => item.selected).map((variant) => {
      if (variant.roomType?.length) {
        const rooms = selectedRooms.filter(room => variant.roomType.includes(room.label))
        let quantity = 0
        rooms.forEach(room => {
          quantity += room.value
        })
        quantity = quantity !== 0 ? quantity : 1
        let price = quantity * variant.price[selectedSpaceType]
        this.setFunctions('security', price, quantity, variant.text)
        return {
          text: this.removeBrFromText(variant.text),
          label: variant.label,
          quantity,
          price
        }
      }
      let price = variant.price[selectedSpaceType]
      this.setFunctions('security', price, 1, variant.text)
      return {
        text: this.removeBrFromText(variant.text),
        label: variant.label,
        quantity: 1,
        price
      }
    })
    this.selectedComfortFunctions = this.templates[2].variants.filter(item => item.selected).map((variant) => {
      if (variant.roomType?.length) {
        const rooms = selectedRooms.filter(room => variant.roomType.includes(room.label))
        let quantity = 0
        rooms.forEach(room => {
          quantity += room.value
        })
        quantity = quantity !== 0 ? quantity : 1
        let price = quantity * variant.price[selectedSpaceType]
        if (flatSquare >= 80 && variant.label === 'controlOfLighting') {
          price += 300
        }
        this.setFunctions('comfort', price, quantity, variant.text)
        return {
          text: this.removeBrFromText(variant.text),
          label: variant.label,
          quantity,
          price
        }
      }
      let price = variant.price[selectedSpaceType]
      if (selectedSpaceType === 'office' && flatSquare >= 100 && variant.label === 'voiceAssistant') {
        price = price * 2
      }
      this.setFunctions('comfort', price, 1, variant.text)
      return {
        text: this.removeBrFromText(variant.text),
        label: variant.label,
        quantity: 1,
        price
      }
    })
    this.totalPrice += this.securityFunctionsTotal + this.comfortFunctionsTotal
  },

  data() {
    return {
      isDropdownOpen: false,
      name: '',
      phone: '+380',
      email: '',
      securityFunctionsTotal: 0,
      comfortFunctionsTotal: 0,
      securityFunctionsText: [],
      comfortFunctionsText: [],
      selectedSecurityFunctions: [],
      selectedComfortFunctions: [],
      totalPrice: 700
    }
  },

  methods: {
    async submit(event) {
      const formData = new FormData(event.target)
      const calculatorFunctions = [...this.selectedSecurityFunctions, ...this.selectedComfortFunctions]
      const rooms = this.templates[3].rooms
      formData.append('Тип приміщення:', this.templates[0].variants.find(spot => spot.selected).text)
      formData.append('Приблизна вартiсть:', `$${this.totalPrice}`)
      formData.append('Функції безпеки вартiсть:', `$${this.securityFunctionsTotal}`)
      formData.append('Функції комфорту вартiсть:', `$${this.comfortFunctionsTotal}`)
      formData.append('Функції', ' ')
      calculatorFunctions.map(item => {
        formData.append(item.text, item.quantity)
      })
      formData.append('Кімнати', ' ')
      rooms.map(room => {
        formData.append(this.removeBrFromText(room.name), room.value)
      })
      // try {
      //   await fetch('https://formspree.io/f/mvojazwd', {
      //     method: 'POST',
      //     body: formData,
      //     headers: {
      //       'Accept': 'application/json'
      //     }
      //   })
      //   this.toggleConfirmModal()
      //   event.target.reset()
      // } catch (error) {
      //   console.log(error)
      // }
    },

    setFunctions(template, price, quantity, text) {
      if (template === 'security') {
        this.securityFunctionsTotal += price
        this.securityFunctionsText.push(`${text} ${quantity}шт.`)
      } else {
        this.comfortFunctionsTotal += price
        this.comfortFunctionsText.push(`${text} ${quantity}шт.`)
      }
    },

    removeBrFromText(text) {
      return text.replace(/\<br\>/g, '')
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.calculator-modal_final-title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 24px;
}

.calculator-modal_final-dropdown {
  border-radius: 14px;
  background: $dark-800;
  margin-bottom: 16px;
  transition: all .3s ease;

  &.active {

    .calculator-modal_final-dropdown-body {
      padding-bottom: 22px;
      max-height: 1000px;
    }

    .calculator-modal_final-dropdown-right img {
      transform: rotate(270deg);
    }

    &:hover {
      background: $dark-800;
    }
  }

  &:hover {
    background: $dark-700;
  }
}

.calculator-modal_final-dropdown-header {
  padding: 22px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.calculator-modal_final-dropdown-left {
  display: flex;
  align-items: center;
}

.calculator-modal_final-dropdown-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  color: $blue;
  margin-right: 6px;
}

.calculator-modal_final-dropdown-icon {
  position: relative;

  &:hover {

    .calculator-modal_final-info {
      opacity: 1;
      pointer-events: all
    }
  }
}

.calculator-modal_final-info {
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

.calculator-modal_final-dropdown-right {
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
    color: $white;
    margin-right: 4px;
  }

  img {
    transition: all .5s ease;
    transform: rotate(90deg);
  }
}

.calculator-modal_final-dropdown-body {
  width: 100%;
  max-height: 0;
  transition: all .5s ease;
  padding-left: 24px;
  padding-right: 24px;
  overflow: hidden;
}

.calculator-modal_final-dropdown-item {
  width: 100%;
  padding: 12px 0;
  border-top: 1px solid $dark-600;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.calculator-modal_final-dropdown-item-title {
  font-size: 14px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 2px;
}

.calculator-modal_final-dropdown-item-text {
  font-size: 13px;

  br {
    display: none;
  }
}

.calculator-modal_final-dropdown-item-value {
  font-size: 16px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-left: 24px;
  text-wrap: nowrap;
}

.calculator-modal_final-text {
  font-size: 13px;
  margin-bottom: 32px;
}

.calculator-modal_final-form {
  padding-bottom: 22px;
}

.calculator-modal_final-form-title {
  font-size: 19px;
  font-weight: 700;
  line-height: 150%;
  color: $white;
  margin-bottom: 16px;
}

.calculator-modal_final-form-group {
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
}

.calculator-modal_final-form-submit {
  margin-top: 24px;
}
</style>
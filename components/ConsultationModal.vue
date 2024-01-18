<template>
  <Modal :isOpen="isOpen" @closeModal="toggleConsultationModal">
    <div class="form-modal">
      <div class="form-modal__left">
        <img class="form-modal__icon" src="../assets/form-mail-icon.svg" alt="Mail Icon">
        <div class="form-modal__title">Залишилися питання? Замовте безкоштовну консультацію</div>
        <div class="form-modal__text">Ми допоможемо підібрати системи розумного будинку саме під ваші потреби та бюджет.</div>
      </div>
      <div class="form-modal__right">
        <form class="form-modal__form" @submit.prevent="onSubmit">
          <div class="form-modal__form-title">Залиште свої контакти і ми звʼяжемося з вами
            у найближчий робочий час</div>
          <Input
            v-model="name"
            label="Імʼя*"
            id="name-consultation"
            placeholder="Введіть ваше імʼя"
            required
          />
          <Input
            v-model="phone"
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
            label="Email"
            id="email"
            type="email"
            placeholder="Введіть ваш email"
          />
          <button class="form-modal__button button blue consultation" type="submit">
            <span>Передзвоніть мені</span>
          </button>
        </form>
        <div class="form-modal__contact-title">Або звʼяжіться з нами вже зараз</div>
        <div class="form-modal__contacts">
          <a class="form-modal__contact-item" href="https://t.me/thecaresmart" target="_blank">
            <img src="../assets/telegram-icon.svg" alt="Telegram icon">
          </a>
          <a class="form-modal__contact-item" href="https://tinyurl.com/4nrz8nch" target="_blank">
            <img src="../assets/viber-icon.svg" alt="Viber icon">
          </a>
          <a class="form-modal__contact-item phone" href="tel:+380983125981">
            <img src="../assets/white-phone.svg" alt="Phone icon">
          </a>
        </div>
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
  name: 'ConsultationModal',

  components: {
    Button,
    Input,
    Modal
  },

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  inject: ['toggleConsultationModal', 'toggleConfirmModal'],

  data() {
    return {
      name: '',
      phone: '+380',
      email: '',
    }
  },

  methods: {
    async onSubmit(event) {
      try {
        await fetch('https://formspree.io/f/mwkdovry', {
          method: 'POST',
          body: new FormData(event.target),
          headers: {
            'Accept': 'application/json'
          }
        })
        this.toggleConsultationModal()
        this.toggleConfirmModal()
      } catch (error) {
        this.toggleConsultationModal()
        throw error
      } finally {
        this.name = ''
        this.phone = '+380'
        this.email = ''
      }

    },
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

</style>
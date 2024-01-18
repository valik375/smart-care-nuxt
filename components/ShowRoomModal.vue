<template>
  <Modal :isOpen="isOpen" @closeModal="toggleShowRoomModal">
    <div class="form-modal">
      <div class="form-modal__left">
        <img class="form-modal__icon" src="../assets/form-mail-icon.svg" alt="Mail Icon">
        <div class="form-modal__title">Запис у шоурум в Києві</div>
        <div class="form-modal__text">У нашому шоурумі ви побачите системи оснащення розумного будинку та як вони
          працюють. Ми допоможемо підібрати необхідне оснащення згідно ваших потреб та бюджету.</div>
      </div>
      <div class="form-modal__right">
        <form class="form-modal__form" @submit.prevent="onSubmit">
          <div class="form-modal__form-title">Залиште свої контакти і бажану дату з часом, ми передзвонимо
            вам для їх узгодження</div>
          <Input
            v-model="name"
            label="Імʼя*"
            id="name"
            type="text"
            name="Імʼя"
            placeholder="Введіть ваше імʼя"
            required
          />
          <Input
            v-model="date"
            label="Бажана дата та час*"
            id="date"
            type="date"
            name="Дата"
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
          <Button class="form-modal__button blue" type="submit">
            <span>Передзвоніть мені</span>
          </Button>
        </form>
        <div class="form-modal__location">
          <img src="../assets/gray-location.svg" alt="Location Icon">
          м. Київ, вул. Вишняковська 2
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
  name: 'ShowRoomModal',
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

  inject: ['toggleShowRoomModal', 'toggleConfirmModal'],

  data() {
    return {
      name: '',
      date: '',
      phone: '+380',
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
        this.toggleShowRoomModal()
        this.toggleConfirmModal()
      } catch (error) {
        this.toggleShowRoomModal()
        throw error
      } finally {
        this.name = ''
        this.date = ''
        this.phone = '+380'
      }
    },
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

</style>
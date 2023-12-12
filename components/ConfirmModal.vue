<template>
  <Modal class="confirm-modal" :isOpen="isOpen" @closeModal="closeModal">
    <div class="confirm-modal__accept">
      <img src="~/assets/white-accept.svg" alt="Icon">
    </div>
    <div class="confirm-modal__title">Дякуємо!</div>
    <div class="confirm-modal__text text">Ми отримали ваші контактні дані та незабаром звʼяжемося з вами.</div>
    <button class="confirm-modal__button button gray" @click="closeModal">Повернутися на головну</button>
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
  name: 'ConfirmModal',

  components: {
    Button,
    Input,
    Modal
  },

  inject: ['toggleConfirmModal'],

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    closeModal() {
      this.toggleConfirmModal()
      this.$router.push('/')
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

:deep(.modal) {
  margin: auto;
  padding: 32px;
}
.confirm-modal__accept {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5d75ef;
  border-radius: 100px;
  margin: 0 auto 16px;
}
.confirm-modal__title {
  font-size: 14px;
  font-weight: 500;
  line-height: 165%;
  color: #eeeff1;
  text-align: center;
  margin-bottom: 8px;
}
.confirm-modal__text {
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
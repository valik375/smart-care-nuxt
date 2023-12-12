<template>
  <Banner @openModal="toggleVisibility"/>
  <CalculatorModal :isOpen="isModalOpen"/>
</template>

<script>
import {defineComponent} from 'vue'
import Banner from "~/components/calculatorSections/Banner.vue";
import CalculatorModal from "~/components/calculatorSections/CalculatorModal.vue";

export default defineComponent({
  name: 'Calculator',
  components: {
    CalculatorModal,
    Banner
  },

  provide() {
    return {
      toggleModal: () => this.toggleVisibility()
    }
  },

  data() {
    return {
      isModalOpen: false
    }
  },

  methods: {
    toggleVisibility() {
      this.isModalOpen = !this.isModalOpen
      document.body.style.overflowY = this.isModalOpen ? 'hidden' : 'auto'
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

</style>
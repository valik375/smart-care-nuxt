<template>
  <Loader v-if="!isLoaded" />
  <Banner @openModal="toggleVisibility"/>
  <Showroom />
  <CalculatorModal :isOpen="isModalOpen"/>
</template>

<script>
import {defineComponent} from 'vue'
import Banner from "~/components/calculatorSections/Banner.vue";
import CalculatorModal from "~/components/calculatorSections/CalculatorModal.vue";
import Loader from "~/UI/Loader.vue";
import Showroom from "~/components/aboutUsSections/Showroom.vue";

export default defineComponent({
  name: 'Calculator',

  components: {
    Showroom,
    Loader,
    CalculatorModal,
    Banner
  },

  provide() {
    return {
      toggleModal: () => this.toggleVisibility()
    }
  },

  created() {
    setTimeout(() => {
      this.isLoaded = true
    }, 500)
  },

  data() {
    return {
      isLoaded: false,
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
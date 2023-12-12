<template>
  <Banner />
  <Portfolio />
  <Team />
  <History />
  <ProductsSection />
  <AdvantagesSection />
  <Showroom />
</template>

<script>
import {defineComponent} from 'vue'
import Banner from "~/components/aboutUsSections/Banner.vue";
import Portfolio from "~/components/aboutUsSections/Portfolio.vue";
import Team from "~/components/aboutUsSections/Team.vue";
import History from "~/components/aboutUsSections/History.vue";
import ProductsSection from "~/components/indexSections/ProductsSection.vue";
import AdvantagesSection from "~/components/indexSections/AdvantagesSection.vue";
import Showroom from "~/components/aboutUsSections/Showroom.vue";

export default defineComponent({
  name: 'AboutUs',

  components: {
    Showroom,
    AdvantagesSection,
    ProductsSection,
    History,
    Team,
    Banner,
    Portfolio
  },

  data() {
    return {

    }
  },

  methods: {

  }
})
</script>

<style scoped lang="scss">
@import 'vars';

</style>
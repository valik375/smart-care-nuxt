<template>
  <Loader v-if="!isLoaded" />
  <Banner />
  <Portfolio />
  <Team />
  <History />
  <ProductsSection class="products" />
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
import Loader from "~/UI/Loader.vue";

export default defineComponent({
  name: 'AboutUs',

  components: {
    Loader,
    Showroom,
    AdvantagesSection,
    ProductsSection,
    History,
    Team,
    Banner,
    Portfolio
  },

  created() {
    setTimeout(() => {
      this.isLoaded = true
    }, 500)
  },

  data() {
    return {
      isLoaded: false
    }
  }
})
</script>

<style lang="scss" scoped>
.products {
  background: #151619;
}
</style>

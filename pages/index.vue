<template>
  <Loader v-if="!isLoaded"/>
  <BannerSection/>
  <ProductsSection />
  <StatisticsSection/>
  <ServiceSection/>
  <FeaturesSection/>
  <AntiFloodSection />
  <ProcessesAutomationSection />
  <AnimationSection />
  <ConvenientControlSection />
  <Portfolio class="home-portfolio" />
  <SaveBillSection />
  <StatisticsSection/>
  <HaveQuestionsSection />
  <BlogSection />
  <BuildSystemSection isSeoText />
</template>

<script>
import {defineComponent} from 'vue'
import BannerSection from "~/components/indexSections/BannerSection.vue";
import StatisticsSection from "~/components/indexSections/StatisticsSection.vue";
import ServiceSection from "~/components/indexSections/ServiceSection.vue";
import FeaturesSection from "~/components/indexSections/FeaturesSection.vue";
import AntiFloodSection from "~/components/indexSections/AntiFloodSection.vue";
import ProcessesAutomationSection from "~/components/indexSections/ProcessesAutomationSection.vue";
import AnimationSection from "~/components/indexSections/AnimationSection.vue";
import ConvenientControlSection from "~/components/indexSections/ConvenientControlSection.vue";
import ProductsSection from "~/components/indexSections/ProductsSection.vue";
import SaveBillSection from "~/components/indexSections/SaveBillSection.vue";
import HaveQuestionsSection from "~/components/indexSections/HaveQuestionsSection.vue";
import BuildSystemSection from "~/components/indexSections/BuildSystemSection.vue";
import Loader from "~/UI/Loader.vue";
import Portfolio from "~/components/aboutUsSections/Portfolio.vue";
import BlogSection from "~/components/indexSections/BlogSection.vue";

export default defineComponent({
  name: 'Index',

  components: {
    BlogSection,
    Portfolio,
    Loader,
    BuildSystemSection,
    HaveQuestionsSection,
    SaveBillSection,
    ProductsSection,
    ConvenientControlSection,
    AnimationSection,
    ProcessesAutomationSection,
    AntiFloodSection,
    FeaturesSection,
    ServiceSection,
    StatisticsSection,
    BannerSection
  },

  setup() {
    useSeoMeta({
      title: 'Розумний будинок під ключ - Монтаж системи розумного будинку в Києві, Україні | Smart Care',
      description: "⏩️ Замовити систему Розумний будинок під ключ ⭐ Установка Розумного будинку в квартирі або котеджі з гарантією ✅ Індивідуальне проєктування і монтаж системи ✅ Підбір обладнання та обслуговування | Smart Care",
      ogTitle: 'Smart Care | Головна',
      ogDescription: 'Бездротовий розумний будинок твоєї мрії',
      ogImage: 'https://www.thecaresmart.com/assets/min-blue-logo.svg',
    })
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
.home-portfolio {

  :deep(.about-us-portfolio__container) {
    padding-top: 50px;

    @media only screen and (min-width: 760px) {
      padding-top: 80px;
    }

    @media only screen and (min-width: 1160px) {
      padding-top: 120px;
    }
  }
}
</style>

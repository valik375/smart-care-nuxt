<template>
  <BannerSection/>
  <StatisticsSection/>
  <ServiceSection/>
  <FeaturesSection/>
  <AntiFloodSection />
  <ProcessesAutomationSection />
  <AnimationSection />
  <ConvenientControlSection />
  <AdvantagesSection />
  <StatisticsSection/>
  <WirelessSystemSection />
  <ProductsSection />
  <SaveBillSection />
  <HaveQuestionsSection />
  <BuildSystemSection />
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
import AdvantagesSection from "~/components/indexSections/AdvantagesSection.vue";
import WirelessSystemSection from "~/components/indexSections/WirelessSystemSection.vue";
import ProductsSection from "~/components/indexSections/ProductsSection.vue";
import SaveBillSection from "~/components/indexSections/SaveBillSection.vue";
import HaveQuestionsSection from "~/components/indexSections/HaveQuestionsSection.vue";
import BuildSystemSection from "~/components/indexSections/BuildSystemSection.vue";

export default defineComponent({
  name: 'Index',
  components: {
    BuildSystemSection,
    HaveQuestionsSection,
    SaveBillSection,
    ProductsSection,
    WirelessSystemSection,
    AdvantagesSection,
    ConvenientControlSection,
    AnimationSection,
    ProcessesAutomationSection,
    AntiFloodSection,
    FeaturesSection,
    ServiceSection,
    StatisticsSection,
    BannerSection
  },
})
</script>

<style scoped lang="scss">
@import 'vars';

</style>
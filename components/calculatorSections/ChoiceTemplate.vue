<template>
  <div class="calculator-modal__template choose">
    <SectionTitle
      :title="template.title"
      :text="template.text"
    />
    <div class="calculator-modal__template-choose">

      <div
        v-for="(variant, index) in template.variants"
        :key="variant.text"
        :class="{'selected': variant.selected}"
        class="calculator-modal__template-choose-item"
        @click="selectVariant(index)"
      >
        <img :src="variant.icon" :alt="variant.text">
        <span v-html="variant.text"></span>
      </div>

    </div>
    <div v-if="template.subtext" class="calculator-modal__template-choose-subtext text">{{ template.subtext }}</div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";
import CardDropdown from "~/UI/CardAccordion.vue";
import Button from "~/UI/Button.vue";

export default defineComponent({
  name: 'ChoiceTemplate',

  components: {
    CardDropdown,
    SectionTitle,
    Button
  },

  props: {
    template: {
      type: Object,
      default: () => {}
    },
    multipleChoice: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    selectVariant(index) {
      if (!this.multipleChoice) {
        this.template.variants.map(item => item.selected = false)
      }
      this.template.variants[index].selected = !this.template.variants[index].selected
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.calculator-modal__template {
  padding-bottom: 30px;
}
.calculator-modal__template-choose {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.calculator-modal__template-choose-item {
  width: calc(50% - 4px);
  height: 124px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 14px;
  border: 1px solid #2e3038;
  margin-bottom: 8px;
  transition: all .3s ease;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 12px;
  }

  span {
    font-size: 13px;
    font-weight: 700;
    line-height: 155%;
    color: #eeeff1;
    text-align: center;
  }

  &.selected {
    border: 1px solid #5d75ef;
    background: rgba(93,117,239,.05);
  }

  @media only screen and (min-width: 1160px) {
    width: calc(33.3333333333% - 11px);
    height: 140px;
    margin-bottom: 0;
  }
}
</style>
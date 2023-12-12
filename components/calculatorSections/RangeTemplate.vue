<template>
  <div class="calculator-modal__template range">
    <SectionTitle
      :title="template.title"
      :text="template.text"
    />
    <div class="calculator-modal__range-wrapper">

      <div class="calculator-modal__input-wrapper">
        <Input
          :modelValue="template.rangeValue"
          class="calculator-modal__range-value"
          type="text"
          @onInput="changeRange"
        />
        <span class="calculator-modal__label">m²</span>
      </div>
      <div class="calculator-modal__range">
        <input
          type="range"
          :value="template.rangeValue"
          min="10"
          max="200"
          @change="changeRange"
        >
        <div class="calculator-modal__range-splitter left"></div>
        <div class="calculator-modal__range-splitter center"></div>
        <div class="calculator-modal__range-splitter right"></div>
        <div class="calculator-modal__range-values">
          <div class="calculator-modal__range-value">10</div>
          <div class="calculator-modal__range-value">100</div>
          <div class="calculator-modal__range-value">200</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";
import Input from "~/UI/Input.vue";

export default defineComponent({
  name: 'RangeTemplate',

  components: {
    Input,
    SectionTitle
  },

  props: {
    template: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    changeRange(event) {
      this.template.rangeValue = event.target.value
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.calculator-modal__input-wrapper {
  position: relative;
}
.calculator-modal__range-value :deep(input) {
  text-align: center;
  font-weight: 700;
  font-size: 20px;
}
.calculator-modal__label {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #393d46;
  font-weight: 700;
  font-size: 20px;
}
.calculator-modal__range {
  width: 100%;
  position: relative;
  margin-top: 20px;

  input {
    -webkit-appearance: none;
    appearance: none;
    background: $dark-700;
    width: 100%;
    height: 14px;
    border-radius: 100px;
    outline: 0;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      height: 14px;
      background: $dark-700;
      border-radius: 100px;
      overflow: hidden;
    }

    &::-webkit-slider-thumb {
      border: 3px solid $white;
      height: 14px;
      width: 14px;
      border-radius: 100px;
      background: $blue;
      cursor: pointer;
      box-shadow: -507px 0 0 500px $blue;
    }

    &::-moz-range-thumb {
      border: 3px solid $white;
      height: 14px;
      width: 14px;
      border-radius: 100px;
      background: $blue;
      cursor: pointer;
      box-shadow: -507px 0 0 500px $blue;
    }

    &::-ms-thumb {
      border: 3px solid $white;
      height: 14px;
      width: 14px;
      border-radius: 100px;
      background: $blue;
      cursor: pointer;
      box-shadow: -507px 0 0 500px $blue;
    }
  }
}
.calculator-modal__range-splitter {
  width: 2px;
  height: 16px;
  background: #17181c;
  display: block;
  top: 1px;
  position: absolute;

  &.left {
    left: 25%;
    transform: translateX(-50%);
  }
  &.center {
    left: 49%;
    transform: translateX(-50%);
  }
  &.right {
    left: 73%;
    transform: translateX(-50%);
  }
}
.calculator-modal__range-values {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}
.calculator-modal__range-value {
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;
  color: #575c6b;
}
</style>
<template>
  <div class="section-title">
    <h3 class="section-title__subtitle">{{ subtitle }}</h3>
    <h2 class="section-title__title" v-html="title"></h2>
    <p class="section-title__text text">{{ text }}</p>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'SectionTitle',

  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.section-title {
  margin-bottom: 12px;

  .section-title__subtitle {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.12px;
    text-transform: uppercase;
    color: $blue;
    margin-bottom: 4px;

    @media only screen and (min-width: 1160px) {
      font-size: 15px;
      line-height: 150%;
      letter-spacing: 0.15px;
    }
  }

  .section-title__title {
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0.22px;
    color: $white;
    margin-bottom: 12px;

    :deep(span) {
      color: $blue;
    }

    @media only screen and (min-width: 1160px) {
      font-size: 28px;
      line-height: 150%;
      letter-spacing: 0.28px;
    }
  }
}
</style>
<template>
  <section class="benefits">
    <div class="benefits__container container">
      <div class="benefits__list">
        <div v-for="(item, index) in section" class="benefits__item card">
          <div class="benefits__item-count">0{{ index + 1 }}</div>
          <div class="benefits__item-title">{{ item.title }}</div>
          <div class="benefits__item-text text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Benefits',

  components: {

  },

  props: {
    section: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.benefits__list {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (min-width: 1160px) {
    width: 100%;
    flex-direction: row;
  }
}

.benefits__item {
  width: 100%;
  padding: 24px;
}

.benefits__item-count {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: $blue;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
}

.benefits__item-title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 8px;
}

.benefits__item-text {
  font-size: 14px;
  line-height: 165%;
}
</style>
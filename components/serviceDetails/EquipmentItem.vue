<template>
  <div class="equipment__slide swiper-slide card">
    <div class="equipment__slide-image">
      <AsyncImage :img="item.image" alt="Product image" />
    </div>
    <div class="equipment__slide-title">{{ item.title }}</div>
    <div class="equipment__slide-text text">{{ item.text }}</div>
    <button class="equipment__button button blue consultation">
      <span>Встановити у мій дім</span>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AsyncImage from "~/UI/AsyncImage.vue";

export default defineComponent({
  name: 'EquipmentItem',

  components: {
    AsyncImage

  },

  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.equipment__slide {
  padding: 24px;
}

.equipment__slide-image {
  width: 100%;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.equipment__slide-title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 8px;
}

.equipment__slide-text {
  font-size: 14px;
  line-height: 165%;
  margin-bottom: 24px;
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
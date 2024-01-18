<template>
  <div class="equipment__slide swiper-slide card">
    <div class="equipment__slide-image">
      <AsyncImage :img="item.image" alt="Product image" />
    </div>
    <div class="equipment__slide-title" v-html="item.title"></div>
    <div class="equipment__slide-text text" v-html="item.text"></div>
    <button class="equipment__button button blue" @click="toggleConsultationModal">
      <span>Встановити у мій дім</span>
    </button>
  </div>
</template>

<script>
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
  },

  inject: ['toggleConsultationModal']
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
    object-fit: contain;
  }
}

.equipment__slide-title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 8px;
  white-space: nowrap;
}

.equipment__slide-text {
  font-size: 13.8px;
  line-height: 165%;
  margin-bottom: 24px;
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
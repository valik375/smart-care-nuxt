<template>
  <div class="about-card__list">

    <div
      v-for="(item, index) in list"
      :key="index"
      class="about-card card"
    >
      <div class="about-card__head">
        <div class="about-card__icon icon-blue">
          <img :src="item.icon" :alt="item.title">
        </div>
        <Badge class="about-card__tag" :text="item.badge" />
      </div>
      <div class="about-card__title">{{ item.title }}</div>
      <div class="about-card__text text" v-html="item.text"/>
    </div>

  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Badge from "~/UI/Badge.vue";

export default defineComponent({
  name: 'AboutCard',

  components: {
    Badge
  },

  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.about-card__list {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
}
.about-card {
  margin-bottom: 12px;

  @media only screen and (min-width: 1160px) {
    width: calc(33.3333333333% - 20px);
  }
}
.about-card__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}
.about-card__tag {
  font-size: 13px;
  font-weight: 700;
  line-height: 140%;
  color: #eeeff1;
}
.about-card__title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: #eeeff1;
  margin-bottom: 8px;
}
.about-card__text {
  font-size: 14px;
}
</style>
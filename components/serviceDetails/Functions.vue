<template>
  <section class="functions navigation-section">
    <div class="functions__container container two-column-section">

      <div class="functions__left column-left">
        <div class="column-image">
          <AsyncImage :img="section.image" alt="Function Image"/>
        </div>
      </div>

      <div class="functions__right column-right">
        <div class="functions__info">
          <div class="functions__title-wrapper section-title-wrapper">
            <h3 class="functions__subtitle section-subtitle">Функції</h3>
            <h2 class="functions__title section-title">{{ section.title }}</h2>
          </div>
          <p class="functions__text text">{{ section.text }}</p>
        </div>
        <div class="functions__image column-image">
          <img loading="lazy" :src="image" alt="Card with wireless signal">
        </div>

        <div class="functions__dropdown-list dropdown-list">
          <CardDropdown
            v-for="(item, index) in section.dropdownList"
            :key="index"
            :index="index + 1"
            :title="item.title"
            :text="item.text"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Accordion from "~/UI/Accordion.vue";
import CardDropdown from "~/UI/CardAccordion.vue";
import AsyncImage from "~/UI/AsyncImage.vue";

export default defineComponent({
  name: 'Functions',

  components: {
    AsyncImage,
    CardDropdown,
    Accordion

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

.functions {
  padding-top: 48px;

  @media only screen and (min-width: 760px) {
    padding-top: 90px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.functions__info {
  margin-bottom: 32px;
}
</style>
<template>
  <a :href="card.href" class="contact-card card" @click="onClick">
    <div class="contact-card__icon">
      <img :src="card.icon" :alt="card.title">
    </div>
    <div class="contact-card__content">
      <div class="contact-card__title">{{ card.title }}</div>
      <div class="contact-card__text text">{{ card.text }}</div>
    </div>
  </a>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'ContactCard',

  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    onClick() {
      if (this.card.handler) {
        this.card.handler()
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';


.contact-card {
  width: 100%;
  padding: 16px;
  position: relative;
  cursor: pointer;

  &:hover .contact-card__text {
    color: $white;
    text-decoration: underline;
  }
}

.contact-card__icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: $dark-600;
  margin-bottom: 16px;

  @media only screen and (min-width: 1160px) {
    width: 40px;
    height: 40px;
  }
}

.contact-card__title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 4px;

  @media only screen and (min-width: 1160px) {
    font-size: 18px;
  }
}

.contact-card__text {
  font-size: 14px;
  transition: all .3s ease;

  @media only screen and (min-width: 1160px) {
    font-size: 13px;
  }
}
</style>
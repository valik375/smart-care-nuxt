<template>
  <a :href="card.href" class="contact-card card" @click="onClick">
    <div class="contact-card__icon" :class="[card.title.toLowerCase()]">
      <img :src="card.icon" :alt="card.title">
    </div>
    <div class="contact-card__content">
      <div class="contact-card__title">{{ card.title }}</div>
      <div class="contact-card__text text">{{ card.text }}</div>
    </div>
    <span v-if="card.cta" class="contact-card__cta">
      Запланувати візит
      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4112_5959)">
          <path d="M4.25 9.7501H13.145L10.4225 13.0201C10.3595 13.0959 10.312 13.1834 10.2828 13.2776C10.2536 13.3718 10.2432 13.4708 10.2522 13.569C10.2705 13.7674 10.3668 13.9503 10.52 14.0776C10.6732 14.2049 10.8706 14.2662 11.0689 14.2479C11.2673 14.2296 11.4502 14.1333 11.5775 13.9801L15.3275 9.4801C15.353 9.4441 15.3755 9.4066 15.395 9.3676C15.395 9.3301 15.4325 9.3076 15.4475 9.2701C15.4815 9.18411 15.4993 9.09257 15.5 9.0001C15.4993 8.90763 15.4815 8.81609 15.4475 8.7301C15.4475 8.6926 15.41 8.6701 15.395 8.6326C15.3753 8.59351 15.3527 8.5559 15.3275 8.5201L11.5775 4.0201C11.5145 3.94416 11.4372 3.88138 11.35 3.83536C11.2627 3.78935 11.1672 3.761 11.069 3.75195C10.9707 3.74289 10.8717 3.7533 10.7775 3.78258C10.6833 3.81187 10.5958 3.85945 10.52 3.9226C10.444 3.9855 10.3811 4.06281 10.335 4.15007C10.289 4.23733 10.2606 4.33283 10.2515 4.43109C10.2425 4.52935 10.2529 4.62843 10.2823 4.72265C10.3116 4.81686 10.3593 4.90436 10.4225 4.9801L13.145 8.2501H4.25C4.05109 8.2501 3.86032 8.32912 3.71967 8.46977C3.57902 8.61042 3.5 8.80119 3.5 9.0001C3.5 9.19901 3.57902 9.38978 3.71967 9.53043C3.86032 9.67108 4.05109 9.7501 4.25 9.7501Z" fill="#84899A"/>
        </g>
        <defs>
          <clipPath id="clip0_4112_5959">
            <rect width="18" height="18" fill="white" transform="translate(0.5)"/>
          </clipPath>
        </defs>
      </svg>
    </span>
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

  &.telegram img,
  &.viber img {
    width: 100%;
    height: 100%;
  }

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
.contact-card__cta {
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 0 16px;
  border-radius: 7px;
  background: $dark-700;

  font-size: 13px;
  font-weight: 700;
  line-height: 150%;
  color: #84899A;

  svg {
    margin-left: 4px;
  }
}
</style>
<template>
  <section class="equipment">
    <div class="equipment__container container">
      <div class="equipment__info">
        <div class="equipment__title-wrapper section-title-wrapper">
          <h3 class="equipment__subtitle section-subtitle">Обладнання</h3>
          <h2 class="equipment__title section-title">{{ section.title }}</h2>
        </div>
        <p class="equipment__text text">{{ section.text }}</p>
      </div>
      <div class="equipment__swiper-wrapper">
        <Swiper
          class="equipment-swiper"
          :modules="modules"
          :options="swiperOptions"
          :breakpoints="swiperOptions.breakpoints"
          :slides-per-view="swiperOptions.slidesPerView"
          :navigation="swiperOptions.navigation"
          :space-between="16"
        >
          <SwiperSlide v-for="(item, index) in section.items" :key="index">
            <EquipmentItem :item="item" />
          </SwiperSlide>
        </Swiper>

        <div class="equipment__swiper-prev swiper-prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3498_13439)">
              <path d="M19 12.9998H7.14L10.77 17.3598C10.854 17.4609 10.9174 17.5776 10.9563 17.7032C10.9953 17.8288 11.0091 17.9608 10.997 18.0917C10.9726 18.3562 10.8442 18.6001 10.64 18.7698C10.4358 18.9395 10.1725 19.0212 9.90808 18.9968C9.64365 18.9724 9.39974 18.844 9.23 18.6398L4.23 12.6398C4.196 12.5918 4.166 12.5418 4.14 12.4898C4.14 12.4398 4.09 12.4098 4.07 12.3598C4.02467 12.2451 4.00094 12.1231 4 11.9998C4.00094 11.8765 4.02467 11.7545 4.07 11.6398C4.07 11.5898 4.12 11.5598 4.14 11.5098C4.1663 11.4577 4.19638 11.4075 4.23 11.3598L9.23 5.35981C9.31395 5.25855 9.41705 5.17485 9.5334 5.11349C9.64974 5.05214 9.77705 5.01435 9.90803 5.00227C10.039 4.99019 10.1711 5.00408 10.2967 5.04312C10.4223 5.08217 10.539 5.14561 10.64 5.22981C10.7414 5.31368 10.8252 5.41675 10.8866 5.5331C10.948 5.64945 10.9859 5.77678 10.998 5.9078C11.01 6.03881 10.9961 6.17092 10.957 6.29654C10.9179 6.42216 10.8543 6.53882 10.77 6.63981L7.14 10.9998H19C19.2652 10.9998 19.5196 11.1052 19.7071 11.2927C19.8946 11.4802 20 11.7346 20 11.9998C20 12.265 19.8946 12.5194 19.7071 12.7069C19.5196 12.8945 19.2652 12.9998 19 12.9998Z" fill="#E3E4E8"/>
            </g>
            <defs>
              <clipPath id="clip0_3498_13439">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="equipment__swiper-next swiper-next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3498_7960)">
              <path d="M5 12.9998H16.86L13.23 17.3598C13.146 17.4609 13.0826 17.5776 13.0437 17.7032C13.0047 17.8288 12.9909 17.9608 13.003 18.0917C13.0274 18.3562 13.1558 18.6001 13.36 18.7698C13.5642 18.9395 13.8275 19.0212 14.0919 18.9968C14.3563 18.9724 14.6003 18.844 14.77 18.6398L19.77 12.6398C19.804 12.5918 19.834 12.5418 19.86 12.4898C19.86 12.4398 19.91 12.4098 19.93 12.3598C19.9753 12.2451 19.9991 12.1231 20 11.9998C19.9991 11.8765 19.9753 11.7545 19.93 11.6398C19.93 11.5898 19.88 11.5598 19.86 11.5098C19.8337 11.4577 19.8036 11.4075 19.77 11.3598L14.77 5.35981C14.6861 5.25855 14.583 5.17485 14.4666 5.11349C14.3503 5.05214 14.2229 5.01435 14.092 5.00227C13.961 4.99019 13.8289 5.00408 13.7033 5.04312C13.5777 5.08217 13.461 5.14561 13.36 5.22981C13.2586 5.31368 13.1748 5.41675 13.1134 5.5331C13.052 5.64945 13.0141 5.77678 13.002 5.9078C12.99 6.03881 13.0039 6.17092 13.043 6.29654C13.0821 6.42216 13.1457 6.53882 13.23 6.63981L16.86 10.9998H5C4.73478 10.9998 4.48043 11.1052 4.29289 11.2927C4.10536 11.4802 4 11.7346 4 11.9998C4 12.265 4.10536 12.5194 4.29289 12.7069C4.48043 12.8945 4.73478 12.9998 5 12.9998Z" fill="#E3E4E8"/>
            </g>
            <defs>
              <clipPath id="clip0_3498_7960">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import { Navigation } from 'swiper/modules'
import EquipmentItem from '~/components/serviceDetails/EquipmentItem.vue'

export default defineComponent({
  name: 'Equipment',

  components: {
    EquipmentItem
  },

  props: {
    section: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      modules: [Navigation]
    }
  },

  computed: {
    swiperOptions() {
      return  {
        slidesPerView: 1.2,
        spaceBetween: 16,
        autoHeight: true,
        navigation: {
          prevEl: '.equipment__swiper-prev',
          nextEl: '.equipment__swiper-next',
        },
        breakpoints: {
          540: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1160: {
            slidesPerView: 4,
          }
        }
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

:deep(.swiper-backface-hidden) {

  @media only screen and (min-width: 1260px) {
    .swiper-wrapper {
      justify-content: center !important;
    }
  }
}

.equipment {
  background: $dark-900;
  padding-top: 40px;

  @media only screen and (min-width: 760px) {
    padding-top: 60px;
  }
}

.equipment__info {
  margin-bottom: 32px;
  text-align: center;

  @media only screen and (min-width: 760px) {
    width: 100%;
    max-width: 512px;
    margin: 0 auto 64px;
  }
}

.equipment__swiper-wrapper {
  @media only screen and (min-width: 1160px) {
    position: relative;
  }
}

.equipment__swiper {
  overflow: visible;

  @media only screen and (min-width: 1160px) {
    overflow: hidden;
  }
}

.equipment__swiper-prev,
.equipment__swiper-next {
  display: none;

  &.swiper-button-lock {
    display: none;
  }

  @media only screen and (min-width: 1160px) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 8px;
    border: 1px solid $dark-550;
    background: $dark-600;
    z-index: 2;
    transition: background .3s ease;

    &.swiper-button-disabled {
      svg {
        opacity: .5;
      }
      &:hover {
        background: $dark-550;
      }
    }

    &:hover {
      background: $dark-500;
    }
  }
}
</style>
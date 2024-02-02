<template>
  <section class="about-us-team">
    <div class="about-us-team__container container">
      <div class="about-us-team__title">Наша команда</div>
      <div class="about-us-team__text text">Люди, що створюють магію для ваших будинків.</div>
      <div class="about-us-team__swiper-wrapper">

        <Swiper
          class="about-us-team__swiper"
          :modules="[]"
          :options="teamSwiperOptions"
          :breakpoints="teamSwiperOptions.breakpoints"
          :grid="teamSwiperOptions.grid"
          :slides-per-view="teamSwiperOptions.slidesPerView"
          :space-between="16"
        >
          <SwiperSlide class="about-us-team__swiper-slide card">
            <div class="about-us-team__swiper-image">
              <img src="~/assets/about-us-team-1.png" alt="Віталій Троїцький">
            </div>
            <div class="about-us-team__swiper-name">Віталій Троїцький</div>
            <div class="about-us-team__swiper-text text">Засновник SmartCare</div>
          </SwiperSlide>
          <SwiperSlide class="about-us-team__swiper-slide card">
            <div class="about-us-team__swiper-image">
              <img src="~/assets/about-us-team-2.png" alt="Осіпов Сергій">
            </div>
            <div class="about-us-team__swiper-name">Осіпов Сергій</div>
            <div class="about-us-team__swiper-text text">Головний майстер</div>
          </SwiperSlide>
          <SwiperSlide class="about-us-team__swiper-slide card">
            <div class="about-us-team__swiper-image">
              <img src="~/assets/about-us-team-3.png" alt="Скрекотень Владислав">
            </div>
            <div class="about-us-team__swiper-name">Скрекотень Владислав</div>
            <div class="about-us-team__swiper-text text">Менеджер по зв'язку з клієнтами</div>
          </SwiperSlide>
          <SwiperSlide class="about-us-team__swiper-slide card">
            <div class="about-us-team__swiper-image">
              <img src="~/assets/about-us-team-4.png" alt="Шипшилей Сергій">
            </div>
            <div class="about-us-team__swiper-name">Шипшилей Сергій</div>
            <div class="about-us-team__swiper-text text">Майстер-інтегратор</div>
          </SwiperSlide>
          <SwiperSlide class="about-us-team__swiper-slide card">
            <div class="about-us-team__swiper-image">
              <img src="~/assets/about-us-team-5.png" alt="Ляшко Владислав">
            </div>
            <div class="about-us-team__swiper-name">Ляшко Владислав</div>
            <div class="about-us-team__swiper-text text">Майстер-інтегратор</div>
          </SwiperSlide>
          <SwiperSlide class="about-us-team__swiper-slide card">
            <div class="about-us-team__swiper-image">
              <img src="~/assets/about-us-team-6.png" alt="Клашнікова Владислава">
            </div>
            <div class="about-us-team__swiper-name">Клашнікова Владислава</div>
            <div class="about-us-team__swiper-text text">Менеджер по зв'язку з клієнтами</div>
          </SwiperSlide>
          <SwiperSlide class="about-us-team__swiper-slide card">
            <div class="about-us-team__swiper-image">
              <img src="~/assets/about-us-team-7.png" alt="Кругляк Інна">
            </div>
            <div class="about-us-team__swiper-name">Кругляк Інна</div>
            <div class="about-us-team__swiper-text text">SMM-спеціаліст</div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";

export default defineComponent({
  name: 'Team',

  components: {
    SectionTitle
  },

  computed: {
    teamSwiperOptions() {
      return {
        slidesPerView: 1.25,
        spaceBetween: 12,
        grid: {
          fill: 'row',
          rows: 1,
        },
        breakpoints: {
          540: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1150: {
            enabled: false,
            slidesPerView: 4.06,
            grid: {
              fill: 'row',
              rows: 2,
            },
            spaceBetween: 16,
          }
        }
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.about-us-team {
  padding-top: 50px;

  @media only screen and (min-width: 760px) {
    padding-top: 100px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.about-us-team__title {
  font-size: 22px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.22px;
  color: $white;
  margin-bottom: 12px;
}

.about-us-team__text {
  font-size: 15px;
  margin-bottom: 24px;

  @media only screen and (min-width: 1160px) {
    margin-bottom: 48px;
  }
}

.about-us-team__swiper-slide {
  margin-bottom: 12px;
  padding: 16px;

  @media only screen and (min-width: 1160px) {
    padding: 28px 32px;
    margin-bottom: 16px;
  }
}

.about-us-team__swiper-image {
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 1160px) {
    height: 230px;
  }
}

.about-us-team__swiper-name {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 2px;
}

.about-us-team__swiper-text {
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media only screen and (min-width: 1160px) {
    font-size: 13px;
  }
}
</style>
<template>
  <section class="about-us-portfolio">
    <div class="bordered-top-section">
      <div class="about-us-portfolio__container container">
        <div class="about-us-portfolio__title-wrapper">
          <SectionTitle
            subtitle="портфоліо"
            title="Виконані проєкти"
            text="Ми дуже пишаємося нашими роботами, тому хочемо поділитися з вами останніми з них."
          />
        </div>

        <div class="about-us-portfolio__swiper-wrapper">

          <Swiper
            :modules="modules"
            :options="swiperOptions"
            :breakpoints="swiperOptions.breakpoints"
            :grid="swiperOptions.grid"
            :slides-per-view="swiperOptions.slidesPerView"
            :navigation="swiperOptions.navigation"
            :space-between="16"
            :enabled="swiperOptions.enabled"
          >
            <SwiperSlide class="portfolio-slide card">
              <div class="portfolio-slide__image">
                <img src="~/assets/portfolio-slide-1.png" alt="">
              </div>
              <div class="portfolio-slide__content">
                <div class="portfolio-slide__badge value-badge">
                  <div class="value-badge__icon">
                    <img src="~/assets/white-dollar.svg" alt="Dollar Icon">
                  </div>
                  <div class="value-badge__text">Вартість проєкту: 4200$</div>
                </div>
                <div class="portfolio-slide__title">Квартира на Оболоні, ЖК “Сфера”</div>
                <p class="portfolio-slide__text text">Клієнтка замовила розумний будинок під ключ. Ми обумовили перелік
                  необхідного функціоналу, підготували обладнання, доставили, встановили та налагодили його. Увесь процес зайняв 3 дні.</p>
                <div class="portfolio-slide__service-list">
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-shield.svg" alt="Icon">
                    <span>Інтеграція зі службою охорони</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-fire.svg" alt="Icon">
                    <span>Протипожежна система</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-drop.svg" alt="Icon">
                    <span>Антипотоп система</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-lock.svg" alt="Icon">
                    <span>Розумні замки</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-camera.svg" alt="Icon">
                    <span>Відеоспостереження</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-light.svg" alt="Icon">
                    <span>Контроль освітлення</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-floor.svg" alt="Icon">
                    <span>Тепла підлога</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-blinds.svg" alt="Icon">
                    <span>Автоматичні штори</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="portfolio-slide card">
              <div class="portfolio-slide__image">
                <img src="~/assets/portfolio-slide-2.png" alt="Flat Image">
              </div>
              <div class="portfolio-slide__content">
                <div class="portfolio-slide__badge value-badge">
                  <div class="value-badge__icon">
                    <img src="~/assets/white-dollar.svg" alt="Dollar Icon">
                  </div>
                  <div class="value-badge__text">Вартість проєкту 2340$</div>
                </div>
                <div class="portfolio-slide__title">Дім у Новій Ходосіївці</div>
                <p class="portfolio-slide__text text">Будинок побудовано окремо, не у межах котеджного містечка, тож
                  клієнти звернулися до нас з запитом на облаштування систем безпеки по периметру і всередині домівки.
                  Територія та площина будинку дуже велика, але наша команда впоралася зі встановленням під ключ за 6 днів.</p>
                <div class="portfolio-slide__service-list">
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-shield.svg" alt="Icon">
                    <span>Інтеграція зі службою охорони</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-lock.svg" alt="Icon">
                    <span>Розумні замки</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-calendar.svg" alt="Icon">
                    <span>Відеоспостереження</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-light.svg" alt="Icon">
                    <span>Контроль освітлення</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="portfolio-slide card">
              <div class="portfolio-slide__image">
                <img src="~/assets/portfolio-slide-3.png" alt="Flat Image">
              </div>
              <div class="portfolio-slide__content">
                <div class="portfolio-slide__badge value-badge">
                  <div class="value-badge__icon">
                    <img src="~/assets/white-dollar.svg" alt="Dollar Icon">
                  </div>
                  <div class="value-badge__text">Вартість проєкту 990$</div>
                </div>
                <div class="portfolio-slide__title">Квартира на Софіївській Борщагівці, ЖК “Софія Резіденс”</div>
                <p class="portfolio-slide__text text">Клієнт має трьох дітей і вирішив влаштувати для них багатофункціональний
                  мультимедійний простір, котрим можна керувати віддалено і налаштовувати батьківський контроль.
                  Наші майстри впоралися усього за 1 день.</p>
                <div class="portfolio-slide__service-list">
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-socket.svg" alt="Icon">
                    <span>Контроль електронних приладів та мультирум</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-light.svg" alt="Icon">
                    <span>Контроль освітлення</span>
                  </div>
                  <div class="portfolio-slide__service">
                    <img src="~/assets/white-floor.svg" alt="Icon">
                    <span>Тепла підлога</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div class="about-us-portfolio__swiper-prev swiper-prev">
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
          <div class="about-us-portfolio__swiper-next swiper-next">
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
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";
import { Navigation } from 'swiper/modules'

export default defineComponent({
  name: 'Portfolio',

  components: {
    SectionTitle
  },

  data() {
    return {
      modules: [Navigation]
    }
  },

  computed: {
    swiperOptions() {
      return  {
        slidesPerView: 1,
        spaceBetween: 12,
        enabled: false,
        grid: {
          fill: 'row',
          rows: 3,
        },
        navigation: {
          prevEl: '.about-us-portfolio__swiper-prev',
          nextEl: '.about-us-portfolio__swiper-next',
        },
        breakpoints: {
          1160: {
            enabled: true,
            slidesPerView: 1,
            grid: {
              fill: 'row',
              rows: 1,
            }
          }
        }
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

:deep(.swiper-wrapper) {
  transform: translate3d(0px, 0, 0);

  @media only screen and (min-width: 1160px) {
    transform: unset;
  }
}

.about-us-portfolio {
  background: $dark-950;
}

.about-us-portfolio__title-wrapper {
  width: 100%;
  max-width: 620px;
  text-align: center;
  margin: 0 auto 32px;
}

.about-us-portfolio__swiper-wrapper {
  position: relative;
}

.about-us-portfolio__swiper-next,
.about-us-portfolio__swiper-prev {
  display: none !important;

  @media only screen and (min-width: 1160px) {
    display: flex !important;
  }
}

.portfolio-slide {
  margin-bottom: 16px;

  @media only screen and (min-width: 1160px) {
    display: flex !important;
    align-items: stretch;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 0;
  }
}

.portfolio-slide__image {
  width: 100%;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 1160px) {
    width: 450px;
    height: 290px;
    margin-bottom: 0;
  }
}

.portfolio-slide__content {

  @media only screen and (min-width: 1160px) {
    width: calc(100% - 482px);
  }
}

.portfolio-slide__badge {
  margin-bottom: 12px;
}

.portfolio-slide__title {
  font-size: 19px;
  font-weight: 700;
  line-height: 150%;
  color: $white;
  margin-bottom: 8px;
}

.portfolio-slide__text {
  font-size: 14px;
}

.portfolio-slide__service-list {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.portfolio-slide__service {
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 500px;
  background: $dark-600;

  img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }

  span {
    font-size: 13px;
    font-weight: 700;
    line-height: 140%;
    color: $white;
  }
}
</style>
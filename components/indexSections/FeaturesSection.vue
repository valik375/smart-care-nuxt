<template>
  <section class="features">
    <div class="features__container container">

      <div class="features__info">
        <SectionTitle
          subtitle="Функції, які ми Пропонуємо"
          title="Ми безкоштовно допоможемо підібрати набір функцій для ваших цілей завдяки каталогу з <span>1500 позицій</span>"
        />
        <p class="features__text text">Великий вибір опцій дозволяє збагатити ваш розумний будинок різноманітними
          функціями. Обирайте самостійно, що найкраще відповідає вашим потребам та створюйте унікальне, персоналізоване
          середовище.</p>
      </div>

      <div class="features__item">
        <div class="features__item-content card">
          <Badge
            class="features__item-main-tag"
            icon="white-lock"
            text="Безпека та захист"
            type="blue"
          />
          <p class="features__item-text text">Отримуйте сигнали з усіх датчиків на свій смартфон, щоб завжди бути впевненими в макисмальній
            безпеці своєї оселі. Додатково ви можете налаштувати опцію відправки сигналів до відповідних служб безпеки,
            якщо це відповідає вашим потребам.</p>
          <div class="features__item-tags">
            <Badge icon="white-drip" text="Антипотоп система"/>
            <Badge icon="white-flame" text="Протипожежна система"/>
            <Badge icon="white-balaclava" text="Захист від вторгнення"/>
            <Badge icon="white-user" text="Імітація присутності"/>
            <Badge icon="white-camera" text="Камери стеження за територією"/>
            <Badge text="+3"/>
          </div>
          <NuxtLink to="/service?type=security" class="features__item-button button blue">
            <span>Усі функції безпеки</span>
            <img src="~/assets/white-arrow-right.svg" alt="Arrow Icon">
          </NuxtLink>
        </div>

        <div class="features__item-example">
          <div class="features__item-example-movie" :class="{'show': selectedItem.security.state}">
            <img loading="lazy" class="features__item-example-banner" src="~/assets/house-fire-scenario.png" alt="House">
            <img loading="lazy" class="features__item-example-gif" data-selector="security" :src="selectedItem.security.url" alt="Gif">
            <button class="features__item-example-play button dark" @click="showMovie('security')">
              <img src="~/assets/gray-play.svg" alt="Play Icon">
              Відтворити
            </button>
          </div>

          <div class="features__item-example__wrapper">
            <div class="features__item-example-title">Приклад протипожежного сценарію</div>
            <p class="features__item-example-text text">Пожежні датчики миттєво реагують на появу диму і зростання
              температури. А сценарій одразу ж знеструмить причину загоряння.</p>
            <div class="features__item-example-situations">
              <div class="features__item-example-situation card">
                <img src="~/assets/blue-lightning.svg" alt="Lightning icon">
                Сталось замикання
              </div>
              <div class="features__item-example-situation card">
                <img src="~/assets/blue-sensor.svg" alt="Sensor icon">
                Датчик зреагував на дим або на збій
              </div>
              <div class="features__item-example-situation card">
                <img src="~/assets/blue-light.svg" alt="Light icon">
                Система знеструмила приміщення
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="features__item">
        <div class="features__item-content card">
          <Badge
            class="features__item-main-tag"
            icon="white-stars"
            text="Комфорт та продуктивність"
            type="blue"
          />
          <p class="features__item-text text">Будинок готовий зустрічати вас після важкого робочго дня.
            Затишок та комфорт створюють незабутню атмосферу спокою, де кожна дрібниця налаштована саме за вашим бажанням.</p>
          <div class="features__item-tags">
            <Badge icon="white-light" text="Контроль освітлення"/>
            <Badge icon="white-temperature" text="Клімат-контроль"/>
            <Badge icon="white-multiroom" text="Мультирум"/>
            <Badge icon="white-blinds" text="Автоматичні двері та ролети"/>
            <Badge icon="white-ventilation" text="Автоматизація вентиляції"/>
            <Badge text="+3"/>
          </div>
          <a href="/service?type=comfort" class="features__item-button button blue">
            <span>Усі функції комфорту</span>
            <img src="~/assets/white-arrow-right.svg" alt="Arrow Icon">
          </a>
        </div>

        <div class="features__item-example">
          <div class="features__item-example-movie" :class="{'show': selectedItem.comfort.state}">
            <img loading="lazy" class="features__item-example-banner" src="~/assets/house-comfort-performance.png" alt="House">
            <img loading="lazy" class="features__item-example-gif" data-selector="comfort" :src="selectedItem.comfort.url" alt="Gif">
            <button class="features__item-example-play button dark" @click="showMovie('comfort')">
              <img src="~/assets/gray-play.svg" alt="Play Icon">
              Відтворити
            </button>
          </div>

          <div class="features__item-example__wrapper">
            <div class="features__item-example-title">Приклад автоматизації воріт</div>
            <p class="features__item-example-text text">Керування за допомогою голосу дозволяє на відстані відчиняти чи
              зачиняти ворота. За вашим бажанням датчики можуть реагувати на приближення машини до воріт, та відчиняти
              їх автоматично.</p>
            <div class="features__item-example-situations">
              <div class="features__item-example-situation card">
                <img src="~/assets/blue-microphone.svg" alt="Microphone icon">
                Скажіть “Відчини ворота”
              </div>
              <div class="features__item-example-situation card">
                <img src="~/assets/blue-sensor.svg" alt="Sensor icon">
                Датчик віддає сигнал системі
              </div>
              <div class="features__item-example-situation card">
                <img src="~/assets/blue-two-top-arrows.svg" alt="two top arrows icon">
                Ворота відчиняються автоматично
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import Badge from "~/UI/Badge.vue";
import SectionTitle from "~/UI/SectionTitle.vue";
import securityGif from '~/assets/house-fire-scenario.gif'
import comfortGif from '~/assets/house-comfort-performance.gif'


export default defineComponent({
  name: 'FeaturesSection',

  components: {
    SectionTitle,
    Badge
  },

  mounted() {
    const videoObserver = new IntersectionObserver((sections) => {
      sections.forEach(section => {
        if (section.isIntersecting) {
          const selector = section.target.children[1].dataset.selector
          this.selectedItem[selector].state = true
          this.selectedItem[selector].url = this.gifs[selector]
          setTimeout(() => {
            section.target.classList.remove('show')
            this.selectedItem[selector].state = false
            this.selectedItem[selector].url = ''
          }, 8500)
        }
      })
    }, {
      root: null,
      rootMargin: '10px',
      threshold: 0.5
    })

    document.querySelectorAll('.features__item-example-movie').forEach(section => {
      videoObserver.observe(section)
    })
  },

  data() {
    return {
      selectedItem: {
        security: {
          state: false,
          url: ''
        },
        comfort: {
          state: false,
          url: ''
        }
      },
      gifs: {
        security: securityGif,
        comfort: comfortGif,
      }
    }
  },

  methods: {
    showMovie(selector) {
      this.selectedItem[selector].state = true
      this.selectedItem[selector].url = this.gifs[selector]
      setTimeout(() => {
        this.selectedItem[selector].state = false
        this.selectedItem[selector].url = ''
      }, 8500)
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.features {
  padding-top: 48px;

  @media only screen and (min-width: 760px) {
    padding-top: 90px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.features__info {
  margin-bottom: 32px;

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 80px;

    :deep(.section-title) {
      margin-bottom: 0;
    }
  }
}

.features__title-wrapper {

  @media only screen and (min-width: 1160px) {
    width: calc(100% - 582px);
    margin: 0;
  }
}

.features__text {

  @media only screen and (min-width: 1160px) {
    max-width: 512px;
  }
}

.features__item {
  padding: 0;
  background: transparent;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1160px) {
    background: $dark-800;
    padding: 24px;
    border: 1px solid transparent;
    border-radius: 24px;
  }
}

.features__item-content {
  margin-bottom: 16px;

  @media only screen and (min-width: 1160px) {
    padding: 16px 14px;
    position: relative;
  }
}

.features__item-main-tag {
  height: 36px;
  min-width: 172px;
  margin-bottom: 16px;
  border-radius: 5px;

  @media only screen and (min-width: 1160px) {
    padding: 7px 12px;

    span {
      font-size: 16px;
      line-height: 140%;
    }

    img {
      width: 22px;
      height: 22px;
    }
  }
}

.features__item-text {
  font-size: 14px;

  @media only screen and (min-width: 1160px) {
    max-width: 524px;
  }
}

.features__item-tags {
  margin: 16px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (min-width: 1160px) {
    margin: 40px 0 0 0;
  }
}

.features__item-tag {

  &.desktop {
    display: none;
  }

  @media only screen and (min-width: 1160px) {

    &.desktop {
      display: block;
      margin-right: 0;
    }
  }
}

.features__item-button {

  img {
    transform: rotate(-45deg);
  }

  .animation {
    display: none;
  }

  &:hover {

    img {
      transform: rotate(-45deg) !important;
    }
  }

  @media only screen and (min-width: 1160px) {
    max-width: 222px;
    position: absolute;
    top: 16px;
    right: 16px;
  }
}

.features__item-example {
  background: $dark-950;
  border-radius: 16px;
  padding: 8px 24px 24px;

  @media only screen and (min-width: 1160px) {
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.features__item-example-movie {
  width: 100%;
  position: relative;

  &.show {

    .features__item-example-banner {
      opacity: 0;
    }

    .features__item-example-gif {
      opacity: 1;
    }

    .features__item-example-play {
      opacity: 0;
      pointer-events: none;
    }
  }

  @media only screen and (min-width: 1160px) {
    width: 540px;
  }
}

.features__item-example__wrapper {

  @media only screen and (min-width: 1160px) {
    width: calc(100% - 570px);
    padding-right: 48px;
  }
}

.features__item-example-banner {
  width: 100%;
  transition: all 1s ease;
}

.features__item-example-gif {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  //transition: all 1s ease;
  opacity: 0;
}

.features__item-example-play {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 116px;
  height: 28px;
  border-radius: 100px;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 150%;
  opacity: 1;
  pointer-events: all;
  transition: all 1s ease;
  z-index: 3;

  img {
    margin-right: 4px;
  }
}

.features__item-example-title {
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
}

.features__item-example-text {
  font-size: 13px;
  line-height: 155%;
}

.features__item-example-situations {
  margin-top: 16px;

  @media only screen and (min-width: 760px) {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1160px) {
    flex-direction: column;
    align-items: flex-start;

  }
}

.features__item-example-situation {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 14px;
  font-size: 13px;
  font-weight: 700;
  line-height: 150%;
  color: $white;

  img {
    margin-bottom: 8px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 760px) {
    margin: 0;
    width: calc(100% / 3 - 10px);
  }

  @media only screen and (min-width: 1160px) {
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 12px;
    width: 100%;
    border-radius: 10px;

    img {
      margin-bottom: 0;
      margin-right: 8px;
    }
  }
}
</style>
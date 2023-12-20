<template>
  <section class="build-system">
    <div class="build-system__container container bg-lines">

      <div class="build-system__info">
        <div v-if="price" class="banner__badge">
          <div class="banner__badge-icon">
            <img src="~/assets/white-dollar.svg" alt="Dollar Icon">
          </div>
          <div class="banner__text">Ціна під ключ Від {{ price }}$</div>
        </div>
        <SectionTitle
          class="build-system__title-wrapper"
          :subtitle="subtitle"
          :title="title"
          :text="text"
        />
        <button class="build-system__button button blue" @click="toggleConsultationModal">
          <span>Безкоштовна консультація</span>
          <img src="~/assets/white-arrow-right.svg" alt="Arrow Icon">
        </button>
        <img loading="lazy" class="build-system__label top-left" :src="leftTopImage" alt="Label">
        <img loading="lazy" class="build-system__label bottom-left" :src="leftBottomImage" alt="Label">
        <img loading="lazy" class="build-system__label top-right" :src="rightTopImage" alt="Label">
        <img loading="lazy" class="build-system__label bottom-right" :src="rightBottomImage" alt="Label">

      </div>

      <img loading="lazy" class="bg-lines__image desktop" src="~/assets/build-system-bg-lines-desktop.png" alt="Background lines">
      <img loading="lazy" class="bg-lines__image mobile" src="~/assets/build-system-bg-lines-mobile.png" alt="Background lines">

    </div>
    <div class="text-accordion container">
      <div v-if="isSeoText" class="text-accordion__wrapper">
        <div class="text-accordion__content" :class="{'open': isOpen}">
          <div class="text-accordion__title">Сучасні Рішення для Сучасного Житла</div>
          <p class="text-accordion__text text">Інтегруйте технологічний комфорт у свій будинок з розумними системами від
            Smart care. Наші рішення дозволяють забезпечити максимальну ефективність, безпеку та зручність усім аспектам
            вашого дому. Дізнайтеся, як розумний будинок може зробити ваше життя набагато простіше! Забудьте про стандартні режими
            опалення та кондиціювання. </p>
          <p class="text-accordion__text text">Наші розумні системи створюють індивідуальний мікроклімат в кожному приміщенні,
            реагуючи на зміни в умовах та ваші власні вподобання. Вам більше не доведеться думати про температурні режими - це
            робить ваш розумний будинок за вас.</p>

          <div class="text-accordion__title">Енергоефективність та Зручність у Кожному Клік</div>
          <p class="text-accordion__text text">Зменште свій вуглецевий слід і економте енергію, використовуючи розумні системи
            управління від Smart care. Від автоматизованого освітлення до регулювання температури - ми пропонуємо інтелектуальні
            рішення для економії енергії та підвищення комфорту у вашому будинку.</p>

          <div class="text-accordion__title">Повний Контроль за Комфортом та Безпекою</div>
          <p class="text-accordion__text text">В Smart care ми створюємо більше, ніж просто розумний будинок - ми надаємо вам
            повний контроль над усіма аспектами вашого життя. Наші інтелектуальні системи дозволяють вам з легкістю керувати освітленням,
            температурою, безпекою та багатьма іншими функціями, навіть коли ви далеко від дому. Забезпечте собі максимальний комфорт
            та спокій, завдяки розумним технологіям від нашої компанії.</p>

          <div class="text-accordion__title">Повний Контроль за Комфортом та Безпекою</div>
          <p class="text-accordion__text text">Зменште свій вуглецевий слід і економте енергію, використовуючи розумні системи
            управління від Smart care. Від автоматизованого освітлення до регулювання температури - ми пропонуємо інтелектуальні
            рішення для економії енергії та підвищення комфорту у вашому будинку.</p>

          <div class="text-accordion__title">Живіть У Згоді з Технологією</div>
          <p class="text-accordion__text text">Smart care пропонує передові технології для створення розумного будинку, де кожен аспект
            вашого життя легко налаштовується на ваш смак. Від автоматизації господарства до інтелектуального контролю за безпекою - ми
            забезпечуємо, щоб ваш будинок працював на вас, надаючи максимальний комфорт і зберігаючи енергію.</p>

          <div class="text-accordion__title">Індивідуальна Програма Оптимізації Енергоспоживання</div>
          <p class="text-accordion__text text">Наші інтелектуальні системи вчаться від вашого споживання енергії та розробляють індивідуальну
            програму для оптимального використання ресурсів. Вони пристосовуються до вашого розкладу, передбачають ваші звички та забезпечують
            ефективне використання енергії, що призводить до зменшення витрат та підвищення сталості навколишнього середовища.</p>

          <div class="text-accordion__title">Миттєва Віддалена Сигналізація та Контроль</div>
          <p class="text-accordion__text text">Наша система безпеки не обмежується лише датчиками та камерами. Вона пропонує миттєвий віддалений доступ
            та контроль через мобільний додаток. Незалежно від того, де ви знаходитеся, ви можете взаємодіяти з системою, перевіряти події та віддалено
            керувати безпекою в своєму будинку. Smart care - це не просто система безпеки, а гарантований спокій вашої родини. Зі створенням наших
            розважальних систем ми прагнули забезпечити вашому дому статус ігрища для технологічних інновацій. </p>
          <p class="text-accordion__text text">Зі звуковим обладнанням, яке створює потужний та чистий звук, до сучасних систем віртуальної реальності -
            Smart care робить ваш розважальний час більш захоплюючим та неймовірним.</p>

          <div class="text-accordion__title">Безпека за Допомогою Сучасних Технологій</div>
          <p class="text-accordion__text text">Системи безпеки від Smart care не тільки захищають ваш будинок від непередбачуваних ситуацій, але й
            забезпечують вам спокій. З інтегрованими датчиками, сигналізацією та відеоспостереженням ви можете віддалено слідкувати за подіями і негайно
            реагувати на будь-яку ситуацію. З використанням сучасних систем відеоспостереження та доступу ви можете в будь-який момент перевірити безпеку
            свого будинку. Отримуйте повідомлення про події і ведіть віддалений моніторинг через ваш смартфон або планшет. </p>
          <p class="text-accordion__text text">З Smart care ваш будинок завжди під контролем! З Smart care розумний будинок - це не просто електроніка,
            це новий рівень життя. Віддайте перевагу інноваціям, ефективності та комфорту. Обирайте розумне майбутнє разом з нами! Наші розумні системи освітлення
            створюють атмосферу, яка відповідає вашим настроям та подіям. Вибирайте інтенсивність світла, колір та режим освітлення просто натисканням кнопки на
            вашому смартфоні. Забезпечте собі комфорт у кожному куточку вашого будинку!</p>
        </div>
        <div class="text-accordion__trigger" :class="{'open': isOpen}" @click="isOpen = !isOpen">
          Читати повністю
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4112_4848)">
              <path d="M9.00094 12C8.8257 12.0003 8.65587 11.9393 8.52094 11.8275L4.02094 8.07746C3.86778 7.95016 3.77146 7.76723 3.75317 7.56891C3.73489 7.37059 3.79614 7.17312 3.92344 7.01996C4.05074 6.8668 4.23368 6.77048 4.432 6.7522C4.63032 6.73391 4.82778 6.79516 4.98094 6.92246L9.00094 10.2825L13.0209 7.04246C13.0977 6.98016 13.1859 6.93364 13.2807 6.90557C13.3754 6.87749 13.4748 6.86842 13.5731 6.87888C13.6713 6.88933 13.7666 6.9191 13.8533 6.96648C13.94 7.01386 14.0165 7.07792 14.0784 7.15496C14.1471 7.23208 14.1991 7.32255 14.2312 7.4207C14.2633 7.51886 14.2748 7.62258 14.265 7.72538C14.2551 7.82818 14.2241 7.92783 14.174 8.0181C14.1238 8.10837 14.0555 8.1873 13.9734 8.24996L9.47344 11.8725C9.33463 11.9666 9.16826 12.0115 9.00094 12Z" fill="#5D75EF"/>
            </g>
            <defs>
              <clipPath id="clip0_4112_4848">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";

import LeftTopImage from '~/assets/build-system-top-left-label.png'
import LeftBottomImage from '~/assets/build-system-bottom-left-label.png'
import RightTopImage from '~/assets/build-system-top-right-label.png'
import RightBottomImage from '~/assets/build-system-bottom-right-label.png'

export default defineComponent({
  name: 'BuildSystemSection',

  components: {SectionTitle},

  inject: ['toggleConsultationModal'],

  props: {
    price: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: 'Побудуйте розумну Автоматизовану систему'
    },
    title: {
      type: String,
      default: 'Бездротовий <span>розумний</span> <br> будинок твоєї мрії'
    },
    text: {
      type: String,
      default: 'Ми впевнені, що з розумним будинком ваше приміщення стане втіленням мрії про ідеальне життя. Відчуйте справжню розкіш комфорту та безпеки.'
    },
    leftTopImage: {
      type: String,
      default: LeftTopImage
    },
    leftBottomImage: {
      type: String,
      default: LeftBottomImage
    },
    rightTopImage: {
      type: String,
      default: RightTopImage
    },
    rightBottomImage: {
      type: String,
      default: RightBottomImage
    },
    isSeoText: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isOpen: false
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.text-accordion__wrapper {
  margin-top: 110px;
  text-align: left;

  @media only screen and (min-width: 1160px) {
    margin-top: 190px;
  }
}
.text-accordion__trigger {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 150%;
  color: $blue;
  cursor: pointer;

  svg {
    margin-left: 4px;
    transition: all .3s ease;
  }

  &.open svg {
    transform: rotate(180deg);
  }
}
.text-accordion__content {
  width: 100%;
  max-height: 150px;
  overflow: hidden;
  position: relative;
  margin-bottom: 14px;
  transition: all .3s ease;

  &:after {
    content: '';
    width: 100%;
    height: 120px;
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(21, 22, 25, 0.00) 0%, #151619 100%);
  }

  &.open {
    max-height: 3330px;

    &:after {
      display: none;
    }
  }
}
.text-accordion__title {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 155%;
  color: $dark-500;
  margin-bottom: 12px;
}

.text-accordion__text {
  font-size: 14px;
  margin-bottom: 20px;
  color: $dark-550;
}

.banner__badge {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px 4px;
  border-radius: 40px;
  background: $dark-700;
  margin: 0 auto 12px;

  @media only screen and (min-width: 1160px) {
    padding: 8px 12px 8px;
    margin: 0 auto 16px;
  }
}
.banner__badge-icon {
  width: 40px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5B8CA1;
  border-radius: 30px;
  margin-right: 8px;

  img {
    width: 16px;
    height: 16px;
  }
}
.banner__text {
  font-size: 10px;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $white;

  @media only screen and (min-width: 1160px) {
    font-size: 12px;
  }
}

.build-system {
  padding: 48px 0;
  background: $dark-950;
  overflow: hidden;

  .bg-lines__image {
    z-index: 2;
  }

  @media only screen and (min-width: 760px) {
    padding: 90px 0;
  }

  @media only screen and (min-width: 1160px) {
    padding: 160px 0;
  }
}

.build-system__container {

  &.bg-lines .bg-lines__image {
    top: -48px;
  }

  @media only screen and (min-width: 760px) {

    &.bg-lines .bg-lines__image {
      top: -90px;
    }
  }

  @media only screen and (min-width: 1160px) {
    position: relative;

    &.bg-lines .bg-lines__image {
      top: -160px;
    }
  }
}

.build-system__info {
  text-align: center;

  @media only screen and (min-width: 760px) {
    max-width: 616px;
    margin: 0 auto 32px;
  }
}

.build-system__title-wrapper {
  :deep(.section-title__title) {
    font-size: 28px !important;
    line-height: 150% !important;

    @media only screen and (min-width: 760px) {
      font-size: 40px !important;

      br {
        display: none;
      }
    }

    @media only screen and (min-width: 1160px) {
      font-size: 40px !important;
    }
  }
  :deep(.section-title__text) {
    margin-bottom: 32px;

    @media only screen and (min-width: 760px) {
      margin-bottom: 45px;
    }
  }
}

.build-system__button {
  position: relative;
  z-index: 2;

  @media only screen and (min-width: 760px) {
    max-width: 260px;
    margin: 0 auto;
  }
}

.build-system__label {
  display: none;

  @media only screen and (min-width: 1160px) {
    display: block;
    height: 60px;
    position: absolute;

    &.top-left {
      top: -90px;
      left: 10px;
      transform: rotate(-6deg);
    }

    &.bottom-left {
      bottom: -90px;
      left: -10px;
      transform: rotate(7deg);
    }

    &.top-right {
      top: -90px;
      right: 10px;
      transform: rotate(7deg);
    }

    &.bottom-right {
      bottom: -90px;
      right: -10px;
      transform: rotate(-6deg);
    }
  }
}
</style>
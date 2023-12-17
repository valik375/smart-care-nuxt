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
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

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
<template>
  <section class="products navigation-section" id="products">
    <div class="products__container container bg-lines">
      <div class="products__info">
        <SectionTitle
          class="products__title-wrapper"
          subtitle="Продукти"
          title="Ми використовуємо продукти високої якості, перевіренні часом"
          text="Усі компоненти протестовані та сертифіковані, що гарантує тривалу роботу системи."
        />
      </div>
      <div class="products__companys">
        <div class="products__companys-wrapper">
          <div class="products__item">
            <img src="~/assets/gray-xiaomi-logo.svg" alt="xiaomi logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-samsung-logo.svg" alt="samsung logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-lg-logo.svg" alt="lg logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-tuya-logo.svg" alt="tuya logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-aqara-logo.svg" alt="aqara logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-ewelink-logo.svg" alt="ewelink logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-google-home-logo.svg" alt="google home logo">
          </div>
        </div>
        <div class="products__companys-wrapper">
          <div class="products__item">
            <img src="~/assets/gray-xiaomi-logo.svg" alt="xiaomi logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-samsung-logo.svg" alt="samsung logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-lg-logo.svg" alt="lg logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-tuya-logo.svg" alt="tuya logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-aqara-logo.svg" alt="aqara logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-ewelink-logo.svg" alt="ewelink logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-google-home-logo.svg" alt="google home logo">
          </div>
        </div>
        <div class="products__companys-wrapper">
          <div class="products__item">
            <img src="~/assets/gray-xiaomi-logo.svg" alt="xiaomi logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-samsung-logo.svg" alt="samsung logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-lg-logo.svg" alt="lg logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-tuya-logo.svg" alt="tuya logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-aqara-logo.svg" alt="aqara logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-ewelink-logo.svg" alt="ewelink logo">
          </div>
          <div class="products__item">
            <img src="~/assets/gray-google-home-logo.svg" alt="google home logo">
          </div>
        </div>
      </div>

      <img loading="lazy" class="bg-lines__image desktop" src="~/assets/products-bg-lines-desktop.png" alt="Background lines">
      <img loading="lazy" class="bg-lines__image mobile" src="~/assets/products-bg-lines-mobile.png" alt="Background lines">
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";

export default defineComponent({
  name: 'ProductsSection',
  components: {SectionTitle}
})
</script>

<style scoped lang="scss">
@import 'vars';

.products {
  padding: 48px 0 24px 0;
  overflow: hidden;

  @media only screen and (min-width: 760px) {
    padding: 90px 0 45px 0;
  }

  @media only screen and (min-width: 1160px) {
    padding: 160px 0 90px 0;
  }
}

.products__container {

  @media only screen and (min-width: 1160px) {
    max-width: 100%;
  }
}

.products__info {
  margin-bottom: 32px;
  text-align: center;

  @media only screen and (min-width: 760px) {
    max-width: 400px;
    margin: 0 auto 32px;
  }

  @media only screen and (min-width: 1160px) {
    max-width: 616px;
    margin: 0 auto 54px;
  }
}

.products__title-wrapper {

  @media only screen and (min-width: 1160px) {
    :deep(.section-title__title) {
      padding: 0 40px;
    }
    :deep(.section-title__text) {
      padding: 0 114px;
    }
  }
}

.products__companys {
  display: flex;
  gap: 8px;

  &:hover .products__companys-wrapper {
    animation-play-state: paused;
  }

  @media only screen and (min-width: 1160px) {

    &:hover .products__companys-wrapper {
      animation-play-state: paused;
    }
  }
}

.products__companys-wrapper {
  min-width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  animation: scroll-left 45s linear infinite;

  @media only screen and (min-width: 1160px) {
    min-width: 1160px;
    gap: 16px;
  }
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 8px));
  }
}

.products__item {
  width: 140px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: $dark-800;
  pointer-events: none;
  user-select: none;

  img {
    object-fit: contain;
  }

  &:nth-child(1) {
    img {
      width: 25px;
      height: 16px;
    }
  }

  &:nth-child(2) {
    img {
      width: 88px;
      height: 13px;
    }
  }

  &:nth-child(3) {
    img {
      width: 116px;
      height: 18px;
    }
  }

  &:nth-child(4) {
    img {
      width: 54px;
      height: 24px;
    }
  }

  &:nth-child(5) {
    img {
      width: 61px;
      height: 37px;
    }
  }

  &:nth-child(6) {
    img {
      width: 75px;
      height: 14px;
    }
  }

  &:nth-child(7) {
    img {
      width: 21px;
      height: 22px;
    }
  }

  @media only screen and (min-width: 1160px) {
    height: 60px;
    width: 176px;

    &:nth-child(1) {
      img {
        width: 31px;
        height: 20px;
      }
    }

    &:nth-child(2) {
      img {
        width: 108px;
        height: 16px;
      }
    }

    &:nth-child(3) {
      img {
        width: 142px;
        height: 22px;
      }
    }

    &:nth-child(4) {
      img {
        width: 68px;
        height: 30px;
      }
    }

    &:nth-child(5) {
      img {
        width: 76px;
        height: 46px;
      }
    }

    &:nth-child(6) {
      img {
        width: 86px;
        height: 16px;
      }
    }

    &:nth-child(7) {
      img {
        width: 25px;
        height: 26px;
      }
    }
  }
}
</style>
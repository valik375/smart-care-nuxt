<template>
  <section class="banner">
    <div class="container">
      <BreadCrumbs class="banner__breadcrumbs" :list="[{ name: section.service, path: '/service' }, { name: section.title, path: ''}]" />
      <div class="banner__container">
        <div class="banner__wrapper">
          <div class="banner__badge">
            <div class="banner__badge-icon">
              <img src="~/assets/white-dollar.svg" alt="Dollar Icon">
            </div>
            <div class="banner__text">Ціна під ключ Від {{ section.price }}$</div>
          </div>
          <h1 class="banner__title">{{ section.title }}</h1>
          <p class="banner__subtitle text">{{ section.text }}</p>
          <button class="banner__button button blue consultation" @click="toggleConsultationModal">
            Замовити послугу
            <img src="~/assets/white-arrow-right.svg" alt="Icon">
          </button>
        </div>
        <div class="banner__image">
          <AsyncImage class="banner__image-bg" :img="section.image" alt="Banner Image" />
          <div class="banner__icon">
            <AsyncImage :svg="section.icon" alt="Fire Icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AsyncImage from "~/UI/AsyncImage.vue";
import Loader from "~/UI/Loader.vue";

export default defineComponent({
  name: 'Banner',
  components: {Loader, AsyncImage},

  inject: ['toggleConsultationModal'],

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

.banner {
  padding: 120px 0 40px;

  @media only screen and (min-width: 1160px) {
    padding: 192px 0 88px;
  }
}

.banner__breadcrumbs {
  margin-bottom: 24px;

  @media only screen and (min-width: 1160px) {
    margin-bottom: 40px;
  }
}

.banner__container {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
  }
}

.banner__wrapper {
  margin-bottom: 40px;

  @media only screen and (min-width: 1160px) {
    width: calc(50% - 8px);
    margin-bottom: 0;
  }
}

.banner__badge {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px 4px;
  border-radius: 40px;
  background: $dark-700;
  margin-bottom: 12px;

  @media only screen and (min-width: 1160px) {
    padding: 8px 12px 8px;
    margin-bottom: 16px;
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

.banner__title {
  font-size: 26px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.52px;
  color: $white;
  margin-bottom: 12px;

  @media only screen and (min-width: 1160px) {
    font-size: 40px;
    letter-spacing: 0.8px;
  }
}

.banner__subtitle {
  font-size: 15px;
  margin-bottom: 24px;

  @media only screen and (min-width: 1160px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
}

.banner__button {

  @media only screen and (min-width: 1160px) {
    width: fit-content;
  }
}

.banner__image {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  @media only screen and (min-width: 760px) {
    height: 300px;
  }

  @media only screen and (min-width: 1160px) {
    width: calc(50% - 8px);
  }
}

.banner__image-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
}

.banner__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: $dark-600;
  position: relative;
  z-index: 1;

  img {
    width: 24px;
    height: 24px;
  }

  @media only screen and (min-width: 1160px) {
    width: 72px;
    height: 72px;

    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
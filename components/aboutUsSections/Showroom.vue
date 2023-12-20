<template>
  <section class="about-us-location">
    <div class="about-us-location__container container">
      <div class="about-us-location__title-wrapper section-title-wrapper">
        <h3 class="about-us-location__subtitle section-subtitle">Де знайти</h3>
        <h2 class="about-us-location__title section-title">Завітайте у наш шоурум</h2>
        <p class="about-us-location__text text">м. Київ, вул. Вишняковська 2, ПН – ПТ, 10:00 – 21:00</p>
      </div>

      <Map class="about-us-location__map" />

      <div class="about-us-location__list">
        <a href="tel:+380983125981" class="about-us-location__item card phone">
          <div class="about-us-location__item-icon">
            <img src="~/assets/white-phone.svg" alt="Phone Icon">
          </div>
          <div class="about-us-location__item-content">
            <div class="about-us-location__item-title">Телефон</div>
            <div class="about-us-location__item-text text">+380 95 97 79 593</div>
          </div>
        </a>
        <a href="https://tinyurl.com/4nrz8nch" target="_blank" class="about-us-location__item card viber">
          <div class="about-us-location__item-icon">
            <img src="~/assets/viber-icon.svg" alt="Viber Icon">
          </div>
          <div class="about-us-location__item-content">
            <div class="about-us-location__item-title">Viber</div>
            <div class="about-us-location__item-text text">+380 95 97 79 593</div>
          </div>
        </a>
        <a href="https://t.me/thecaresmart" target="_blank" class="about-us-location__item card telegram">
          <div class="about-us-location__item-icon">
            <img src="~/assets/telegram-icon.svg" alt="Telegram Icon">
          </div>
          <div class="about-us-location__item-content">
            <div class="about-us-location__item-title">Telegram</div>
            <div class="about-us-location__item-text text">@thecaresmart</div>
          </div>
        </a>
        <a href="mailto:smarthome101@gmail.com" class="about-us-location__item card email">
          <div class="about-us-location__item-icon">
            <img src="~/assets/white-email.svg" alt="Mail Icon">
          </div>
          <div class="about-us-location__item-content">
            <div class="about-us-location__item-title">Електронна пошта</div>
            <div class="about-us-location__item-text text">smarthome101@gmail.com</div>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";
import Map from "~/UI/Map.vue";

export default defineComponent({
  name: 'Showroom',

  components: {
    Map,
    SectionTitle
  }
})
</script>

<style scoped lang="scss">
@import 'vars';


.about-us-location {
  padding: 50px 0;

  @media only screen and (min-width: 760px) {
    padding: 100px 0;
  }

  @media only screen and (min-width: 1160px) {
    padding: 150px 0;
  }
}

.about-us-location__title-wrapper {
  margin-bottom: 24px;
}

.about-us-location__title {
  margin-bottom: 12px;
}

.about-us-location__map {
  width: 100%;
  height: 430px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;

  iframe {
    width: 100%;
    height: 100%;
    filter: grayscale(100%) invert(100%) contrast(80%);
  }
}

.about-us-location__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (min-width: 1160px) {
    gap: 16px;
  }
}

.about-us-location__item {
  width: 100%;
  padding: 16px;
  position: relative;
  cursor: pointer;

  &.telegram,
  &.viber {
    width: calc(50% - 4px);
  }

  &.viber,
  &.telegram {
    .about-us-location__item-icon {
      background: transparent;
    }
    .about-us-location__item-icon img {
      width: 100%;
      height: 100%;
      background: transparent;
    }
  }

  &:hover .about-us-location__item-text {
    color: $white;
    text-decoration: underline;
  }

  @media only screen and (min-width: 1160px) {
    width: calc(25% - 12px);

    &.phone,
    &.viber,
    &.telegram {
      width: calc(25% - 12px);
    }
  }
}

.about-us-location__item-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: $dark-600;
  margin-bottom: 16px;

  img {
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 1160px) {
    width: 40px;
    height: 40px;
  }
}

.about-us-location__item-title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 4px;

  @media only screen and (min-width: 1160px) {
    font-size: 18px;
  }
}

.about-us-location__item-text {
  font-size: 14px;
  transition: all .3s ease;

  @media only screen and (min-width: 1160px) {
    font-size: 13px;
  }
}
</style>
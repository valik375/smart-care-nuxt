<template>
  <section class="security-feature about-us-banner">

    <div class="about-us-banner__container container bg-lines">
      <div class="about-us-banner__banner">
        <SectionTitle
          class="about-us-banner__info"
          subtitle="Про нас"
          title="Ми дбаємо про вашу безпеку та комфорт"
          text="Ми – експерти в установці систем розумного будинку, що забезпечують вашому житлу безпеку, ефективність та комфорт."
          isH1Title
        />
        <img class="about-us-banner__image image-loaded" src="~/assets/team-photo.png" alt="Team Image">
      </div>

      <div class="about-us-statistic">
        <div class="about-us-statistic__wrapper">
          <div class="about-us-statistic__card card">
            <div class="about-us-statistic__value">5</div>
            <div class="about-us-statistic__text">Років на ринку</div>
          </div>
          <div class="about-us-statistic__card card">
            <div class="about-us-statistic__value">100+</div>
            <div class="about-us-statistic__text">Задоволених клієнтів</div>
          </div>
          <div class="about-us-statistic__card card">
            <div class="about-us-statistic__value">8</div>
            <div class="about-us-statistic__text">Виробників обладнання</div>
          </div>
          <div class="about-us-statistic__card card">
            <div class="about-us-statistic__value">11</div>
            <div class="about-us-statistic__text">Працівників</div>
          </div>
        </div>
      </div>

      <img loading="lazy" class="bg-lines__image desktop" src="~/assets/feature-bg-lines-desktop.png" alt="Background lines">
      <img loading="lazy" class="bg-lines__image mobile" src="~/assets/feature-bg-lines-mobile.png" alt="Background lines">
    </div>

  </section>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";

export default defineComponent({
  name: 'BannerSection',
  components: {SectionTitle}
})
</script>

<style scoped lang="scss">
@import 'vars';

:deep(.section-title) {
  margin: 0;
}
.about-us-banner__container {
  padding-bottom: 56px;

  .bg-lines__image {
    top: 45px;
  }

  @media only screen and (min-width: 760px) {
    padding-bottom: 90px;

    .bg-lines__image {
      top: 90px;
    }
  }

  @media only screen and (min-width: 1160px) {
    padding-bottom: 180px;

    .bg-lines__image {
      top: 160px;
    }
  }
}

.about-us-banner__info {

  @media only screen and (min-width: 760px) {
    max-width: 640px;
    margin: 0 auto;
    display: block;

    :deep(.section-title__title) {
      font-size: 40px;
    }

    :deep(.section-title__text) {
      padding: 0 30px;
    }
  }
}

.about-us-banner__banner {
  padding-top: 116px;
  padding-bottom: 24px;
  text-align: center;

  @media only screen and (min-width: 760px) {
    display: block;
    padding-bottom: 32px;
    padding-top: 190px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 196px;
  }
}

.about-us-banner__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.56px;
  color: $white;
  text-align: center;
  margin-bottom: 12px;

  @media only screen and (min-width: 1160px) {
    font-size: 40px;
    line-height: 150%;
    letter-spacing: 0.8px;
  }
}

.about-us-banner__subtitle {
  text-align: center;
}

.about-us-banner__text {
  font-size: 15px;
  text-align: center;
  margin-bottom: 32px;
}

.about-us-banner__image {
  width: 100%;
  object-fit: contain;
  margin-top: 32px;
  border-radius: 12px;
  overflow: hidden;

  @media only screen and (min-width: 760px) {
    margin-top: 48px;
  }
}

.about-us-statistic__wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;

  @media only screen and (min-width: 760px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 1160px) {
    gap: 16px;
  }
}

.about-us-statistic__card {
  padding: 20px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 760px) {
    width: calc(50% - 6px);
    align-items: flex-start;
  }

  @media only screen and (min-width: 1160px) {
    width: calc(25% - 12px);
  }
}

.about-us-statistic__value {
  font-size: 26px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.52px;
  color: $white;
}

.about-us-statistic__text {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $dark-500;
}
</style>
<template>
  <section class="statistics">
    <img loading="lazy" class="statistics__background" src="~/assets//statistics-line-bg.png" alt="Background">
    <img loading="lazy" class="statistics__background-transparent" src="~/assets//statistics-line-bg.png" alt="Background">
    <div class="statistics__container">
      <div class="statistics__wrapper first">
        <div class="statistics__item">
          <div class="statistics__value">12</div>
          <div class="statistics__text">Місяців гарантії</div>
        </div>
        <div class="statistics__item">
          <div class="statistics__value">5+</div>
          <div class="statistics__text">Років на ринку</div>
        </div>
        <div class="statistics__item">
          <div class="statistics__value">200+</div>
          <div class="statistics__text">Задоволених клієнтів</div>
        </div>
        <div class="statistics__item">
          <div class="statistics__value">100+</div>
          <div class="statistics__text">Функцій комфорту</div>
        </div>
      </div>
      <div class="statistics__wrapper second">
        <div class="statistics__item">
          <div class="statistics__value">12</div>
          <div class="statistics__text">Місяців гарантії</div>
        </div>
        <div class="statistics__item">
          <div class="statistics__value">5+</div>
          <div class="statistics__text">Років на ринку</div>
        </div>
        <div class="statistics__item">
          <div class="statistics__value">200+</div>
          <div class="statistics__text">Задоволених клієнтів</div>
        </div>
        <div class="statistics__item">
          <div class="statistics__value">100+</div>
          <div class="statistics__text">Функцій комфорту</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'StatisticsSection'
})
</script>

<style scoped lang="scss">
@import 'vars';

.statistics {
  width: 100%;
  height: 72px;
  position: relative;
  margin-top: 58px;

  @media only screen and (min-width: 760px) {
    margin-top: 100px;
  }

  @media only screen and (min-width: 1260px) {
    margin-top: 200px;
  }
}

.statistics__background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: none;
  z-index: 0;
  pointer-events: none;
}

.statistics__background-transparent {
  position: absolute;
  width: 110%;
  height: 100%;
  left: -20px;
  top: 0;
  object-fit: none;
  transform: rotate(5deg);
  opacity: .3;
  z-index: 0;
  pointer-events: none;
}

.statistics__container {
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;

  &:hover .statistics__wrapper {
    animation-play-state: paused;
  }
}

.statistics__wrapper {
  min-width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  animation: scroll-left 30s linear infinite;

  @media only screen and (min-width: 1160px) {

    &.first {
      min-width: auto;
      width: 100%;
      padding: 0;
      animation: none;
      justify-content: space-between;
      max-width: 1160px;
      margin: 0 auto;
      z-index: 9;
    }

    &.second {
      display: none;
    }
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

.statistics__item {
  display: flex;
  align-items: center;
  margin-right: 100px;
  user-select: none;
  pointer-events: none;

  &:nth-child(1) {
    min-width: 146px;
  }

  &:nth-child(2) {
    min-width: 224px;
  }

  &:nth-child(3) {
    min-width: 205px;
  }

  @media only screen and (min-width: 760px) {
    margin-right: 0;
    min-width: calc(100% / 4) !important;
  }

  @media only screen and (min-width: 1160px) {
    min-width: fit-content!important;
  }
}

.statistics__value {
  color: $white;
  font-size: 28px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0.56px;
  margin-right: 20px;
}

.statistics__text {
  color: $white;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
}
</style>
<template>
  <section class="convenient-control">
    <div class="convenient-control__container">
      <div class="convenient-control__info container">
        <SectionTitle
          class="convenient-control__title-wrapper"
          subtitle="Зручне Керування"
          title="Ваш будинок зробить все за вас. Керуйте голосом або з телефону"
          text="Розумна система дозволяє насолоджуватися доступним та простим
          керуванням з будь-якого місця. Завдяки голосовому управлінню та зручному додатку ваш будинок з легкістю
          виконає всі ваші бажання"
        />
        <Tabs :list="tabs">
          <template v-slot:tabItem="{ tab }">
            <div class="convenient-control__tab-icon" v-html="tab.icon"></div>
            <span class="convenient-control__tab-text tablet">{{ tab.text }}</span>
            <span class="convenient-control__tab-text mobile">{{ tab.textMobile }}</span>
          </template>
        </Tabs>
      </div>
      <div class="convenient-control__content bg-lines">
        <div class="convenient-control__main-image" :class="{'gif': activeIndex === 1}">
          <img loading="lazy" :src="activeIndex === 0 ? phoneImage : voiceController" alt="Phone image">
        </div>
        <div class="convenient-control__opportunities container dropdown-list">

          <CardDropdown
            v-for="(item, index) in activeTabContent"
            class="convenient-control__opportunity"
            :index="`0${index + 1}`"
            :title="item.title"
            :text="item.text"
          />

        </div>

        <img loading="lazy" class="bg-lines__image desktop" src="~/assets/convenient-control-bg-lines-desktop.png" alt="Background lines">
        <img loading="lazy" class="bg-lines__image mobile" src="~/assets/convenient-control-bg-lines-mobile.png" alt="Background lines">
      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import Tabs from "~/UI/Tabs.vue";
import CardDropdown from "~/UI/CardAccordion.vue";
import phoneImage from "~/assets/convenient-control-phone.png";
import voiceController from "~/assets/voice-controller.png";
import SectionTitle from "~/UI/SectionTitle.vue";

export default defineComponent({
  name: 'ConvenientControlSection',

  components: {
    SectionTitle,
    CardDropdown,
    Tabs
  },

  mounted() {
    this.activeTabContent = this.opportunityValues[0]
  },

  data() {
    return {
      tabs: [
        {
          handler: this.changeTab ,
          text: 'Керуйте з телефону',
          textMobile: 'Телефоном',
          icon: '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2125_3517)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.39472 18.75H14.1171C14.8549 18.75 15.4507 18.553 15.9043 18.159C16.3578 17.7649 16.5846 17.2455 16.5846 16.6008V3.39927C16.5846 2.75449 16.3578 2.23508 15.9043 1.84105C15.4507 1.44702 14.8549 1.25 14.1171 1.25H7.39472C6.65079 1.25 6.05203 1.44702 5.59845 1.84105C5.14479 2.23508 4.91797 2.75449 4.91797 3.39927V16.6008C4.91797 17.2455 5.14479 17.7649 5.59845 18.159C6.05203 18.553 6.65079 18.75 7.39472 18.75ZM8.76181 17.8289H12.7502C12.8753 17.8289 12.9785 17.786 13.0599 17.7001C13.1412 17.6144 13.1819 17.5021 13.1819 17.3635C13.1819 17.2248 13.1412 17.1142 13.0599 17.0316C12.9785 16.9491 12.8753 16.9079 12.7502 16.9079H8.76181C8.63668 16.9079 8.5319 16.9491 8.44744 17.0316C8.36298 17.1142 8.32075 17.2248 8.32075 17.3635C8.32075 17.5021 8.36298 17.6144 8.44744 17.7001C8.5319 17.786 8.63668 17.8289 8.76181 17.8289Z" fill="#575C6B"></path></g><defs><clipPath id="clip0_2125_3517"><rect width="20" height="20" fill="white" transform="translate(0.75)"></rect></clipPath></defs></svg>'
        },
        {
          handler: this.changeTab ,
          text: 'Голосове управління',
          textMobile: 'Голосом',
          icon: '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2125_3522)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1083 11.524C12.4832 12.1491 11.6354 12.5003 10.7513 12.5003C9.86725 12.5003 9.0194 12.1491 8.39428 11.524C7.76916 10.8989 7.41797 10.051 7.41797 9.16699V5.00033C7.41797 4.11627 7.76916 3.26842 8.39428 2.6433C9.0194 2.01818 9.86725 1.66699 10.7513 1.66699C11.6354 1.66699 12.4832 2.01818 13.1083 2.6433C13.7334 3.26842 14.0846 4.11627 14.0846 5.00033V9.16699C14.0846 10.051 13.7334 10.8989 13.1083 11.524ZM16.3406 8.5776C16.4968 8.73388 16.5846 8.94584 16.5846 9.16685C16.583 10.5684 16.0768 11.9225 15.1587 12.9814C14.2405 14.0403 12.9718 14.7333 11.5846 14.9335V16.6669H13.343C13.5397 16.6668 13.7283 16.745 13.8674 16.8841C14.0065 17.0232 14.0846 17.2118 14.0846 17.4085V17.5919C14.0846 17.7886 14.0065 17.9772 13.8674 18.1163C13.7283 18.2554 13.5397 18.3335 13.343 18.3335H8.15964C7.96293 18.3335 7.77429 18.2554 7.6352 18.1163C7.49611 17.9772 7.41797 17.7886 7.41797 17.5919V17.4085C7.41797 17.2118 7.49611 17.0232 7.6352 16.8841C7.77429 16.745 7.96293 16.6669 8.15964 16.6669H9.91797V14.9335C8.5308 14.7333 7.2621 14.0403 6.34395 12.9814C5.42581 11.9225 4.91961 10.5684 4.91797 9.16685C4.91797 8.94584 5.00577 8.73388 5.16205 8.5776C5.31833 8.42131 5.53029 8.33352 5.7513 8.33352C5.97232 8.33352 6.18428 8.42131 6.34056 8.5776C6.49684 8.73388 6.58464 8.94584 6.58464 9.16685C6.58464 10.2719 7.02362 11.3317 7.80502 12.1131C8.58643 12.8945 9.64623 13.3335 10.7513 13.3335C11.8564 13.3335 12.9162 12.8945 13.6976 12.1131C14.479 11.3317 14.918 10.2719 14.918 9.16685C14.918 8.94584 15.0058 8.73388 15.162 8.5776C15.3183 8.42131 15.5303 8.33352 15.7513 8.33352C15.9723 8.33352 16.1843 8.42131 16.3406 8.5776Z" fill="#575C6B"></path></g><defs><clipPath id="clip0_2125_3522"><rect width="20" height="20" fill="white" transform="translate(0.75)"></rect></defs></svg>'
        }
      ],
      activeTabContent: null,
      opportunityValues: [
        [
          {
            title: 'Контролюйте роботу всіх елементів ',
            text: 'Від освітлення до камер спостереження - керуйте будинком за допомогою телефону. Всі переваги у вашій кишені.'
          },
          {
            title: 'Керуйте домом на відстані',
            text: 'Перекрийте постачання води через додаток чи запустіть робота-пилососа  - усі  функції будинку у вашому смартфоні, незалежно від місцезнаходження. '
          },
          {
            title: 'Отримуйте повідомлення про загрози',
            text: 'Оповіщення про будь-які загрози для вашого будинку будуть надходити на ваш смартфон протягом 0.10 секунд.'
          },
          {
            title: 'Відстежуйте споживання ресурсів',
            text: 'За допомогою додатку ви можете бачити, які пристрої споживають найбільше енергії та встановлювати стратегії для енергоефективного використання.'
          }
        ],
        [
          {
            title: 'Керуйте будинком зручно',
            text: 'Легко керувати різними функціями житла - просто скажіть команду з будь-якої точки вашого дому, і вона буде виконана.'
          },
          {
            title: 'Автоматизуйте рутинні завдання',
            text: 'Розумна колонка - ваш універсальний помічник. Замовляйте таксі та відповідайте на повідомлення лише за допомогою голосових команд.'
          },
          {
            title: 'Володійте актуальною інформацією',
            text: 'Отримуйте аудіозвіти про останні новини, спортивні результати, графіки фондових бірж, курси валют та багато іншого.'
          },
          {
            title: 'Насолоджуйтесь мультимедійним хабом',
            text: 'Отримуйте задоволення від музики, аудіокниг, підкастів та безлічі іншого завдяки інтегрованому медіаплеєру, без необхідності в окремих пристроях.'
          },
        ]
      ],
      activeIndex: 0,
      phoneImage,
      voiceController
    }
  },

  methods: {
    changeTab(index) {
      this.activeTabContent = this.opportunityValues[index]
      this.activeIndex = index
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.convenient-control {
  padding-top: 40px;
  background: $dark-950;

  @media only screen and (min-width: 760px) {
    padding-top: 90px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.convenient-control__title-wrapper {
  text-align: center;
}

.convenient-control__info {
  margin-bottom: 24px;

  @media only screen and (min-width: 1160px) {
    width: 616px;
    margin: 0 auto;
  }
}

.convenient-control__subtitle, .convenient-control__title, .convenient-control__text {
  text-align: center;
}

.convenient-control__tabs {
  width: 100%;
  height: 48px;
  background: $dark-800;
  border-radius: 10px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 24px;
  z-index: 99;

  &.active-left {

    .convenient-control__tab-item:nth-child(1) {
      color: $white;

      svg path {
        fill: $white;
      }
    }
    .convenient-control__tab-active {
      transform: translateX(0);
    }
  }

  &.active-right {

    .convenient-control__tab-item:nth-child(2) {
      color: $white;

      svg path {
        fill: $white;
      }
    }
    .convenient-control__tab-active {
      transform: translateX(100%);
    }
  }
}

.convenient-control__tab-text {
  display: none;

  &.mobile {
    display: block;
  }

  @media only screen and (min-width: 760px) {
    &.mobile {
      display: none;
    }
    &.tablet {
      display: block;
    }
  }
}

.convenient-control__tab-item {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: $dark-500;
  position: relative;
  z-index: 2;
  transition: all .3s ease;
  cursor: pointer;

  .desktop {
    display: none;
  }

  svg path {
    transition: all .3s ease;
  }

  &:hover {
    color: $white;

    svg path {
      fill: $white;
    }
  }

  @media only screen and (min-width: 760px) {

    .desktop {
      display: block;
    }

    .mobile {
      display: none;
    }
  }
}

.convenient-control__tab-active {
  position: absolute;
  width: 50%;
  z-index: 1;
  height: calc(100% - 12px);
  background: $blue;
  border-radius: 8px;
  transition: all .3s ease;
}

.convenient-control__content {
  width: 100%;

  @media only screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1160px) {
    height: 650px;
    padding-top: 80px;
    padding-bottom: 50px;
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    background-size: auto;
    background-position: center;
  }
}

.convenient-control__opportunities {
  position: relative;
  z-index: 2;

  @media only screen and (min-width: 760px) {
    width: calc(100% - 300px);
  }

  @media only screen and (min-width: 1160px) {
    max-width: 100%;
    position: initial;
  }
}

.convenient-control__main-image {
  width: 160px;
  margin: 0 auto;
  position: relative;
  z-index: 2;


  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &.gif {
    width: 100%;
    height: 290px;

    img {
      object-fit: cover;
      transform: scale(.9);
    }
  }

  @media only screen and (min-width: 760px) {
    width: 260px;

    &.gif {
      width: 260px;
      height: 290px;
    }
  }

  @media only screen and (min-width: 1160px) {
    width: 265px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);

    &.gif {
      width: 82%;
      height: 100%;
      top: 0;

      img {
        object-fit: contain;
      }
    }
  }
}

:deep(.convenient-control__opportunity) {

  @media only screen and (min-width: 1160px) {
    box-shadow: 0 8px 30px 0 rgba(4, 5, 6, 0.06);
    background: $dark-800;
    padding: 16px 16px 16px 72px;
    border-radius: 12px;
    margin-bottom: 12px;
    position: absolute;
    width: 388px;
    pointer-events: none;

    .dropdown-item__head {
      padding: 0;
      margin-bottom: 4px;
    }

    .dropdown-item__title {
      width: 100%;
    }

    .dropdown-item__toggle {
      display: none;
    }

    .dropdown-item__value {
      width: 40px;
      height: 40px;
      background: $blue;
      position: absolute;
      left: 16px;
      top: 16px;
    }

    .dropdown-item__body {
      max-height: 500px !important;
      padding: 0 !important;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:nth-child(1) {
      top: 175px;
      left: -25px;
    }

    &:nth-child(2) {
      top: 364px;
      left: 10px;
    }

    &:nth-child(3) {
      top: 175px;
      right: -25px;
    }

    &:nth-child(4) {
      top: 364px;
      right: 10px;
    }
  }
}
</style>

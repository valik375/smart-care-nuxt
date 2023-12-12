<template>
  <section class="contact-us-banner">
    <div class="contact-us-banner__container container">
      <div class="contact-us-banner__wrapper">
        <div class="contact-us-banner__info">
          <div class="contact-us-banner__content">
            <SectionTitle
              subtitle="контакти"
              title="Є питання?"
              text="Ви можете звʼязатися з нами будь-яким зручним для вас способом або алишити свої контактні дані, щоб ми передзвонили."
            />
            <button class="contact-us-banner__button button blue" @click="toggleConsultationModal">
              Зворотній звʼязок
              <img src="../assets/white-arrow-right.svg" alt="Icon">
            </button>
          </div>
        </div>
        <div class="contact-us-banner__list">
          <ContactCard
            v-for="card in contactCards"
            :key="card.type"
            :class="card.type"
            class="contact-us-banner__item"
            :card="card"
          />
        </div>
      </div>
      <Map/>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";
import Map from "~/UI/Map.vue";
import ContactCard from "~/UI/ContactCard.vue";

import whitePhone from '~/assets/white-phone.svg'
import viberIcon from '~/assets/viber-icon.svg'
import telegramIcon from '~/assets/telegram-icon.svg'
import whiteEmail from '~/assets/white-email.svg'
import whiteLocation from '~/assets/white-location.svg'

export default defineComponent({
  name: 'Contacts',

  components: {
    ContactCard,
    Map,
    SectionTitle
  },

  inject: ['toggleShowRoomModal', 'toggleConsultationModal'],

  data() {
    return {
      contactCards: [
        {
          type: 'phone',
          href: 'tel:+380983125981',
          icon: whitePhone,
          title: 'Телефон',
          text: '+380 95 97 79 593',
        },
        {
          type: 'viber',
          href: 'https://tinyurl.com/4nrz8nch',
          icon: viberIcon,
          title: 'Viber',
          text: '+380 95 97 79 593',
        },
        {
          type: 'telegram',
          href: 'https://t.me/thecaresmart',
          icon: telegramIcon,
          title: 'Telegram',
          text: '@thecaresmart',
        },
        {
          type: 'email',
          href: 'mailto:smarthome101@gmail.com',
          icon: whiteEmail,
          title: 'Електронна пошта',
          text: 'smarthome101@gmail.com',
        },
        {
          type: 'showroom',
          href: '#',
          icon: whiteLocation,
          title: 'Шоурум',
          text: 'м. Київ, вул. Вишняковська 2, ПН – ПТ, 10:00 – 18:00',
          handler: () => this.toggleShowRoomModal()
        }
      ]
    }
  },

  methods: {

  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.contact-us-banner {
  padding: 180px 0 56px 0;

  @media only screen and (min-width: 1160px) {
    padding: 192px 0 180px 0;
  }
}

.contact-us-banner__wrapper {
  margin-bottom: 40px;

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 88px;
  }
}

.contact-us-banner__content {
  text-align: center;
  margin-bottom: 40px;

  @media only screen and (min-width: 1160px) {
    width: 400px;
    text-align: left;
    margin-bottom: 0;
  }
}

.contact-us-banner__subtitle {
  margin-bottom: 24px;

  @media only screen and (min-width: 1160px) {
    margin-bottom: 32px;
  }
}

.contact-us-banner__button {

  @media only screen and (min-width: 1160px) {
    max-width: 200px;
  }
}

.contact-us-banner__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (min-width: 1160px) {
    width: calc(100% - 424px);
    gap: 16px;
  }
}

.contact-us-banner__item {
  width: 100%;
  padding: 16px;
  position: relative;
  cursor: pointer;

  &.phone,
  &.viber {
    width: calc(50% - 4px);
  }

  &.viber,
  &.telegram {
    .contact-us-banner__item-icon {
      background: transparent;
    }
    .contact-us-banner__item-icon img {
      width: 100%;
      height: 100%;
      background: transparent;
    }
  }

  &:hover .contact-us-banner__item-text {
    color: $white;
    text-decoration: underline;
  }

  @media only screen and (min-width: 1160px) {
    width: calc(50% - 8px);

    &.phone,
    &.viber,
    &.telegram {
      width: calc(33% - 9px);
    }
  }
}

.contact-us-banner__item-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: $dark-600;
  margin-bottom: 16px;

  @media only screen and (min-width: 1160px) {
    width: 40px;
    height: 40px;
  }
}

.contact-us-banner__item-title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 4px;

  @media only screen and (min-width: 1160px) {
    font-size: 18px;
  }
}

.contact-us-banner__item-text {
  font-size: 14px;
  transition: all .3s ease;

  @media only screen and (min-width: 1160px) {
    font-size: 13px;
  }
}
</style>
<template>
  <Loader v-if="!isLoaded" />
  <section class="service-page comfort">
    <div class="service-page__container container bg-lines">
      <BreadCrumbs class="service-page__breadcrumbs" :list="[{ name: sectionTitle, path: '/service' }]" />

      <Tabs class="service-page__tabs" :activeTab="activeTab" :list="tabs">
        <template v-slot:tabItem="{ tab }">
          <div class="service-page__tab-icon" v-html="tab.icon"></div>
          <span>{{ tab.text }}</span>
        </template>
      </Tabs>

      <div class="service-page__banner">
        <h1 class="service-page__title">{{ sectionTitle }}</h1>
        <p class="service-page__subtitle text">{{ sectionText }}</p>
      </div>

      <div v-if="activeList.length" class="service-page__list">
        <ServiceCard
          v-for="service in activeList"
          :key="service.title"
          :service="service"
        />
      </div>

      <img loading="lazy" class="bg-lines__image desktop" src="~/assets/feature-bg-lines-desktop.png" alt="Background lines">
      <img loading="lazy" class="bg-lines__image mobile" src="~/assets/feature-bg-lines-mobile.png" alt="Background lines">
    </div>

    <BuildSystemSection
      class="service-page__build-system"
      subtitle=""
      title="Не знайшли потрібної функції?"
      text="Їх у нас ще дуже багато. Залиште свої контактні дані і ми підберемо систему розумного будинку саме для вас."
      isSeoText
    />
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import Tabs from "~/UI/Tabs.vue";
import ServiceCard from "~/UI/ServiceCard.vue";
import BuildSystemSection from "~/components/indexSections/BuildSystemSection.vue";
import Loader from "~/UI/Loader.vue";

export default defineComponent({
  name: 'Security',

  components: {
    Loader,
    BuildSystemSection,
    ServiceCard,
    Tabs
  },

  mounted() {
    this.updateTemplate(this.$route.query.type)
    setTimeout(() => {
      this.isLoaded = true
    }, 500)
  },

  data() {
    return {
      isLoaded: false,
      sectionTitle: '',
      sectionText: '',
      activeTab: 0,
      tabs: [
        {
          handler: () => this.changeTab('security'),
          text: 'Безпека',
          icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99933 19.1663C10.0808 19.1663 10.181 19.1525 10.2999 19.1249C10.4187 19.0972 10.5427 19.0526 10.6717 18.9911C12.1251 18.3025 13.3425 17.6816 14.3239 17.1283C15.3053 16.575 16.0897 16.0278 16.6771 15.4867C17.2647 14.9457 17.6875 14.3632 17.9456 13.7392C18.2036 13.1152 18.3327 12.3882 18.3327 11.5582V4.60481C18.3327 4.13141 18.2223 3.79019 18.0016 3.58116C17.7808 3.37213 17.4565 3.18769 17.0287 3.02784C16.791 2.93562 16.465 2.81881 16.0507 2.67741C15.6364 2.536 15.1797 2.3823 14.6805 2.21631C14.1813 2.05031 13.6821 1.88432 13.1829 1.71832C12.6837 1.55232 12.2287 1.40323 11.8178 1.27105C11.4069 1.13887 11.0826 1.03589 10.8449 0.962116C10.7091 0.925228 10.5698 0.894488 10.4272 0.869896C10.2846 0.845304 10.142 0.833008 9.99933 0.833008C9.8567 0.833008 9.71578 0.845304 9.57655 0.869896C9.43732 0.894488 9.29979 0.925228 9.16396 0.962116C8.92625 1.03589 8.60025 1.13887 8.18597 1.27105C7.77168 1.40323 7.31494 1.55079 6.81576 1.71371C6.31657 1.87663 5.81739 2.04263 5.31821 2.2117C4.81902 2.38077 4.36229 2.53754 3.948 2.68202C3.53371 2.82649 3.20771 2.94177 2.97001 3.02784C2.54893 3.18154 2.22632 3.36444 2.0022 3.57655C1.77808 3.78866 1.66602 4.13141 1.66602 4.60481V11.5582C1.66602 12.3882 1.80015 13.109 2.06842 13.7208C2.33669 14.3325 2.76796 14.9012 3.36223 15.4268C3.95649 15.9525 4.74432 16.495 5.7257 17.0545C6.70709 17.614 7.90751 18.2595 9.32696 18.9911C9.456 19.0526 9.57995 19.0972 9.69881 19.1249C9.81765 19.1525 9.91783 19.1663 9.99933 19.1663Z" fill="#575C6B"/></svg>'
        },
        {
          handler: () => this.changeTab('comfort'),
          text: 'Комфорт',
          icon: '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_3367_28780)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8327 10.0003C18.8327 5.39783 15.1018 1.66699 10.4993 1.66699C5.89685 1.66699 2.16602 5.39783 2.16602 10.0003C2.16602 14.6028 5.89685 18.3337 10.4993 18.3337C15.1018 18.3337 18.8327 14.6028 18.8327 10.0003ZM5.7853 5.28628C7.03555 4.03604 8.73124 3.33366 10.4993 3.33366C12.2675 3.33366 13.9632 4.03604 15.2134 5.28628C16.4636 6.53652 17.166 8.23222 17.166 10.0003C17.166 11.7684 16.4636 13.4641 15.2134 14.7144C13.9632 15.9646 12.2675 16.667 10.4993 16.667C8.73124 16.667 7.03555 15.9646 5.7853 14.7144C4.53506 13.4641 3.83268 11.7684 3.83268 10.0003C3.83268 8.23222 4.53506 6.53652 5.7853 5.28628Z" fill="#575C6B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4993 3.33366C8.73124 3.33366 7.03555 4.03604 5.7853 5.28628C4.53506 6.53652 3.83268 8.23222 3.83268 10.0003C3.83268 11.7684 4.53506 13.4641 5.7853 14.7144C7.03555 15.9646 8.73124 16.667 10.4993 16.667C12.2675 16.667 13.9632 15.9646 15.2134 14.7144C16.4636 13.4641 17.166 11.7684 17.166 10.0003C17.166 8.23222 16.4636 6.53652 15.2134 5.28628C13.9632 4.03604 12.2675 3.33366 10.4993 3.33366ZM13.4456 13.7799C14.1482 13.0774 14.5739 12.1498 14.6527 11.1667C14.6674 10.9832 14.5168 10.8337 14.3327 10.8337H6.66602C6.48192 10.8337 6.33129 10.9832 6.346 11.1667C6.42479 12.1498 6.85054 13.0774 7.55307 13.7799C8.33447 14.5613 9.39428 15.0003 10.4993 15.0003C11.6044 15.0003 12.6642 14.5613 13.4456 13.7799Z" fill="#575C6B"/></g><defs><clipPath id="clip0_3367_28780"><rect width="20" height="20" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>'
        }
      ],
      activeList: [],
      serviceList: {
        security: [
          {
            image: 'security-function-2',
            icon: 'white-fire',
            title: 'Протипожежна система',
            text: 'Забезпечує надійний захист від можливого виникнення пожежі шляхом раннього виявлення, сповіщення та вжиття необхідних заходів для зменшення ризику.',
            price: '420',
            url: 'service/fire-protection-system',
          },
          {
            image: 'security-function-3',
            icon: 'white-drop',
            title: 'Антипотоп система',
            text: 'Дозволяє створити високоефективну систему безпеки та оперативно реагувати на можливі загрози.',
            price: '599',
            url: 'service/antiflood-system',
          },
          {
            image: 'security-function-4',
            icon: 'white-lock',
            title: 'Розумні замки',
            text: '«Розумний» замок дає надійний захист від проникнення сторонніх осіб та запобігає ситуаціям, коли вам довелося б звертатись до професійних зломників. Ви повністю контролюєте відмикання та замикання, навіть дистанційно.',
            price: '90',
            url: 'service/smart-lock',
          },
          {
            image: 'security-function-5',
            icon: 'white-camera',
            title: 'Система Відеоспостереження',
            text: 'Система відеоспостереження – це запорука безпеки та контролю. Ви завжди будете в курсі, що відбувається біля вашої домівки й не пропустите абсолютно нічого. Вибирайте комплектацію та можливості.',
            price: '150',
            url: 'service/video-surveillance',
          },
          {
            image: 'security-function-6',
            icon: 'white-intercom',
            title: 'Розумний домофон',
            text: 'Ви завжди будете бачити, хто до вас завітав, зможете дистанційно відчинити двері та прийняти посилку від кур’єра чи впустити гостей, які прийшли раніше ніж домовлялись. І це далеко не всі можливості «розумного» домофона.',
            price: '150',
            url: 'service/smart-intercom',
          }
        ],
        comfort: [
          {
            image: 'comfort-function-1',
            icon: 'white-light',
            title: 'Розумне освітлення',
            text: 'Це інноваційний метод управління освітленням у вашому будинку. Сучасні смарт LED-лампи обладнані спеціальним програмним забезпеченням, яке може бути інтегроване з програмами “розумних” домашніх асистентів та інших пристроїв. ',
            price: '200',
            url: 'service/smart-light',
          },
          {
            image: 'comfort-function-2',
            icon: 'white-heating',
            title: 'Розумне опалення',
            text: 'Це сучасний інноваційний підхід, що включає комплекс спеціального обладнання та датчиків. Система дозволяє ефективно налаштовувати процес обігріву приватних будинків.',
            price: '340',
            url: 'service/smart-heating',
          },
          {
            image: 'comfort-function-6',
            icon: 'white-blinds',
            title: 'Автоматичні штори',
            text: 'Дистанційне керування шторами – це топове рішення для квартири та приватного будинку, що буквально розв’яже вам руки. Впускайте денне світло чи створюйте ніч тоді, коли забажаєте.',
            price: '900',
            url: 'service/automatic-curtains',
          },
          {
            image: 'comfort-function-8',
            icon: 'white-micro',
            title: 'Голосове управління',
            text: 'Потурбуйтеся про повну зручність та контрольованість процесів у вашому домі: вмикайте світло, зачиняйте чи відчиняйте штори, впускайте гостей у дім, не відриваючись від своїх справ. І це лише невелика частина можливостей голосового управління.',
            price: '210',
            url: 'service/voice-control',
          },
        ]
      }
    }
  },

  methods: {
    changeTab(section) {
      this.updateTemplate(section)
      this.activeList = this.serviceList[section]
    },

    updateTemplate(section) {
      this.activeList = this.serviceList[section || 'security']
      this.activeTab = section === 'security' ? 0 : 1
      this.sectionTitle = section === 'security' ? 'Функції безпеки' : 'Функції комфорту'
      this.sectionText = section === 'security'
        ? 'Ми пропонуємо найширший спектр функцій безпеки та захисту на українському ринку. Дізнайтеся детальніше про кожну функцію нижче.'
        : 'Ми пропонуємо усі можливі функції комфорту та їх автоматизацію. Дізнайтеся детальніше про кожну функцію нижче.'
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.service-page {
  padding: 180px 0 0 0;

  @media only screen and (min-width: 1160px) {
    padding: 190px 0 0 0;

    :deep(.service-page__build-system  .section-title__title) {
      font-size: 28px !important;
    }
    :deep(.service-page__build-system  .section-title__text) {
      max-width: 510px;
      margin: 0 auto 32px;
    }
  }
}

.service-page__container {
  position: relative;
  padding-bottom: 40px;
  border-radius: 0 0 40px 40px;
}
.service-page__breadcrumbs {
  margin-bottom: 12px;
}
.service-page__tabs {
  width: 100%;
  max-width: 280px;
  margin: 0 auto 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  border-radius: 10px;
}
.service-page__tab-icon {
  margin-right: 4px;
}
.service-page__tab {
  width: calc(50% - 5px);
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all .3s ease;

  font-size: 14px;
  font-weight: 700;
  line-height: 160%;
  color: $dark-500;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 4px;

    path {
      transition: all .3s ease;
    }
  }

  &.active {
    background: $blue;
    color: $white;

    svg path {
      fill: $white;
    }
  }

  &:hover {
    color: $white;

    svg path {
      fill: $white;
    }
  }
}

.service-page__banner {
  width: 100%;
  max-width: 620px;
  margin: 0 auto 40px;
  text-align: center;
}

.service-page__title {
  font-size: 26px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.52px;
  color: $white;
  margin-bottom: 12px;
}

.service-page__subtitle {
  font-size: 15px;
}

.service-page__list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  @media only screen and (min-width: 1160px) {
    flex-direction: row;
  }
}
</style>
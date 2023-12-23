<template>
  <Banner :section="template.banner" />
  <Benefits :section="template.benefits" />
  <Functions :section="template.functions" />
  <ProductsSection />
  <Equipment :section="template.equipment" />
  <Choose :section="template.choose" />
  <Automations :section="template.automations" />
  <EcoSystem />
  <HaveQuestionsSection />
  <BuildSystemSection
    subtitle=""
    price="420"
    title="Розумна Протипожежна система <span>під ключ</span>"
    text="Забезпечує надійний захист від можливого виникнення пожежі шляхом раннього виявлення, сповіщення та вжиття необхідних заходів для зменшення ризику."
  />
</template>

<script>
import {defineComponent} from 'vue'
import Banner from "~/components/serviceDetails/Banner.vue";
import Benefits from "~/components/serviceDetails/Benefits.vue";
import Functions from "~/components/serviceDetails/Functions.vue";
import ProductsSection from "~/components/indexSections/ProductsSection.vue";
import Equipment from "~/components/serviceDetails/Equipment.vue";
import Choose from "~/components/serviceDetails/Choose.vue";
import Automations from "~/components/serviceDetails/Automations.vue";
import EcoSystem from "~/components/serviceDetails/EcoSystem.vue";
import HaveQuestionsSection from "~/components/indexSections/HaveQuestionsSection.vue";
import BuildSystemSection from "~/components/indexSections/BuildSystemSection.vue";

export default defineComponent({
  name: 'ServiceDetails',

  components: {
    BuildSystemSection,
    HaveQuestionsSection,
    EcoSystem,
    Automations,
    Choose,
    Equipment,
    ProductsSection,
    Functions,
    Benefits,
    Banner
  },

  data() {
    return {
      template: {
        banner: {
          image: 'security-function-2',
          icon: 'white-fire',
          title: 'Протипожежна система',
          text: 'Забезпечує надійний захист від можливого виникнення пожежі шляхом раннього виявлення, сповіщення та вжиття необхідних заходів для зменшення ризику.',
          price: '420',
        },
        benefits: [
          {
            id: 1,
            title: 'Захист',
            text: 'Протипожежна система в розумному будинку – це надійний страж безпеки, що оперативно реагує на виявлення пожежі, миттєво сигналізуючи та ініціюючи необхідні заходи.',
          },
          {
            id: 2,
            title: 'Економія та безпека',
            text: 'Забезпечуючи раннє виявлення можливих загроз та пожежний контроль, ця система допомагає уникнути серйозних матеріальних збитків та врятувати життя.',
          },
          {
            id: 3,
            title: 'Віддалене керування',
            text: 'Дозволяє вам віддалено моніторити стан безпеки, а також автоматизувати взаємодію з іншими елементами системи управління будинком.',
          },
        ],
        functions: {
          image: 'fire-detector-illustration',
          title: 'Можливості протипожежної системи',
          text: 'Розумна протипожежна система подбає про вашу безпеку, сповістить про загрозу і автоматично усуне її.',
          dropdownList: [
            {
              title: 'Попередження пожежі',
              text: 'Датчики диму та вуглекислого газу заздалегідь повідомлять про потенційну небезпеку.',
            },
            {
              title: 'Попередження пожежі',
              text: 'Датчики диму та вуглекислого газу заздалегідь повідомлять про потенційну небезпеку.',
            },
            {
              title: 'Попередження пожежі',
              text: 'Датчики диму та вуглекислого газу заздалегідь повідомлять про потенційну небезпеку.',
            },
            {
              title: 'Попередження пожежі',
              text: 'Датчики диму та вуглекислого газу заздалегідь повідомлять про потенційну небезпеку.',
            },
          ]
        },
        equipment: [
          {
            image: 'wireless-system-image',
            title: 'Детектор пожежі',
            text: 'Бездротовий пожежний датчик тепла, диму та чадного газу.',
          },
          {
            image: 'wireless-system-image',
            title: 'Тривожна кнопка',
            text: 'Бездротова настінна кнопка для активації пожежної тривоги вручну.',
          },
          {
            image: 'wireless-system-image',
            title: 'Хаб',
            text: 'Централь з підтримкою бездротових пристроїв.',
          },
          {
            image: 'wireless-system-image',
            title: 'Система автогасіння',
            text: 'Автономний, автоматичний модуль порошкового полумʼягасіння.',
          }
        ],
        choose: {
          icon: 'white-fire',
          title: 'Як правильно обрати протипожежну систему',
          text: 'Обираючи протипожежну систему для розумного будинку, визначте специфічні потреби та ризики вашого об\'єкта, ' +
            'враховуючи його розмір та призначення. Перевірте, чи система відповідає стандартам безпеки та має відповідні сертифікації, гарантуючи її надійність.',
        },
        automations: [
          {
            title: 'Трігер: Датчик ідентифікує ненавмисний спалах вогню',
            options: [
              {
                icon: 'blue-bag',
                name: 'Активація датчику пожежогасіння в зоні виявлення'
              },
              {
                icon: 'blue-bag',
                name: 'Сирена'
              },
              {
                icon: 'blue-bag',
                name: 'Виклик пожежної безпеки'
              },
              {
                icon: 'blue-bag',
                name: 'Вимкнення усіх електроприладів'
              }
            ]
          },
          {
            title: 'Трігер: Велика концентрація диму та вуглекислого газу у кімнаті',
            options: [
              {
                icon: 'blue-bag',
                name: 'Сирена'
              },
              {
                icon: 'blue-bag',
                name: 'Виклик пожежної безпеки'
              },
              {
                icon: 'blue-bag',
                name: 'Повідомлення на ваш телефон'
              }
            ]
          },
          {
            title: 'Трігер: Коротке замикання у електромережі',
            options: [
              {
                icon: 'blue-bag',
                name: 'Ізоляція ділянки замикання'
              },
              {
                icon: 'blue-bag',
                name: 'Знеструмлення приладів'
              },
              {
                icon: 'blue-bag',
                name: 'Повідомлення на ваш телефон'
              }
            ]
          }
        ],
      }
    }
  }

})
</script>

<style scoped lang="scss">
@import 'vars';

</style>
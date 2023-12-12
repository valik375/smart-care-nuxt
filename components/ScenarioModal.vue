<template>
  <Modal class="scenario-modal" :isOpen="isOpen" @closeModal="toggleScenarioModal">
    <div style="height: 100%">
      <div class="scenario-modal__wrapper">
        <h2 class="scenario-modal__title">Найпоширеніші сценарії</h2>
        <div class="scenario-modal__list">

          <div
            v-for="scenario in scenarios"
            :key="scenario.title"
            class="scenario-modal__item"
          >
            <div class="scenario-modal__item-title">{{ scenario.title }}</div>
            <div class="scenario-modal__item-text text">{{ scenario.text }}</div>
            <div class="scenario-modal__item-tags">
              <div
                v-for="tag in scenario.tags"
                :key="tag.text"
                class="scenario-modal__item-wrapper"
              >
                <Badge
                  :icon="tag.image"
                  :text="tag.text"
                />
                <img class="scenario-modal__item-icon" src="~/assets/gray-arrow-right.svg" alt="Gray Arrow Icon">
              </div>
            </div>
          </div>

        </div>
        <button class="scenario-modal__button button blue" @click="showConsultationModal">
          <span>Підібрати сценарій</span>
          <img src="../assets/white-arrow-right.svg" alt="Arrow Icon">
        </button>
      </div>
    </div>
  </Modal>
</template>

<script>
import {defineComponent} from 'vue'
import SimpleDropdown from "~/UI/SimpleDropdown.vue";
import Accordion from "~/UI/Accordion.vue";
import DropdownLink from "~/UI/DropdownLink.vue";
import ArrowLink from "~/UI/ArrowLink.vue";
import CalculateButton from "~/UI/CalculateButton.vue";
import MobileLink from "~/UI/MobileLink.vue";
import DesktopLink from "~/UI/DesktopLink.vue";
import Button from "~/UI/Button.vue";
import Modal from "~/UI/Modal.vue";
import Input from "~/UI/Input.vue";
import Badge from "~/UI/Badge.vue";

export default defineComponent({
  name: 'ScenarioModal',

  components: {
    Badge,
    Modal
  },

  inject: ['toggleScenarioModal', 'toggleConsultationModal'],

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      scenarios: [
        {
          title: 'Антипотоп система',
          text: 'Трігер: переповнена ванна, протікання труб, пральної машини тощо.',
          tags: [
            {
              image: 'blue-drop',
              text: 'Перекриття води'
            },
            {
              image: 'blue-bolt',
              text: 'Знеструмлення будинку (опційно)'
            },
            {
              image: 'blue-iphone',
              text: 'Повідомлення на ваш телефон'
            },
          ]
        },
        {
          title: 'Відеоспостереження',
          text: 'Трігер: хтось підійшов до вашої оселі та подзвонив у дзвінок.',
          tags: [
            {
              image: 'blue-iphone',
              text: 'Ви бачите людину через камеру у мобільному додатку'
            },
            {
              image: 'blue-lock',
              text: 'Відкриваєте ворота'
            }
          ]
        },
        {
          title: 'Контроль освітлення',
          text: 'Трігер: ви сіли читати книжку та хочете збільшити яскравість освітлення.',
          tags: [
            {
              image: 'blue-microphone',
              text: 'Команда “Збільши яскравість”'
            },
            {
              image: 'blue-light',
              text: 'Збільшення яскравості освітлення'
            }
          ]
        },
        {
          title: 'Керування вентиляцією',
          text: 'Трігер: ви хочете підтримувати свіжість повітря в оселі, проте не відкривати вікна.',
          tags: [
            {
              image: 'blue-iphone',
              text: 'Ви обираєте потрібний рівень СО2 у повітрі через додаток'
            },
            {
              image: 'blue-ventilation',
              text: 'Система розумного будинку підтримує задане значення СО2 у повітрі'
            }
          ]
        },
        {
          title: 'Розумні жалюзі та штори',
          text: 'Трігер: ви хочете щоб штори у вашій спальні відкривалися щоразу вранці.',
          tags: [
            {
              image: 'blue-iphone',
              text: 'Обираєте розклад відкриття та закриття штор у додатку'
            },
            {
              image: 'blue-blinds',
              text: 'Штори працюють згідно обраного вами графіку'
            }
          ]
        },
        {
          title: 'Дистанційне керування домівкою',
          text: 'Трігер: ви знаходитеся на роботі і не впевнені, чи вимкнули світло вдома.',
          tags: [
            {
              image: 'blue-iphone',
              text: 'Ви відкриваєте мобільний додаток вашого розумного будинку'
            },
            {
              image: 'blue-accept',
              text: 'Перевіряєте стан засобів освітлення'
            },
            {
              image: 'blue-light',
              text: 'Вимикаєте світло'
            }
          ]
        },
        {
          title: 'Клімат контроль',
          text: 'Трігер: взимку ви хочете, щоб ваша домівка сильніше прогрівалася до вашого повернення з роботи.',
          tags: [
            {
              image: 'blue-iphone',
              text: 'Ви налаштовуєте графік інтенсивності опалення у додатку'
            },
            {
              image: 'blue-heating',
              text: 'Система опалювання буде працювати згідно обраного графіку'
            }
          ]
        }
      ]
    }
  },

  methods: {
    showConsultationModal() {
      this.toggleScenarioModal()
      this.toggleConsultationModal()
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.scenario-modal {
  padding: 0;

  &:deep(.modal) {
    width: 100%;
    border-radius: 0;
    height: 100vh;
    overflow-y: auto;

    @media only screen and (min-width: 760px) {
      top: 24px;
      right: 24px;
      position: absolute;
      height: calc(100vh - 48px);
      max-width: 700px;
      border-radius: 24px;
    }

    @media only screen and (min-width: 1160px) {
      right: 24px;
      padding: 32px;
    }
  }
}


.scenario-modal__backdrop {
  padding: 0;
}

.scenario-modal__modal {

}

.scenario-modal__wrapper {
  height: 100%;
}

.scenario-modal__title {
  font-size: 22px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.22px;
  color: $gray-100;
  padding-right: 100px;
  padding-bottom: 14px;
  border-bottom: 1px solid $dark-600;
  margin-bottom: 12px;

  @media only screen and (min-width: 760px) {
    font-size: 28px;
  }
}

.scenario-modal__list {
  height: calc(100% - 140px);
  overflow-y: auto;

  @media only screen and (min-width: 1160px) {
    height: calc(100% - 110px);
  }
}

.scenario-modal__item {
  border-bottom: 1px solid $dark-600;
  padding-bottom: 12px;
  margin-bottom: 12px;
}

.scenario-modal__item-title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $gray-100;
  margin-bottom: 4px;
}

.scenario-modal__item-text {
  font-size: 14px;
  margin-bottom: 16px;
}

.scenario-modal__item-tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.scenario-modal__item-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &:last-child img {
    display: none;
  }
}

.scenario-modal__item-tag {
  margin-bottom: 0;
}

.scenario-modal__item-icon {
  margin: 0 2px;
}

.scenario-modal__button {
  margin-top: 10px;
}
</style>
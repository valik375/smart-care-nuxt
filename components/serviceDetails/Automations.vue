<template>
  <section class="automations">
    <div class="automations__container container">
      <div class="automations__title-wrapper section-title-wrapper">
        <h3 class="automations__subtitle section-subtitle">Автоматизація всіх процесів</h3>
        <h2 class="automations__title section-title">Налаштуйте власні сценарії</h2>
        <p class="automations__text text">Автоматизація розумного будинку дозволяє вам налаштувати 150+ індивідуальних сценаріїв, які
          взаємодіють з будь-якими подіями відповідно до вашого бажання.</p>
      </div>
      <div class="automations__list">
        <div
          v-for="(automation, index) in section"
          :key="index"
          class="automations__item card"
        >
          <div class="automations__item-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3360_72489)">
                <path d="M11.2214 22C11.0986 21.9998 10.9772 21.9727 10.8652 21.9204C10.7532 21.8681 10.653 21.7919 10.5713 21.6966C10.4896 21.6014 10.4281 21.4893 10.3909 21.3677C10.3536 21.2461 10.3415 21.1177 10.3553 20.9909L11.0289 14.5455H5.87615C5.71722 14.5457 5.56123 14.501 5.42493 14.4161C5.28862 14.3311 5.17716 14.2092 5.10251 14.0634C5.02786 13.9176 4.99284 13.7534 5.00122 13.5885C5.00959 13.4236 5.06104 13.2641 5.15004 13.1273L12.0525 2.40009C12.1617 2.23221 12.3217 2.10705 12.5071 2.04446C12.6925 1.98187 12.8928 1.98545 13.076 2.05463C13.2522 2.1226 13.4027 2.24771 13.5051 2.41144C13.6075 2.57517 13.6564 2.76882 13.6447 2.96372L12.9711 9.4546H18.1238C18.2828 9.45435 18.4388 9.4991 18.5751 9.58403C18.7114 9.66897 18.8228 9.79088 18.8975 9.93668C18.9721 10.0825 19.0072 10.2467 18.9988 10.4116C18.9904 10.5765 18.939 10.7359 18.85 10.8728L11.9475 21.6C11.8673 21.7234 11.7591 21.8244 11.6325 21.8941C11.5059 21.9639 11.3647 22.0002 11.2214 22Z" fill="#E56262"/>
              </g>
              <defs>
                <clipPath id="clip0_3360_72489">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span>{{ automation.title }}</span>
          </div>
          <div class="automations__options-list">
            <div
              v-for="(option, index) in automation.options"
              :key="index"
              class="automations__option"
            >
              <Badge
                class="automations__option-card"
                :icon="option.icon"
                :text="option.name"
              />
              <svg class="automations__option-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3360_72493)">
                  <path d="M9.99967 18.998C9.80949 18.9983 9.62316 18.9444 9.46254 18.8425C9.30193 18.7407 9.17368 18.5951 9.09285 18.423C9.01203 18.2508 8.98197 18.0592 9.0062 17.8706C9.03043 17.6819 9.10795 17.5041 9.22967 17.358L13.7097 11.998L9.38967 6.62799C9.30661 6.5257 9.24458 6.408 9.20714 6.28166C9.16971 6.15533 9.15762 6.02283 9.17156 5.89181C9.1855 5.76078 9.22519 5.6338 9.28837 5.51816C9.35154 5.40252 9.43695 5.30051 9.53967 5.21799C9.64314 5.12695 9.76431 5.05828 9.89557 5.01629C10.0268 4.97431 10.1654 4.9599 10.3024 4.97399C10.4395 4.98807 10.5722 5.03034 10.6922 5.09814C10.8122 5.16594 10.9169 5.25782 10.9997 5.36799L15.8297 11.368C15.9768 11.5469 16.0572 11.7714 16.0572 12.003C16.0572 12.2346 15.9768 12.4591 15.8297 12.638L10.8297 18.638C10.7294 18.7591 10.602 18.8548 10.4578 18.9173C10.3135 18.9799 10.1566 19.0075 9.99967 18.998Z" fill="#A0A4B1"/>
                </g>
                <defs>
                  <clipPath id="clip0_3360_72493">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="automations__message">
        <span class="text">Немає потрібного вам сценарію? Зробіть власний за допомогою мобільного додатку!</span>
        <Tooltip class="automations__tooltip">
          <template v-slot:trigger>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3360_72521)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 1.66699C7.78921 1.66699 5.6696 2.54497 4.10679 4.10777C2.54399 5.67057 1.66602 7.79019 1.66602 10.0003C1.66602 12.2105 2.54399 14.3301 4.10679 15.8929C5.6696 17.4557 7.78921 18.3337 9.99935 18.3337C12.2095 18.3337 14.3291 17.4557 15.8919 15.8929C17.4547 14.3301 18.3327 12.2105 18.3327 10.0003C18.3327 7.79019 17.4547 5.67057 15.8919 4.10777C14.3291 2.54497 12.2095 1.66699 9.99935 1.66699ZM9.99935 16.667C9.12382 16.667 8.25685 16.4945 7.44797 16.1595C6.63908 15.8244 5.90411 15.3333 5.28501 14.7142C4.66591 14.0952 4.17482 13.3602 3.83977 12.5513C3.50471 11.7424 3.33227 10.8754 3.33227 9.99991C3.33227 9.12438 3.50471 8.25741 3.83977 7.44853C4.17482 6.63964 4.66591 5.90467 5.28501 5.28557C5.90411 4.66647 6.63908 4.17538 7.44797 3.84033C8.25685 3.50527 9.12382 3.33283 9.99935 3.33283C11.7676 3.33283 13.4634 4.03525 14.7137 5.28557C15.964 6.53589 16.6664 8.23169 16.6664 9.99991C16.6664 11.7681 15.964 13.4639 14.7137 14.7142C13.4634 15.9646 11.7676 16.667 9.99935 16.667ZM9.99935 7.50033C10.2204 7.50033 10.4323 7.41253 10.5886 7.25625C10.7449 7.09997 10.8327 6.88801 10.8327 6.66699C10.8327 6.44598 10.7449 6.23402 10.5886 6.07774C10.4323 5.92146 10.2204 5.83366 9.99935 5.83366C9.77834 5.83366 9.56637 5.92146 9.41009 6.07774C9.25381 6.23402 9.16602 6.44598 9.16602 6.66699C9.16602 6.88801 9.25381 7.09997 9.41009 7.25625C9.56637 7.41253 9.77834 7.50033 9.99935 7.50033ZM9.41009 8.57774C9.56637 8.42146 9.77834 8.33366 9.99935 8.33366C10.2204 8.33366 10.4323 8.42146 10.5886 8.57774C10.7449 8.73402 10.8327 8.94598 10.8327 9.16699V13.3337C10.8327 13.5547 10.7449 13.7666 10.5886 13.9229C10.4323 14.0792 10.2204 14.167 9.99935 14.167C9.77834 14.167 9.56637 14.0792 9.41009 13.9229C9.25381 13.7666 9.16602 13.5547 9.16602 13.3337V9.16699C9.16602 8.94598 9.25381 8.73402 9.41009 8.57774Z" fill="#393D46"/>
              </g>
              <defs>
                <clipPath id="clip0_3360_72521">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </template>
          <template v-slot:body>
            Усі наші системи керуються з додатку за замовчуванням. <br>
            Це не потребує додаткових затрат на встановлення.
          </template>
        </Tooltip>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Badge from "~/UI/Badge.vue";
import Tooltip from "~/UI/Tooltip.vue";

export default defineComponent({
  name: 'Automations',

  components: {
    Badge,
    Tooltip
  },

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
.automations {
  padding-top: 56px;

  @media only screen and (min-width: 760px) {
    padding-top: 100px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.automations__title-wrapper {
  width: 100%;
  max-width: 510px;
  margin: 0 auto 32px;
  text-align: center;

  @media only screen and (min-width: 1160px) {
    margin-bottom: 64px;
  }
}

.automations__title {
  margin-bottom: 12px;
}

.automations__list {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (min-width: 1160px) {
    gap: 16px;
  }
}

.automations__item {
  padding: 12px 16px 16px 16px;
}

.automations__item-title {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;

  svg {
    min-width: 24px;
    height: 24px;
  }

  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 155%;
    color: $gray;
  }

  @media only screen and (min-width: 1160px) {
    margin-bottom: 24px;
  }
}

.automations__options-list {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  @media only screen and (min-width: 1160px) {
    gap: 8px;
  }
}

.automations__option {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child .automations__option-arrow {
    display: none;
  }
}

.automations__option-card {
  width: fit-content;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px 16px;
  border-radius: 12px;
  background: $dark-600;

  img {
    width: 22px;
    height: 22px;
  }

  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 140%;
    color: $white;
  }
}

.automations__option-arrow {
  width: 24px;
  height: 24px;
  margin-left: 4px;
}

.automations__message {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 24px;

  span {
    font-size: 13px;
    line-height: 155%;
  }

  svg {
    min-width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 1160px) {
    width: fit-content;
    margin: 24px auto 0;
  }
}

.automations__tooltip {

  :deep(.tooltip__message) {
    width: max-content;
    max-width: 340px;
    transform: translate(-100%, -50%);
    left: 20px;
    top: calc(100% + 50px);
  }

  @media only screen and (min-width: 1160px) {
    :deep(.tooltip__message) {
      width: 400px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
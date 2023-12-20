<template>
  <div class="calculator-modal__template rooms">
    <SectionTitle
      :title="template.title"
      :text="template.text"
    />
    <div class="calculator-modal__template-rooms">

      <div
        v-for="(room, index) in template.rooms"
        :key="room.id"
        class="calculator-modal__template-room"
      >
        <div class="calculator-modal__template-room__name" v-html="room.name"></div>
        <div class="calculator-modal__template-counter">
          <button class="calculator-modal__template-minus"  @click="decrementRoom(index)">-</button>
          <div class="calculator-modal__template-room-value">{{ room.value }}</div>
          <button class="calculator-modal__template-plus" @click="incrementRoom(index)">+</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";

export default defineComponent({
  name: 'RoomsTemplate',

  components: {
    SectionTitle
  },

  props: {
    template: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    decrementRoom(index) {
      if (this.template.rooms[index].value <= 0) {
        return
      }
      this.template.rooms[index].value -= 1
    },

    incrementRoom(index) {
      this.template.rooms[index].value += 1
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.calculator-modal__template-rooms {
  padding-bottom: 24px;
}
.calculator-modal__template-room {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 20px;
  border-radius: 14px;
  border: 1px solid #2e3038;
  margin-bottom: 12px;
}
.calculator-modal__template-room {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 20px;
  border-radius: 14px;
  border: 1px solid #2e3038;
  margin-bottom: 12px;
}
.calculator-modal__template-room__name {
  font-size: 13px;
  font-weight: 700;
  line-height: 155%;
  color: #eeeff1;

  @media only screen and (min-width: 760px) {
    :deep(br) {
      display: none;
    }
  }
}
.calculator-modal__template-counter {
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.calculator-modal__template-minus,
.calculator-modal__template-plus {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background: #22242a;
  border: none;
  font-size: 24px;
  font-weight: 400;
  color: #84899a;
  cursor: pointer;
  transition: all .3s ease;
}
.calculator-modal__template-room-value {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 140%;
  color: #eeeff1;
}
</style>
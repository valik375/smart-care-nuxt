<template>
  <section class="wireless-system">
    <div class="wireless-system__container container two-column-section">

      <div class="wireless-system__left column-left">
        <div class="column-image">
          <img loading="lazy" src="~/assets/wireless-system-image.png" alt="Card with wireless signal">
        </div>
      </div>

      <div class="wireless-system__right column-right">
        <div class="wireless-system__info">
          <SectionTitle
            class="wireless-system__title-wrapper"
            subtitle="Бездротова система"
            :title="section.title"
            :text="section.text"
          />
        </div>
        <div class="wireless-system__image column-image">
          <img loading="lazy" src="~/assets/wireless-system-image.png" alt="Card with wireless signal">
        </div>

        <div class="wireless-system__dropdown-list dropdown-list">
          <CardDropdown
            v-for="(item, index) in section.dropdownList"
            :id="index"
            :isActive="activeDropdown"
            :index="`0${index + 1}`"
            :title="item.title"
            :text="item.text"
            @toggleVisibility="setActiveDropdown"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SectionTitle from "~/UI/SectionTitle.vue";
import CardDropdown from "~/UI/CardAccordion.vue";

export default defineComponent({
  name: 'WirelessSystem',

  components: {CardDropdown, SectionTitle},

  props: {
    section: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      activeDropdown: 0
    }
  },

  methods: {
    setActiveDropdown(index) {
      this.activeDropdown = index
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.wireless-system {
  padding-top: 48px;

  @media only screen and (min-width: 760px) {
    padding-top: 90px;
  }

  @media only screen and (min-width: 1160px) {
    padding-top: 160px;
  }
}

.wireless-system__info {
  margin-bottom: 32px;
}

.wireless-system__left .column-image {
  @media only screen and (min-width: 1160px) {
    height: 678px;
  }
}
</style>
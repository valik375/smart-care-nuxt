<template>
  <NuxtLink class="arrow-link" :to="url">
    <span>{{ text }}</span>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3715_24749)">
        <path d="M3.75 9.75034H12.645L9.9225 13.0203C9.85947 13.0962 9.81199 13.1837 9.78277 13.2779C9.75356 13.3721 9.74318 13.4711 9.75223 13.5693C9.77052 13.7676 9.86684 13.9505 10.02 14.0778C10.1732 14.2051 10.3706 14.2664 10.5689 14.2481C10.7673 14.2298 10.9502 14.1335 11.0775 13.9803L14.8275 9.48034C14.853 9.44434 14.8755 9.40684 14.895 9.36784C14.895 9.33034 14.9325 9.30784 14.9475 9.27034C14.9815 9.18435 14.9993 9.09281 15 9.00034C14.9993 8.90788 14.9815 8.81634 14.9475 8.73034C14.9475 8.69284 14.91 8.67034 14.895 8.63284C14.8753 8.59375 14.8527 8.55615 14.8275 8.52034L11.0775 4.02034C11.0145 3.9444 10.9372 3.88162 10.85 3.83561C10.7627 3.7896 10.6672 3.76125 10.569 3.75219C10.4707 3.74313 10.3717 3.75355 10.2775 3.78283C10.1833 3.81211 10.0958 3.85969 10.02 3.92284C9.94397 3.98575 9.88112 4.06305 9.83505 4.15031C9.78898 4.23757 9.7606 4.33308 9.75154 4.43134C9.74248 4.5296 9.75292 4.62868 9.78226 4.72289C9.81159 4.81711 9.85925 4.9046 9.9225 4.98034L12.645 8.25034H3.75C3.55109 8.25034 3.36032 8.32936 3.21967 8.47001C3.07902 8.61067 3 8.80143 3 9.00034C3 9.19926 3.07902 9.39002 3.21967 9.53067C3.36032 9.67133 3.55109 9.75034 3.75 9.75034Z" fill="#84899A"/>
      </g>
      <defs>
        <clipPath id="clip0_3715_24749">
          <rect width="18" height="18" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </NuxtLink>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'ArrowLink',

  props: {
    url: {
      type: String,
      default: '/'
    },
    text: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.arrow-link {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 8px;

  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    color: #84899A;
    margin-right: 4px;
    text-transform: capitalize;
  }

  @media only screen and (min-width: 1160px) {
    height: auto;
    margin-top: 16px;
  }
}
</style>
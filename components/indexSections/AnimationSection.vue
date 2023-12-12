<template>
  <section class="animation">
    <div class="animation__wrapper bordered-bottom-section">
      <div class="animation__container container">
        <div class="animation__video">
          <video ref="video" src="~/assets/animation-section-video.mp4" autoplay muted loop></video>
        </div>

        <div class="animation__fullscreen-button" @click="play">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2410_1747)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 2.25C1.83579 2.25 1.5 2.58579 1.5 3V6C1.5 6.41421 1.83579 6.75 2.25 6.75C2.66421 6.75 3 6.41421 3 6V4.5C3 4.08579 3.33579 3.75 3.75 3.75H5.25C5.66421 3.75 6 3.41421 6 3C6 2.58579 5.66421 2.25 5.25 2.25H2.25ZM15 13.5C15 13.9142 14.6642 14.25 14.25 14.25H12.75C12.3358 14.25 12 14.5858 12 15C12 15.4142 12.3358 15.75 12.75 15.75H15.75C16.1642 15.75 16.5 15.4142 16.5 15V12C16.5 11.5858 16.1642 11.25 15.75 11.25C15.3358 11.25 15 11.5858 15 12V13.5ZM3.75 14.25C3.33579 14.25 3 13.9142 3 13.5V12C3 11.5858 2.66421 11.25 2.25 11.25C1.83579 11.25 1.5 11.5858 1.5 12V15C1.5 15.4142 1.83579 15.75 2.25 15.75H5.25C5.66421 15.75 6 15.4142 6 15C6 14.5858 5.66421 14.25 5.25 14.25H3.75Z" fill="#84899A"/>
              <path d="M12.75 2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V6C16.5 6.41421 16.1642 6.75 15.75 6.75C15.3358 6.75 15 6.41421 15 6V4.5C15 4.08579 14.6642 3.75 14.25 3.75H12.75C12.3358 3.75 12 3.41421 12 3C12 2.58579 12.3358 2.25 12.75 2.25Z" fill="#84899A"/>
            </g>
            <defs>
              <clipPath id="clip0_2410_1747">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          На весь екран
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'AnimationSection',

  methods: {
    play() {
      if (this.$refs.video.requestFullscreen && !document.fullscreenElement) {
        this.$refs.video.requestFullscreen()
        this.videoStart()
      } else if (this.$refs.video.mozRequestFullScreen && !document.mozFullScreenElement) {
        this.$refs.video.mozRequestFullScreen()
        this.videoStart()
      } else if (this.$refs.video.webkitRequestFullscreen && !document.webkitFullscreenElement) {
        this.$refs.video.webkitRequestFullscreen()
        this.videoStart()
      } else if (this.$refs.video.webkitDisplayingFullscreen && !this.$refs.video.webkitDisplayingFullscreen) {
        this.$refs.video.webkitEnterFullscreen()
        this.videoStart()
      } else if (this.$refs.video.webkitEnterFullScreen && !this.$refs.video.webkitDisplayingFullscreen) {
        this.$refs.video.webkitEnterFullScreen()
        this.videoStart()
      } else {
        this.videoEnd()
      }
    },

    videoStart() {
      this.$refs.video.style.pointerEvents = 'all'
      this.$refs.video.play()
    },

    videoEnd() {
      this.$refs.video.style.pointerEvents = 'none'
      this.$refs.video.pause()
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.animation {
  background: $dark-950;
}

.animation__wrapper {
  padding: 48px 0;
  background: $dark-900;
  position: relative;

  @media only screen and (min-width: 760px) {
    padding: 90px 0;
  }

  @media only screen and (min-width: 1160px) {
    padding: 160px 0;
    border-radius: 0 0 40px 40px;
  }
}

.animation__container {
  position: relative;
}

.animation__video {
  width: 100%;

  video {
    width: 100%;
    object-fit: contain;
    pointer-events: none;
  }

  @media only screen and (min-width: 760px) {

    video {
      pointer-events: all;
    }
  }
}

.animation__fullscreen-button {
  width: 130px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% ,-50%);
  border-radius: 30px;
  background: $dark-700;
  box-shadow: 0 -8px 40px 0 rgba(18, 19, 23, 0.72);
  font-size: 12px;
  font-weight: 700;
  line-height: 150%;
  color: $gray;

  svg {
    margin-right: 4px;
  }

  @media only screen and (min-width: 760px) {
    display: none;
  }
}

.animation__video-mobile {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 909999;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(100%);
  transition: all .5s ease;

  video {
    width: 100vh;
    height: 100vw;
    transform: rotate(90deg);
    object-fit: cover;
  }

  &.visible {
    transform: translateX(0);
  }

  @media only screen and (min-width: 760px) {
    display: none;
  }
}
</style>
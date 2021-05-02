<template>
  <keep-alive>
    <div class="section">
      <div ref="$background" class="background"></div>
      <img
        ref="$illustration"
        class="view-illustration"
        :src="`http://localhost:1337${activeItem.illustration.url}`"
        alt="background illustration"
      />
      <Headline ref="$headline" class="section__headline">{{
        activeItem.title
      }}</Headline>
      <Subheadline ref="$subheadline" class="section__subheadline"
        >bitcoin excahnge you can trust.</Subheadline
      >
      <Button ref="$button" class="section__button" type="filled"
        >sign up for free</Button
      >
    </div>
  </keep-alive>
</template>

<script>
// import gsap from 'gsap'
import { ref } from '@nuxtjs/composition-api'
import { useViews } from '~/hooks/views'
import { useAnimation } from '~/hooks/animations'

export default {
  setup() {
    const $background = ref(null)
    const $illustration = ref(null)
    const $headline = ref(null)
    const $subheadline = ref(null)
    const $button = ref(null)

    const { activeView, items, activeItem } = useViews()

    useAnimation([$background, $illustration, $headline, $subheadline, $button])

    return {
      $background,
      $illustration,
      $headline,
      $subheadline,
      $button,
      items,
      activeView,
      activeItem,
    }
  },
}
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $color-background;
}

.section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60vw;
  min-height: 400px;

  &__headline,
  &__subheadline,
  &__button {
    position: relative;
    opacity: 0;
  }

  &__button {
    margin-top: auto;
    @include md {
      margin-top: auto;
      transform: none;
    }
  }
}

.view-illustration {
  position: absolute;
  right: -90%;
  bottom: 30%;
  z-index: 0;
  width: 300px;
  height: 260px;

  @include lg {
    right: -50%;
    bottom: -150px;
    width: 800px;
    height: 700px;
  }
}
</style>

<template>
  <div class="section">
    <div ref="$background" class="background"></div>
    <img
      ref="$illustration"
      class="view-illustration"
      :src="activeItem.illustration"
      alt="background illustration"
    />
    <Headline ref="$headline">{{ activeItem.title }}</Headline>
    <Subheadline ref="$subheadline"
      >bitcoin excahnge you can trust.</Subheadline
    >
    <Button ref="$button" class="section__button" type="filled"
      >sign up for free</Button
    >
  </div>
</template>

<script>
// import gsap from 'gsap'
import { ref } from '@nuxtjs/composition-api'
import { useViews, useItems } from '~/hooks/views'
import { useAnimation } from '~/hooks/animations'

export default {
  setup() {
    const $background = ref(null)
    const $illustration = ref(null)
    const $headline = ref(null)
    const $subheadline = ref(null)
    const $button = ref(null)

    const [items, activeItem] = useItems()
    const { activeView } = useViews()

    // const activeItem = ref(items[0])

    // watch(activeView, () => {
    //   setTimeout(() => (activeItem.value = items[activeView.value]), 1100)
    // })

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

  /* transform: translateY(-20px); */

  @include md {
    /* transform: none; */

    /* transform: none; */
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

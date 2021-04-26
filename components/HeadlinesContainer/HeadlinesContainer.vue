<template>
  <div class="section">
    <!-- <Illustration class="view-illustration" /> -->
    <img
      ref="$illustration"
      v-gsap.fromTo="[
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, delay: 0.2, duration: 1 },
      ]"
      class="view-illustration"
      :src="activeItem.illustration"
      alt=""
    />
    <!-- <img alt="" /> -->
    <Headline
      ref="$headline"
      v-gsap.fromTo="[
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, delay: 0.2, duration: 1 },
      ]"
      >{{ activeItem.title }}</Headline
    >
    <Subheadline
      ref="$subheadline"
      v-gsap.fromTo="[
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, delay: 0.3, duration: 1 },
      ]"
      >bitcoin excahnge you can trust.</Subheadline
    >
    <Button
      ref="$button"
      v-gsap.fromTo="[
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, delay: 0.4, duration: 1 },
      ]"
      class="section__button"
      type="filled"
      >sign up for free</Button
    >
  </div>
</template>

<script>
import gsap from 'gsap'
import { ref, watch } from '@nuxtjs/composition-api'
import { useViews, useItems } from '~/hooks/views'
// import Illustration from '~/assets/svg/illustration.svg?inline'

export default {
  setup() {
    const $headline = ref(null)
    const $subheadline = ref(null)
    const $button = ref(null)
    const $illustration = ref(null)

    console.log($illustration)

    const { activeView } = useViews()
    const [items, activeItem, changeActiveItem] = useItems()
    // const activeItem = ref(items[0])

    watch(activeView, () => {
      gsap.to(
        $headline.value.$el,
        // { opacity: 1, y: 0 },
        { opacity: 0, y: -500, delay: 0.4, duration: 1 }
      )

      gsap.to(
        $subheadline.value.$el,
        // { opacity: 1, y: 0 },
        { opacity: 0, y: -500, delay: 0.3, duration: 1 }
      )

      gsap.to(
        $button.value.$el,
        // { opacity: 1, y: 0 },
        { opacity: 0, y: -500, delay: 0.2, duration: 1 }
      )

      gsap.to(
        $illustration.value,
        // { opacity: 1, y: 0 },
        { opacity: 0, y: -500, delay: 0.2, duration: 1 }
      )

      changeActiveItem(items[activeView.value])
    })

    return {
      $headline,
      $subheadline,
      $button,
      $illustration,
      items,
      activeView,
      activeItem,
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60vw;
  min-height: 400px;

  &__button {
    margin-top: auto;
    @include md {
      margin-top: auto;
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

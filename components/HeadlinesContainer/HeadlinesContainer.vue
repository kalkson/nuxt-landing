<template>
  <div class="section">
    <Illustration class="view-illustration" />
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
import Illustration from '~/assets/svg/illustration.svg?inline'

export default {
  components: {
    Illustration,
  },

  setup() {
    const $headline = ref(null)
    const $subheadline = ref(null)
    const $button = ref(null)

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

      changeActiveItem(items[activeView.value])
    })

    return {
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
.section {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 400px;

  &__button {
    margin-top: auto;
  }
}

.view-illustration {
  position: absolute;
  top: -100%;
  right: -200px;
  z-index: 0;
}
</style>

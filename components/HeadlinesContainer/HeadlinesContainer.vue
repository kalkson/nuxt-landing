<template>
  <div class="section">
    <Illustration class="view-illustration" />
    <img :src="string" alt="" />
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
import { ref, watch, useStore, computed } from '@nuxtjs/composition-api'
// import { useStore } from 'vuex'
import gsap from 'gsap'
import Illustration from '~/assets/svg/illustration.svg?inline'

export default {
  components: {
    Illustration,
  },

  setup() {
    const $headline = ref(null)
    const $subheadline = ref(null)
    const $button = ref(null)

    const store = useStore()
    const items = store.getters.views

    const activeItem = ref(items[0])

    const activeView = computed(() => store.getters.activeView)

    watch(activeView, () => {
      gsap.fromTo(
        $headline.value.$el,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -500, delay: 0.4, duration: 1 }
      )

      gsap.fromTo(
        $subheadline.value.$el,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -500, delay: 0.3, duration: 1 }
      )

      gsap.fromTo(
        $button.value.$el,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -500, delay: 0.2, duration: 1 }
      )

      setTimeout(() => {
        activeItem.value = items[activeView.value]
        // console.log(items[4], activeView.value)
      }, 1200)
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
  height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;

  &__button {
    margin-top: auto;
  }
}

.view-illustration {
  position: absolute;
  z-index: 0;
  right: -200px;
  top: -100%;
}
</style>

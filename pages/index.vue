<template>
  <div class="full-screen-grid">
    <Navigation />
    <HeadlinesContainer>
      <Illustration ref="$illustration" class="view-illustration" />
      <Headline ref="$headline"
        >bitcoin exchange
        <br />
        and
        <span class="headline__oranged">wallet</span></Headline
      >
      <Subheadline ref="$subheadline"
        >bitcoin excahnge you can trust.</Subheadline
      >
      <Button ref="$button" class="section__button" type="filled"
        >sign up for free</Button
      >
    </HeadlinesContainer>
  </div>
</template>

<script>
import { ref, watch } from '@nuxtjs/composition-api'
import gsap from 'gsap'
import Illustration from '~/assets/svg/illustration.svg?inline'

const gsapFromTo = ($element, delay = 0) => {
  gsap.fromTo($element, { opacity: 0, y: 500 }, { opacity: 1, y: 0, delay })
}

export default {
  components: {
    Illustration,
  },

  setup() {
    const $illustration = ref(null)
    const $headline = ref(null)
    const $subheadline = ref(null)
    const $button = ref(null)

    watch($illustration, () => {
      gsapFromTo($illustration.value.$el)
    })
    watch($headline, () => {
      gsapFromTo($headline.value.$el)
    })
    watch($subheadline, () => {
      gsapFromTo($subheadline.value.$el, 0.2)
    })
    watch($button, () => {
      gsapFromTo($button.value.$el, 0.3)
    })

    return {
      $illustration,
      $headline,
      $subheadline,
      $button,
    }
  },
}
</script>

<style lang="scss" scoped>
.view-illustration {
  position: absolute;
  z-index: -1;
  right: 0;
  top: -200px;
}

.full-screen-grid {
  width: 100%;
  height: 100vh;
  align-items: center;
  position: relative;
  display: grid;
  grid-template-columns: minmax(200px, 200px) 1fr;
}
</style>

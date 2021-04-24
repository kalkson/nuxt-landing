<template>
  <div class="full-screen-grid">
    <Navigation
      v-gsap.fromTo="[
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: 1 },
      ]"
      class="navigation"
      @changeView="changeView"
    />
    <HeadlinesContainer :active-view="activeView" />
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  setup() {
    const activeView = ref(null)

    const changeView = (number) => {
      console.log(number)

      setTimeout(() => {
        activeView.value = number
      }, 1100)
    }

    return {
      activeView,
      changeView,
    }
  },
}
</script>

<style lang="scss" scoped>
.full-screen-grid {
  width: 100%;
  height: 100vh;
  align-items: center;
  position: relative;
  display: grid;
  grid-template-columns: minmax(200px, 200px) 1fr;
}
</style>

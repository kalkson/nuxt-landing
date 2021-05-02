<template>
  <div class="full-screen-grid">
    <div v-if="error" class="error">
      <span class="error__message">Datebase error</span>
    </div>
    <template v-else>
      <Navigation
        v-gsap.fromTo="[
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, delay: 1 },
        ]"
        class="navigation"
      />
      <HeadlinesContainer />
    </template>
  </div>
</template>

<script>
import { computed, useStore } from '~/node_modules/@nuxtjs/composition-api'

import { getViews } from '~/api/views/views.js'

export default {
  setup() {
    const store = useStore()

    const items = computed(() => store.getters.views)
    const activeItem = computed(() => store.getters.activeItem)

    return {
      items,
      activeItem,
    }
  },

  async asyncData({ store }) {
    try {
      const viewsFromFetch = await getViews()
      store.dispatch('setViews', viewsFromFetch)
      store.dispatch('setActiveItem', viewsFromFetch[0])
    } catch (err) {
      return {
        error: 'Database error',
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.error {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  vertical-align: middle;
  background: white;

  &__message {
    font-size: 3rem;
    color: red;
    vertical-align: middle;
  }
}

.full-screen-grid {
  position: relative;
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  width: 100%;

  @include md {
    grid-template-columns: minmax(200px, 200px) 1fr;
  }
}
</style>

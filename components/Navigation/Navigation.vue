<template>
  <nav>
    <ul class="navigation__list">
      <NavigationItem
        v-for="(item, i) in items"
        :key="item.label"
        :view-number="i"
        :is-active="i === activeView ? true : false"
        @updateView="() => views.changeActiveView(i)"
        >{{ item.label }}</NavigationItem
      >
    </ul>
  </nav>
</template>

<script>
// import { ref } from '@nuxtjs/composition-api'
import { useViews } from '~/hooks/views'

export default {
  setup() {
    // const activeView = ref(0)
    // const isAnimated = ref(false)
    // const store = useStore()
    const views = useViews()

    const { items, activeView, changeActiveView } = views
    // const views = useViews()

    const changeViewOnScroll = ({ deltaY }) => {
      const number = deltaY > 0 ? activeView.value + 1 : activeView.value - 1
      views.changeActiveView(number)
    }

    return {
      changeActiveView,
      views,
      changeViewOnScroll,
      activeView,
      items,
    }
  },

  beforeMount() {
    window.addEventListener('wheel', this.changeViewOnScroll)
    window.addEventListener('swipedown', () =>
      this.views.changeActiveView(this.activeView - 1)
    )
    window.addEventListener('swipeup', () =>
      this.views.changeActiveView(this.activeView + 1)
    )
  },
  unmounted() {
    window.removeEventListener('wheel', this.changeViewOnScroll)
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    padding: 0;
    list-style-type: none;

    & > li:last-of-type {
      &::after {
        display: none;
      }
    }
  }
}
</style>

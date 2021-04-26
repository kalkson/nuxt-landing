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
import { useViews, useItems } from '~/hooks/views'

export default {
  setup() {
    const views = useViews()

    const { activeView, changeActiveView } = views
    const [items] = useItems()

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

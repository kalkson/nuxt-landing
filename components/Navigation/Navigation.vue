<template>
  <nav>
    <ul class="navigation__list">
      <NavigationItem
        v-for="(item, i) in items"
        :key="item.label"
        :view-number="i"
        :is-active="i === activeView ? true : false"
        @updateView="() => changeActiveView(i)"
        >{{ item.label }}</NavigationItem
      >
    </ul>
  </nav>
</template>

<script>
import { useViews } from '~/hooks/views'

export default {
  setup() {
    const { activeView, changeActiveView, items } = useViews()

    const changeViewOnScroll = ({ deltaY }) => {
      const number = deltaY > 0 ? activeView.value + 1 : activeView.value - 1
      changeActiveView(number)
    }

    const changeViewOnSwipeDown = () => {
      changeActiveView(activeView.value - 1)
    }

    const changeViewOnSwipeUp = () => {
      changeActiveView(activeView.value + 1)
    }

    return {
      changeActiveView,
      changeViewOnScroll,
      activeView,
      items,
      changeViewOnSwipeDown,
      changeViewOnSwipeUp,
    }
  },

  beforeMount() {
    window.addEventListener('wheel', this.changeViewOnScroll)
    window.addEventListener('swipedown', this.changeViewOnSwipeDown)
    window.addEventListener('swipeup', this.changeViewOnSwipeUp)
  },
  unmounted() {
    window.removeEventListener('wheel', this.changeViewOnScroll)
    window.removeEventListener('swipedown', this.changeViewOnSwipeDown)
    window.removeEventListener('swipeup', this.changeViewOnSwipeUp)
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  z-index: 1000;
  &__list {
    padding: 0;
    list-style-type: none;
    transform: translateY(-20px);

    @include md {
      transform: none;
    }

    & > li:last-of-type {
      &::after {
        display: none;
      }
    }
  }
}
</style>

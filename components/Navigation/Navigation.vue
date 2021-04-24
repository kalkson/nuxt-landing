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
import { ref, useStore } from '@nuxtjs/composition-api'

export default {
  setup(props, { emit }) {
    const activeView = ref(0)
    const isAnimated = ref(false)
    const store = useStore()

    const items = [
      { label: 'Home' },
      { label: 'Invest' },
      { label: 'Be first' },
      { label: 'Who we are' },
      { label: 'Contact' },
    ]

    const changeActiveView = (number) => {
      if (isAnimated.value === true) return
      activeView.value = number
      store.commit('setActiveView', number)
      isAnimated.value = true
      setTimeout(() => {
        isAnimated.value = false
      }, 1100)
    }

    return {
      changeActiveView,
      activeView,
      items,
    }
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    list-style-type: none;
    padding: 0;

    & > li:last-of-type {
      &::after {
        display: none;
      }
    }
  }
}
</style>

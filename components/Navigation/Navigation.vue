<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <NavigationItem
        :view-number="0"
        :is-active="0 === activeView ? true : false"
        @updateView="() => changeActiveView(0)"
        >Home</NavigationItem
      >
      <NavigationItem
        :view-number="1"
        :is-active="1 === activeView ? true : false"
        @updateView="() => changeActiveView(1)"
        >Invest</NavigationItem
      >
      <NavigationItem
        :view-number="2"
        :is-active="2 === activeView ? true : false"
        @updateView="() => changeActiveView(2)"
        >Be first</NavigationItem
      >
      <NavigationItem
        :view-number="3"
        :is-active="3 === activeView ? true : false"
        @updateView="() => changeActiveView(3)"
        >Who we are</NavigationItem
      >
      <NavigationItem
        :after="true"
        :view-number="4"
        :is-active="4 === activeView ? true : false"
        @updateView="() => changeActiveView(4)"
        >Contact</NavigationItem
      >
    </ul>
  </nav>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  setup() {
    const activeView = ref(0)

    const changeActiveView = (number) => {
      activeView.value = number
    }

    return {
      changeActiveView,
      activeView,
    }
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    list-style-type: none;
    padding: 0;
  }
}
</style>

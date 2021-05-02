import { ref, computed, useStore } from '@nuxtjs/composition-api'

export const useViews = () => {
  const store = useStore()
  const activeView = computed(() => store.getters.activeView)
  const activeItem = computed(() => store.getters.activeItem)
  const items = computed(() => store.getters.views)
  const isAnimated = ref(false)

  const changeActiveView = (number) => {
    if (number < 0 || number > items.value.length - 1) return
    if (isAnimated.value === true) return
    store.dispatch('setActiveView', number)
    isAnimated.value = true

    setTimeout(() => {
      isAnimated.value = false
    }, 1700)

    setTimeout(() => {
      store.dispatch('setActiveItem', items.value[number])
    }, 1300)
  }

  // const changeActiveItem = (item) => {
  //   setTimeout(() => {
  //     store.dispatch('setActiveItem', item)
  //   }, 1300)
  // }

  return {
    items,
    activeView,
    changeActiveView,
    activeItem,
  }
}

import { ref, computed, useStore } from '@nuxtjs/composition-api'

export const useViews = () => {
  const store = useStore()
  const activeView = computed(() => store.getters.activeView)
  const isAnimated = ref(false)

  const items = store.getters.views

  const changeActiveView = (number) => {
    if (number < 0 || number > items.length - 1) return
    if (isAnimated.value === true) return
    store.commit('setActiveView', number)
    isAnimated.value = true
    setTimeout(() => {
      isAnimated.value = false
    }, 2200)
  }

  return {
    items,
    changeActiveView,
    activeView,
  }
}

export const useItems = () => {
  const store = useStore()
  const items = store.getters.views
  const activeItem = ref(items[0])

  // const { activeView } = useViews()

  const changeActiveItem = (item) => {
    setTimeout(() => {
      activeItem.value = item
    }, 1200)
  }

  return [items, activeItem, changeActiveItem]
}

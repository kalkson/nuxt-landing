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
    }, 1700)
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
  const activeItem = computed(() => store.getters.activeItem)
  // const activeItem = ref(items[0])
  // const activeItem = computed(() => activeItemView)

  // const { activeView } = useViews()

  const changeActiveItem = (item) => {
    setTimeout(() => {
      store.commit('setActiveItem', item)
    }, 1100)
  }

  return [items, activeItem, changeActiveItem]
}

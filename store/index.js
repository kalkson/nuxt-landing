export const state = () => ({
  views: [
    {
      title: 'bitcoin exchange and wallet',
      label: 'Home',
      illustration: '/illustration1.svg',
    },
    {
      title: 'simply return the expression',
      label: 'Invest',
      illustration: '/illustration2.svg',
    },
    {
      title: 'take first of us',
      label: 'Be first',
      illustration: '/illustration3.svg',
    },
    {
      title: 'give some advice',
      label: 'Who we are',
      illustration: '/illustration4.svg',
    },
    {
      title: 'contact with as do get some exp',
      label: 'Contact',
      illustration: '/illustration5.svg',
    },
  ],
  activeView: 0,
  activeItem: {
    title: 'bitcoin exchange and wallet',
    label: 'Home',
    illustration: '/illustration1.svg',
  },
})

export const mutations = {
  setActiveView(state, number) {
    state.activeView = number
  },
  setActiveItem(state, item) {
    state.activeItem = item
  },
}

export const getters = {
  views(state) {
    return state.views
  },
  activeView(state) {
    return state.activeView
  },
  activeItem(state) {
    return state.activeItem
  },
}

export const state = () => ({
  views: [
    {
      title: 'bitcoin exchange and wallet',
      label: 'Home',
    },
    { title: 'simply return the expression', label: 'Invest' },
    { title: 'take first of us', label: 'Be first' },
    { title: 'give some advice', label: 'Who we are' },
    { title: 'contact with as do get some exp', label: 'Contact' },
  ],
  activeView: 0,
})

export const mutations = {
  setActiveView(state, number) {
    state.activeView = number
  },
}

export const getters = {
  views(state) {
    return state.views
  },
  activeView(state) {
    return state.activeView
  },
}

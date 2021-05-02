export const state = () => ({
  // views: [
  //   {
  //     title: 'bitcoin exchange and wallet',
  //     label: 'Home',
  //     illustration: {
  //       url: '/illustration1.svg',
  //     },
  //   },
  //   {
  //     title: 'simply return the expression',
  //     label: 'Invest',
  //     illustration: {
  //       url: '/illustration2.svg',
  //     },
  //   },
  //   {
  //     title: 'take first of us',
  //     label: 'Be first',
  //     illustration: {
  //       url: '/illustration3.svg',
  //     },
  //   },
  //   {
  //     title: 'give some advice',
  //     label: 'Who we are',
  //     illustration: {
  //       url: '/illustration4.svg',
  //     },
  //   },
  //   {
  //     title: 'contact with as do get some exp',
  //     label: 'Contact',
  //     illustration: {
  //       url: '/illustration5.svg',
  //     },
  //   },
  // ],
  activeView: 0,
  activeItem: null,
})

export const actions = {
  setViews({ commit }, items) {
    commit('setViews', items)
  },
  setActiveItem({ commit }, item) {
    commit('setActiveItem', item)
  },
  setActiveView({ commit }, number) {
    commit('setActiveView', number)
  },
}

export const mutations = {
  setActiveView(state, number) {
    state.activeView = number
  },
  setActiveItem(state, item) {
    state.activeItem = item
  },
  setViews(state, items) {
    state.views = items
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

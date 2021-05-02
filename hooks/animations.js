import { watch, onUpdated, onMounted } from '@nuxtjs/composition-api'
import gsap from 'gsap'
import { useViews } from './views'

const animationPlayStates = [
  {
    income: {
      from: { opacity: 0, y: 500 },
      to: { opacity: 1, y: 0, duration: 1 },
    },
    outcome: {
      from: { opacity: 0, y: 500 },
      to: { opacity: 0, y: -500 },
    },
  },
  // {
  //   income: {
  //     from: { opacity: 0, x: -500 },
  //     to: { opacity: 1, x: 0, duration: 1 },
  //   },
  //   outcome: {
  //     from: { opacity: 0, y: 500 },
  //     to: { opacity: 0, x: 500 },
  //   },
  // },
]

const animationDelays = [0.4, 0.3, 0.2, 0.2, 0.4]
const animationDelaysIncome = [0.2, 0.4, 0.2, 0.3, 0.3]

export const useAnimation = ([...refferals]) => {
  const { activeView } = useViews()

  onMounted(() =>
    refferals.map(async (ref, i) => {
      const refElement = (await ref.value?.$el) || (await ref.value)
      const playState =
        animationPlayStates[activeView.value]?.income ||
        animationPlayStates[0].income

      if (refElement?.classList?.value === 'background') {
        gsap.fromTo(
          refElement,
          {
            y: -1000,
          },
          {
            y: 0,
            delay: 0.2,
            duration: 1,
          }
        )
      } else {
        gsap.fromTo(
          refElement,
          {
            ...playState.from,
          },
          {
            ...playState.to,
            delay: animationDelaysIncome[i],
          }
        )
      }

      return null
    })
  )

  onUpdated(() =>
    refferals.map(async (ref, i) => {
      const refElement = (await ref.value?.$el) || (await ref.value)
      const playState =
        animationPlayStates[activeView.value]?.income ||
        animationPlayStates[0].income

      if (refElement?.classList?.value === 'background') {
        gsap.fromTo(
          refElement,
          {
            y: -1000,
          },
          {
            y: 0,
            delay: 0.2,
            duration: 1,
          }
        )
      } else {
        gsap.fromTo(
          refElement,
          {
            ...playState.from,
          },
          {
            ...playState.to,
            delay: animationDelaysIncome[i],
          }
        )
      }

      return null
    })
  )

  watch(activeView, () => {
    refferals.map((ref, i) => {
      const refElement = ref.value.$el || ref.value
      const playState =
        animationPlayStates[activeView.value]?.outcome.to ||
        animationPlayStates[0].outcome.to

      if (refElement.classList.value === 'background') {
        gsap.to(refElement, {
          y: 1000,
          delay: animationDelays[4],
          duration: 1,
        })
      } else {
        gsap.to(refElement, {
          ...playState,
          delay: animationDelays[i],
        })
      }

      return null
    })
  })
}

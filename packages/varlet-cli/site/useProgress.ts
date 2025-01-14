import Progress from './components/progress'
import { reactive } from 'vue'
// @ts-ignore
import config from '@config'
// @ts-ignore
import { mountInstance } from './utils'
import { get } from 'lodash-es'

export function useProgress() {
  let timer: number
  const trackColor = get(config, 'themes.color-progress-track')
  const color = get(config, 'themes.color-progress')

  const props = reactive({
    style: {
      position: 'fixed',
      width: '100%',
      left: 0,
      top: 0,
      zIndex: 10086,
    },
    trackColor,
    color,
    lineWidth: 3,
    value: 0,
  })

  const changeValue = () => {
    timer = window.setTimeout(() => {
      if (props.value >= 95) return
      let num = Math.random()

      if (props.value < 70) num = Math.round(5 * Math.random())

      props.value += num
      changeValue()
    }, 200)
  }

  const start = () => {
    props.value = 0
    setTimeout(() => (props.color = color), 200)
    changeValue()
  }

  const end = () => {
    props.value = 100
    setTimeout(() => (props.color = trackColor), 300)
    window.clearTimeout(timer)
  }

  mountInstance(Progress, props)

  return {
    start,
    end,
  }
}

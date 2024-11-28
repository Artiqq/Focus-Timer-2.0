import { elForest, elRain, elFireplace, elCoffeShop, controls } from "./elements.js"
import * as actions from './actions.js'
import state from "./state.js"

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function registerPlaySound() {
  elForest.addEventListener('click', (event) => {
    const sound = state.isPlayingSound == "forest" ? null : "forest"


    actions.toggleMusic(sound)
  })

  elRain.addEventListener('click', (event) => {
    const sound = state.isPlayingSound == "rain" ? null : "rain"


    actions.toggleMusic(sound)
  })

  elCoffeShop.addEventListener('click', (event) => {
    const sound = state.isPlayingSound == "coffeeshop" ? null : "coffeeshop"


    actions.toggleMusic(sound)
  })

  elFireplace.addEventListener('click', (event) => {
    const sound = state.isPlayingSound == "fireplace" ? null : "fireplace"


    actions.toggleMusic(sound)
  })
}

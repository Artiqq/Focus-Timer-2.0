import * as el from './elements.js'
import { soundCoffeeshop, soundFireplace, soundForest, soundRain } from './sounds.js'
import state from './state.js'
import * as timer from './timer.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
}

export function reset() {
  state.isRunning = false
  state.minutes = 25
  state.seconds = 0
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function incrementTime() {
  state.minutes += 5
  timer.updateDisplay()
}

export function decrementTime() {
  if(state.minutes >= 5){
    state.minutes -= 5
  } else {
    state.minutes = 0
  }
  
  timer.updateDisplay()
}

function getSound(sound) {
  switch (sound) {
    case "forest":
      return soundForest
    case "rain":
      return soundRain
    case "coffeeshop":
      return soundCoffeeshop
    case "fireplace":
      return soundFireplace
  }
}

function getElement(element) {
  switch (element) {
    case "forest":
      return el.elForest
    case "rain":
      return el.elRain
    case "coffeeshop":
      return el.elCoffeShop
    case "fireplace":
      return el.elFireplace
  }
}

export function toggleMusic(sound) {
  const oldsound = state.isPlayingSound
    if (oldsound != null) {
      const oldwav = getSound(oldsound)
      if (oldwav != null){
        oldwav.pause()
      }

      const oldelement = getElement(oldsound)
      if (oldelement != null){
        oldelement.classList.remove("music-on")
      }
    }

    if (sound != null) {
      const wav = getSound(sound)
      if (wav != null){
        wav.play()
      }

      const element = getElement(sound)
      if (element != null){
        element.classList.add("music-on")
      }
    }
    
  

  state.isPlayingSound = sound
}

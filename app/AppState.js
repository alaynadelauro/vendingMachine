import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Snack } from "./models/Snack.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  Snacks = [
    new Snack({name: 'spider', price: '2.00', image: 'https://images.unsplash.com/photo-1512421568418-bd003d0d60a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyZWVweSUyMHNwaWRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}),
    new Snack({name: 'earthworm', price: '1.50', image: 'https://plus.unsplash.com/premium_photo-1668444507307-4a53678c3c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcm1zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}),
    new Snack({name: 'centipede', price: '2.50', image: 'https://images.unsplash.com/photo-1628523335271-aa97c3b5a43b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2VudGlwZWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}),
    new Snack({name: 'roach', price: '.50', image: 'https://images.unsplash.com/photo-1662908676913-f9e7dc46d38c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9hY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}),
  ]

  money = 0.00

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

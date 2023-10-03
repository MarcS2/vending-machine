import { Snack } from "./models/Snack.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  // SECTION global variables 
  snacks = [
    new Snack({ name: 'Mac and Cheese', price: 4.45, imgUrl: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' }),
    new Snack({ name: 'Lasagna', price: 6.25, imgUrl: 'https://plus.unsplash.com/premium_photo-1664472658489-8bb2cf572db1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2142&q=80' }),
    new Snack({ name: 'Spaghetti', price: 8.75, imgUrl: 'https://images.unsplash.com/photo-1635264685671-739e75e73e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' }),
    new Snack({ name: 'Raw Catfish', price: 15.25, imgUrl: 'https://images.unsplash.com/photo-1515735543535-12664d2453f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' }),
    new Snack({ name: 'Whole Pineapple', price: 6.75, imgUrl: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80' }),
    new Snack({ name: 'Wheat Grain', price: 25.50, imgUrl: 'https://images.unsplash.com/photo-1555064837-3c7ae70f81be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hlYXQlMjBncmFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' })
  ]
  money = 20
  // !SECTION


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

import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
class SnackService {
  buySnack(snackName) {
    const foundSnack = AppState.snacks.find(snack => snack.name == snackName)
    // @ts-ignore
    if (AppState.money >= foundSnack.price) {
      // @ts-ignore
      AppState.money -= foundSnack.price

    } else {
      Pop.toast('Low On Funds', 'error', 'top',)
    }
  }
  addMoney(amount) {
    AppState.money += amount
    console.log('AppState ', AppState.money);
  }


}

export const snacksService = new SnackService
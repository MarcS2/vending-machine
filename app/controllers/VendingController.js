
import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML, setText } from "../utils/Writer.js";


function _drawMoney() {
  setText('total-money', AppState.money)
}

function _drawSnacks() {
  const snacks = AppState.snacks
  let content = ''
  snacks.forEach(snack => content += snack.SnackCard)
  setHTML('snackCatalog', content)
}

function _buySnack(snackName) {
  console.log('snack selected', snackName);
}



export class VendingController {
  constructor() {
    console.log('controller loaded');
    // SECTION page load
    AppState.on('money', _drawMoney)
    // !SECTION
    _drawSnacks()
  }
  addMoney(amount) {
    console.log('money');
    snacksService.addMoney(amount)
  }

  buySnack(snackName) {
    console.log('snack selected', snackName);
    snacksService.buySnack(snackName)
  }
}
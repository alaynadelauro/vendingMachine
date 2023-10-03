import { moneyService } from "../services/MoneyService.js"
import { AppState } from "../AppState.js"
import { setText } from "../utils/Writer.js"




export class MoneyController{
    constructor(){
        // console.log('I work')
        AppState.on('money', _drawMoney)
        }
    makeMoney(){
            // console.log('clicked moneybuttons');
            moneyService.makeMoney()
            _drawMoney()
    }
    
}

function _drawMoney(){
    setText('moneyButton', AppState.money)
}
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { snackService } from "../services/SnackService.js";



function _drawSnacks(){
    const snacks = AppState.Snacks
    let content = ''
    snacks.forEach(snack => content += snack.snackCard)
    setHTML('snackRow', content)
}



export class SnackController {
    constructor(){
        // console.log('the Snack Controller Is Alive')
        _drawSnacks()
    }
    buyDeliciousSnack(name){
        // console.log('I am here', name)
        snackService.buyDeliciousSnack(name)
        // console.log('can you hear me')
    }
}
import { AppState } from "../AppState.js";


class MoneyService{
    makeMoney(){
        AppState.money += .25
        // console.log('money!', AppState.money)
    }
}

export const moneyService = new MoneyService
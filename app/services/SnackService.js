import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"

class SnackService{
    buyDeliciousSnack(name){
        // console.log('Getting your Delicious Snack', name)
        let foundSnack = AppState.Snacks.find(snack => snack.name == name)
        // console.log('found the snack', foundSnack)
        // console.log('I have $', AppState.money)
        if(AppState.money >= foundSnack.price){
            // console.log('snack bought!')
            Pop.success(`Enjoy your Delicious ${foundSnack.name}`)
            AppState.money -= foundSnack.price
        }else(
            Pop.error(`you're broke!!!`)
            // console.log(`You're Broke!!!`)
        )
    }
}

export const snackService = new SnackService
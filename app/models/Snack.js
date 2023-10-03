export class Snack {
    constructor(data){
        this.name = data.name
        this.price = data.price
        this.image = data.image
    }
    get snackCard(){
        return `
        <div class="col-6 text-center" function="button" onclick="app.SnackController.buyDeliciousSnack('${this.name}')">
            <img class="image-fluid shopImage" src="${this.image}">
            <P class="fs-1">Delicious ${this.name}</P>
            <p>${this.price}</p>
        </div>
    `
    }
}
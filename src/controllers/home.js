import { extendContext, getUserData } from "../util.js";
import { getAllHeroes } from "../heroes-service.js";
import { Barbarian, Mage } from "../heroes.js";


export async function homePage(context) {
    let pesho = new Barbarian("Pesho");
    let gosho = new Barbarian("Gosho");
    let stelko = new Mage("Stelko")
    let heroes = [pesho, gosho, stelko];
    const data = Object.assign({ heroes }, this.app.userData)
    await extendContext(context);
    this.partial('./templates/homePage.hbs', data)
};
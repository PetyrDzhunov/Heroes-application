import { extendContext } from "../util.js";
import { getAllHeroes } from "../heroes-service.js";
import { Barbarian } from "../heroes.js";

export async function homePage(context) {
    let pesho = new Barbarian("Pesho");
    let gosho = new Barbarian("Gosho");
    let heroes = [pesho, gosho];
    context.heroes = heroes;
    await extendContext(context);
    this.partial('./templates/homePage.hbs', heroes)
}
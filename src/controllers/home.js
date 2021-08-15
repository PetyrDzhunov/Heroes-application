import { extendContext } from "../util.js";

export async function homePage(context) {
    let heroes = getAllHeroes();
    context.heroes = heroes;
    await extendContext(context);
    this.partial('./templates/homePage.hbs', heroes)
}
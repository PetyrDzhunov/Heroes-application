import { db, extendContext, getUserData } from "../util.js";
import { getAllHeroes } from "../heroes-service.js";
import { Barbarian, Mage, Hunter } from "../heroes.js";


export async function homePage(context) {
    let user = getUserData();
    let response = await db.collection('heroes').get();
    context.heroes = response.docs.map((hero) => { return {...hero.data() } });
    let heroes = context.heroes;
    console.log(context);
    const data = Object.assign(this.app.userData, { heroes })
    await extendContext(context);
    this.partial('./templates/homePage.hbs', data)
};
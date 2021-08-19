import { extendContext, getUserData, db, classToObject, errorHandler } from "../util.js";
import { Barbarian, Hunter, Mage } from "../heroes.js"


export async function createNewHero(context) {
    await extendContext(context)
    this.partial('./templates/create-hero.hbs');
}

export function createNewHeroPost(context) {
    let { name, hero } = context.params;
    let user = getUserData();
    let heroes = user.heroes;
    if (user) {
        if (hero === 'barbarian') {
            hero = new Barbarian(name);
        };
        if (hero === 'mage') {
            hero = new Mage(name)
        };
        if (hero === 'hunter') {
            hero = new Hunter(name)
        };
        let newHero = JSON.parse(JSON.stringify(hero)); // loosing methods though!!! converting a class instance to a plain object.
        Object.assign(newHero, { creator: user.email })
        db.collection('heroes')
            .add(newHero)
            .then((heroData) => {
                context.redirect('/home')
            })
            .catch(errorHandler)
    }
}
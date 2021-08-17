import { extendContext, getUserData, db, classToObject, errorHandler } from "../util.js";
import { Barbarian, Hunter, Mage } from "../heroes.js"


export async function createNewHero(context) {
    const data = Object.assign(this.app.userData);
    await extendContext(context)
    this.partial('./templates/create-hero.hbs', data);
}

export function createNewHeroPost(context) {
    let { name, hero } = context.params;
    let user = getUserData();
    let heroes = user.heroes;
    if (user) {
        if (heroes.includes(name)) {
            return console.log('Name already taken.');
        };
        if (heroes.includes(hero)) {
            return console.log('You can have only one class of this hero.');
        };
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
                this.redirect('/home')
            })
            .catch(errorHandler)
    }
}
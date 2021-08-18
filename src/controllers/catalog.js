import { extendContext, getUserData, db, classToObject, errorHandler, checkHero } from "../util.js";


export async function createNewHero(context) {
    await extendContext(context)
    this.partial('./templates/create-hero.hbs');
}

export function createNewHeroPost(context) {
    let { name, hero } = context.params;
    console.log(hero);
    let user = getUserData();
    console.log(user);
    let heroes = user.heroes;
    if (user) {
        // if (heroes.includes(name)) {
        //     return console.log('Name already taken.');
        // };
        // if (heroes.includes(hero)) {
        //     return console.log('You can have only one class of this hero.');
        // };
        let currHero = checkHero(name, hero)
        console.log(currHero);

        let newHero = JSON.parse(JSON.stringify(currHero)); // loosing methods though!!! converting a class instance to a plain object.
        Object.assign(newHero, { creator: user.email })
        db.collection('heroes')
            .add(newHero)
            .then((heroData) => {
                this.redirect('/home')
            })
            .catch(errorHandler)
    }
}
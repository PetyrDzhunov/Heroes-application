import { extendContext, getUserData, db, classToObject, errorHandler, checkHero, validateHero, getAllMyHeroes, getHero, getUserNameFromEmail, showMoreInformationAboutClass } from "../util.js";



export async function createNewHero(context) {
    let user = getUserData()
    let username = getUserNameFromEmail(user.email);
    context.username = username;
    await extendContext(context)
    this.partial('./templates/create-hero.hbs')
        .then(() => {
            showMoreInformationAboutClass()
        })
}

export async function createNewHeroPost(context) {
    let { name, hero, gender } = context.params;
    let user = getUserData();
    let heroes = await getAllMyHeroes(user.email);
    if (user) {
        if (await validateHero(name, hero, heroes) === false) {
            return;
        };
        let currHero = checkHero(name, hero, gender)
        let newHero = JSON.parse(JSON.stringify(currHero)); // loosing methods though!!! converting a class instance to a plain object.
        Object.assign(newHero, { creator: user.email })
        db.collection('heroes')
            .add(newHero)
            .then((heroData) => {
                context.redirect('/home')
            })
            .catch(errorHandler)

    };
};



export async function detailsPage(context) {
    const { id } = context.params;
    let user = getUserData();
    let hero = await getHero(id);
    let username = getUserNameFromEmail(user.email);
    context.username = username;
    await extendContext(context);
    this.partial('../templates/details.hbs', hero)
}
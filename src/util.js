import init from './db-init.js';
import { Barbarian, Mage, Hunter } from './heroes.js';
init();
export const userModel = firebase.auth();
export const db = firebase.firestore()


export async function extendContext(context) {
    const user = getUserData();
    context.loggedIn = Boolean(user);
    context.email = user ? user.email : '';
    const partials = await Promise.all([
        context.load('./templates/partials/header.hbs'),
        context.load('./templates/partials/footer.hbs')
    ]);
    context.partials = {
        header: partials[0],
        footer: partials[1]
    };
};

export async function errorHandler(error) {
    console.error(error);
};

export function saveUserData(data) {
    const { user: { email, uid } } = data;
    localStorage.setItem('user', JSON.stringify({ email, uid, heroes: [] }))
};

export function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export function clearUserData() {
    localStorage.removeItem('user');
};

export function classToObject(theClass) {
    const originalClass = theClass || {}
    const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(originalClass))
    return keys.reduce((classAsObj, key) => {
        classAsObj[key] = originalClass[key]
        return classAsObj
    }, {})
}

export async function getAllMyHeroes(creator) {
    let response = await db.collection('heroes').get();
    let heroes = await response.docs.map((hero) => { return {...hero.data() } });
    let myHeroes = heroes.filter((hero) => hero.creator === creator);
    return myHeroes
}

export function checkHero(name, hero) {
    if (hero === 'barbarian') {
        return new Barbarian(name);
    };
    if (hero === 'mage') {
        return new Mage(name)
    };
    if (hero === 'hunter') {
        return new Hunter(name)
    };
}
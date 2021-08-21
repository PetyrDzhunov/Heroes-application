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
    let heroes = await response.docs.map((hero) => { return { heroId: hero.id, ...hero.data() } });
    let myHeroes = heroes.filter((hero) => hero.creator === creator);
    return myHeroes
};

export async function getHero(id) {
    let user = getUserData();
    let myHeroes = await getAllMyHeroes(user.email);
    let hero = myHeroes.find((hero) => hero.heroId === id);
    return hero || undefined
};

export function checkHero(name, hero, gender) {
    if (hero === 'barbarian') {
        return new Barbarian(name, gender);
    };
    if (hero === 'mage') {
        return new Mage(name, gender)
    };
    if (hero === 'hunter') {
        return new Hunter(name, gender)
    };
}

export function validateHero(name, hero, heroes) {
    let { errorNotification, successNotification } = getNotifications();
    console.log(name, hero, heroes);
    let currentHero = heroes.find((hero) => hero.name === name);
    let heroClass = heroes.find((currHero) => currHero.class === hero);
    if (currentHero) {
        showErrorNotificationWithTextContent('You already have a character with this name!')
        hideNotification(errorNotification)
        return false;
    };
    if (heroClass) {
        showErrorNotificationWithTextContent('You can have only 1 hero per class!')
        hideNotification(errorNotification)
        return false;
    };
    if (heroes.length >= 5) {
        showErrorNotificationWithTextContent('You can have maximum 5 heroes per account!')
        hideNotification(errorNotification)
        return false;
    };
    showSuccessNotificationWithTextContent('Sucessfully created a new hero!')
    hideNotification(successNotification);
}

export function getNotifications() {
    return {
        errorNotification: document.getElementById('error-notification'),
        successNotification: document.getElementById('success-notification')
    };
};

export function hideNotification(notification) {
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
};

export function showErrorNotificationWithTextContent(textContent) {
    let { errorNotification, successNotification } = getNotifications();
    errorNotification.style.display = 'block';
    errorNotification.textContent = textContent
};

export function showSuccessNotificationWithTextContent(textContent) {
    let { errorNotification, successNotification } = getNotifications();
    successNotification.style.display = 'block';
    successNotification.textContent = textContent;
};


export function getUserNameFromEmail(email) {
    let result = email.substr(0, email.indexOf('@'));
    let firstLetter = result.substring(0, 1);
    firstLetter = firstLetter.toUpperCase();
    let finalLetters = result.substring(1);
    let username = firstLetter.concat(finalLetters);
    return username;
}
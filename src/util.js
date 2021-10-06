import { Barbarian } from './heroes/barbarian.js';
import { Hunter } from './heroes/hunter.js';
import { Mage } from './heroes/mage.js';
import { Priest } from './heroes/priest.js';
import { Rogue } from './heroes/rogue.js';
import init from './db-init.js';

init();
export const userModel = firebase.auth();
export const db = firebase.firestore()
let titles = document.getElementsByClassName('create-hero-section__classes__class-title');
let heroImages = [{ name: 'Barbarian', src: './assets/images/Barbarian.jpg', }, { name: 'Mage', src: './assets/images/Mage.jpg' }, { name: 'Rogue', src: './assets/images/Rogue.jpg' }, { name: 'Priest', src: './assets/images/Priest.jpg' }, { name: 'Hunter', src: './assets/images/Hunter.jpg' }];



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


export async function getAllHeroes() {
    let response = await db.collection('heroes').get();
    let heroes = await response.docs.map((hero) => { return { heroId: hero.id, ...hero.data() } });
    return heroes;
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
    if (hero === 'Barbarian') {
        return new Barbarian(name, gender);
    };
    if (hero === 'Mage') {
        return new Mage(name, gender)
    };
    if (hero === 'Hunter') {
        return new Hunter(name, gender)
    };
    if (hero === 'Priest') {
        return new Priest(name, gender)
    }
    if (hero === 'Rogue') {
        return new Rogue(name, gender)
    }
}

export async function validateHero(name, hero, heroes) {
    let { errorNotification, successNotification } = getNotifications();
    let currentHero = heroes.find((hero) => hero.name === name);
    let heroClass = heroes.find((currHero) => currHero.class === hero);
    let allHeroes = await getAllHeroes();
    let heroExists = allHeroes.find((currHero) => currHero.name === name);

    if (heroExists) {
        showErrorNotificationWithTextContent('There is already a character that use this name!')
        hideNotification(errorNotification)
        return false;
    }

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



    if (name === '') {
        showErrorNotificationWithTextContent('The name should contain at least 3 letters!')
        hideNotification(errorNotification)
        return false;
    };

    if (name.length < 3) {
        showErrorNotificationWithTextContent('The name should contain at least 3 letters!')
        hideNotification(errorNotification)
        return false;
    };

    if (hero === '') {
        showErrorNotificationWithTextContent('You should choose a class to make a new hero!')
        hideNotification(errorNotification);
        return false;
    }

    if (hero !== "Barbarian" && hero !== "Priest" && hero !== "Rogue" && hero !== "Hunter" && hero !== "Mage") {
        showErrorNotificationWithTextContent('You should choose a valid class in order to play!')
        hideNotification(errorNotification);
        return false;
    }

    showSuccessNotificationWithTextContent('Sucessfully created a new hero!')
    hideNotification(successNotification);
}

export function getNotifications() {
    return {
        errorNotification: document.querySelector('.c-notifications__error'),
        successNotification: document.querySelector('.c-notifications__success')
    };
};

export function hideNotification(notification) {
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
};

export function showErrorNotificationWithTextContent(textContent) {
    let { errorNotification } = getNotifications();
    errorNotification.style.display = 'block';
    errorNotification.textContent = textContent
};

export function showSuccessNotificationWithTextContent(textContent) {
    let { successNotification } = getNotifications();
    successNotification.style.display = 'block';
    successNotification.textContent = textContent;
};


export function getUserNameFromEmail(email) {
    let result = email.substr(0, email.indexOf('@'));
    let firstLetter = result.substring(0, 1);
    firstLetter = firstLetter.toUpperCase();
    let finalLetters = result.substring(1);
    let username = firstLetter.concat(finalLetters);
    return username
}

export async function showMoreInformationAboutClass() {
    let titlesArray = Array.from(titles);
    titlesArray.forEach((title) => {
        title.addEventListener('click', revealInformation);
    });
}



function revealInformation(e) {
    let titlesArray = Array.from(titles);
    let titlesArrayCopy = [...titlesArray];
    let currentHero = e.target.textContent;
    let currentImageSrc = heroImages.find((image) => image.name === currentHero);
    let imageElement = document.querySelector('.create-hero-section__images-image');
    imageElement.src = currentImageSrc.src;
    let currTitle = titlesArrayCopy.find((title) => title === e.target);
    titlesArrayCopy.splice(titlesArrayCopy.indexOf(currTitle), 1)
    let inputForClass = document.getElementById('hero-class')

    let hiddenParagraph = e.target.nextSibling.nextSibling;
    if ([...hiddenParagraph.classList].includes('u-hidden')) {
        hiddenParagraph.classList.remove('u-hidden');
        currTitle.classList.add('u-underline');
        inputForClass.value = currTitle.textContent

        titlesArrayCopy.forEach((title) => {
            title.nextSibling.nextSibling.classList.add('u-hidden');
            title.classList.remove('u-underline');
        });
    } else {
        hiddenParagraph.classList.add('u-hidden');
        currTitle.classList.remove('u-underline');
    }
}


export let today = new Date();
export let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
export const getRandomImage = (array) => array[Math.floor(Math.random() * array.length)];
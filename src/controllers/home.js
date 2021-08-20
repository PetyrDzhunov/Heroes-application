import { db, extendContext, getAllMyHeroes, getUserData, getUserNameFromEmail } from "../util.js";
import { Barbarian, Mage, Hunter } from "../heroes.js";


export async function homePage(context) {
    const user = getUserData();
    this.userData = {
        loggedIn: Boolean(user),
        ...user,
    };



    if (user) {
        let username = getUserNameFromEmail(user.email);
        context.username = username;
        console.log(username);
        let heroes = await getAllMyHeroes(user.email);
        user.heroes = heroes;
        const data = Object.assign(this.userData, { heroes });
        await extendContext(context);
        this.partial('./templates/homePage.hbs', data);
    } else {
        await extendContext(context);
        this.partial('./templates/homePage.hbs');
    }
};
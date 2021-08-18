import { db, extendContext, getAllMyHeroes, getUserData } from "../util.js";
import { Barbarian, Mage, Hunter } from "../heroes.js";


export async function homePage(context) {
    const user = getUserData();
    this.userData = {
        loggedIn: Boolean(user),
        ...user,
    };
    if (user) {
        let heroes = await getAllMyHeroes(user.email)
        user.heroes = heroes;
        const data = Object.assign(this.userData, { heroes })
        console.log(data)
        await extendContext(context);
        this.partial('./templates/homePage.hbs', data)
    } else {
        await extendContext(context);

        this.partial('./templates/homePage.hbs')
    }
};
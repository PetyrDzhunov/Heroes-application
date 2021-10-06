import { homePage } from './controllers/home.js'
import { registerPage, registerPost, loginPage, loginPost, logout, deleteHero, armoryPage, enterWorld } from "./controllers/user.js";
import { createNewHero, createNewHeroPost, detailsPage } from "./controllers/catalog.js";

// const templateString = await (await fetch('./templates/homePage.hbs')).text();
// console.log(templateString);
Handlebars.registerPartial('header', await fetch('./templates/partials/header.hbs'))
const asd = await (await fetch('/templates/partials/footer.hbs')).text();
const asd1 = Handlebars.registerPartial('header', (await fetch('./templates/partials/header.hbs')));
console.log(Handlebars.registerPartial)

console.log(asd);
const app = Sammy('#app', function() {

    this.use('Handlebars', 'hbs');
    this.get('/', homePage);
    this.get('/home', homePage);


    //Register

    this.get('/register', registerPage);
    this.post('/register', (ctx) => { registerPost(ctx); });

    //Login
    this.get('/login', loginPage);
    this.post('/login', (ctx) => { loginPost(ctx); });

    //create-hero
    this.get('/create-hero', createNewHero);
    this.post('/create-hero', (ctx) => { createNewHeroPost(ctx); });

    //logout
    this.get('/logout', logout)

    //delete
    this.get('/delete/:id', deleteHero)

    //about
    this.get('/armory', armoryPage)

    //details
    this.get('/details/:id', detailsPage)

    //enter-world
    this.get('/enter-world/:id', enterWorld)

});


app.run('/home')
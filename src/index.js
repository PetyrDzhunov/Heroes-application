import { homePage } from './controllers/home.js'
import { registerPage, registerPost, loginPage, loginPost, logout, deleteHero } from "./controllers/user.js";
import { createNewHero, createNewHeroPost } from "./controllers/catalog.js";
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

});


app.run('/home')
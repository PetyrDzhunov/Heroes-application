import { userModel, db, getUserData } from "./util.js";
import { homePage } from './controllers/home.js'
import { registerPage, registerPost, loginPage, loginPost } from "./controllers/user.js";
import { createNewHero } from "./controllers/catalog.js";
const app = Sammy('#app', function() {
    this.use('Handlebars', 'hbs');
    const user = getUserData();
    this.userData = {
        loggedIn: user ? true : false,
        ...user
    };

    this.get('/', homePage);
    this.get('/home', homePage);
    //Register

    this.get('/register', registerPage);
    this.post('/register', registerPost);

    //Login
    this.get('/login', loginPage)
    this.post('/login', loginPost)

    this.get('/create-hero', createNewHero);
});


app.run('/home')
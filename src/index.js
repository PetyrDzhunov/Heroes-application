import { userModel, db } from "./util.js";
import { homePage } from './controllers/home.js'
import { Barbarian } from "./heroes.js";
import { registerPage, registerPost, loginPage } from "./controllers/user.js";

const app = Sammy('#app', function() {
    this.use('Handlebars', 'hbs');

    this.get('/', homePage);
    this.get('/home', homePage);
    //Register

    this.get('/register', registerPage);
    this.post('/register', registerPost);

    this.get('login', loginPage)



});

app.run('/home')
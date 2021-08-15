import { userModel, db } from "./util.js";
import { homePage } from './controllers/home.js'

import { Barbarian } from "./heroes.js";

const app = Sammy('#app', function() {
    this.use('Handlebars', 'hbs');
    this.get('/', homePage);
    this.get('/home', homePage);
    this.get('/register', registerPage);
});

app.run('/home')
import { userModel, db } from "./util.js";
console.log(userModel);
import { homePage } from './controllers/home.js'

const app = Sammy('#app', function() {
    this.use('Handlebars', 'hbs');
    this.get('/', homePage);
    this.get('/home', homePage);
});

app.run('/home')
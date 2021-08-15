import { extendContext, userModel, errorHandler } from "../util.js";


export async function registerPage(context) {
    await extendContext(context)
    this.partial('./templates/register.hbs');
};

export function registerPost(context) {
    console.log(context);
    const { email, password, rePassword } = context.params;
    console.log(email, password, rePassword);
    if (password != rePassword) {
        return;
    };
    userModel.createUserWithEmailAndPassword(email, password)
        .then((userData) => {
            console.log(userData);
            this.redirect('/login')
        })
        .catch(errorHandler)
};


export async function loginPage(context) {
    await extendContext(context)
    this.partial('./templates/login.hbs');
};
import { extendContext, userModel, errorHandler, saveUserData, getUserData, clearUserData } from "../util.js";


export async function registerPage(context) {
    await extendContext(context)
    this.partial('./templates/register.hbs');
};

export function registerPost(context) {
    const { email, password, rePassword } = context.params;
    console.log(email, password, rePassword);
    if (password != rePassword) {
        return;
    };
    userModel.createUserWithEmailAndPassword(email, password)
        .then((userData) => {
            this.redirect('/login')
        })
        .catch(errorHandler)
};


export async function loginPage(context) {
    await extendContext(context)
    this.partial('./templates/login.hbs');
};

export function loginPost(context) {
    const { email, password } = context.params;
    userModel.signInWithEmailAndPassword(email, password)
        .then((userData) => {
            saveUserData(userData);
            this.redirect('/home')
        })
        .catch(errorHandler)
};
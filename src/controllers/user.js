import { extendContext, userModel, errorHandler, saveUserData, getUserData, clearUserData } from "../util.js";


export async function registerPage(context) {
    await extendContext(context)
    this.partial('./templates/register.hbs');
};

export async function registerPost(context) {
    const { email, password, rePassword } = context.params;
    console.log(email, password, rePassword);
    if (password != rePassword) {
        return;
    };
    userModel.createUserWithEmailAndPassword(email, password)
        .then((userData) => {
            context.redirect('/login')
        })
        .catch(errorHandler)
};


export async function loginPage(context) {
    await extendContext(context)
    this.partial('./templates/login.hbs');
};

export async function loginPost(context) {
    try {
        const { email, password } = context.params;
        let result = await userModel.signInWithEmailAndPassword(email, password)
        saveUserData(result);
        context.redirect('/home')
    } catch (error) {
        console.log(error);
    }
};


export function logout(context) {
    console.log(context);
    console.log('in logout func');
    userModel.signOut()
        .then((response) => {
            clearUserData();
            this.redirect('/home');
        })
};
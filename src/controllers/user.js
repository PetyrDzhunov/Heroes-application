import { extendContext, userModel, errorHandler, saveUserData, getUserData, clearUserData, getAllMyHeroes, getHero, getNotifications, showSuccessNotificationWithTextContent, db, hideNotification } from "../util.js";
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


export async function logout(context) {
    let response = await userModel.signOut()
    clearUserData();
    this.redirect('/home');
};

export async function deleteHero(context) {
    let { errorNotification, successNotification } = getNotifications();

    const { id } = context.params;
    let currentHero = await getHero(id);
    db.collection("heroes").doc(id).delete().then(() => {
        showSuccessNotificationWithTextContent("Hero successfully deleted!");
        hideNotification(successNotification)
        context.redirect('/home')
    }).catch((error) => {
        errorHandler(error)
    });
};

export async function aboutPage(context) {
    await extendContext(context);
    this.partial('./templates/about.hbs')
}
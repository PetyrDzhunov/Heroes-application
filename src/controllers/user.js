import {
  extendContext,
  userModel,
  errorHandler,
  saveUserData,
  getUserData,
  clearUserData,
  getAllMyHeroes,
  getHero,
  getNotifications,
  showSuccessNotificationWithTextContent,
  db,
  hideNotification,
  getUserNameFromEmail,
  getAllHeroes,
} from '../util.js';
export async function registerPage(context) {
  await extendContext(context);
  this.partial('./templates/register.hbs');
}

export async function registerPost(context) {
  const { email, password, rePassword } = context.params;
  if (password != rePassword) {
    return;
  }
  userModel
    .createUserWithEmailAndPassword(email, password)
    .then((userData) => {
      context.redirect('/login');
    })
    .catch(errorHandler);
}

export async function loginPage(context) {
  await extendContext(context);
  this.partial('./templates/login.hbs');
}

export async function loginPost(context) {
  try {
    const { email, password } = context.params;
    let result = await userModel.signInWithEmailAndPassword(email, password);
    saveUserData(result);
    context.redirect('/home');
  } catch (error) {
    console.log(error);
  }
}

export async function logout(context) {
  let response = await userModel.signOut();
  clearUserData();
  this.redirect('/home');
}

export async function deleteHero(context) {
  let { successNotification } = getNotifications();
  const { id } = context.params;
  db.collection('heroes')
    .doc(id)
    .delete()
    .then(() => {
      showSuccessNotificationWithTextContent('Hero successfully deleted!');
      hideNotification(successNotification);
      context.redirect('/home');
    })
    .catch((error) => {
      errorHandler(error);
    });
}

export async function armoryPage(context) {
  let heroes = await getAllHeroes();
  context.heroes = heroes;
  let user = getUserData();
  if (user) {
    let username = getUserNameFromEmail(user.email);
    context.username = username;
  } else {
    context.username = 'Guest';
  }
  await extendContext(context);
  this.partial('./templates/armory.hbs');
}

export async function enterWorld(context) {
  const { id } = context.params;
  let user = getUserData();
  let hero = await getHero(id);
  let username = getUserNameFromEmail(user.email);
  context.username = username;
  await extendContext(context);
  this.partial('../templates/enter-world.hbs');
}

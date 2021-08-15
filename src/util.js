import init from './db-init.js';
init();
export const userModel = firebase.auth();
export const db = firebase.database();

export async function extendContext(context) {
    const partials = await Promise.all([
        context.load('./templates/partials/header.hbs'),
        context.load('./templates/partials/footer.hbs')
    ]);
    context.partials = {
        header: partials[0],
        footer: partials[1]
    };
};

export async function errorHandler(error) {
    console.error(error);
}
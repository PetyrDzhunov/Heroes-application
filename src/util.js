import init from './db-init.js';
init();
export const userModel = firebase.auth();
export const db = firebase.database();
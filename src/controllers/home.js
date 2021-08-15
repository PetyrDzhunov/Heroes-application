import { extendContext } from "../util.js";

export async function homePage(context) {
    await extendContext(context);
    this.partial('./templates/homePage.hbs')
}
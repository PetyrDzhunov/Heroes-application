export async function createNewHero(context) {
    await extendContext(context)
    this.partial('./templates/create-hero.hbs');
}
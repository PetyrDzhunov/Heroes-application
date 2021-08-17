const randomDamage = () => Math.floor(Math.random() * 20 + 1);
const randomRageRequirment = () => Math.floor(Math.random() * 15 + 1);
const randomManaRequirment = () => Math.floor(Math.random() * 30 + 1);

const getRandomImage = (array) => array[Math.floor(Math.random() * array.length)];

export class Barbarian {
    constructor(name) {
        this.name = name;
        this.rage = 0;
        this.weapons = ['one-handed axe', 'two-handed axe', 'spear', 'polearm', 'one-handed mace', 'two-handed mace', 'one-handed sword', 'two-handed sword'];
        this.shield = [
            { type: 'Fire Shield', bonus: 5 },
            { type: 'Frost Shield', bonus: 7 },
            { type: 'Nature Shield', bonus: 9 }
        ];
        this.armor = ['plate', 'mail', 'leather', 'cloth'];
        this.level = 1;
        this.image = getRandomImage([
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQOQqwDzN0wcjzbKpev40DYpl2ii2e5pSZcKLjF4M_K_u82Hgjc-WRDHPcFFSeN-L1HE&usqp=CAU',
            'https://sagegamers.com/wp-content/uploads/2021/04/brush-dog-.jpg',
            'https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Barbarian-scaled-1024x576.jpg',
            'https://w7.pngwing.com/pngs/213/578/png-transparent-diablo-ii-lord-of-destruction-diablo-iii-diablo-hellfire-video-game-barbarian-diablo-miscellaneous-game-fictional-character.png',
            'https://media.sketchfab.com/models/00dc2616cba442538af927abac95625d/thumbnails/c001bcb8a56e44228d5e9c232d22c304/blob.jpeg',
            'https://cdnb.artstation.com/p/assets/images/images/000/046/257/large/Barbarian_02.jpg?1398787077&dl=1',
            'https://wallpaperaccess.com/full/4197455.jpg',
            'https://64.media.tumblr.com/52f458c58dbaa4832e35f6daaa3a5391/9f044a145aee5026-2c/s1280x1920/9020712cf2d8eaaeb2f320532e7694f49da9df7a.jpg',
            'https://c4.wallpaperflare.com/wallpaper/11/683/711/warrior-barbarian-magic-the-gathering-fantasy-art-wallpaper-preview.jpg',
            'https://i.pinimg.com/originals/fc/e6/27/fce627470d48c9cece861459eeac6da2.jpg',
            'https://i.pinimg.com/originals/d4/65/31/d4653136019208629ee4270e9cc7df6a.jpg',
            'https://img.favpng.com/22/22/8/conan-the-barbarian-art-illustrator-fantasy-png-favpng-GguRryVnHG76b7V46f5bPG4Mt.jpg',
        ]);
        this.class = 'barbarian';
        this.skills = [
            { type: 'deep-wound', damage: randomDamage, requiredRage: randomRageRequirment },
            { type: 'War Cry', damage: randomDamage, requiredRage: randomRageRequirment },
            { type: 'Bash', damage: randomDamage, requiredRage: randomRageRequirment }
        ];
        this.strenght = 17;
        this.aggility = 14;
        this.stamina = 14;
        this.intelligence = 7;
        this.health = this.stamina * 10;
    };
    generateRage(rage) {
        this.rage += rage
    }
};

export class Mage {
    constructor(name) {
        this.name = name;
        this.level = 1;
        this.armor = ['cloth']
        this.weapons = ['staff', 'one-handed-dagger', 'off-hand', 'one-handed-sword'];
        this.image = getRandomImage([
            'https://cogeeking.files.wordpress.com/2017/02/170223mage.jpg?w=636',
            'https://assets.tentonhammer.com/guides/attached_images/000/011/818/medium/1200FrostMage.jpg?1584978399',
            'https://cdnb.artstation.com/p/assets/images/images/016/410/833/large/fabian-klejewski-mage-portfolio-jpg-small.jpg?1552056931',
            'https://wow.zamimg.com/uploads/screenshots/small/29190.jpg',
            'https://i.redd.it/i3p68922tvk11.png',
            'https://i.pinimg.com/originals/a8/21/1a/a8211a42aad0dc7b111b27bcd4196b70.jpg',
            'https://i.imgur.com/7mQbEnP.jpg',
            'http://4.bp.blogspot.com/-B_UCRz0R28g/VVKgsvKtTrI/AAAAAAAADvI/Qkqu-DRSDIE/s1600/FantasyFemale1-Black.jpg'
        ])
        this.skills = [
            { type: 'frostbolt', damage: randomDamage, manaRequired: randomManaRequirment },
            { type: 'fireball', damage: randomDamage, manaRequired: randomManaRequirment },
            { type: 'arcane shock', damage: randomDamage, manaRequired: randomManaRequirment }
        ]
        this.class = 'mage';
        this.strenght = 9;
        this.aggility = 11;
        this.stamina = 8;
        this.intelligence = 17;
        this.health = this.stamina * 10;
        this.mana = this.intelligence * 10;
    }
}
export class Barbarian {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.mana = 0;
        this.weapons = ['one-handed axe', 'two-handed axe', 'spear', 'polearm', , 'one-handed mace', 'two-handed mace', 'one-handed sword', 'two-handed sword'];
        this.shield = [
            { type: 'Fire Shield', bonus: 5 },
            { type: 'Frost Shield', bonus: 7 },
            { type: 'Nature Shield', bonus: 9 }
        ];
        this.armor = ['plate', 'mail', 'leather', 'cloth'];
        this.level = 1;
        this.image = this.getRandomImage(['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQOQqwDzN0wcjzbKpev40DYpl2ii2e5pSZcKLjF4M_K_u82Hgjc-WRDHPcFFSeN-L1HE&usqp=CAU', 'https://sagegamers.com/wp-content/uploads/2021/04/brush-dog-.jpg', ]);
        this.class = 'barbarian';
        this.skills = [
            { type: 'deep-wound', damage: 20 },
            { type: 'War Cry', damage: 10 },
            { type: 'Bash', damage: 9 }
        ];
        this.stats = { strenght: 17, dexterity: 14, stamina: 14, wisdom: 7 }
    };

    getRandomImage(array) {
        return array[Math.floor(Math.random() * array.length)]
    }
};
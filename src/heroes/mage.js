import { today, date, getRandomImage } from "../util.js";


export class Mage {
    constructor(name, gender) {
        this.gender = gender;
        this.name = name;
        this.level = 1;
        this.armor = ['cloth']
        this.weapons = [
            { type: 'staff', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcDj7-JjrrDFOk4ffVoMnt3ZohhgWJXsI7Ked07y5NSmpvPrk_9nfo2EiOXacRQRMo_Y&usqp=CAU' },
            { type: 'one-handed-dagger', img: 'http://www.gamingtoptens.com/wp-content/uploads/2020/02/p-1.png' },
            { type: 'off-hand', img: 'https://wow.zamimg.com/uploads/screenshots/normal/532308-felomelorn-fire-mage-artifact.jpg' },
            { type: 'one-handed-sword', img: 'https://cdnb.artstation.com/p/assets/images/images/028/339/971/large/rohit-modak-5.jpg?1594188738' }
        ]
        this.image =
            this.gender == 'female' ?
            getRandomImage([
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5eWG10McalfdguMGicTuXyoV7RdqDjkvVHRl9f6C6EjAMmdsWz3iew7DOwxWccr_onw&usqp=CAU',
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7520cb0b-d701-494f-9795-8379cfc2c986/d6hbtyv-982a2ca4-9096-4fb4-8115-31393b87736b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1MjBjYjBiLWQ3MDEtNDk0Zi05Nzk1LTgzNzljZmMyYzk4NlwvZDZoYnR5di05ODJhMmNhNC05MDk2LTRmYjQtODExNS0zMTM5M2I4NzczNmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4HQ8T9izg7ISVx0T2SWnC9Aqq60azrRPkN7wUI1DG3M',
                'https://i.redd.it/0oz8y423fwe11.jpg',
                'https://cdna.artstation.com/p/assets/images/images/000/723/310/large/jorge-oliveira-firemage2.jpg?1431545253',
                'https://cutewallpaper.org/21/fire-mage-fantasy-art/fire-mage-in-2019-Fantasy-art-warrior,-Fantasy-women-.jpg',
                'https://i.pinimg.com/originals/d5/44/76/d54476fcc7de279f8b59d5f9e981ede1.jpg'
            ]) :
            getRandomImage([
                'https://i.pinimg.com/474x/33/2c/36/332c36a5f88c733196191a4acda3322b.jpg',
                'https://i.pinimg.com/originals/b0/82/8f/b0828f690bc997cca0f9acee208d3baa.jpg',
                'https://i.pinimg.com/originals/fd/a8/c4/fda8c49b031f3f9903aeeab922b2211b.jpg',
                'https://cdnb.artstation.com/p/assets/images/images/035/001/961/4k/istvan-danyi-firemage-2500.jpg?1613835891',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOJExUDo3SxzHw9ZaDkAncRJOzEAzCzbtJ6CXpHItlzV9V9d4Tp3ZyOXyDt7HP-UzzIE&usqp=CAU',
                'https://cdn.wallpapersafari.com/47/7/AEO3rz.jpg'
            ])
        this.skills = [
            { type: 'Frostbolt', damage: 9, manaRequired: 14 },
            { type: 'Fireball', damage: 12, manaRequired: 18 },
            { type: 'Arcane shock', damage: 11, manaRequired: 17 }
        ]
        this.class = 'mage';
        this.strenght = 9;
        this.aggility = 11;
        this.stamina = 8;
        this.intelligence = 17;
        this.health = this.stamina * 10;
        this.mana = this.intelligence * 10;
        this.createdOnDate = date;
    }
};
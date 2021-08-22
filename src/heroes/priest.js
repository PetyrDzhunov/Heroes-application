import { today, date, getRandomImage } from "../util.js";


export class Priest {
    constructor(name, gender) {
        this.gender = gender;
        this.name = name;
        this.rage = 0;
        this.weapons = [
            { type: 'staff', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcDj7-JjrrDFOk4ffVoMnt3ZohhgWJXsI7Ked07y5NSmpvPrk_9nfo2EiOXacRQRMo_Y&usqp=CAU' },
            { type: 'one-handed-dagger', img: 'http://www.gamingtoptens.com/wp-content/uploads/2020/02/p-1.png' },
            { type: 'off-hand', img: 'https://wow.zamimg.com/uploads/screenshots/normal/532308-felomelorn-fire-mage-artifact.jpg' },
            { type: 'one-handed-sword', img: 'https://cdnb.artstation.com/p/assets/images/images/028/339/971/large/rohit-modak-5.jpg?1594188738' }
        ]
        this.armor = ['cloth'];
        this.level = 1;
        this.image =
            this.gender == 'female' ?
            getRandomImage([
                'https://i.redd.it/t5dols5k4lo61.jpg',
                'https://wow.zamimg.com/uploads/screenshots/small/844672.jpg',
                'https://wow.zamimg.com/uploads/screenshots/small/705681.jpg',
                'https://wow.zamimg.com/uploads/screenshots/small/942599.jpg',
                'https://c4.wallpaperflare.com/wallpaper/1012/1024/901/art-cgi-fantasy-priestess-wallpaper-thumb.jpg',
                'https://i.pinimg.com/originals/e8/9e/5f/e89e5fcce1112f65afadf737dafe4b39.jpg',
                'https://i.redd.it/xi9d2ehxli901.png',
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ccc7917c-f8f8-445e-804f-cfc49cf8ce18/d49iijt-9447f6ac-41be-419b-932e-99e0f9c86024.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjYzc5MTdjLWY4ZjgtNDQ1ZS04MDRmLWNmYzQ5Y2Y4Y2UxOFwvZDQ5aWlqdC05NDQ3ZjZhYy00MWJlLTQxOWItOTMyZS05OWUwZjljODYwMjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.O1ls--zwmFGUKdTOKDXBYyFjAkZkfVmtjQe5XcgtmGU'
            ]) :
            getRandomImage([
                'https://wow.zamimg.com/uploads/screenshots/small/863719.jpg',
                'https://wow.zamimg.com/modelviewer/live/webthumbs/outfit/37/196645.webp',
                'https://wow.zamimg.com/uploads/screenshots/small/569814.jpg',
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b186973-6c13-43c0-b931-6de701476d53/d1r9ch8-e6004c88-4696-4964-9b8c-10d04fa5a07d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFiMTg2OTczLTZjMTMtNDNjMC1iOTMxLTZkZTcwMTQ3NmQ1M1wvZDFyOWNoOC1lNjAwNGM4OC00Njk2LTQ5NjQtOWI4Yy0xMGQwNGZhNWEwN2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yUeGAA9QQwis2mWuJQixeAu_f4MzotB_qFTql2fhr7w',
                'https://i.pinimg.com/736x/d3/af/d2/d3afd2267c830fbe454ee7c121347c64.jpg',
                'hhttps://i.pinimg.com/originals/b6/bc/b1/b6bcb1e218ffc2106bc35f0e26e9a950.jpg',
                'https://www.drivethrurpg.com/images/11550/213983.jpg',
                'https://i.pinimg.com/736x/d3/af/d2/d3afd2267c830fbe454ee7c121347c64.jpg'
            ])
        this.class = 'priest';
        this.skills = [
            { type: 'Holy fire', damage: 8, manaRequired: 11 },
            { type: 'War Cry', damage: 6, manaRequired: 10 },
            { type: 'Flash Heal', heal: 25, manaRequired: 17 }
        ];
        this.strenght = 9;
        this.aggility = 10;
        this.stamina = 11;
        this.intelligence = 14;
        this.health = this.stamina * 10;
        this.mana = this.intelligence * 10;
        this.createdOnDate = date
    };
};
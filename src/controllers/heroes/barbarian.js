import { today, date, getRandomImage } from "../../util.js";


export class Barbarian {
    constructor(name, gender) {
        this.gender = gender;
        this.name = name;
        this.rage = 0;
        this.weapons = [
            { type: 'one-handed axe', img: 'https://i.pinimg.com/originals/69/8f/c8/698fc801b098c3ed13380e8c7626bbba.png' },
            { type: 'two-handed axe', img: 'https://www.pngkey.com/png/full/211-2110105_nordic-battleaxe-of-ice-skyrim-wiki-battle-axe.png' },
            { type: 'spear', img: 'https://cdnb.artstation.com/p/assets/images/images/024/783/559/4k/jordan-hartley-image0-15.jpg?1583514306' },
            { type: 'polearm', img: 'https://i.pinimg.com/originals/4f/3f/40/4f3f4048caae5ca683a86c45b5e8d996.jpg' },
            { type: 'one-handed mace', img: 'https://wow.zamimg.com/modelviewer/live/webthumbs/item/110/120686.png' },
            { type: 'two-handed mace', img: 'https://preview.free3d.com/img/2017/07/2269216126195992394/v2mra7rh-900.jpg' },
            { type: 'one-handed sword', img: 'https://i.pinimg.com/474x/8e/78/08/8e7808ea172ce10adbd0ff71626f9914--game-ideas-swords.jpg' },
            { type: 'two-handed sword', img: 'https://i.pinimg.com/236x/f3/12/fd/f312fd92e5181f793f6c3eddf13d98be.jpg' }
        ];
        this.shield = [
            { type: 'Fire Shield', bonus: 5 },
            { type: 'Frost Shield', bonus: 7 },
            { type: 'Nature Shield', bonus: 9 }
        ];
        this.armor = ['plate', 'mail', 'leather', 'cloth'];
        this.level = 1;
        this.image =
            this.gender == 'female' ?
            getRandomImage([
                'https://i.pinimg.com/originals/ab/f0/76/abf0764c3e32357c8513c58ac549043d.jpg',
                'https://i.pinimg.com/736x/2a/34/0b/2a340b056bf8ca3b958360b23b0c7c80.jpg',
                'https://oakthorne.net/wiki/images/Felees.jpg',
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b678feb6-db4d-4a25-8c83-bca6910cfb6b/dd91yso-b69ac0b1-30f5-4336-b6a0-85509af02cac.jpg/v1/fill/w_784,h_1019,q_70,strp/desert_warrior__fantasy_barbarian_woman_art__iray_by_shibashake_dd91yso-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY2NCIsInBhdGgiOiJcL2ZcL2I2NzhmZWI2LWRiNGQtNGEyNS04YzgzLWJjYTY5MTBjZmI2YlwvZGQ5MXlzby1iNjlhYzBiMS0zMGY1LTQzMzYtYjZhMC04NTUwOWFmMDJjYWMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SKIVwbd5ua2e3DCwsRvAO5gUhNJ3YDNblu_AKH8vwgA',
                'https://images.hdqwalls.com/wallpapers/wonder-woman-barbarian-style-artwork-sk.jpg',
                'https://i.pinimg.com/originals/b4/83/b0/b483b0889c2fc02340966cb8830a6dbe.jpgdata:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGRgaHBoaGhoaGhwYGBoaGhwaGhoaGhocIS4lHCErIRoYJjgmKy8xNTU1',
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af44d189-c55b-4b06-8d93-c49e350adf9d/d4zv59c-531e0dae-5982-4f91-9ec9-5d0762385c06.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmNDRkMTg5LWM1NWItNGIwNi04ZDkzLWM0OWUzNTBhZGY5ZFwvZDR6djU5Yy01MzFlMGRhZS01OTgyLTRmOTEtOWVjOS01ZDA3NjIzODVjMDYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M7coNSeU9Jc1rddftD-OQtYKyojffJltS7dBF_TqLJ0',
                'https://i.pinimg.com/originals/fe/ef/94/feef943787a9aa84bac633b001d56dbe.jpg'
            ]) :
            getRandomImage([
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04831a05-d715-4e52-8780-640af774d3f6/d7bmlz1-c3b0defe-cab7-4ae9-985d-865fde42d890.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA0ODMxYTA1LWQ3MTUtNGU1Mi04NzgwLTY0MGFmNzc0ZDNmNlwvZDdibWx6MS1jM2IwZGVmZS1jYWI3LTRhZTktOTg1ZC04NjVmZGU0MmQ4OTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Om7fCyOVXFhTtLwbETHWBfFEMzV575sT6Kfrdm1xQPI',
                'https://i.pinimg.com/originals/5b/d9/e5/5bd9e5b060eb3d18f40f2b55694f0bc7.jpg',
                'https://i.pinimg.com/474x/25/96/6d/25966ddd2edaddc47b0940b2e3737e5c.jpg',
                'https://i.pinimg.com/originals/b9/0f/cd/b90fcd7a89f5aa543b5e788d97294a28.jpg',
                'https://i.pinimg.com/236x/d3/e1/4b/d3e14b7c318ff2ddb4fe25fda8757d4f.jpg',
                'https://cdnb.artstation.com/p/assets/images/images/003/639/583/medium/younghan-kim-barbarian.jpg?1475898287',
                'https://cdna.artstation.com/p/assets/images/images/004/655/594/medium/kim-ha-yeong-1-0.jpg?1485321692',
                'https://www.noupe.com/wp-content/uploads/2020/09/Male-Human-Viking-Fighter-Barbarian-Pathfinder-PFRPG-DND-DD-3_5-5th-ed-d20-fantasy.png'
            ])
        this.class = 'barbarian';
        this.skills = [
            { type: 'Deep-wound', damage: 8, rage: 7 },
            { type: 'War Cry', damage: 6, rage: 10 },
            { type: 'Bash', damage: 9, rage: 12 }
        ];
        this.strenght = 17;
        this.aggility = 14;
        this.stamina = 14;
        this.intelligence = 7;
        this.rage = 1;
        this.health = this.stamina * 10;
        this.createdOnDate = date
    };
    generateRage(rage) {
        this.rage += rage
    }
};
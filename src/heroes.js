// const randomDamage = () => Math.floor(Math.random() * 20 + 1);
// const randomRageRequirment = () => Math.floor(Math.random() * 15 + 1);
// const randomManaRequirment = () => Math.floor(Math.random() * 30 + 1);
let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const getRandomImage = (array) => array[Math.floor(Math.random() * array.length)];

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
        this.health = this.stamina * 10;
        this.createdOnDate = date
    };
    generateRage(rage) {
        this.rage += rage
    }
};

export class Mage {
    s
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
            { type: 'frostbolt', damage: 9, manaRequired: 14 },
            { type: 'fireball', damage: 12, manaRequired: 18 },
            { type: 'arcane shock', damage: 11, manaRequired: 17 }
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

export class Hunter {
    constructor(name, gender) {
        this.gender = gender;
        this.name = name;
        this.level = 1;
        this.armor = ['cloth', 'leather']
        this.weapons = [
            { type: 'bow', img: 'https://ae01.alicdn.com/kf/HTB1a78CIXXXXXbZXVXXq6xXFXXX5/Purple-Camo-Dream-Aluminum-Alloy-Compound-Bow-With-20-70-lbs-Draw-Weight-Camo-And-Black.jpg' },
            { type: 'crossbow', img: 'https://lh3.googleusercontent.com/proxy/ipiK70oaKfVb9f6LmghoReTuQVj3hhypPBCHffu82JVVRncH8PO8kBKJhE6v3opzQo41PHLE87clqfqxKCi4opStk6U54gRSnIHA1h2q6a1kWXKKtSBkspq91b5zGBE' },
            { type: 'gun', img: 'https://cdnb.artstation.com/p/assets/images/images/009/491/885/large/stuart-rain-rifle-coverart.jpg?1519298971' },
        ]
        this.image =
            this.gender == 'female' ?
            getRandomImage([
                'https://i.redd.it/5yuhpvlsn7u21.png',
                'https://cdnb.artstation.com/p/assets/images/images/029/291/267/large/keya-mahata-final-hunter.jpg?1597078609',
                'https://i.pinimg.com/564x/8b/83/82/8b8382f55ac78ed20df3efcd77969265.jpg',
                'https://i.redd.it/0oz8y423fwe11.jpg',
                'https://i.pinimg.com/originals/79/da/84/79da842a4550134b43d47300c058d211.jpg',
                'data:image/jpeg;base64,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',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSax1eQh78MuZeLwclEOvK90ZSQyyw7dfZsXcy6WnUHriMA4DrDRXZ7tTGYei7kywSy8mI&usqp=CAU',
                'https://img5.goodfon.com/wallpaper/nbig/a/9c/by-henukim-henukim-art-fantasy-illustration-ashe.jpg'
            ]) :
            getRandomImage([
                'https://media.mmo-champion.com/images/news/2015/august/Panel063.jpg',
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRYYGRgYGhgcGBoYGRoYGBwcGhgZGhkYGBkcITAlHR4rHxkYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQsJSw0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMsA+QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xAA9EAACAQIEAwUGBAQFBQEAAAABAhEAAwQSITEFQVEiYXGBkQYTMkKhsVLB0fAUcoLhFUNiovEHI5KywjP/xAAaAQACAwEBAAAAAAAAAAAAAAAABAECAwUG/8QAKxEAAwACAgICAQMCBwAAAAAAAAECAxESIQQxQVETImFxobEUM4GRwdHw/9oADAMBAAIRAxEAPwDOE0lLXAUAcBTgKUCnqtADQtPVKIqU9UoAGEp4SjLbp+QUAR/d0oSpuBw5ukhQdhHIa9fqfKrN+CBVJdlMDWcqqPM7etJZPOx464lFbp8ZWzP5K7LUS7jsjsqkOgO+oI8CRqO+rCw4dQw2P7imoyTS2jRpp6a0wOWmlaklKay1cABFNIopFNIoIBkU0rRSKSKAAxSRRiKYVoAHFdFPIpsUAIabTiK6KAENJTorooAbSE0pFIRQAk03NXNTKAH5q7NQzXTQAeKeopAKeooAVVoyrSKtFRaAORaMiVyrUhVoJEVKBevqrhXVspjUba9T0qai0r28wyxObsgeP7nyrPLrg9vRTIty+9FvwLKmHN19CwZ2PQRMDwAis1jsTiLjLcZXKsRkTKwRQxAQ7yzGdTr5Qas/anF+7wrKu7FUXzPa/wBoNG4bxi4yLmtZigUALoD17R205VwcUr9WWvl9HS8DHxxqkuzN+1mEe2tp8gDPMkbqZJA5Tp9qg+z+LJJVvmkkdHU5W9dDVx7Qe0RxAFtcOyuhkdoGOhHM1ncFnRy7owBcNsdnlW9IU+tdTBXFLYeTFV2agihsKdauqw0YHwINKwp5CDQBhQyKOwoLUEDK6uNdQAkUhFOpKAGkU0inmkoAHFdFProoAHFIRRCKSKABkUhFPikIoAERQ2FHIoZFAAiKbRGWmxQBKAoqCmKKMgoAego6ChLRloAKgoyCo9py3wLPeTAq0wnBy47RLTyHZX1ilcvl4sa7ZR2vgjZ16j1qRwq4jMz5gco7K89dMx/fSrP/AAK2Fhl9GDVmMfg2wz57ZmORESNNCecQIpG/MXkS4nr/AJKNu2k+gXG7wu4i1ZkZUIZv5m19Yj1rXkqLYCjSD9BWDwDBi10/HnLHqZB0HcNB5VoMPxQEFSYkkoTtsCAem8etLZYaSlfH9z03jxMwkUL8P987jNGVgykfF8IAM8tvrUdeLPZY27wzrtmI1HQzVhhni44OhO45iTp4idj0qFxu3m1I5b+ZpiXt8a9EUtLa9kfF2LbdtCOumjDwqPbxj29mzfzSTVauYCN45RPpQbWJVXBcT3H86bxql6YlmqeO2jU4XiRufChIG7bAfrU01m8bxq4FBtouQcxr6iJFVL8YvnZ6bl9CHVdybc001g7fErqmQ7T4yD4g71ccN9pPlujwYfmKnYOTS11DtXlcZlIINPmp2Va0dSEUpNIDUkHUlOikoASkilrqAGGmkUSKYRQAwikIp5psUADIpMtFIpIoAKtFWhrRFoAMgqJjce6NlVFYmSCxMaCdqmoKHjrOZCRuFePNSKyyrclbltdFZgOM4q8+S0NfwousaakwY1NXGE41eAlrT3f5brRtOoBEeBFL7JouGYF1BBKFrkEhRKMQVKkmACNBuTrFbriXCUuqlxGCPlUJcSGkkIoV/wAYLMAELRpXPtRXSSNZwStc0zNcM4xZvSpFu0/NHS4XH9WaD5U3iaZlMOrD/SWj6k1Qe0FhjHvbLKy657RDrOkRBlTDLI1id9DGXfitxDpddo1AZSTHWSNtDVI8V75Lr9vf9TLN46T3D2v6lpcd7T9xPlrU049LgLJAYQSDt3/Y/es6eJ3LwhUzHmYk/SBUvhnD2actyHG6EZTPcDvW940luvY/4mbIpUtdFgmOVmiYOoGum+kTtpGlTGuI6kM4B7/vpVTd4U2us69COsaNr8rctI7xNbiMAw0qnCG+mNfmpe0G4gFQwrBp3MwPL9/2p8TdPX61JfCEHWhXsN01186bjSFslcv2B4HEsp30qyHD0uSVIR/9h/TyqqNoq2oI8atMJfymR6Vat+0cu6cVtALnB74+TN/KQfpvQP8ACLx2tP6VrsDiEcAH+4qc+HurqpDDowB++tYvO5emW/PX0Y7C4bGJKpbuweWQkeI00qxs4fHMDmVkUAlndQoVQJJPOAB0NaAYhdrloeTMh+4od02N1F1TBgSSpPJSxmAaj/EV9BOflSTSMScVcOudj4mfpyouG4ldTZp7j+VBurDsIywxGX8Op7PltSZaY5DvFF/gOOBtH0IHrAqzweMS4CV2BjXrAP51i2Q709MQyHsmBMken6VaaK1BuaSqrA8YRwM+jE7fb8qtRV09mLTR1NIp0V1SQDNJTzTaAEpIp1JQA9aKtBU0ZKADpUvB4P3pynRB8Ry5gTySI7Z3OQamI7xEQVd8NxBtJlDmSXLwASFbQos9kZtMxAJ00jkv5GXhP8mmPFVvUgbvAbtvS00NkJKOQ6yGYMXKiLGgAVZYTppVJiuL3LJCFWQwCyPqjjPn0AjKDCSFM6anWtNd448ypCAfCF0CgsGKqsREqDrJ06Vk/aTGq4IYDedBAk/MebN9NBSEVN0N1GWZ1XaIuP8AaT3kE/EFyQYAgLGUMPk5ZNzJ1rPXLzXmyKTBPaOgJ1beO461BxNw/CCYkmDsCeY74geVTOEgLDc6ef6Z2heUnWjbcMw9qwgVYLEajmSdJPQd9ReJovxdlpJCsoIUMILCWAOYSPIzz0q/8UUdn1yjeRE6fvSmNiLhkvKKUKDOflO+VOs6jv13FJrHXLlQ87SSUki3xG82iorqhIDNo084bmPGo9x77/KqjxmrPBWbhULasMVUDtOVtrqCQTm8D9OtOv8ADcUI/wC3b1EgC6Cd0EGBoe2NO41bXfSRnVzrtmfvWrg1lT5VDw9855bSOVXWJwt9SQUSQSNHGsMVMT3g1Q462wIlSp57H0I0NMyn8i9Un0mScfcVyI8P1qKlLbOlCdoPcalfQvnx9bRpuDqHEE6j1rUYRSBDa9KwOAxOUg6+VbXhnEVcAKdY15eZmlM8P2Kz70ixuZYMxEH4ogRuSTsKy+N43hUaFZyRztAx5MxH0qt9rPaL3x91ZMWl+Ij/ADG6n/SDsPPpWbtir4PGanlW/wCP+xucE/K2yzx95LlxnQMAdTmiSebGNNaFbFMtDTeiM0Vv+yGtBRbkHTlTWs6ecUbDtInmND4GpyqNR5/nVHWjRSmUiXCjggag1ruGXg6A5pJ38elZzEWJ17z9aHwrEm3eWSchJB6aj9YreKF8kGyikIpVIIkGRXGthcYRTaIRTCKAG1011JQBymjoajKaMhoAS7iiGCKCWPTv2H3mrTAgRr2m7/h/pXSR3nfpWYxl7JdY9QoHgRB/9SPM1ouAK19sq5eyJYkxA5ac65Xl+22dLxmlKJd92Ub+gCj0UCspxnESSSo17gD6itzisPhVBD4gltiEMwfBQT5TWPxeFsMIa8Gb5cspOmvZdRJ8KW8dpven/sMZHyWkZK8AdtqBk7XpvtRnBEggjXYiNqlYfhVxwHXL4EkHc91dddI5b/zP9A+FZ9IYL/Kqj61YJYUEOGLMPmLSw8Oldh+BYmBCDuyun/0wqW/AMYDBssT3tZ/J6wre+mMy18kjAcbxFqcjqw3h1D/MrmDykoJ3rV8Q4/aNo4iWgqj5VZC4zu6ouQjKzKTfzD/UN40yKcDxY/yG8ih+z0y17NX3LE21tkRJuHKSTPw5Q07b1nrvsrUzXoNj+J21uZFjIFVw0oR8KlNY3CZAR1BPOs3xK4HYhVLBY1UACTMgsNNo0jrVljvZy8ikzbIHJWaSeglAJqltcPfNBIXnEz9FmmJa0ZcNNDxaUoSpIK/ErDtCdj4VXvVxibLKyluhWeTLBMN0IMfsVTOZNTAZmlLD2z0qZZxOUzBB6roagoKk2xNDEB+IsW7gkMEfXcZVY9CAIB76jrw5uTIT+ENqfAkR9anfw88qL/BmNqhW10aLO5RVqjJKsCDzBEEVzmryzZzAo50IOVm+RoMGd45Ed9UGIRkcowggwR4fcVMvbGseWbnaLjg2BD5mJhRMmfCNPMVZYjg7qA6EOo3y7weceoqlw9zLZMb5vsOnnT+D8cdLgO40Edd9PrWVTTbaG5c6SYYsDAPI/nVbjrOulbXF8KS5Fy0dSZYdQe7rsarMbw4wYGo+IeXxDqKrORFrxsZ7NYnPbyHdDHlvVuRWWwAazdB+UyD584q4v8XQISD2tsvQ9/d307NpoQuGqLAimEUHh10vbVm3M/cx9IqQRV0ZtaBEUlPIpIoIArRUNAWipQBD41gy6h0Esu/Ur3dSP1qxFwgJZsALZCW7mIfN8RYQuaZLfCYQaS23RyVHax28oMK2VnX+Qvl8iXbTupbyYWuQ14996L1LNt0//MEcs5LnxyyFB8BWb4pgbSqyhF1+aO0D3MWJH70rSWyMoHjpzqix7KzRmUEsqnMYVZIALHkNdTyFc3E2q6bH71xK7hNlGsurw+Qn4hqBGmvrTcBfso3adBoBvyH/ADQuK4C/ZFwMjopJRmKEKYYjssRDSOm4aaorNiTpp3tH2ArqLTns5tLVbN83HrQQ5HDNECJ0J2J8NT3xS4P2kDuXxFwAElZ2Ayr2VEySJZyf5lrL4O09pSSr6zBCnYqyEyywNGPTfnQsSDcZch+FQuXQc2Yx2QO/Qeu9U4T9k8uj0J+L2HQi3ft5jtLCNxoRIMRI5b1A49cK4QgOW7dtSwO4ETqOsistgOF++AyONeTKCdNwYI1rQYPhuIsWmQWkuIzZiGOVdgNoP4RWblJ9F5feyh4c8FySYCGZJPMVbcAwebNdIOQ7SIJAET3bVU8TxbIrKURAeSGZ6awKmf4urKqWJBKhSDsCI38IO3Wpc1o0mp5bY7iipccoozAATB5g6a+EjzrJYu1lcgbDaftWtVksIYYs7asSIPkOlZvE9piTV46MPK1x2/YO3VtwS2C8nlVeiitDwbAR2jpNVt6Rzm+i6XCqw2Fd/hoOgHhRbNljovQneBoNyTVBxj2qRFa3ZGZyCrXSeyJ0PuhGvPtGlZV3Wp/9/JOPE7ffr7JOKtIrZWuWg2xBuIGH1qDxvh5dBcABdIzEHNmWNyRoSPWKx4qVYJGxInpp605+Ljp7G8eFS9zsn2GAGU6A/vWicPwSh5YBl10InwI1FAt2yTzMdKuMDbbqzqei5o86pVcd6Y9C37NFh7SlJVtRGWNAI8d6biOJhB21EjmGhvESPzpcKsiIIA6iPpVZxjDKQZOo7o+g0pRJOuxttpdEtMfhnnOgzDmBBYHqOtU3GOEqUF2y2ZTuBuuk6+hrP4gAESSYOuvLuNXGExgRj/Di69sqJDrJVucZdCO+mljc9pitNV0yx4PjkdFTZ1EEdY5jrViRWIuF0KuFYa9kxoY5TW2sklVJ3IE+Ma03NbQhc6ZxFJTjSRVyhEFOU11m3mIHjr0AEknwAJ8qBcvzsIHLr5n9iqVakvMOiZ7wDnTsOrm27rbds067AAaAAneq4XBzGnMbT6VuPZfIyOjKCQoZARMKQdFnbWaS8jJVLWuhzBjUsJwaRZU22C6SzRmdmiTqdAJ0Ag1mON4Z8TiUsM47QJzlVDKq6sCFgN3f2q84biRZuXLDCPmQdx3A8CfrUQXbVrEh76yjqUk65GkMD4GI8YrDDjmb3rv7N8rfB6AY7ham3btOS1uxbIDuRqC7Q3Z+EZQgG86VnrFlcO8OVA3BVgZB1HaXfSvQ+IXsE1p396WUDMyGWzR2og6nUbTVJhvatG0IzA7Kwtz4Q0D6mnXrvYim2uiEvE7RHZYTH4iD+tVOMuIdxmmJPzabdrc+daVMRhrixicNncyWuB+0Z6CQFAECF0EU48B4dcHYu3bXc5kerg/Q1Cmfhg967R582Ka05YMSDlnpuYI8q0ScZdkgsYjrVhjf+m73BNjEo/SR9JBNV932BxllD757aAkKmUs9xz+FECjYbkkAVfgmVVaM5ibnv7kAiAdTvEDpz/vFSTbFoBk0y7T+ffUgcCvYcQ6P/NkYCATHL86gtLnUwo5c6H09BP2R7+NzasSO/cf2oWSdVIP1o+MSFYL0Onlz61RgkbVZSmuitp17ZaqxXXpV3hOL90Cszh7zkhQpYnYAEsfCN6s7GCuMrs1tkCKWYvCaDkuaMx7hVKxt+zCsRpsVjC1i8qalrZEDUxIzR5TXnpq1t8QC6q5HrNK2PtH4lJPVYE+R2oxS43pezWdzKRWKIqVYNdiMSG0VERZ0Crr3S25oaPV32bySLd8owImra1jHJmQp5xoPCaqcIQWEz5a1bXXTx7hsPTescmvoYx70XGH4jEDMfHYeh1NSiUcAsAZ20FZb3saxRF4ky6/v+wrD8b30avJ9mtTCYdIY2w7HRVVRJPKruymUBXtoiv8ACFbMZjQPpHXYmvP7GOuXGW37wLcu6BjICKdwPwlgN+g79LDD372HVUd2925hC/VTIZT+BvHSR1rT8b+X2Zc0/RoMf7P2wrhh2G7S/wClo1jp1rKWLhw3xa22+GCpP8yrMwancb4+2QrmOo08OYIrDX8zMNZgACeQFb4U/kXzNP0b7D4pbi5kYMNtOR6EcqLVfwPBratCCSXhjPUgaCOVWFMCxI4IiH3xcT/2nVVG5Z4WBPPLnHnWWuY1RvWgwWKNtiwEyIiY8KqcVw1LjTkVB0TVieeZzp6KKyqOT2axalFRe4jO1abhHHbqBHCZCqZDOgcdeoPj1oOFwCJ8KgHrufU61OWqvDLWmWWZp7Q3E8Re44vBTnG2n08Na68z4kfDJI0WJnqZ8eddib4RGc8h6nkPWslisQ7K5zMAxllBIU+KjQ1R4pnSNVmqts0eJt4PMLaO+kLcuIZtyFhyqQS4zdIGunKaTHWFVosl3WNcwA1n5ecR1g91VeFuuDC840mT4gdavMJg7hPwwIgZm19Nxz3q7+mYy9dogWcYynQspHQkfQ1Ps8ccbwfVTVfj7eUwR6/veq97iqNCc3TlVfxp+jRZNezbYPjiSDqrddR/uUzV/a9psrriGurKDKimbkSZaAYMnTp8Iryy1if3/wAVMs35OtRxqfTJfGke78G9trWIXtqvlv8A+J29atDYwN/dEM/iX9a+frjugzI0Rr/walcP9qLqfMfOtkk0L0tM9vu+wvD3/wAldfwwPtUC7/004YoLG1AAJJzNAA351gMB7cXAd/Q1ruFe2PvhDk5V7TzzCI9yPPIB51PpeiNmd9qcbheGzawtlEusAW0lkESoYmczwQTOiyIBMmsQON33aXYkHeSTM+JqBxfGPevPccyzOxPiSSfrNTeG4JnH61ZIjZVcTsBXlfhYZgOnUVDq49obWR0XoD+VVLCoZovRy09aHNKxqGi6JeFfK2nONe6rdGU7ajr1rPZ+lSsPiiAVnSs7jfZrjtLosW7XhNBYjMB8u7eAE/lXWTKiP3NMdScwG8EepC/mazldlqfWyBiHLMWPP9gelangt339t7mLYGxhreRBsWdhCJI3AClj4DrWfbBmAY3+4qRgMG95hak5EBaNhJjXTmTpPQd1bdUtGTTnsddwdxkzgkoBIJ5D842mp3D+ASFd20YAlQIPcJnpFaG7h0ZQhHZEdkbQNQD3aCnk1eZ0YVWxoAAgaAaCkmuLU2asUGV1NmlmgAq08UENTg9AFX7QXvgQc+0fLRfz9KrsPbzGOR3qRxFS10k7EAL4DQ/WfWjW7OQT19aRy330OY51J2Btm05Rpk/AQYBB56b1cYq8gSABO5OkmNdT+96g4q+pQKyg89dweoPI1V3bmmjH+oTznceFUVOmtkuFKehOIrpE9/XXnvVFetxvHPWp+IxJO59BFV19pNNY9mNLvYXC2+dSxamiYfCNlUr2gQDp9R40RRWd330aqdIA1s8yWHQkxSi8AIKT5/2ozCo70TTZHFArjD5RlPjp6VP4TxJlJQ/MCPIoyf8A1VawqO7wwI3FbQ/gzuV8FtZwoLtPUn1M1t+A4W2BmchUQSzHkBrp1PKO+sLhuJrHbBkc9fuKXiHHGdAiSFrRmXFg/aDFNfvPcCnIDA6ATA8OVVM1tuDvbdBGUkqFdTBmOoo78IskQEUazoKCd6MEAaNatM7KijViAPE6VvH4faIAKDQQNNY6VFbgyqyvb7LKZHQjmtAbMnjeHNaVHY/GWAHMZTGtQg1bP2nwTXEUp8mckd2WSfp9axjLFAb+iZhcSVgd/wClXeBsgl+Z92zjmJSHE90issDVhw/HtbYMup212IIgqe4is6jfaNoyfDNvjMIuRnUqbZYkXLmS1LahwiA5ik6aLy51C4GciGTMmFMRmyyOwD2iAI1IEazVDiMSzFWUscxIVZJytzVe4yIq74EjKhZvjZjM6kAaBfDc+dViWn7LZbTkty1DZqYz0xnrcUHFqSaHnrs9AHZ67PUfPXZqAJOenB6iZ6X3lAB3w2dWCiXXtJG/eB++lQg5jb9fCnXsS6QyEAgzJ28O+asLFyxiDLApcIiCSoJ/Ep2Y/s1zss8Keu1/YfxPlK37KrEPPjzqvxDxpV7i+EsswVYehjvqjxFlpIg6d0j1qMbT9FqTRXPrUa4YJq2XCZQWc5VHqaq75DMWUQs/8U5HYva0HwOOa2dNVJ1U/cdDVxcvK5BDZTEZW7JPgedZ0odOh2q00KgMuYfX1quSVtMtFPTRP/hWPQeP2FRruDYcgfA/rTLNzL8JYDoTI8gaK1663eOciPM66Vlpp9F+mitudOYqNcUz4iR9qu8OVJOeB0IEjzNQeKWTmzAgrGhX8++t4ZlWiAopxUU1DUhEBFWb0QuxMLfNtwy8vCe8TWow/HbbDtHIehM/YVl/d00pFSqIcbNxaxav8LA+FP8Ae1hbbsp0JHgSKu+HcUzdl9+R6+PfUpmVS0X5uVkePYAW2zL8LbDoeYq/97QsSodCpE9PHlU6ITMcBS0+5bKkqRqKaDQWQ5LrL8JI8DU7BcWuW+eYHcN+tQipieXWuNoxm5VGyWjTYXjKOYMg+GnlrU83Kxq2Nm5c+6tHhL+ZfDSd56GpTKtaJ2enZqjq1PmpKgya6a5hSRQAs1xuU0ClV4YaTzjb71S3xlstE7rRLw9pt/h05CGP9XxDyIoWKwnMiO9zqfzo38bGynzIA9QTQGx0nl5DN9T+lc79W9j/AOlLRHLuNA7R3FiPrUa4r7yx8v71NbFDmWI8Y+gFAu40ZTA5CJJOs+NXkq2Vl+0zmJhuQaY8O6ohwriEKwzHTv3/AEqXfxDHXpVyqBsrkaxp3ZgJpzH60xXI+zPvh2WFYQV9IPOalB9I+tWuJw4dSOcaHzn7iq1sJcHynyKkfXWouW/RMUl7C4ZMxAA1PX71PdQTlXYf7jzJqut2LqzE6iN1musu6bkj+ddP/IVjWOvZtNz6JVxDsAO8nYdwHOgHDk6RoevPy2owxpPzr/Ss/U1Gu3wSZYt4nT02qqTQPRDxGAAOjR3AZo8xUVjl0n9+dTbt3Nosk9B+go9vhoKgvObuO1MTyfsyqlJXo0kKNzz7zRrGEJuFHgR3x4R1qZb4YqmQzd236Ua7h87AsJIEZhIPKNudWafwRzTKwWcl0I+37ilexkcgbaEGJA8elWRwwJGYBoEAka8t6clqDptEfvuo0yrpC27mYTTs1IEjalitDNkfFYRX336iq9uENyYHxBFXEUsUE7Kr+FYIVYAiJlTqCOe2tHXAELAaZGxED+1TopYquidsg28HCgqSDAkHUTv4ipqoASQInenRTgtTojYqUSmgUsVJAuWkK0Y02gAWWke2DvRqWhrYER8KTs5nvAP6UE4a4Nsh9QfSrIU6s3jh/BfnS+SnbDXY+EH+oUP+Au/6PNj+Qq9pDUrFKB5Gynt8KM9t/JR+ZqzC0QUtX0l6K7b9g4roolJQQMiky0SuoAivhUO6L6Cm/wADb/AvpUw0lRonbI6WVXRVA8BFPKUWkqSAWSky0akoADkrslGrqAAe7rvd0ekoAD7uu93Rq6gAWSlCUWuFAA8tOC06loAaFpYpaWgD/9k=',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrySs0UkvtPgfeLrNJvrQRkpPmlLilfFuKGpKX0IsrTtur_2JWPpGP1mWB6ZSzvVPRgjI&usqp=https://i.pinimg.com/originals/54/52/6b/54526b878f8bb3fc73bfdc2dccf9a2fe.jpg',
                'https://i.pinimg.com/originals/ee/6c/9e/ee6c9e8eca8340146a476fed8c98a200.png',
                'https://i.pinimg.com/736x/53/65/0f/53650fb1391fb8571eb48c4267cce697.jpg',
                'https://i.pinimg.com/736x/59/be/aa/59beaa1ce6722409b96e56650c5426db.jpg',
                'https://gamemakerstuff.files.wordpress.com/2018/05/archer4.jpg?w=545',
                'https://gamemakerstuff.files.wordpress.com/2018/05/archer1.jpg?w=545'
            ])
        this.skills = [
            { type: 'frost-arrow', damage: 13, manaRequired: 19 },
            { type: 'arcane-shot', damage: 11, manaRequired: 21 },
            { type: 'multishot', damage: 6, manaRequired: 25 }
        ]
        this.class = 'hunter';
        this.strenght = 11;
        this.aggility = 17;
        this.stamina = 11;
        this.intelligence = 11;
        this.health = this.stamina * 10;
        this.mana = this.intelligence * 10;
        this.createdOnDate = date;
    }
};

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
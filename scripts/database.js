const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Superspeed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Compu-Tron",
            power: "Supercomputing"
        },
        {
            id: 2,
            name: "Silly Goose",
            power: "Evil Laughter"
        },
        {
            id: 3,
            name: "Ruprecht",
            power: "Banging pots and pans together"
        },
        {
            id: 4,
            name: "Mr. Salty",
            power: "Super bad attitude"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}
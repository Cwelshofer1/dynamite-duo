export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [{
        id:1,
        name: "Blackout",
        power: "blackout all light to where only he can see"
    },
    {
        id:2,
        name: "Plasma man",
        power: "summons high voltage plasma shock by touch or shooting plasma rays"
    }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}
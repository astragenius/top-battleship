import Ship from './ships'
export const SHIP_TYPE = [
    'Carrier',
    'Battleship',
    'Cruiser',
    'Submarine',
    'Destroyer',
]

export const SHIP_LENGTH = {
    Carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2,
}

export function createFleet(type) {
    const fleet = {}

    type.forEach((el) => (fleet[el] = Ship(el)))

    return fleet
}
const random = (size = 10) => Math.floor(Math.random() * size)
export const randomCoords = (size = 10) => [random(size), random(size)]

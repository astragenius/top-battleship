import { SHIP_LENGTH } from './helpers'

const Ship = (type) => {
    const id = type
    const length = SHIP_LENGTH[type]
    const hits = Array(length).fill(null)
    let position = 'horizontal'

    const getHit = () => hits
    const getPosition = () => position
    const changePosition = () => {
        position === 'horizontal'
            ? (position = 'vertical')
            : (position = 'horizontal')
    }
    const hit = (index) => {
        if (index > length) return 'Out of range'
        hits[index] = true
    }
    const isSunk = () => {
        return hits.every((el) => el === true)
    }

    return {
        length,
        id,
        hits,
        getHit,
        hit,
        isSunk,
        getPosition,
        changePosition,
    }
}

export default Ship

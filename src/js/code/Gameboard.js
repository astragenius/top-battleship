export const GameBoard = () => {
    let gameboard = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null))

    const getBoard = () => gameboard

    return { getBoard }
}

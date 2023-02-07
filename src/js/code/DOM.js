const renderGameboard = (() => {
    const renderCell = (x, y, status) => {
        return `<div class="cell ${status}" data-x="${x}" data-y="${y}"></div>`
    }

    const resetGrid = (container) => {
        container.textContent = ''
    }

    const renderGrid = (container, gameboard, type) => {
        resetGrid(container)
        const board = gameboard.getBoard()
        const lenght = board.lenght
        let grid = ''

        for (let i = 0; i < lenght; i++) {
            for (let j = 0; j < lenght; j++) {
                let status = board[i][j]
                if (status === null) {
                    status = ''
                } else if (status.ship) {
                    if (type === 'human') {
                        status = 'player__ship'
                    } else {
                        status = ''
                    }
                }

                grid += renderCell(i, j, status)
            }
        }
        container.textContent = grid
    }

    return { renderGrid }
})()

export default renderGameboard

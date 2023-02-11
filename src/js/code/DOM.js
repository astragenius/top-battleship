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
        const length = board.length

        let grid = ''

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                let status = board[i][j]

                if (status === 'hit') {
                    if (type === 'human') {
                        status = 'player__hit'
                    } else {
                        status = 'enemy__hit'
                    }
                } else if (status === 'miss') {
                    if (type === 'human') {
                        status = 'player__miss'
                    } else {
                        status = 'enemy__miss'
                    }
                }

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

        container.innerHTML = grid
    }

    return { renderGrid }
})()

export default renderGameboard

let game_queens_gambit = new Chess()
let game_sicilian = new Chess()
let game_ruy_lopez = new Chess()

let board_ruy_lopez = Chessboard('ruy_lopez', 'start')
window.setTimeout(ruy_lopez, 1000)

let board_queens_gambit = Chessboard('queens_gambit', 'start')
window.setTimeout(queens_gambit, 1000)

let board_sicilian = Chessboard('sicilian', 'start')
window.setTimeout(sicilian, 1000)

document.getElementById("demo").innerHTML = window.location.pathname

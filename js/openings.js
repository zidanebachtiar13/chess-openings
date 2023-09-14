let $pgn = $('#pgn')
let i = [0, 0, 0]

function sicilian() {
	move = ['e4', 'c5']
	game_sicilian.move(move[i[0]])
	board_sicilian.position(game_sicilian.fen())
	window.setTimeout(sicilian, 1000)
	i[0]++
}

function ruy_lopez() {
	move = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5']
	game_ruy_lopez.move(move[i[1]])
	board_ruy_lopez.position(game_ruy_lopez.fen())
	window.setTimeout(ruy_lopez, 1000)
	i[1]++
}

function ruy_lopez_classical() {
	move = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Bc5']
	game.move(move[i])
	board.position(game.fen())
	window.setTimeout(ruy_lopez_classical, 1000)
	i++
	$pgn.html(game.pgn())
}

function queens_gambit() {
	move = ['d4', 'd5', 'c4']
	game_queens_gambit.move(move[i[2]])
	board_queens_gambit.position(game_queens_gambit.fen())
	window.setTimeout(queens_gambit, 1000)
	i[2]++
}

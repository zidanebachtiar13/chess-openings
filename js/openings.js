let $pgn = $('#pgn')

function sicilian() {
	move = ['e4', 'c5']
	game.move(move[i])
	board.position(game.fen())
	window.setTimeout(sicilian, 1000)
	i++
	$pgn.html(game.pgn())
}

function ruy_lopez() {
	move = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5']
	game.move(move[i])
	board.position(game.fen())
	window.setTimeout(ruy_lopez, 1000)
	i++
	$pgn.html(game.pgn())
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
	game.move(move[i])
	board.position(game.fen())
	window.setTimeout(queens_gambit, 1000)
	i++
	$pgn.html(game.pgn())
}

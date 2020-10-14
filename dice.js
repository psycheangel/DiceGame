function dice() {
	var object = {};
	object.dice1 = Math.floor((Math.random() * 6) + 1);
	object.dice2 = Math.floor((Math.random() * 6) + 1);
	object.win = object.dice1 == object.dice2 ? 'Draw' : object.dice1 > object.dice2 ? 'Player 1 Win' : 'Player 2 Win';
	return object;
}
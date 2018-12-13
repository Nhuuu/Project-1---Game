// console.log('')

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems);
	var instance = M.Modal.getInstance(elems);

	getDeck();

	shuffle(deck);

	placeWager();

	// Deal button 
	document.getElementById("deal").addEventListener("click", function(){
		if(wager != "" && player.score === 0){
		dealDeck();
		countScore(player);
		};
	});

	// Hit button
	document.getElementById("hit").addEventListener("click", function(){
		if(player.hand != ""){
		hitPlayer();
		};
	});

	// Stand button
	document.getElementById("stand").addEventListener("click", stand);


	// Betting logic


	// }

	










	// document.getElementById("double").addEventListener("click", dealDeck);
	// document.getElementById("split").addEventListener("click", dealDeck);


 });
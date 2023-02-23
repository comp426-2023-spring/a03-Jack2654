export function rps(hand) {
    var opp = "null";
	const random = randInt(3);
	switch (random) {
	case 1:
		var opp = "rock"
		break;	
	case 2:
		var opp = "paper"
		break;	
	case 3:
		var opp = "scissors"
		break;	
	default:
		console.log("something wack happening");
		console.log(random)
		return 0;
	}
	
	if(!hand)
    {
		var ret = { player: opp };
		return ret;
    }
    
	let LC_hand = hand.toLowerCase();
	var res = winloss(LC_hand, opp)
	var ret = { player: LC_hand, opponent: opp, result: res };
	return ret;
}

export function rpsls(hand) {
    var opp = "null";
	const random = randInt(5);
	switch (random) {
	case 1:
		var opp = "rock"
		break;	
	case 2:
		var opp = "paper"
		break;	
	case 3:
		var opp = "scissors"
		break;
	case 4:
		var opp = "lizard"
		break;
	case 5:
		var opp = "spock"
		break;	
	default:
		console.log("something wack happening");
		console.log(random)
		return 0;
	}
	
	if(!hand)
    {
		var ret = { player: opp };
		return ret;
    }
    
	let LC_hand = hand.toLowerCase();
	var res = winloss(LC_hand, opp)
	var ret = { player: LC_hand, opponent: opp, result: res };
	return ret;
}

function winloss(LC_hand, opp){
    if (LC_hand == opp) var res = "tie";
	if (LC_hand == "rock" && opp == "paper") var res = "lose";
	if (LC_hand == "rock" && opp == "scissors") var res = "win";
	if (LC_hand == "rock" && opp == "lizard") var res = "win";
	if (LC_hand == "rock" && opp == "spock") var res = "lose";
	
	if (LC_hand == "paper" && opp == "scissors") var res = "lose";
	if (LC_hand == "paper" && opp == "rock") var res = "win";
	if (LC_hand == "paper" && opp == "lizard") var res = "lose";
	if (LC_hand == "paper" && opp == "spock") var res = "win";

	if (LC_hand == "scissors" && opp == "rock") var res = "lose";
	if (LC_hand == "scissors" && opp == "paper") var res = "win";
	if (LC_hand == "scissors" && opp == "lizard") var res = "win";
	if (LC_hand == "scissors" && opp == "spock") var res = "lose";

	if (LC_hand == "lizard" && opp == "rock") var res = "lose";
	if (LC_hand == "lizard" && opp == "paper") var res = "win";
	if (LC_hand == "lizard" && opp == "scissors") var res = "lose";
	if (LC_hand == "lizard" && opp == "spock") var res = "win";

	if (LC_hand == "spock" && opp == "rock") var res = "win";
	if (LC_hand == "spock" && opp == "paper") var res = "lose";
	if (LC_hand == "spock" && opp == "scissors") var res = "win";
	if (LC_hand == "spock" && opp == "lizard") var res = "lose";	
	return res;
}

function randInt(choices) {
	const rand = Math.floor(Math.random() * choices + 1);
	return rand;
  }
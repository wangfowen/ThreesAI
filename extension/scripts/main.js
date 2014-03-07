var toggle = false;
var code = {
	left: 37,
	up: 38,
	right: 39,
	down: 40
}

var makeMove = function(direction) {
	console.log(code[direction]);
	//TODO: simulate keypress
}

$(function() {
	var getMove = function() {
		var info = {
			nextPiece: "red",
			board: [1,2,5]
		};

		//TODO: drop the setTimeout once have the actual API call 
		setTimeout(function() {
			chrome.runtime.sendMessage(info, function(response) {
				makeMove(response.move);

				if (toggle) {
					getMove();
				}
			});
		}, 1000);
	};

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.toggle !== undefined) {
			toggle = request.toggle;
		}

		if (toggle) {
			getMove();
		}
	});

	getMove();
});

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
		}
	}, 10);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(request.nextPiece);
});

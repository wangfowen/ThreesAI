chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
		chrome.pageAction.show(sender.tab.id);
  }
);

chrome.pageAction.onClicked.addListener(function(tab) {
	var settings = {
		"nextPiece": "red"
	};

	chrome.tabs.sendMessage(tab.id, settings, function(response) {});
});

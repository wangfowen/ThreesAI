var toggle = false;
var showing = false;

chrome.pageAction.onClicked.addListener(function(tab) {
	toggle = toggle ? false : true;

	chrome.tabs.sendMessage(tab.id, {toggle: toggle}, function(response) {});
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (!showing) {
		chrome.pageAction.show(sender.tab.id);
		showing = true;
	} else {
		//TODO: API call to determine direction
		var direction = "left";

		sendResponse({move: direction});
	}
});

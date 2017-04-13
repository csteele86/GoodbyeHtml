var isOn = false;

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	toggleExtension();
}); 

chrome.commands.onCommand.addListener(function (command) {
	toggleExtension();
});

function toggleExtension() {
	isOn = !isOn;

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {isOn: isOn});
	});
}
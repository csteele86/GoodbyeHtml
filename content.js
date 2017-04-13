chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.isOn) {
    	turnOn();
    } else {
    	turnOff();
    }
  });

function turnOn() {
	var elements = document.body.querySelectorAll("*");
	for (var i = elements.length - 1; i >= 0; i--) {
		if (elements[i].style.display !== "none" || elements[i].style.visibility !== "hide") {
			elements[i].addEventListener("mouseover", mouseOver);
			elements[i].addEventListener("mouseout", mouseOut);
			elements[i].addEventListener("click", click);
		}
	}	
}

function turnOff() {
	var elements = document.body.querySelectorAll("*");
	for (var i = elements.length - 1; i >= 0; i--) {
		if (elements[i].style.display !== "none" || elements[i].style.visibility !== "hide") {
			elements[i].removeEventListener("mouseover", mouseOver);
			elements[i].removeEventListener("mouseout", mouseOut);
			elements[i].removeEventListener("click", click);
		}
	}	
}

function mouseOver(event)
{
	event.stopPropagation();
	event.currentTarget.style.backgroundColor = "#ffff99";
	event.currentTarget.style.backgroundImage = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='red' stroke-width='2'/><path d='M0 0 L100 100 ' stroke='red' stroke-width='2'/></svg>\")";
    event.currentTarget.style.backgroundRepeat = "no-repeat";
    event.currentTarget.style.backgroundPosition = "center center";
    event.currentTarget.style.backgroundSize = "100% 100%, auto";
	event.currentTarget.style.borderColor = "red";
	event.currentTarget.style.borderWidth = "2px";
	event.currentTarget.style.cursor = "pointer";
}

function mouseOut(event)
{
	event.stopPropagation();
	event.currentTarget.style.backgroundColor = "";
	event.currentTarget.style.backgroundImage = "";
    event.currentTarget.style.backgroundRepeat = "";
    event.currentTarget.style.backgroundPosition = "";
    event.currentTarget.style.backgroundSize = "";
	event.currentTarget.style.borderColor = "";
	event.currentTarget.style.borderWidth = "";
	event.currentTarget.style.cursor = "";
}

function click(event)
{
	event.currentTarget.style.display = "none";
	event.preventDefault();
	event.stopPropagation();
}
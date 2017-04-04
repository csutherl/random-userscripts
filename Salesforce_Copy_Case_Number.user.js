// ==UserScript==
// @name         Salesforce Copy Case Number
// @namespace    http://csutherl.github.io/
// @version      0.2
// @description  Click button to copy Salesforce case number
// @author       rbost
// @match        https://gss--c.na7.visual.force.com/apex/Case_View*
// @grant        GM_setClipboard
// @updateURL    https://github.com/csutherl/random-userscripts/raw/master/Salesforce_Copy_Case_Number.user.js
// ==/UserScript==

function copyToClipboard() {
    var elements = document.getElementsByClassName("pageDescription");
    if (elements.length == 1) {
	var caseNumber = elements[0].innerText;
	GM_setClipboard(caseNumber, "text");
    }
}

(function() {
    'use strict';
    var button = document.createElement("button");
    button.style.position = "fixed";
    button.style.right = 0;
    button.style.bottom = 0;
    button.innerText = "Copy Case Number";
    button.onclick = copyToClipboard;
    document.body.appendChild(button);
    
    // Add hotkey for copying case number. ALT+SHIFT+C
    window.addEventListener("keydown", function(event) {
        if (event.altKey && event.shiftKey && event.keyCode == 67) {
            copyToClipboard();
        }
    });
})();

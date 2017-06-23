// ==UserScript==
// @name         Case link interceptor
// @namespace    http://csutherl.github.io/
// @version      0.4
// @description  Script to intercept and change case link clicks to use salesforce instead of the portal
// @author       coty
// @match        https://access.redhat.com/*
// @match        https://bugzilla.redhat.com/*
// @exclude      https://access.redhat.com/support/cases/internal/case/*
// @grant        none
// @updateURL    https://github.com/csutherl/random-userscripts/raw/master/Case_link_interceptor.user.js
// ==/UserScript==

/* jshint -W097 */
'use strict';

function interceptClickEvent(e) {
    var href;
    var target = e.target || e.srcElement;
    if (target.tagName === 'A') {
        href = target.getAttribute('href');

        if (href.match('/support/cases/')) {
            var casenum = href.match('[0-9]+');

           //tell the browser not to respond to the link click
           e.preventDefault();
            
           window.open("https://c.na7.visual.force.com/apex/Case_View?sbstr=" + casenum);
        }
    }
}

// listen for link click events at the document level
if (document.addEventListener) {
    document.addEventListener('click', interceptClickEvent);
} else if (document.attachEvent) {
    document.attachEvent('onclick', interceptClickEvent);
}

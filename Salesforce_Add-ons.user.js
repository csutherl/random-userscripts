// ==UserScript==
// @name         Salesforce Add-ons
// @namespace    http://csutherl.github.io/
// @version      0.1
// @description  Script to add fancy buttons to save me few clicks! The @match only applies to URLs for the case view pages. Also, I am using jquery for the selector, but it isn't necessary as you can do the same thing in plain js; I just wanted to see if includes worked since this is my first userscript :D
// @author       coty
// @match        https://c.na7.visual.force.com/apex/Case_View*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @updateURL    https://github.com/csutherl/random-userscripts/raw/master/Salesforce_Add-ons.user.js
// ==/UserScript==

// Grab the selector for the block I want to add buttons to
var commentBlockSelector = $("[id^=Page\\:form\\:CaseComment\\:j_id]");
// Append the Waiting on Customer button
commentBlockSelector.append("<input class=\"btn\" id=\"WoCbtn\" type=\"button\" value=\"New WoC Comment\" onclick=\"updateWoC()\"/>");

// this function contains the logic for the WoC button click
function updateWoC() {
    $('#newCaseCommentButton').click();
    
    $('#new_status').val("Waiting on Customer");
    $('#new_internalStatus').val("Waiting on Customer");
    // new sfdc change makes comments public by default
    // $('#new_isPublic').click();
}

// add the function code to the <head>
$('<script type="text/javascript">' + updateWoC + '</script>').appendTo($('head'));

// Append the Closed/Closed button
commentBlockSelector.append("<input class=\"btn\" id=\"WoCbtn\" type=\"button\" value=\"New Closed/Closed Comment\" onclick=\"updateClosed()\"/>");

// this function contains the logic for the closed/closed button click
function updateClosed() {
    $('#newCaseCommentButton').click();
    
    $('#new_status').val("Closed");
    $('#new_internalStatus').val("Closed");
    // new sfdc change makes comments public by default
    // $('#new_isPublic').click();
}

// add the function code to the <head>
$('<script type="text/javascript">' + updateClosed + '</script>').appendTo($('head'));

// Append the private comment button
commentBlockSelector.append("<input class=\"btn\" id=\"WoCbtn\" type=\"button\" value=\"New Internal Comment\" onclick=\"updateInternal()\"/>");

// this function contains the logic for the private button click
function updateInternal() {
    $('#newCaseCommentButton').click();
    
    // new sfdc change makes comments public by default; this will make it private
    $('#new_isPublic').click();
}

// add the function code to the <head>
$('<script type="text/javascript">' + updateInternal + '</script>').appendTo($('head'));

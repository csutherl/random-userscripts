// ==UserScript==
// @name         Auto Refresh Queue View
// @namespace    http://csutherl.github.io/
// @version      0.1
// @description  Refresh salesforce case view every minute.
// @author       rbost, coty
// @match        https://*.salesforce.com/500?fcf=*
// @grant        none
// @updateURL    https://github.com/csutherl/random-userscripts/raw/master/Auto_Refresh_Queue_View.user.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

setTimeout(function() {
    var button = document.getElementsByClassName("refreshListButton")[0];
    button.click();
}, 60000);

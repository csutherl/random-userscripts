// ==UserScript==
// @name         My Bugs Linker
// @namespace    http://csutherl.github.io/
// @version      0.1
// @description  Inject a few links for specific bug searches
// @author       csutherl
// @match        https://bugzilla.redhat.com/*
// @grant        none
// ==/UserScript==

/* jshint -W097 */
'use strict';

var mybugs = $('a').filter(function(index) { return $(this).text() === "My Bugs"; });

// put your email here...ensure the @ is encoded %40 :)
var email = "test%40example.com"

var mybugs_filter = "bug_status=NEW&amp;bug_status=VERIFIED&amp;bug_status=ASSIGNED&amp;bug_status=MODIFIED&amp;bug_status=ON_DEV&amp;bug_status=ON_QA&amp;bug_status=RELEASE_PENDING&" +
"amp;bug_status=POST&amp;email1=" + email + "&amp;emailtype1=exact&amp;emailassigned_to1=1&amp;emailreporter1=1&amp;emailcc1=1";
var rhel6_filter = mybugs_filter + "&product=Red%20Hat%20Enterprise%20Linux%206&component=tomcat6"
var rhel7_filter = mybugs_filter + "&product=Red%20Hat%20Enterprise%20Linux%207&component=tomcat"

var sep_span = '<span class="separator"> | </span>';
var rhel6_link = sep_span + '<a href="buglist.cgi?' + rhel6_filter + '">My RHEL 6 Bugs</a>';
var rhel7_link = sep_span + '<a href="buglist.cgi?' + rhel7_filter + '">My RHEL 7 Bugs</a>';

$(rhel7_link).insertAfter(mybugs);
$(rhel6_link).insertAfter(mybugs);

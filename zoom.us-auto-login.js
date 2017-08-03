// ==UserScript==
// @name         Auto Login zoom.us
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Jared Grippe
// @match        *://zoom.us/*
// @grant        none
// ==/UserScript==

!function() {
  'use strict';

  if (location.pathname === "/"){
    var signInLink = document.querySelector('a[href="https://zoom.us/signin"]');
    if (signInLink) {
      signInLink.click();
      return;
    }
  }

  if (location.pathname === "/signin"){
    document.querySelector('a[href^="https://accounts.google.com"]').click();
    return;
  }

}();

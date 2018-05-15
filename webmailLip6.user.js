// ==UserScript==
// @name        Webmail LIP6 - APR
// @namespace   https://github.com/thizanne/webmail_lip6
// @description Choisit automatiquement l'équipe APR dans le webmail LIP6
// @author      Thibault Suzanne
// @include     https://webmail.lip6.fr/horde/login.php
// @version     0.1
// ==/UserScript==

function setApr () {
    var teamList = document.getElementById("imp_server_key");
    teamList.value = "imapapr";
}

document.addEventListener('DOMContentLoaded', setApr, false);

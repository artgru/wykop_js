// ==UserScript==
// @name         Wykop Sub-comment hide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Skrypt chowa komentarze powiązane z głównym komentarzem
// @author       Art
// @match        https://www.wykop.pl/link/*
// @grant        none
// ==/UserScript==

(function() {
    var nodes = document.querySelectorAll('li[class="iC"]');
    var len = nodes.length;
    for(var i=0;i<len;i++){
        var newNode = document.createElement("a");
        newNode.innerHTML = '<i class="fa fa-power-off"></i>';
        newNode.addEventListener('click',checkme.bind(this,i),false);
        newNode.setAttribute('class','button mikro ajax');
        newNode.setAttribute('id','rollup_'+i);
        nodes[i].firstElementChild.childNodes[5].childNodes[1].childNodes[7].appendChild(newNode);
    }
})();

function checkme(i) {
    var nodes = document.querySelectorAll('li[class="iC"]');
    if (nodes[i].childNodes[3].style.display == 'none'){
        nodes[i].childNodes[3].style.display = 'inline';
    } else {
        nodes[i].childNodes[3].style.display = 'none';
    }
}

// ==UserScript==
// @name         Mustox oto space system
// @version      demo
// @description  R tuşuna basıldığında her yarım saniyede bir otomatik olarak space yapar.
// @match        https://agarzrc.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var isRunning = false;
    $(document).on('keydown', function(event) {
        if (event.keyCode === 82) { // ANAHTAR KODU
            if (isRunning) return;
            isRunning = true;
            setInterval(function() {
                $('body').trigger($.Event('keydown', { keyCode: 32 }));
                $('body').trigger($.Event('keyup', { keyCode: 32 }));
            }, 300);
        }
    });
})();

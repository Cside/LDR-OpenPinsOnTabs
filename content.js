(function(){
    var c = function(s){console.log(s)};
    document.querySelector('li#pin_button').onclick = function(){
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.innerText = [
            'var pins = pin.pins.map(function(pin){return pin.url}).join("|");',
            'var pinsContainer = document.createElement("div");',
            'pinsContainer.innerText = pins;',
            'pinsContainer.className = "currentPins";',
            'pinsContainer.style.display = "none";',
            'document.body.appendChild(pinsContainer);',
        ].join('');
        document.querySelector('head').appendChild(script);

        var pins = Array.prototype.slice.apply(document.querySelectorAll('div.currentPins')).pop().innerText;
        if (! pins) return;
        var urls = pins.split('|');
        chrome.extension.sendRequest(urls, function(){});

        return;
    };
})();

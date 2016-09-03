document.addEventListener('DOMContentLoaded', (function () {

    var lastLine = document.getElementById('last_line');
    lastLine.style.padding = "10px";
    lastLine.style.boxSizing = "border-box";
    l_find_h = lastLine.querySelector('h3');

    l_find_h.addEventListener('mouseover', function () {
        l_find_h.style.fontSize = "36px";
    });

})
);
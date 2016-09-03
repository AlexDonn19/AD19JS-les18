document.addEventListener('DOMContentLoaded', (function () {

    var centralLine = document.getElementById('central_line');
    centralLine.style.padding = "10px";
    centralLine.style.boxSizing = "border-box";
    c_find_h = centralLine.querySelector('h4');
    c_find_p = centralLine.getElementsByTagName('p');

    c_find_h.addEventListener('mouseover', function () {
        c_find_h.style.fontSize = "30px";
        c_find_p[0].style.fontSize = "30px";
        c_find_p[0].addEventListener('mouseover', function () {
            c_find_p[1].style.fontSize = "30px";
        });
    });

})
);
/*document.getElementById('btn').addEventListener('focusin', function() {
    let nav = document.getElementById('navbar');
    nav.classList.remove('navClosed');
    nav.classList.add('navOpen');
})

document.getElementById('btn').addEventListener('focusout', function() {
    let nav = document.getElementById('navbar');
    nav.classList.remove('navOpen');
    nav.classList.add('navClosed');
}) */

var nav = document.getElementById('navbar');
var button = document.getElementById('btn');

button.addEventListener('click', function(event) {
    event.stopPropagation(); 
    nav.classList.remove('navClosed');
    nav.classList.add('navOpen');
});
nav.addEventListener('click', function(event) {
    event.stopPropagation(); 
});

document.addEventListener('click', function() {
    nav.classList.remove('navOpen');
    nav.classList.add('navClosed');
});
var btn = document.querySelector('#esconder-mostrar');
var container = document.querySelector('.esconder');

btn.addEventListener('click', function(){
    if(container.style.display === 'block') {
        container.style.display = 'none';
    }   else {
        container.style.display = 'block'
    }


});
let menuOpener = document.querySelector('#menu-opener')
//document.getElementById('menu-opener').addEventListener('click', menu());
menuOpener.addEventListener('click', () => {
    let menuArea = document.getElementById('menu-area')

    if(menuArea.style.width == '200px'){
        menuArea.style.width = '0px'
    }else{
        menuArea.style.width = '200px'
    }

})




//document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento do ícone do menu e o menu
    //const menuOpener = document.getElementById('menu-opener');
    //const menuArea = document.getElementById('menu-area');

    // Adiciona um evento de clique ao ícone do menu
   // menuOpener.addEventListener('click', function() {
        // Verifica a largura atual do menu para determinar se deve abrir ou fechar
       // if (menuArea.style.width === '250px') {
            // Fecha o menu
           // menuArea.style.width = '0px';
       // } else {
            // Abre o menu
           // menuArea.style.width = '250px';
       // }
    //});
//});

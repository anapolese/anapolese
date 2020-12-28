// window.addEventListener('onload', )

window.addEventListener('load', () =>{
    start();
});

  
let burger  = document.querySelector('#burger'),
    chevron = document.querySelectorAll('.chevDown'),
    pages   = ['#home', '#sobre','#projetos', '#contato'];


function start() {
    burger.addEventListener('click', controlaMenu);
    // document.addEventListener('scroll', storeScroll);
    chevron[0].addEventListener('click', pageScroll);
    chevron[3].addEventListener('click', lastScroll);
   
}

// function storeScroll() {
//     document.
// }

function controlaMenu() {
    var menu = document.querySelector('#menu');

    if (menu.classList.contains('mostraMenu')) {
        menu.classList.remove('mostraMenu');
    } else {
        menu.classList.add('mostraMenu');
    };    

}

function pageScroll() {
    let htmlBody  = document.querySelector('html').style;
        htmlBody.overflowY = 'auto';

    console.log(chevron[0]);

}

function lastScroll(){
    let htmlBody  = document.querySelector('html').style;
        htmlBody.overflowY = 'hidden';

}
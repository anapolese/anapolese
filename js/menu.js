window.addEventListener('load', () =>{
    start();
});

  
let dropdown     = document.querySelectorAll('.dropdown-content li'),
    htmlBody     = document.querySelector('html').style,
    chevron      = document.querySelectorAll('.chevDown');
    
function start() {
        
        let activeTab;
        
        dropdown.forEach(option => {option.addEventListener('click', event => {
            dropdown[0].classList.remove('active');
            if (activeTab) activeTab.classList.remove('active');
            htmlBody.overflowY = 'auto';
            activeTab = option;
            activeTab.classList.add('active');
        });
    });

    
    chevron[0].addEventListener('click', () => {
        htmlBody.overflowY = 'auto';
    });
    
    for (i = 1; i <= 3; i++) {
        dropdown[i].addEventListener('click', () => {
            htmlBody.overflowY = 'auto';
        });
    }
    
    dropdown[0].addEventListener('click', () => {
        htmlBody.overflowY = 'hidden';
    })

    
    chevron[3].addEventListener('click', () => {
        htmlBody.overflowY = 'hidden';
    });
    
    //function to store scroll Y and convert to percentage
    document.onscroll = function(){ 
        var pos = getVerticalScrollPercentage(document.body);
        console.log(Math.round(pos));
        var x = Math.round(pos);
        if (x >= '0' && x < '33') {
            dropdown[0].classList.add('active');
            dropdown[1].classList.remove('active');
            dropdown[2].classList.remove('active');
            dropdown[3].classList.remove('active');
            
        } else if ( x >= '33' && x < '67') {
            dropdown[0].classList.remove('active');
            dropdown[1].classList.add('active');   
            dropdown[2].classList.remove('active');
            dropdown[3].classList.remove('active');
            
        } else if ( x >= '67' && x < '100' ) {
            dropdown[0].classList.remove('active');
            dropdown[1].classList.remove('active');   
            dropdown[2].classList.add('active');
            dropdown[3].classList.remove('active');
            
        } else {
            dropdown[0].classList.remove('active');
            dropdown[1].classList.remove('active');   
            dropdown[2].classList.remove('active');
            dropdown[3].classList.add('active');

      } 
      
      function getVerticalScrollPercentage(elm){
        var p = elm.parentNode
        return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
      }
}
}


function tabs(){
    let tab = document.querySelectorAll('.info-header-tab'),
          info = document.querySelector('.info-header'),
          tabcontent = document.querySelectorAll('.info-tabcontent');


    function HideTabContent(a) {
        for(let i = a; i< tabcontent.length; i++){
            tabcontent[i].classList.remove('show');
            tabcontent[i].classList.add('hide');
        }
    }
     HideTabContent(1);


     function ShowTabContent(b) {
        if(tabcontent[b].classList.contains('hide')){
            tabcontent[b].classList.remove('hide');
            tabcontent[b].classList.add('show');
        }
     }

     info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0 ; i< tab.length; i++){
                if(target == tab[i]){
                    HideTabContent(0);
                    ShowTabContent(i);
                    break; 
                }
            }
        }
     });
}
module.exports = tabs;
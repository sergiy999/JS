function form() {
    
    let message = {
        loading : 'Загрузка...',
        succes : 'Дякуємо!Скоро ми звяжемося з вами',
        failure: 'Щось пішло не так...'
};

   let form = document.querySelector('.main-form'),
       input = form.getElementsByTagName('input'),
       statusMessage = document.createElement('div');
       statusMessage.classList.add('status');


       function sendForm(elem){ 
        form.addEventListener('submit', function(event){
        event.preventDefault();
        form.appendChild(statusMessage);
        let formdate = new FormData(elem);

        function postData(data)  {
            return new Promise(function(reslove,reject){
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                let obj = {};
                formDate.forEach(function(value, key) {
                    obj[key] =value;
    
                   
                    }); 
                let json =JSON.stringify(obj);
                request.send(json);
                request.addEventListener('readystatechange', function(){
                    if (request.readyState < 4 ) {
                        reslove();
                    } else if (request.readyState === 4 ){
                        reslove();
                    } else {
                        reject();
                    }
                
                });
                request.send(data) ; 
        }
     
        )}
        //end post data
             function clerarInput(){
                for (let i = 0; i < input.length; i++){
                    input[i].value ='';
                }

             }

             postData(formdate) 
             .then(()=> statusMessage.innerHTML = message.loading) 
             .then(()=> statusMessage.innerHTML = message.succes)

             .catch(()=>statusMessage.innerHTML =message.failure)
             .then(clerarInput);
        });
        
       };
       sendForm(form);

}

module.exports = form;
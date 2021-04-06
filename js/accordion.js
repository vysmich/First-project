let plus = document.querySelector('.plus')
var readMore = document.querySelector('.read-more')



if(plus){
    
    
    plus.addEventListener('click', ()=>{
   if (readMore.offsetHeight > 100) {
    readMore.classList.remove('show');
    readMore.classList.add('deactive');
    plus.textContent = '+'
   } else {
    readMore.classList.remove('deactive');
    readMore.classList.add('show');
    plus.textContent = '-'
   }
     
    

})  }


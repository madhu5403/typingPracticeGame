const RandomQuote='http://api.quotable.io/random'
const quoteDispalyElement = document.querySelector('.quote-display')
const quoteInputElement =document.querySelector('.quote-input')
const timer = document.getElementById('timer')
function getRandomQuote(){
    return fetch(RandomQuote).then(response=>response.json()).then(data=>data.content)
}
async function getNextQuote(){
     const quote= await getRandomQuote();
     quoteDispalyElement.innerHTML='';
     quoteInputElement.value='';    
     quote.split('').forEach(element => {
         const spanElement =document.createElement('span')
         spanElement.innerText=element;
         quoteDispalyElement.appendChild(spanElement)
     });
     startTimer()
}
getNextQuote()
quoteInputElement.addEventListener('input',()=>{
    console.log(1)
   const arrayQuote= quoteDispalyElement.querySelectorAll('span')
   const arrayValue = quoteInputElement.value.split('');
   let correct =true;
   arrayQuote.forEach((charachterSpan, index)=>{
       const charachter = arrayValue[index];
       if(charachter==null){
        charachterSpan.classList.remove('correct')
        charachterSpan.classList.remove('incorrrect')
        correct=false
       }
       else if(charachter===charachterSpan.innerText){
        charachterSpan.classList.add('correct')
        charachterSpan.classList.remove('incorrect')
       }
       else{
        charachterSpan.classList.add('incorrect')
        charachterSpan.classList.remove('correct')
        correct=false
       }
   })
   if(correct){
    getNextQuote()
   }
})
function startTimer(){
    timer.innerText=0 
    setInterval(()=>{
        timer.innerText++;
    },1000)
}
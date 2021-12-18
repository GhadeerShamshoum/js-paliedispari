/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

document.addEventListener('click', function(){
    document.getElementById('pariDispari')
    .addEventListener('input', handleSelect);
   
});

function handleSelect(ev){
    let select = document.getElementById('pariDispari');
    console.log(select.value);
    let number=parseInt(prompt('inserisci un numero da 1 a 5' ));
    if(number>5){
        alert('Un numero da 1 a 5!')
    }
    console.log(number);
    
    number2=Math.floor(Math.random()*5)+1;//random numer
    console.log(number2);
    let sum=0;
    sum=number+number2;//sum
    console.log(sum);
    
    //result: you win or lose
    if(sum%2==0 && select.value=='pari'){
        console.log('hai vinto!');
        

    }if(sum%2==0 && select.value=='dispari'){
        console.log('hai perso!');
        

    }if(sum%2!=0 && select.value=='pari'){
        console.log('hai perso!');
    

    }if(sum%2!=0 && select.value=='dispari'){
        console.log('hai vinto!');
            
    }
    
}

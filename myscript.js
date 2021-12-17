/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

function checkPalindroma (word, newStr){
    let result = false;
    if(word===newStr){
        console.log("la parola inserita è palindroma");
        result = true;
    }else{
        console.log("la parola inserita non è palindroma");
    }
    return result;
}


let word = prompt('inserisci una parola');

console.log(word.length);
let newStr = '';

for(let i=word.length-1; i>=0; i--) {
    newStr += word[i];
    
}
console.log(newStr);
console.log( checkPalindroma(word,newStr) )

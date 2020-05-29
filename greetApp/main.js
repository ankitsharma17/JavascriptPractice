// function sayWelcome(){
//     var first=document.querySelector("#first").value;  
//     var last=document.querySelector("#last").value;
//     var result=`Welcome ${first} ${last}`;
//     pTag=document.querySelector("#output");
//     pTag.innerText=result;
// }
// sayWelcome();
 var greetButton=document.getElementById('bt');
 greetButton.addEventListener('click',sayWelcome);
function sayWelcome(){
    var firstName=document.getElementById('first').value;
    var lastName=document.getElementById('last').value;
    var result=`Welcome ${firstName} ${lastName}`;
    document.getElementById('output').innerText=result;

}
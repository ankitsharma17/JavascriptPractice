window.addEventListener('load',bindEvents);

function bindEvents(){
    var greetButton=document.getElementById('bt');
    greetButton.addEventListener('click',sayWelcome);
    var clearButton=document.getElementById('clearall');
    clearButton.addEventListener('click',clearAll);
}

function sayWelcome(){
    console.log("I am in Say Welcome");
    var firstName=document.getElementById('first').value;
    // firstName=initCap(firstName);
    var lastName=document.getElementById('last').value;
    var result=`Welcome ${initCap(firstName)} ${initCap(lastName)}`;
    var pTag=document.getElementById('output');
    pTag.innerText=result;
    // pTag.innerHTML=`<strong>${result}</strong>`
}
function initCap(str){
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}
function clearAll(){
    console.log("I am in Clear All");
    document.getElementById('first').value='';
    document.getElementById('last').value='';
    document.getElementById('output').innerText='';
    document.getElementById('first').focus();

}
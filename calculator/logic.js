window.addEventListener('load',bindEvents);

function bindEvents(){
    // document.querySelector("#txt").addEventListener('keyup',validate)
    var buttons=document.querySelectorAll('button');
    buttons.forEach(button=>button.addEventListener('click',takeInput))
    document.querySelector('#equal').removeEventListener('click',takeInput);
    document.querySelector('#equal').addEventListener('click',compute);
    document.querySelector('#clear').addEventListener('click',clearAll);
    disable();
}

// var isValid = false;
// function validate(){
    
//     if(this.value>='0' && this.value<='9'){
//         console.log('Valid');
//         isValid = true;
//     }
//     else
//     if(this.value =='+' || this.value =='-' || this.value =='*'){
//         isValid = true;
//     }
//     else{
//         console.log('Not Valid');
//         isValid = false;
//     }
// }

function takeInput(){
    document.querySelector("#txt").value += this.innerText;
}
// function compute(){
//     console.log('Compute Call ',isValid );
//     if(isValid){
//         console.log("compute called");
//     document.querySelector("#txt").value = eval(document.querySelector("#txt").value);
//     }
// }

function compute(){
    console.log("compute called");
    document.querySelector("#txt").value = eval(document.querySelector("#txt").value);
}
function clearAll(){
    document.querySelector("#txt").value='';
    document.getElementById('txt').focus()
}
function disable(){
    document.addEventListener('contextmenu', event => event.preventDefault(),false);
    console.log('disable client call');
}
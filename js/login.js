'use strict'

const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)

var input = document.querySelector('.senha');
var input2 = document.querySelector('.senha2');
var check = document.querySelector('.checkbox');
var check2 = document.querySelector('.checkbox2');


check.addEventListener('click', function () {
  input.type = input.type == 'text' ? 'password' : 'text';
});

check2.addEventListener('click', function () {
  input2.type = input2.type == 'text' ? 'password' : 'text';
});


//Precisa fazer a troca no olho
// function mostrar(){

// if(checkbox == "image/olho1.png" ){
//     checkbox.style.img = "image/olho.png"
// }
// else{
//      checkbox.style.img = "image/olho1.png"
// }

// }


function abrir(){
  let botao1 = document.querySelector("#open-login")

  


}
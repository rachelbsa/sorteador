document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("sortear");
 
button.addEventListener("click", function(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min > max) {
        resultado.textContent = "O valor mínimo não pode ser maior que o valor máximo";
        return;
    }
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
 
    resultado.textContent = result;

});    
});
 
 
 
 /* CÓDIGO DO RODOLFO COM AGUNS AJUSTES DO CHATGPT
 
    document.addEventListener("DOMContentLoaded", function(){

    
    const button = document.getElementById("sortear");

button.addEventListener("click", function(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

  

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    resultado.textContent = result;
});    
});

*/
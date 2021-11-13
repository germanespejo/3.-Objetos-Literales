let p = parseInt(prompt("Escriba un número"));
document.querySelector("p").innerHTML = p;
if(p < 100){
    document.querySelector("p").style.color = "green";
}else if(p >= 100 && p < 200){
    document.querySelector("p").style.color = "yellow";
}else if(p >= 200){
    document.querySelector("p").style.color = "red";
}
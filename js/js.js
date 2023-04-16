
let botton=document.querySelector("button")

 function compra(){
    let P= document.getElementById("peras").value
    let M= document.getElementById("manzanas").value
    let B = document.getElementById("bananos").value
    let T = document.getElementById("dinero").value


let pp= P*700
let pm= M*800
let pb=B*250
let TT= pp+pm+pb
let difere=TT-T
let cam=T-TT
if(T<TT){
    alert(`Falta  ${difere} por pagar`)
}else if(T>TT){
    alert(`Su cambio es ${cam}`)
}else{
    alert(`gracias por su compra de ${TT}`)
}
}
botton.addEventListener("click", compra)
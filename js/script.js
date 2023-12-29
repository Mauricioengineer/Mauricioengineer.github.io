const fullImageBox = document.getElementById("fullimagebox"),
imgElemento =document.getElementById("elementos"),
rigth=document.getElementById("rigth_btn"),
lefth=document.getElementById("left_btn"),
close =document.getElementById("closeimage"),
lista=[...document.querySelectorAll(".img")];




lista.forEach((img,i) => {
    img.addEventListener("click",(e)=>{
        clic(i);
        fullImageBox.style.display="flex";
imgElemento.src= img.src

    })
});
let index =0; 
function clic (posicion){
index= posicion;
imgElemento.src= lista[index].src;
}

rigth.addEventListener("click",e=>{
    if (index>=lista.length-1){
index=-1;
    }
    index++;

    imgElemento.src= lista[index].src;
})
lefth.addEventListener("click",e=>{
    if (index<=0){
        index=lista.length;
            }
    index--;
    imgElemento.src= lista[index].src;
})
close.addEventListener("click",e=>
{
    
    fullImageBox.style.display="none";
    
    
})

fullImageBox.addEventListener("click", e =>{
    if(e.target.classList.contains("full-image"))
    {
        fullImageBox.style.display="none";
    }
}
)
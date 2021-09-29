let total;
function getId() {
    const deliveryCost=document.getElementById("deliveryCost")
    const memoryCost=document.getElementById("memoryCost")
    const StorageCost=document.getElementById("storageCost")
    const bestCost=document.getElementById("bestCost")
    const totalCost=document.getElementById("totalCost")
    const grandTotal= document.getElementById("grandTotal")
}

function call(num,id) {
    getId();
    const cost=document.getElementById(id)
    cost.innerText=num
    total=parseInt(deliveryCost.innerText)+parseInt(memoryCost.innerText)+parseInt(storageCost.innerText)+parseInt(bestCost.innerText)
    totalCost.innerText=total
    grandTotal.innerText=total
}

document.getElementById("memory8gb").addEventListener("click",function () {
    call(0,"memoryCost")
})
document.getElementById("memory16gb").addEventListener("click",function () {
    call(180,"memoryCost")
})

document.getElementById("storage256").addEventListener("click",function () {
   call(0,"storageCost")
})
document.getElementById("storage512").addEventListener("click",function () {
    call(100,"storageCost")
})
document.getElementById("storage1").addEventListener("click",function () {
    call(180,"storageCost")
})
document.getElementById("deliveryF").addEventListener("click",function () {
    call(0,"deliveryCost")
    
})

document.getElementById("deliveryP").addEventListener("click",function () { 
    call(20,"deliveryCost")
})


document.getElementById("promo-button").addEventListener("click",function () { 
  const promoText= document.getElementById("promoText")
  if(promoText.value=="marjiakaki")
  {  
     const discount=total-(total*.25)
     document.getElementById("grandTotal").innerText=discount
  }
  else{
      promoText.value=""
  }
})









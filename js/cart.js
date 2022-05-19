function cartCardGen (prod){
    
    
        let carrinho = document.getElementById("display")

        let card = document.createElement("div")
        let cardBoxImg = document.createElement("div")
        let cardImg = document.createElement("img")
        let cardDetails = document.createElement("div")
        let cardTitle = document.createElement("h4")
        let cardRemove = document.createElement("button")
    
        let boxCont = document.createElement("div")
    
        let boxIcons = document.createElement("div")
        let cardPrice = document.createElement("p")
        let cardContPlus = document.createElement("img")
        let cardCont  = document.createElement("p")
    
        let cardContRemove = document.createElement("img")
    
        card.classList.add("cardCart")
        cardBoxImg.classList.add("boxCardCartImg")
        cardImg.classList.add("cardCartImg")
        cardDetails.classList.add("dadosProdCart")
        cardTitle.classList.add("tituloProdCart")
        boxCont.classList.add("boxCont")
        boxIcons.classList.add("boxIcons")
        cardContPlus.classList.add("icons")
        cardCont.classList.add("cardCont")
        cardContRemove.classList.add("icons")
        cardPrice.classList.add("precoProdCart")
        cardRemove.classList.add("buttonRemove")
    
        carrinho.appendChild(card)
        card.appendChild(cardBoxImg)
        card.appendChild(cardDetails)
        cardBoxImg.appendChild(cardImg)
        cardDetails.appendChild(cardTitle)
        cardDetails.appendChild(boxCont)
        boxCont.appendChild(cardPrice)
        boxCont.appendChild(boxIcons)
        boxIcons.appendChild(cardContRemove)
        boxIcons.appendChild(cardCont)
        boxIcons.appendChild(cardContPlus)
        cardDetails.appendChild(cardRemove)
    
        card.id = prod.id
        cardImg.src = prod.img
        cardTitle.innerText = prod.nameItem
        cardPrice.innerText = `R$ ${prod.value.toFixed(2).replace(".", ",")}`
        cardContPlus.src = "./img/icons/addOne.png"
        cardCont.innerText = prod.qtd
        cardContRemove.src = "./img/icons/removeOne.png"
        cardRemove.innerText = "Remover produto"
    
        card.addEventListener("click", (event) => {
            if (event.target == cardRemove){
                listCart.filter((prod => prod.id == card.id))[0].qtd = 0
                listCart = listCart.filter(prod => prod.id != card.id)
                carrinho.innerHTML = ""
                listCart.forEach(cartCardGen)
                cartChecker()
                checkout()
            } else  if (event.target == cardContPlus){
                listCart.filter(obj => obj.id == event.currentTarget.id)[0].qtd++
                carrinho.innerHTML = ""
                listCart.forEach(cartCardGen)
                checkout()
            } else if (event.target == cardContRemove){
                listCart.filter(obj => obj.id == event.currentTarget.id)[0].qtd--
                let qtdCheck = listCart.filter(obj => obj.id == event.currentTarget.id)[0].qtd
                console.log(qtdCheck)
                if (qtdCheck == 0){
                    listCart = listCart.filter(prod => prod.id != card.id)
                    carrinho.innerHTML = ""
                    listCart.forEach(cartCardGen)
                    cartChecker()
                    checkout()
                } else{
                    carrinho.innerHTML = ""
                    listCart.forEach(cartCardGen)
                    checkout()
                }
               
            }
    
        })


    
   
    
}

function cartChecker(){
    let carrinho = document.getElementById("display")
    let checkout = document.getElementsByClassName("checkoutSummary")
    if (listCart == ""){
        carrinho.classList.remove("displayCart")
        carrinho.classList.add("displayEmptyCart")
        let warning = document.createElement("p")
        warning.id = "emptyCart"
        warning.innerText = "O carrinho está vazio."
        carrinho.appendChild(warning)
        checkout[0].style.visibility = "hidden"
    } else{
        carrinho.classList.remove("displayEmptyCart")
        carrinho.classList.add("displayCart")
        checkout[0].style.visibility = "visible"
    }

}

function checkout(){
    let total = document.getElementById("totalCompra")
    let counter = document.getElementById("indicador")
    let soma = listCart.reduce((total, x) => total + (x.qtd * Number(x.value)), 0)
    total.innerText = `R$ ${soma.toFixed(2).replace(".", ",")}`
    counter.innerText = listCart.reduce((total, x) => total + x.qtd, 0)
}




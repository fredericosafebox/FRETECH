/* 
Esse script é responsável por construir a vitrine de forma dinâmica, com base
no arquivo DATABASE, assim que o site é carregado.
*/

function vitrineCardGen (produto) {
    //Função responsável por construir o Card dinamicamente

    //Seleciona a vitrine
    let vitrine = document.getElementById("vitrine")

    //Cria elementos HTML do card
    let card = document.createElement("div")
    let cardBoxImagem = document.createElement("div")
    let cardImagem = document.createElement("img")
    let cardDados = document.createElement("div")
    let cardCategoria = document.createElement("p")
    let cardTitulo = document.createElement("h3")
    let cardDetails = document.createElement("p")
    let cardPrice = document.createElement("p")
    let cardButton = document.createElement("button")

    //Atribui classes aos elementos do card
    card.classList.add("cardVitrine")
    cardBoxImagem.classList.add("boxImagem")
    cardImagem.classList.add("imgProduto")
    cardDados.classList.add("dadosProd")
    cardCategoria.classList.add("categoriaProduto")
    cardTitulo.classList.add("tituloProduto")
    cardDetails.classList.add("descProduto")
    cardPrice.classList.add("precoProduto")
    cardButton.classList.add("buttonAdd")

    //Monta arvore DOM
    vitrine.appendChild(card) //card como filho da vitrine
    card.appendChild(cardBoxImagem) //box da imagem como filho do card
    card.appendChild(cardDados) //box dos dados como filho do card
    cardBoxImagem.appendChild(cardImagem) //imagem como filha da sua box
    cardDados.appendChild(cardCategoria) //categoria do produto como filho da box Dados
    cardDados.appendChild(cardTitulo) //titulo do produto como filho da box Dados
    cardDados.appendChild(cardDetails) //descrição do produto como filho da box Dados
    cardDados.appendChild(cardPrice) //preço do produto como filho da box Dados
    cardDados.appendChild(cardButton) //botão do carrinho como filho da box Dados

    //Atribui valores/elementos às estruturas HTML do card
    card.id = produto.id //atribui ID ao card criado
    cardCategoria.innerText = produto.tag[0]
    cardImagem.src = produto.img
    cardTitulo.innerText = produto.nameItem
    cardDetails.innerText = produto.description
    cardPrice.innerText = `R$ ${produto.value.toFixed(2).replace(".", ",")}`
    cardButton.innerText = produto.addCart

    /*
    Caso o button receba click, consulta o banco, passa o produto para o array do cart, limpa o HTML
    do display, e monta ele baseado nos produtos contidos no array do cart.
     */
    card.addEventListener("click", (event) => {
        if (event.target == cardButton){
            let prod = data.filter(obj => obj.id == event.currentTarget.id)
            listCart.includes(prod[0]) ? prod[0].qtd++ : (listCart.push(prod[0]), prod[0].qtd++)
            cartChecker()
            document.getElementById("display").innerHTML = ""
            listCart.forEach(cartCardGen)
            checkout()
        }
        
    })

}

function buildVitrine() {
    data.forEach(vitrineCardGen)
}




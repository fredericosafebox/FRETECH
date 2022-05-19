function searchEngine(event){
    let vitrine = document.getElementById("vitrine")
    let inputText = textPesquisa.value
    vitrine.innerHTML = ""
    if (textPesquisa == ""){
       buildVitrine()
    } else{
        if (isFilter == true){
            let filtro = filtroHeader.filter(obj => obj.nameItem.toLowerCase().includes(inputText.toLowerCase()))
            filtro.forEach(vitrineCardGen)
        } else{
            let filtro = data.filter(obj => obj.nameItem.toLowerCase().includes(inputText.toLowerCase()))
            filtro.forEach(vitrineCardGen)
        }
    }
}

let textPesquisa = document.querySelector("input")

textPesquisa.addEventListener("input", searchEngine)
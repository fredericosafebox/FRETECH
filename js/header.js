function filterBuilder(item){
    item.addEventListener("click", (event) =>{
        let vitrine = document.getElementById("vitrine")
        if (event.currentTarget.innerText == "Todos"){
            document.querySelectorAll(".tagHeader").forEach((obj) => obj.classList.remove("selected"))
            event.target.classList.toggle("selected")
            isFilter = false
            vitrine.innerHTML = ""
            buildVitrine()
        } else {
            document.querySelectorAll(".tagHeader").forEach((obj) => obj.classList.remove("selected"))
            event.target.classList.toggle("selected")
            isFilter = true
            filtroHeader = data.filter(obj => obj.tag[0] == event.currentTarget.innerText)
            vitrine.innerHTML = ""
            filtroHeader.forEach(vitrineCardGen)
        }
    })

}

function tagBuilder(title){
    let list = document.querySelector("ul")

    let item = document.createElement("li")

    item.classList.add("tagHeader")

    item.innerText = title

    title == "Todos" ? item.id = "todos" : ""

    list.appendChild(item)

    filterBuilder(item)
}

function buildHeader() {
    let categorias = new Set()
    categorias.add("Todos")
    data.forEach(obj => categorias.add(obj.tag[0]))
    categorias.forEach(x => header.push(x))
    header.forEach(tagBuilder)
}
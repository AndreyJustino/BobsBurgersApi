const divImgs = document.getElementById("container")
const divImg = document.querySelectorAll("container img, ul, li")
const buttoDireita = document.getElementById("seta-direita")
const buttoEsquerda = document.getElementById("seta-esquerda")
let idx = 0
let cont = 0

function fazGet(url){
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, false)
    xhr.send()
    return JSON.parse(xhr.responseText)
}

function main(n){
    const dados = fazGet(`https://bobsburgers-api.herokuapp.com/characters/?limit=3&skip=${n}`)

    dados.forEach((element, index) => {
        let cards = 
        `
            <div class="card">
                <img class="image-personagem" src="${element.image}" alt="foto-personagem">
                <ul type="none">
                    <li>Primeiro episódio: ${element.firstEpisode}
                    <li>Nome: ${element.name}</li>
                    <li>Genero: ${element.gender}</li>
                    <li>Ocupação: ${element.occupation}</li>
                </ul>
            </div>
        `
        divImgs.innerHTML += cards

    });

}

main(cont)

buttoDireita.addEventListener("click", () => {
    if(cont <= 496){
        cont = cont + 3

        divImgs.innerHTML = ""

        main(cont)
    }
    
    
})

buttoEsquerda.addEventListener("click", () => {
    
    if(cont >= 3){
        cont = cont - 3
        
        divImgs.innerHTML = ""
        
        main(cont)
    }

})

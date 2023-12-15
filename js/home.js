'use strict'

const pegarFavoritos = async() =>{
    let url = 'http://localhost:8080/produtos/favoritos'
    let response = await fetch(url)
    let data = await response.json()
    let array = data.arrayC

    let containerCategoria = document.getElementById('container-favs')

    array.forEach(element => {
        const bloco = document.createElement('div')

        bloco.innerHTML = `
        <a class="f" href="./product.html">

                    <div class="favorita" style="background-image: url(${element.foto});">
                        <p class="valor">R$ 16,00</p>
                        
                        <div class="nome-favs">
                            <p class="descricao">Pizza de calabreza com queijo</p>
                        </div>
                    </div>
        </a>
        `
    })

    
}

{/* <div class="bloco-favs">

                <a class="f" href="./product.html">

                    <div class="favorita" style="background-image: url(../img/pizzaCalabresacomQueijo.png);">
                        <p class="valor">R$ 16,00</p>
                        
                        <div class="nome-favs">
                            <p class="descricao">Pizza de calabreza com queijo</p>
                        </div>
                    </div>
                </a>
            </div> */}
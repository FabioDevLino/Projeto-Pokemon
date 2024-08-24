const botaoalterartema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagembotaotrocadetema = document.querySelector(".imagem-botao");

botaoalterartema.addEventListener("click", () => {
    const modoescuroestaativo = body.classList. 
    contains("modo-escuro");

    if (modoescuroestaativo) {
        body.classList.remove("modo-escuro");
        imagembotaotrocadetema.setAttribute("src", "./src/imagens/sun.png");
    }
         
    
    else {
        body.classList.add("modo-escuro");
        imagembotaotrocadetema.setAttribute("src", "./src/imagens/moon.png");
    }
});

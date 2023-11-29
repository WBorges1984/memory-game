const emojis = [
    "1.png",
    "1.png",
    "2.png",
    "2.png",
    "3.png",
    "3.png",
    "4.png",
    "4.png",
    "5.png",
    "5.png",
    "6.png",
    "6.png",
    "7.png",
    "7.png",
    "8.png",
    "8.png",
    
    
];
let openCards = [];

let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5? 2: -1));

// for (let i = 0; i < emojis.length; i++) {
//     let box = document.createElement("div");
//     box.className = "item";

//     // Cria um elemento de imagem
//     let img = document.createElement("img");

//     // Define o caminho da imagem desejada
//     img.src = "../img/" + i + ".png"; // Substitua pelo caminho real da sua imagem

//     // Adiciona a imagem à div
//     box.appendChild(img);

//     // Adiciona o evento de clique
//     box.onclick = handleClick;

//     // Adiciona a div ao elemento com a classe "game"
//     document.querySelector(".game").appendChild(box);
// }

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    let img = document.createElement("img");
    img.src = "../../src/img/" + emojis[i];
    img.width = "100";
    box.appendChild(img);
    box.onclick= handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length ==2 ){
        setTimeout(checkMatch, 500);
    }
}



function checkMatch(){
    
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");

    }
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!")
    }

}
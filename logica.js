let coins = 0;
let power = 1;
let auto = 0;

// Elementos da página
const coinsText = document.getElementById("coins");
const powerText = document.getElementById("power");
const autoText = document.getElementById("auto");
const cursorText = document.getElementById("cursor");
const clickButton = document.getElementById("click");

// Clique principal
clickButton.onclick = function () {
    coins += power;
    atualizar();
};

// Duplo Click
function doubleClick() {

    let preco = Math.floor(50 * Math.pow(1.5, doubleLevel));

    if (coins >= preco) {

        coins -= preco;

        power *= 2;

        doubleLevel++;

        atualizar();

    } else {

        alert("Você precisa de " + preco + " moedas!");

    }
}

// Auto Click
function autoClick() {
    if (coins >= 100) {
        coins -= 100;
        auto++;

        atualizar();
    } else {
        alert("Você precisa de 100 moedas!");
    }
}

// Skins
function skin(tipo) {

    let preco = 0;

    if (tipo === "⭐") {
        preco = 200;
    }

    if (tipo === "🔥") {
        preco = 500;
    }

    if (tipo === "💎") {
        preco = 1000;
    }

    if (coins >= preco) {
        coins -= preco;
        cursorText.textContent = tipo;
    } else {
        alert("Você não tem moedas suficientes!");
    }

    atualizar();
}

// Auto Click acontece a cada 1 segundo
setInterval(function () {

    coins += auto;

    atualizar();

}, 1000);

// Atualizar informações na tela
function atualizar() {

    coinsText.textContent = coins;
    powerText.textContent = power;
    autoText.textContent = auto;

}

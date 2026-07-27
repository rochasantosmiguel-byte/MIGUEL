let score = 0;

let clickPower = 1;

let multiplier = 1;

let autoClick = 0;

const scoreText = document.getElementById("score");
const powerText = document.getElementById("power");

document.getElementById("clickBtn").onclick = function(){

    score += cl

    update();
}

function update(){

    scoreText.innerHTML = score;
    powerText.innerHTML = clickPower * multiplier;

}

function buyPower(){

    if(score >= 50){

        score -= 50;

        clickPower++;

        update();

    }else{

        alert("Pontos insuficientes!");
    }

}

function buyMultiplier(){

    if(score >= 200){

        score -= 200;

        multiplier *= 2;

        update();

    }else{

        alert("Pontos insuficientes!");
    }

}

function buyAutoClick(){

    if(score >= 500){

        score -= 500;

        autoClick++;

        update();

    }else{

        alert("Pontos insuficientes!");
    }

}

setInterval(function(){

    score += autoClick;

    update();

},1000);

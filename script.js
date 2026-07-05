/*
=========================================
ARS MAGNA 2.0
script.js
Control principal de la aplicación
=========================================
*/

const ROTATION_STEP = STEP;

// ---------- BOTONES RUEDA EXTERIOR ----------

document
.getElementById("leftOuter")
.addEventListener("click",()=>{

    rotateOuter(-ROTATION_STEP);
    updatePanel();

});

document
.getElementById("rightOuter")
.addEventListener("click",()=>{

    rotateOuter(ROTATION_STEP);
    updatePanel();

});

// ---------- BOTONES RUEDA MEDIA ----------

document
.getElementById("leftMiddle")
.addEventListener("click",()=>{

    rotateMiddle(-ROTATION_STEP);
    updatePanel();

});

document
.getElementById("rightMiddle")
.addEventListener("click",()=>{

    rotateMiddle(ROTATION_STEP);
    updatePanel();

});

// ---------- BOTONES RUEDA INTERIOR ----------

document
.getElementById("leftInner")
.addEventListener("click",()=>{

    rotateInner(-ROTATION_STEP);
    updatePanel();

});

document
.getElementById("rightInner")
.addEventListener("click",()=>{

    rotateInner(ROTATION_STEP);
    updatePanel();

});

// ---------- COMBINAR ----------

document
.getElementById("combine")
.addEventListener("click",()=>{

    updatePanel();

});

// ---------- ALEATORIO ----------

document
.getElementById("random")
.addEventListener("click",()=>{

    randomCombination();

});

// ---------- REINICIAR ----------

document
.getElementById("reset")
.addEventListener("click",()=>{

    resetCombination();

});

// ---------- TECLADO ----------

window.addEventListener("keydown",(e)=>{

    switch(e.key){

        case "1":
            rotateOuter(-ROTATION_STEP);
            break;

        case "2":
            rotateOuter(ROTATION_STEP);
            break;

        case "3":
            rotateMiddle(-ROTATION_STEP);
            break;

        case "4":
            rotateMiddle(ROTATION_STEP);
            break;

        case "5":
            rotateInner(-ROTATION_STEP);
            break;

        case "6":
            rotateInner(ROTATION_STEP);
            break;

        case "r":
        case "R":
            randomCombination();
            return;

        case "0":
            resetCombination();
            return;

        default:
            return;

    }

    updatePanel();

});

// ---------- INICIO ----------

window.onload = ()=>{

    updatePanel();

};

/*
=========================================
ARS MAGNA 2.0
engine.js
Motor combinatorio
=========================================
*/

// Devuelve un índice entre 0 y 8
function normalizeIndex(value){

    value = value % PRINCIPLES.length;

    if(value < 0){
        value += PRINCIPLES.length;
    }

    return value;
}

// Convierte una rotación en el índice visible
function rotationToIndex(rotation){

    const turns = Math.round(rotation / STEP);

    return normalizeIndex(-turns);

}

// Obtiene los tres principios alineados
function currentCombination(){

    const a = rotationToIndex(outerRotation);
    const b = rotationToIndex(middleRotation);
    const c = rotationToIndex(innerRotation);

    return {

        outer: PRINCIPLES[a],
        middle: PRINCIPLES[b],
        inner: PRINCIPLES[c],

        outerIndex: a,
        middleIndex: b,
        innerIndex: c

    };

}

// Genera una explicación sencilla
function buildExplanation(combo){

    return `
La combinación relaciona
${combo.outer.name},
${combo.middle.name}
y
${combo.inner.name}.

En el Ars Magna estas dignidades
se contemplan conjuntamente para
buscar relaciones filosóficas,
teológicas y lógicas.

Pregunta sugerida:

¿Cómo se relacionan
${combo.outer.name},
${combo.middle.name}
y
${combo.inner.name}
en Dios?
`;

}

// Actualiza el panel
function updatePanel(){

    const combo = currentCombination();

    document.getElementById("letters").textContent =
        `${combo.outer.letter} · ${combo.middle.letter} · ${combo.inner.letter}`;

    document.getElementById("concepts").innerHTML =
        `
        <b>Exterior:</b> ${combo.outer.name}<br>
        <b>Media:</b> ${combo.middle.name}<br>
        <b>Interior:</b> ${combo.inner.name}
        `;

    document.getElementById("explanation").textContent =
        buildExplanation(combo);

}

// Combinación aleatoria
function randomCombination(){

    const r = () => Math.floor(Math.random()*PRINCIPLES.length);

    outerRotation = r() * STEP;
    middleRotation = r() * STEP;
    innerRotation = r() * STEP;

    outerGroup.setAttribute(
        "transform",
        `rotate(${outerRotation})`
    );

    middleGroup.setAttribute(
        "transform",
        `rotate(${middleRotation})`
    );

    innerGroup.setAttribute(
        "transform",
        `rotate(${innerRotation})`
    );

    updatePanel();

}

// Reiniciar
function resetCombination(){

    outerRotation = 0;
    middleRotation = 0;
    innerRotation = 0;

    outerGroup.setAttribute(
        "transform",
        "rotate(0)"
    );

    middleGroup.setAttribute(
        "transform",
        "rotate(0)"
    );

    innerGroup.setAttribute(
        "transform",
        "rotate(0)"
    );

    updatePanel();

}

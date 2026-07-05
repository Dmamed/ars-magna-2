/*
=========================================
ARS MAGNA 2.0
wheel.js
Dibuja las ruedas SVG
=========================================
*/

const outerGroup = document.getElementById("outerWheel");
const middleGroup = document.getElementById("middleWheel");
const innerGroup = document.getElementById("innerWheel");

let outerRotation = 0;
let middleRotation = 0;
let innerRotation = 0;

function polar(radius, angle){

    const rad = (angle-90) * Math.PI/180;

    return{
        x:radius*Math.cos(rad),
        y:radius*Math.sin(rad)
    };

}

function sectorPath(r1,r2,start,end){

    const p1 = polar(r2,start);
    const p2 = polar(r2,end);
    const p3 = polar(r1,end);
    const p4 = polar(r1,start);

    const large = (end-start)<=180 ? 0 : 1;

    return `
        M ${p1.x} ${p1.y}
        A ${r2} ${r2} 0 ${large} 1 ${p2.x} ${p2.y}
        L ${p3.x} ${p3.y}
        A ${r1} ${r1} 0 ${large} 0 ${p4.x} ${p4.y}
        Z
    `;

}

function drawWheel(group, innerRadius, outerRadius, cssClass){

    group.innerHTML = "";
    group.setAttribute("class", cssClass);

    PRINCIPLES.forEach((item,index)=>{

        const start = index * STEP;
        const end = start + STEP;

        // Sector

        const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );

        path.setAttribute(
            "d",
            sectorPath(innerRadius,outerRadius,start,end)
        );

        path.setAttribute(
            "fill",
            COLORS[index]
        );

        path.setAttribute(
            "stroke",
            "#5a3b16"
        );

        path.setAttribute(
            "stroke-width",
            "2"
        );

        group.appendChild(path);

        // Texto

        const angle = start + STEP/2;

        const pos = polar(
            (innerRadius+outerRadius)/2,
            angle
        );

        const text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );

        text.setAttribute("x",pos.x);
        text.setAttribute("y",pos.y);

        text.setAttribute(
            "text-anchor",
            "middle"
        );

        text.setAttribute(
            "dominant-baseline",
            "middle"
        );

        text.setAttribute(
            "font-size",
            "20"
        );

        text.setAttribute(
            "fill",
            "#2b1608"
        );

        text.textContent = item.letter;

        group.appendChild(text);

    });

}

// Dibujar ruedas

drawWheel(
    outerGroup,
    220,
    300,
    "outer"
);

drawWheel(
    middleGroup,
    140,
    220,
    "middle"
);

drawWheel(
    innerGroup,
    60,
    140,
    "inner"
);

// Girar ruedas

function rotateOuter(step){

    outerRotation += step;

    outerGroup.setAttribute(
        "transform",
        `rotate(${outerRotation})`
    );

}

function rotateMiddle(step){

    middleRotation += step;

    middleGroup.setAttribute(
        "transform",
        `rotate(${middleRotation})`
    );

}

function rotateInner(step){

    innerRotation += step;

    innerGroup.setAttribute(
        "transform",
        `rotate(${innerRotation})`
    );

}

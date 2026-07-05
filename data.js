/*
=========================================
ARS MAGNA 2.0
data.js
Base de datos de conceptos de Ramon Llull
=========================================
*/

const PRINCIPLES = [

{
letter:"B",
name:"Bondad",
latin:"Bonitas",
description:"La bondad es aquello por lo cual un ser comunica el bien."
},

{
letter:"C",
name:"Grandeza",
latin:"Magnitudo",
description:"La grandeza expresa la perfección y plenitud del ser."
},

{
letter:"D",
name:"Eternidad",
latin:"Duratio",
description:"Aquello que existe sin principio ni fin."
},

{
letter:"E",
name:"Poder",
latin:"Potestas",
description:"Capacidad para obrar y producir efectos."
},

{
letter:"F",
name:"Sabiduría",
latin:"Sapientia",
description:"Conocimiento perfecto del orden y la verdad."
},

{
letter:"G",
name:"Voluntad",
latin:"Voluntas",
description:"Principio por el cual un ser ama y desea el bien."
},

{
letter:"H",
name:"Virtud",
latin:"Virtus",
description:"La excelencia mediante la cual una acción alcanza su perfección."
},

{
letter:"I",
name:"Verdad",
latin:"Veritas",
description:"Conformidad del entendimiento con la realidad."
},

{
letter:"K",
name:"Gloria",
latin:"Gloria",
description:"Manifestación plena de la perfección."
}

];


// Colores medievales

const COLORS = [

"#f5deb3",
"#ffd27f",
"#f6c85f",
"#f2b134",
"#d9a441",
"#b98c2f",
"#d6b36a",
"#c9aa71",
"#e7d8aa"

];


// Radio de cada rueda

const RADII = {

outer:300,

middle:220,

inner:140

};


// Ángulos

const STEP = 360 / PRINCIPLES.length;


// Explicaciones simples (luego las haremos inteligentes)

function explain(a,b,c){

return `
La combinación relaciona
${a.name},
${b.name}
y
${c.name}.

Según el Ars Magna, estas tres dignidades deben contemplarse simultáneamente para descubrir nuevas relaciones filosóficas y teológicas.
`;

}

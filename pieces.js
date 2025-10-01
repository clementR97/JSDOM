// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
//const article = pieces[0];
for(const article of pieces){
const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix:${article.prix} €, (${article.prix<35?"€":"€€€"}) `;

const categorieElement = document.createElement("p");
categorieElement.innerText = `${article.categorie??"(aucune catégorie)"}`;

const descriptionArticle = document.createElement("p");
descriptionArticle.innerText = `${article.description??"(aucune description)"}`;

const disponibiliter = document.createElement("p");
disponibiliter.innerText = `${article.disponibilite?"disponible":"non disponible"}`;

// creer une div 
const div = document.createElement("div")

const sectionFiches = document.querySelector(".fiches");

sectionFiches.appendChild(div);

div.appendChild(imageElement)
div.appendChild(nomElement)
div.appendChild(prixElement)
div.appendChild(categorieElement)
div.appendChild(descriptionArticle)
div.appendChild(disponibiliter)
}

const trier = document.querySelector(".btn-trier");
trier.addEventListener("click",function(){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a,b){
        return a.prix - b.prix;
    });
    console.log(piecesOrdonnees);
})

// const filtre = document.querySelector(".btn-filtrer");
// filtre.addEventListener("click",function(){

//     const piecesFilter = pieces.filtre(function(piece){
//         return piece.prix <= 35;
//     });

// });
const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
   });
   console.log(piecesFiltrees)
 } );

 const triedecroisant = document.querySelector(".btn-trier-decroi");
 triedecroisant.addEventListener("click",()=>{

    const piecesdecroisant = pieces.sort((a,b)=>{
        return b.prix - a.prix;
    });
    console.log(piecesdecroisant);
 });

 const filtredescription = document.querySelector(".btn-filtrer-descrip");
 filtredescription.addEventListener("click",()=>{

    const piecesFiltrees = pieces.filter((piece)=>{
        return piece.description;
    })
    console.log(piecesFiltrees);
 });
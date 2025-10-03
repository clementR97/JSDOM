// // Récupération des pièces depuis le fichier JSON
// const reponse = await fetch("pieces-autos.json");
// const pieces = await reponse.json();
// //const article = pieces[0];
// for(const article of pieces){
// const imageElement = document.createElement("img");
// imageElement.src = article.image;

// const nomElement = document.createElement("h2");
// nomElement.innerText = article.nom;

// const prixElement = document.createElement("p");
// prixElement.innerText = `Prix:${article.prix} €, (${article.prix<35?"€":"€€€"}) `;

// const categorieElement = document.createElement("p");
// categorieElement.innerText = `${article.categorie??"(aucune catégorie)"}`;

// const descriptionArticle = document.createElement("p");
// descriptionArticle.innerText = `${article.description??"(aucune description)"}`;

// const disponibiliter = document.createElement("p");
// disponibiliter.innerText = `${article.disponibilite?"disponible":"non disponible"}`;

// // creer une div 
// const div = document.createElement("div")

// const sectionFiches = document.querySelector(".fiches");

// sectionFiches.appendChild(div);

// div.appendChild(imageElement)
// div.appendChild(nomElement)
// div.appendChild(prixElement)
// div.appendChild(categorieElement)
// div.appendChild(descriptionArticle)
// div.appendChild(disponibiliter)
// }

// const trier = document.querySelector(".btn-trier");
// trier.addEventListener("click",function(){
//     const piecesOrdonnees = Array.from(pieces);
//     piecesOrdonnees.sort(function(a,b){
//         return a.prix - b.prix;
//     });
//     console.log(piecesOrdonnees);
// })

// // const filtre = document.querySelector(".btn-filtrer");
// // filtre.addEventListener("click",function(){

// //     const piecesFilter = pieces.filtre(function(piece){
// //         return piece.prix <= 35;
// //     });

// // });
// const boutonFiltrer = document.querySelector(".btn-filtrer");

// boutonFiltrer.addEventListener("click", function () {
//    const piecesFiltrees = pieces.filter(function (piece) {
//        return piece.prix <= 35;
//    });
//    console.log(piecesFiltrees)
//  } );

//  const triedecroisant = document.querySelector(".btn-trier-decroi");
//  triedecroisant.addEventListener("click",()=>{

//     const piecesdecroisant = pieces.sort((a,b)=>{
//         return b.prix - a.prix;
//     });
//     console.log(piecesdecroisant);
//  });

//  const filtredescription = document.querySelector(".btn-filtrer-descrip");
//  filtredescription.addEventListener("click",()=>{

//     const piecesFiltrees = pieces.filter((piece)=>{
//         return piece.description;
//     })
//     console.log(piecesFiltrees);
//  });


//  const noms = pieces.map(piece => piece.nom);
//  for(let i=pieces.length-1 ;i>=0 ;i--){
//     if(pieces[i].prix > 35){
//         noms.splice(i,1);
//     }  
//  }
//  console.log(noms);

//  const nomDisponible = pieces.map(piece => piece.nom);
//  const prixDisponible = pieces.map(piece => piece.prix);
//  const disponiblePiece = pieces.map(piece=>piece.disponibilite);
//  for(let i = pieces.length-1; i>=0;i--){
//     if(disponiblePiece[i]== false){
//         nomDisponible.splice(i,1);
//         prixDisponible.splice(i,1);
        
//     }
//  }
 




// const listeUl = document.createElement('ul');
// const disponibleElements = document.createElement('ul');

// for(let i=0; i< noms.length; i++){
//     const listeLi = document.createElement('li');
//     const listeElements = document.createElement('li');
//     listeLi.innerText = `${noms[i]}`
    
//     listeElements.innerText = `${nomDisponible[i]} - ${prixDisponible[i].toFixed(2)}€`
//     listeUl.appendChild(listeLi);
//     disponibleElements.appendChild(listeElements);
// }
// document.querySelector('.abordable').appendChild(listeUl)
// document.querySelector('.disponibles').appendChild(disponibleElements)
// document.querySelector(".fiches").innerHTML = '';


const pieces = await fetch("pieces-autos.json").then(pieces=>pieces.json());

// generer tout la page web

function genererPage(pieces){
    for(let i=0;i<pieces.length;i++){
        const pieceElement = document.createElement('article');
        const ImageElement = document.createElement('img');
        ImageElement.src = pieces[i].image;
        pieceElement.appendChild(ImageElement);

        const NomElement = document.createElement('h2');
        NomElement.innerText = pieces[i].nom;
        pieceElement.appendChild(NomElement);

        const prixElement = document.createElement('p');
        prixElement.innerText = pieces[i].prix.toFixed(2);
        pieceElement.appendChild(prixElement);

        const categorieElement = document.createElement('p');
        categorieElement.innerText = pieces[i].categorie;
        pieceElement.appendChild(categorieElement);
        

        const sectionFiches = document.querySelector('.fiches');
        sectionFiches.appendChild(pieceElement);
        document.body.appendChild(sectionFiches);
    }
}
genererPage(pieces);




const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click",function(){
    const piecesOrdonnees = Array.from(pieces);
         piecesOrdonnees.sort(function(a,b){
             return a.prix - b.prix;
         });
         
          document.querySelector('.fiches').innerHTML = "";
          genererPage(piecesOrdonnees);
});

const boutonFiltre = document.querySelector('.btn-filtrer');
boutonFiltre.addEventListener("click",()=>{
    const piecesFiltrer = pieces.filter((piece)=> {
                return piece.prix <= 35;
            });
            
            document.querySelector('.fiches').innerHTML = "";
            genererPage(piecesFiltrer);
          });


const boutonDecroissant = document.querySelector('.btn-trier-decroi');
boutonDecroissant.addEventListener("click",()=>{
    const piecesdecroisant = pieces.sort((a,b)=>{
                return b.prix - a.prix;
             });
             document.querySelector('.fiches').innerHTML = "";
             genererPage(piecesdecroisant);
});

// const filtredescription = document.querySelector(".btn-filtrer-descrip");
//  filtredescription.addEventListener("click",()=>{
//      const piecesFiltrees = pieces.filter((piece)=>{
//          return piece.description;
//      })
//      document.querySelector('.fiches').innerHTML = "";
//      genererPage(piecesFiltrees);
// });

// controler les prix avec le input de scrol
const scrolPrix = document.querySelector('#prix');

scrolPrix.addEventListener('input',()=>{
    const piecesFiltrees = pieces.filter((piece)=>{
        return piece.prix <= scrolPrix.value;
    });
    document.querySelector('.fiches').innerHTML = "";
    genererPage(piecesFiltrees);
});
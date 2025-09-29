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

// sectionFiches.appendChild(imageElement);
// sectionFiches.appendChild(nomElement);
// sectionFiches.appendChild(prixElement);
// sectionFiches.appendChild(categorieElement);

// try {
//     const reponse = await fetch("pieces-autos.json");
//     const pieces = await reponse.json();
    
//     const sectionFiches = document.querySelector(".fiches");
    
//     // Afficher tous les articles
//     pieces.forEach(article => {
//         const articleElement = document.createElement("article");
        
//         const imageElement = document.createElement("img");
//         imageElement.src = article.image;
//         imageElement.alt = article.nom;
        
//         const nomElement = document.createElement("h2");
//         nomElement.innerText = article.nom;
        
//         const prixElement = document.createElement("p");
//         prixElement.innerText = `Prix: ${article.prix} €`;
        
//         const categorieElement = document.createElement("p");
//         categorieElement.innerText = `Catégorie: ${article.categorie}`;
        
//         const descriptionElement = document.createElement("p");
//         descriptionElement.innerText = article.description;
        
//         const disponibiliteElement = document.createElement("p");
//         disponibiliteElement.innerText = article.disponibilite ? "Disponible" : "Rupture de stock";
//         disponibiliteElement.className = article.disponibilite ? "disponible" : "rupture";
        
//         articleElement.appendChild(imageElement);
//         articleElement.appendChild(nomElement);
//         articleElement.appendChild(prixElement);
//         articleElement.appendChild(categorieElement);
//         articleElement.appendChild(descriptionElement);
//         articleElement.appendChild(disponibiliteElement);
        
//         sectionFiches.appendChild(articleElement);
//     });
// } catch (error) {
//     console.error("Erreur lors du chargement des pièces:", error);
//     const sectionFiches = document.querySelector(".fiches");
//     sectionFiches.innerHTML = "<p>Erreur lors du chargement des pièces</p>";
// }
// Création de la fonction récupération et affichage des données

// Récupération des données depuis l'API dans le fichier works

const getData = async () => {
    const response = await fetch("http://localhost:5678/api/works");
    const works = await response.json();


//Création d'une fonction Affichage des Travaux

const displayWorks = async (namearray) => {
  
// Création d'une boucle

for (let i = 0; i < namearray.length; i++) {

const project = namearray[i];
    
// Récupération de l'élément du DOM qui accueillera les projets de Sophie Bluel
    
const sectionGallery = document.querySelector(".gallery");
    
// Création d'une balise dédiée à un projet
    
const projectElement = document.createElement("project");
    
// Création des balises avec createElement
    
const imageElement = document.createElement("img");
imageElement.src = project.imageUrl;
        
const titleElement = document.createElement("figcaption");
titleElement.innerText = project.title;
    
// Rattachement de la balise projet à la section gallery
    
sectionGallery.appendChild(projectElement);
    
// Rattachement de l'image et du titre à la balise projet (projetElement)
    
projectElement.appendChild(imageElement);
projectElement.appendChild(titleElement);

    }  
  }

displayWorks(works);


// Gestion des boutons 

// Boutton TOUS

const buttonAll = document.querySelector(".btn_tous");

buttonAll.addEventListener("click", () => { document.querySelector(".gallery").innerHTML='';
  displayWorks(works)
});

// Boutton OBJETS

const buttonObjects = document.querySelector(".btn_objets");
const worksObjects = works.filter((works) => {
  return works.categoryId === 1;
});

buttonObjects.addEventListener("click", () => { document.querySelector(".gallery").innerHTML='';
  displayWorks(worksObjects);
});

// Boutton APPARTEMENTS

const buttonApparts = document.querySelector(".btn_apparts");
const worksApparts = works.filter((works) => { 
  return works.categoryId === 2;
});

buttonApparts.addEventListener("click", () => { document.querySelector(".gallery").innerHTML='';
  displayWorks(worksApparts);
});

// Boutton HOTELS & RESTAURANTS

const buttonHotelsRestos = document.querySelector(".btn_hotelsrestos");
const worksHotelsRestos = works.filter((works) => {
  return works.categoryId === 3;
});

buttonHotelsRestos.addEventListener("click", () => { document.querySelector(".gallery").innerHTML='';
  displayWorks(worksHotelsRestos);
});

}


// Appel de la fonction crée

getData();
    







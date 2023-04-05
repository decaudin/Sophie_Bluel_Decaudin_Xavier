// Création d'une fonction récupération et affichage des données

// Récupération des données depuis l'API dans le fichier works

 const getData = async () => {
    let response = await fetch("http://localhost:5678/api/works");
    let works = await response.json();

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

// Affichage de tous les travaux par défaut sur la page d'accueil

displayWorks(works);


// ----------------------------------- Gestion des boutons ----------------------------------- //

// Boutton TOUS

const buttonAll = document.querySelector(".btn_tous");

buttonAll.addEventListener("click", () => { document.querySelector(".gallery").innerHTML='';
  displayWorks(works);
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

getData();


// ------------------------------ Apparition des différents éléments à la connexion ------------------------------//


// Rattachement des constantes aux éléments correspondants du DOM

const ed = document.querySelector(".edition");
const modify1 = document.querySelector(".modify_1");
const modify2 = document.querySelector(".modify_2");
const filter = document.querySelector(".filtres");
const login = document.querySelector(".ancre_login");
const modal = document.querySelector(".modal");
const cross = document.querySelector(".modal_gallery i");
const add = document.querySelector(".add");
const modalGallery = document.querySelector(".modal_gallery");
const modalAdd = document.querySelector(".modal_add");
const returnModal = document.querySelector(".arrow");
const closeModal = document.querySelector(".close");

// Apparition/disparition/modification des éléments avec conditions 

if (sessionStorage.getItem("token")) {

// Apparition bande noire édition

ed.style.display = 'inline'; 
ed.style.display = 'flex';

// Apparition modifier et logo

modify1.style.display = 'inline';
modify1.style.display = 'flex';
modify2.style.display = 'inline';
modify2.style.display = 'flex';

// Disparition bande filtres

filter.style.display = 'none';

// Déconnexion ( apparition et fonctionnalité )

login.innerHTML = 'logout';
login.addEventListener("click", () => {
  sessionStorage.removeItem("token"); location.reload("index.html");
});

// Ouverture modale

modify2.addEventListener("click", () => {
  modal.style.display = 'inline'; modalGallery.style.display = 'block', modalAdd.style.display = 'none';
})

// Fermeture modale

cross.addEventListener("click", () => {
  modal.style.display = 'none';
})

modal.addEventListener("click", () => {
  modal.style.display = 'none';
})

modalGallery.addEventListener('click', (event) => {
  event.stopPropagation();
})

// Ouverture/Fermeture modale Ajout photo

add.addEventListener("click", () => {
  modalGallery.style.display = 'none'; modalAdd.style.display = 'block';
})

closeModal.addEventListener("click", () => {
  modal.style.display = 'none'; 
})

modalAdd.addEventListener('click', (event) => {
  event.stopPropagation();
})

// Retour modale (gallerie)

returnModal.addEventListener("click", () => {
  modalAdd.style.display = 'none'; modalGallery.style.display = 'block';
})

// Redirection vers la page Login si utilisateur non connecté

}

else {
  login.addEventListener("click", () => {
    window.location = ("login.html");  
  })
}


// ---------------------------------------- Affichage des travaux dans la modale ---------------------------------------- //


// Récupération des données depuis l'API dans le fichier works

const getDataModal = async () => {
  const responseModal = await fetch("http://localhost:5678/api/works");
  const worksModal = await responseModal.json();

// Création d'une boucle

for (let i = 0; i < worksModal.length; i++) {

  const projectModal = worksModal[i];
      
  // Récupération de l'élément du DOM de la modale où l'on va afficher les projets de Sophie Bluel
      
  const sectionGalleryModal = document.querySelector(".image_mini");
      
  // Création d'une balise dédiée à un projet
      
  const projectElementModal = document.createElement("projectModal");
  
  // Création des balises avec createElement
      
  const imageElementModal = document.createElement("img");
  imageElementModal.src = projectModal.imageUrl;
          
  const titleElementModal = document.createElement("figcaption");
  titleElementModal.innerText = 'éditer';

  const garbageElementModal = document.createElement("i");
  garbageElementModal.classList.add("fa-regular", "fa-trash-can");

  // Rattachement de la balise projet à la section galerie modale
      
  sectionGalleryModal.appendChild(projectElementModal);
      
  // Rattachement de l'image, du titre et de l'icône à la balise projet modal (projectElementModal)
      
  projectElementModal.appendChild(imageElementModal);
  projectElementModal.appendChild(titleElementModal);
  projectElementModal.appendChild(garbageElementModal);

  // Ajout de l'icône agrandir sur la première image
  
  if (i === 0 ) {
    const scaleElementModal = document.createElement("i");
  scaleElementModal.classList.add("fa-solid", "fa-arrows-up-down-left-right");
  projectElementModal.appendChild(scaleElementModal);
  };

  // Suppression des travaux dans la modale en cliquant sur la poubelle

  if (sessionStorage.getItem("token")) {

    garbageElementModal.addEventListener("click", (e) => {
      e.preventDefault();
      
    const imageToDelete = projectModal.id;
  
    fetch(`http://localhost:5678/api/works/${imageToDelete}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem("token"),
  },
    })
  
    })
  
  }

};

}

getDataModal();


// Ajout des travaux depuis la modale 

// Rattachement des constantes aux éléments correspondants du DOM

const addPicture = document.querySelector(".add_picture");
const addWorks = document.querySelector(".add_works");
const newPicture = document.createElement("img");

let insert = document.createElement('input');
insert.type = 'file';
insert.accept = 'image/*';

addPicture.addEventListener('click', () => {
  
  insert.onchange = () => {
    let fichier = insert.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      newPicture.src = reader.result;
      addWorks.appendChild(newPicture);
      sendData(newPicture)
    };
    reader.readAsDataURL(fichier);
  };
  insert.click();
 
});

function sendData(img){
console.log(img)
}

const validate = document.querySelector(".validate");

validate.addEventListener('click', function(event){
  event.preventDefault();
  let titleNewImage = document.querySelector(".title_form").value;
console.log(titleNewImage);
  let categoryNewImage = document.querySelector(".category_form").value;
  console.log(categoryNewImage);
}

)

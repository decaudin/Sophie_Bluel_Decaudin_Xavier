// Etape 1 --------------------------- Création d'une fonction de récupération et d'affichage des données getData() --------------------------- //

// Etape 1.1 : Création d'une fonction displayWorks d'affichage des Travaux dans la page d'accueil

const displayWorks = async (nameArray) => {

  for (let i = 0; i < nameArray.length; i++) {
      
  // Récupération de l'élément du DOM qui accueillera les projets de Sophie Bluel
      
  const sectionGallery = document.querySelector(".gallery");
      
  // Création des balises et récupération de l'URL et du titre du projet
      
  const projectElement = document.createElement("project");
      
  const imageElement = document.createElement("img");
  imageElement.src = nameArray[i].imageUrl;
          
  const titleElement = document.createElement("figcaption");
  titleElement.innerText = nameArray[i].title;
      
  // Rattachement de la balise "project" à la section gallery et de l'image/titre à la balise "project" (projectElement)
      
  sectionGallery.appendChild(projectElement);    
  projectElement.appendChild(imageElement);
  projectElement.appendChild(titleElement);
  
  }  
}

// Etape 1.2 : Récupération des données depuis l'API dans le tableau works

 const getData = async () => {
    let response = await fetch("http://localhost:5678/api/works");
    let works = await response.json();

// Etape 1.3 : Affichage de tous les travaux sur la page d'accueil

displayWorks(works);

// Etape 1.4 : Affichage des travaux par catégories
  
// Création des boutons de sélection

const buttonAll = document.querySelector(".btn_tous");
const buttonObjects = document.querySelector(".btn_objets");
const buttonApparts = document.querySelector(".btn_apparts");
const buttonHotelsRestos = document.querySelector(".btn_hotelsrestos");

// Affichage par catégories

// Catégorie TOUS

buttonAll.addEventListener("click", () => { document.querySelector(".gallery").innerHTML='';
  displayWorks(works);
});

// Catégorie sélectionnée

const worksObjects = works.filter((item) => {
  return item.categoryId === 1;
});
buttonObjects.addEventListener("click", () => { document.querySelector(".gallery").innerHTML='';
  displayWorks(worksObjects);
});

const worksApparts = works.filter((item) => { 
  return item.categoryId === 2;
});
buttonApparts.addEventListener("click", () => { document.querySelector(".gallery").innerHTML='';
  displayWorks(worksApparts);
});

const worksHotelsRestos = works.filter((item) => {
  return item.categoryId === 3;
});
buttonHotelsRestos.addEventListener("click", () => { document.querySelector(".gallery").innerHTML=''; 
  displayWorks(worksHotelsRestos);
});
}

getData();

// ETAPE 2 : ------------------------------ Apparition des différents éléments à la connexion ------------------------------//

// Etape 2.1 : Récupération et rattachement des éléments du DOM

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

// Etape 2.2 : Apparition/disparition/modification des éléments avec condition 

if (typeof sessionStorage.getItem("token") === "string") { 

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

// Etape 3 : ----------------------------------------- Les modales ----------------------------------------- //

// Etape 3.1 : Ouverture et fermeture de la 1ère modale

modify2.addEventListener("click", () => {
  modal.style.display = 'inline'; modalGallery.style.display = 'block', modalAdd.style.display = 'none';
})

cross.addEventListener("click", () => {
  modal.style.display = 'none';
})

modal.addEventListener("click", () => {
  modal.style.display = 'none';
})
modalGallery.addEventListener('click', (e) => {
  e.stopPropagation();
})

// Etape 3.2 : Ouverture et Fermeture de la 2nd modale

add.addEventListener("click", () => {
  modalGallery.style.display = 'none'; modalAdd.style.display = 'block';
})

closeModal.addEventListener("click", () => {
  modal.style.display = 'none'; 
})
modalAdd.addEventListener('click', (e) => {
  e.stopPropagation();
})

// Retour à la 1ère modale

returnModal.addEventListener("click", () => {
  modalAdd.style.display = 'none'; modalGallery.style.display = 'block';
})
}

// Redirection vers la page Login si utilisateur non connecté

else {
  login.addEventListener("click", () => {
    window.location = ("login.html");  
  })
}

// Etape 4 : ---------------------- Affichage et suppression des travaux dans la modale avec la fonction getDataModal() ---------------------- //

// Etape 4.1 : Récupération des données depuis l'API dans le tableau worksModal

const getDataModal = async () => {
  let responseModal = await fetch("http://localhost:5678/api/works");
  let worksModal = await responseModal.json();

for (let i = 0; i < worksModal.length; i++) {
      
  // Récupération de l'élément du DOM de la modale où l'on va afficher les projets de Sophie Bluel
      
  const sectionGalleryModal = document.querySelector(".image_mini");

  // Etape 4.2 : Affichage des travaux dans la modale
      
  // Création d'une balise dédiée à un projet et de ses balises enfants avec createElement
      
  const projectElementModal = document.createElement("projectModal");
      
  const imageElementModal = document.createElement("img");
  imageElementModal.src = worksModal[i].imageUrl;
          
  const titleElementModal = document.createElement("figcaption");
  titleElementModal.innerText = 'éditer';

  const garbageElementModal = document.createElement("i");
  garbageElementModal.classList.add("fa-regular", "fa-trash-can");

  // Rattachement de la balise projet à la section galerie modale et de l'image/titre/icône poubelle à la balise projet modal (projectELementModal)
      
  sectionGalleryModal.appendChild(projectElementModal);     
  projectElementModal.appendChild(imageElementModal);
  projectElementModal.appendChild(titleElementModal);
  projectElementModal.appendChild(garbageElementModal);

  // Ajout de l'icône agrandir sur la première image
  
  if (i === 0 ) {
    const scaleElementModal = document.createElement("i");
  scaleElementModal.classList.add("fa-solid", "fa-arrows-up-down-left-right");
  projectElementModal.appendChild(scaleElementModal);
  };

// Etape 4.3 : Suppression des travaux dans la modale en cliquant sur la poubelle //

  if (typeof sessionStorage.getItem("token") === "string") {

    garbageElementModal.addEventListener("click", () => { 
    const imageToDelete = worksModal[i].id
    deleteWork(imageToDelete);
    })};

  }};

  getDataModal();
  
  const deleteWork = (ident) => {

    fetch(`http://localhost:5678/api/works/${ident}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
      },
            })
          .then(res=>console.log(res,"rest")).catch(err=>console.log('error',err))
    }

const displayNewWorks = async () => {
  
    let response = await fetch("http://localhost:5678/api/works");
    let newWorksModal = await response.json();

// Fonction de réaffichage des travaux mis à jour en rendant actives les poubelles

const updateModalGallery = (works) => {
  const sectionGalleryModal = document.querySelector(".image_mini"); 
  sectionGalleryModal.innerHTML = '';
  for (let i = 0; i < works.length; i++) {
    const projectElementModal = document.createElement('projectModal');
    const imageElementModal = document.createElement('img');
    imageElementModal.src = works[i].imageUrl;
    const titleElementModal = document.createElement('figcaption');
    titleElementModal.innerText = 'éditer';
    const garbageElementModal = document.createElement('i');
    garbageElementModal.classList.add('fa-regular', 'fa-trash-can');
    projectElementModal.appendChild(imageElementModal);
    projectElementModal.appendChild(titleElementModal);
    projectElementModal.appendChild(garbageElementModal);
    if (i === 0 ) {
      const scaleElementModal = document.createElement('i');
      scaleElementModal.classList.add('fa-solid', 'fa-arrows-up-down-left-right');
      projectElementModal.appendChild(scaleElementModal);
    };
    sectionGalleryModal.appendChild(projectElementModal);
    garbageElementModal.addEventListener('click', () => {
      const imageToDelete = works[i].id;
      deleteWork(imageToDelete);
      works = works.filter(item => item.id !== imageToDelete);
      updateModalGallery(works);
      document.querySelector(".gallery").innerHTML="";
      displayWorks(works);
    });
  }
}
updateModalGallery(newWorksModal);
};

displayNewWorks();

// Etape 5 : --------------------------------------- Ajout des travaux depuis la modale --------------------------------------- //

// Etape 5.1 : Affichage de l'image dans la modale

let addPicture = document.querySelector(".add_picture");
let addWorks = document.querySelector(".add_works");
let newPicture = document.createElement("img");
let insert = document.querySelector("#imageUrl");

    insert.onchange = () => {
      let fichier = insert.files[0];
      let src = URL.createObjectURL(fichier);
      newPicture.src = src;
      addWorks.appendChild(newPicture);
      document.querySelector(".add_works i").style.display='none';
      document.querySelector(".add_works label").style.display='none';
      document.querySelector(".format_size").style.display='none';
      };
  
      addPicture.addEventListener('submit', (e) => { e.preventDefault();
        insert.click();
      });

// Etape 5.2 : Vérification de la validité des champs URL, titre et catégorie

const verifField = () => {
  let imgValue = document.querySelector("#imageUrl").value;
  let titleValue = document.querySelector(".title_form").value;
  let categoryValue = document.querySelector(".category_form").value;
  const errorForm = document.querySelector(".error_form");

  if (imgValue === "") {
    errorForm.style.display = 'block';
    return false
  } if (titleValue === "") {
    errorForm.style.display = 'block';
    return false
  } if (categoryValue === "") {
    errorForm.style.display = 'block';
    return false
  } else {
    errorForm.style.display = 'none';
    return true
  }
}

// Etape 5.3 : Fonction qui fait passer le bouton d'envoie de la modale en vert quand les champs sont remplis 

const greenButton = () => {
  let imgValue = document.querySelector("#imageUrl").value;
  let titleValue = document.querySelector(".title_form").value;
  let categoryValue = document.querySelector(".category_form").value;

  if (titleValue != '' & categoryValue != 0 & imgValue != '') {
      document.getElementById("validate").style.backgroundColor = "#1D6154";
  } 
}

document.querySelector("#imageUrl").addEventListener('change', () => {
  greenButton();
});

document.querySelector(".title_form").addEventListener('input', () => {
  greenButton();
});

document.querySelector(".category_form").addEventListener('input', () => {
  greenButton();
});

// Etape 5.4 : Envoie des travaux vers l'API

const form = document.querySelector("#form_container");

form.addEventListener ("submit", (e) => {
  e.preventDefault();
  let result = verifField();
  if (result === false)
    return
  
  let formData = new FormData(form);

  let file = document.querySelector("#imageUrl");
  formData.append("image", file.files[0], "image.jpeg");
  
  // Vider les champs du formulaire et remettre le bouton en gris une fois les données saisies envoyées 
  
  document.querySelector(".add_works img").src = "";
  document.querySelector(".add_works i").style.display = 'block';
  document.querySelector(".add_works label").style.display = 'block';
  document.querySelector(".format_size").style.display = 'block';
  document.querySelector(".title_form").value = "";
  document.querySelector(".category_form").value = "";
  document.getElementById('validate').style.backgroundColor = '#A7A7A7';
  
  fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
        },
        body: formData,
      })
      .then(res => res.json())
      .then(res => console.log(res))
  
  const getNewData = async () => {
    let response = await fetch("http://localhost:5678/api/works");
    let newWorks = await response.json();
    setTimeout(getNewData, 500);

  // Réaffichage dans la page d'accueil des travaux

    document.querySelector(".gallery").innerHTML = "";
    displayWorks(newWorks);

  // Réaffichage dans la modale des travaux et réactivation du bouton poubelle
      
      document.querySelector(".image_mini").innerHTML = "";
      for (let i = 0; i < newWorks.length; i++) {
            
        const sectionGalleryModal = document.querySelector(".image_mini");
            
        const projectElementModal = document.createElement("projectModal");
            
        const imageElementModal = document.createElement("img");
        imageElementModal.src = newWorks[i].imageUrl;
                
        const titleElementModal = document.createElement("figcaption");
        titleElementModal.innerText = 'éditer';
      
        const garbageElementModal = document.createElement("i");
        garbageElementModal.classList.add("fa-regular", "fa-trash-can");
            
        sectionGalleryModal.appendChild(projectElementModal);     
        projectElementModal.appendChild(imageElementModal);
        projectElementModal.appendChild(titleElementModal);
        projectElementModal.appendChild(garbageElementModal);
        
        if (i === 0 ) {
          const scaleElementModal = document.createElement("i");
        scaleElementModal.classList.add("fa-solid", "fa-arrows-up-down-left-right");
        projectElementModal.appendChild(scaleElementModal);
        };

        garbageElementModal.addEventListener("click", () => { 
          const imageToDelete = newWorks[i].id
          deleteWork(imageToDelete);
          })
      } 
};

getNewData();

});







// -------------------------------------------- CONNEXION ----------------------------------------------//

// Récupération de l'élément du DOM qui accueille le formulaire de connexion

const formLogIn = document.querySelector("#login_form");

// Récupération de l'email et du mot de passe saisis

    formLogIn.addEventListener("submit", (e) => {
        e.preventDefault();
        let email = document.querySelector(".usermail").value;
        let password = document.querySelector(".userpassword").value;
        let sophieBluel = {email, password};
            
// Création de la fonction getInfo() d'envoi des données saisies à l'API pour obtention du Token

const getInfo = async () => {

let response = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json; charset=utf-8'},
    body: JSON.stringify(sophieBluel),
});

// Récupération et stockage du Token, validation de la connexion

let result = await response.json();
sessionStorage.setItem("token", result.token);

if (typeof result.token === "string") {
window.location = "index.html";
} else {
    alert("Erreur dans l'identifiant ou le mot de passe");
}
}

// Appel de la fonction

getInfo();

});


    
    




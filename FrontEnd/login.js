// Récupération de l'élément du DOM qui accueille le formulaire de connexion

const formLogIn = document.querySelector(".login_form");

// Récupération de l'email et du mot de passe saisis

    formLogIn.addEventListener("submit", function(event){
        event.preventDefault();
        let email = document.querySelector(".usermail").value;
        let password = document.querySelector(".userpassword").value;
        let sophieBluel = {email, password};

// Création de la fonction qui compare les données saisies à celles de l'API

const getInfo = async () => {

let response = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json; charset=utf-8'},
    body: JSON.stringify(sophieBluel) 
});

// Récupération du Token

let result = await response.json();

// Stockage du Token

sessionStorage.setItem("token", result.token);

// Conditions pour la connexion

if (typeof result.token === "undefined") {
    alert("Erreur dans l’identifiant ou le mot de passe");
}
else {
    window.location = "index.html";
}

}

getInfo();

});


    
    




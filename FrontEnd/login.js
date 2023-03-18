//let userMail;
//let userPassword;
//let email = "sophie.bluel@test.tld";
//email = document.querySelector(".usermail");
//let password = "S0phie";
//password = document.querySelector(".password");
//const form = document.querySelectorAll(".form");
//const errorElement = document.querySelector(".error");
//const userConnect = document.querySelector(".connexion")

//const login = () => {
//    if userMail === email && userPassword === password;
//    return 
//}

//form.addEventListenner("click", login())

const sophieBluel = {
    "email":"sophie.bluel@test.tld",
    "password":"S0phie"
};

const login = async () => {
    const response = await fetch ("http://localhost:5678/api/users/login", {
        method :'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(sophieBluel)
    })


const result = await response.json();
alert(result.message);

};

login();

console.log(login);


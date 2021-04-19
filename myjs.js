let send = document.querySelector("#envoyer");
let btn = document.querySelector("button");
let divP = document.querySelector("#divP");
let newP = document.createElement("p");
let newP2 = document.createElement("p");

//tableau nom (H && F)
let vikingNameH = ["Gulli Reinnsson", "Bjorgulf Fastulfsson", "Koll Hjalkarsson", "Gunnvid Åsmundsson", "Thorgest Anundsson", "Sigemær Reinnsson", "Hrolf Ævarsson", "Sighadd Reinnsson", "Hreitharr Karsson", "Gærrar Øystensson"];
let vikingNameF = ["Asa Leidolfdottir", "Thorunn Iricdottir", "Sigvor Øystendottir", "Thorgærd Kotkeldottir", "Thyre Bjorgulfdottir", "Ingithora Gudmundottir", "Thorkatla Geirleifdottir", "Drifa Thangbrandottir", "Thorgrima Thoraldrdottir", "Hallgerd Thidrandidottir"];
//tableau surnom (H && F)
let vikingNickH = ["le loup", "l'ogre", "le boucher", "le doux", "le sauvage", "le fort", "le taureau", "le calme", "le timide", "le fou"];
let vikingNickF = ["la voleuse", "la juste", "l'éclair", "la tueuse", "la belle", "l'ourse", "la reine", "la flèche", "la brute", "le serpent"];

let nomDeViking;

//Réponse au formulaire
send.addEventListener("click", e =>{
    let sLastName = document.querySelector("#nom");
    let sFirstName = document.querySelector("#prenom");
    let sAge = document.querySelector("#age");
    let sMail = document.querySelector("#mail");
    let sSex = document.querySelector("input[name = sexe]:checked");
    let sLove = document.querySelector("input[name = aimeViking]:checked");
    let sAlcLove = document.querySelector("input[name = aimeAlcool]:checked");
    let sComments = document.querySelector("#comments");
    
    
    let lastName = sLastName.value;
    let firstName = sFirstName.value;
    let age = sAge.value;
    let mail = sMail.value;
    let comments = sComments.value;
    let vikingLove = sLove.value;
    let alcoolLove = sAlcLove.value;
    let sexe = sSex.value;

    // Gestion de champs non renseignés du formulaire
    if(age == ""){
        age = "Non renseigné"
    }
    if(mail == ""){
        mail = "Non renseigné"
    }
    if(comments == ""){
        comments = "Non renseigné"
    }

    //Bouton radios

    let rdm = Math.floor(Math.random()*10);
    let rdm2 = Math.floor(Math.random()*10);

    if(sexe === "oui"){
        sex = "masculin"
        nomDeViking = vikingNameH[rdm] + " dit " + vikingNickH[rdm2]; 
    } else {
        sex = "féminin"
        nomDeViking = vikingNameF[rdm] + " dit " + vikingNickF[rdm2]; 
    }

    if(vikingLove === "oui"){
        love = "Aime les vikings"
    } else {
        love = "N'aime pas les vikings"
    }
    
    if (alcoolLove ==="oui"){
        alcLove = "Aime l'alcool"
    } else {
        alcLove = "N'aime pas l'alcool"
    }

    

    //alert avec les champs du formulaire
    if(lastName != "" && firstName != ""){
        alert("Information renseignées :" + "\n"
            + "Nom: " + lastName + "\n" 
            + "Prénom: " + firstName + "\n" 
            + "Mail: " + mail + "\n" 
            + "Âge: " + age + "\n" 
            + "Sexe: " + sex + "\n"
            + love + "\n"
            + alcLove + "\n"
            + "Commentaire: " + comments + "\n"
            + "Votre nouveau nom viking est: " + nomDeViking
        )};

    // générateur de nom + surnom (Homme et femme);
    
    

    //newP.textContent = vikingNameH[rdm] + " dit " + vikingNickH[rdm2];
    
    //newP.textContent = vikingNameF[rdm] + " dit " + vikingNickF[rdm2];

    
});




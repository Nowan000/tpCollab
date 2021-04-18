let send = document.querySelector("#envoyer");
//Réponse au formulaire
send.addEventListener("click", e =>{
    let sLastName = document.querySelector("#nom");
    let sFirstName = document.querySelector("#prenom");
    let sAge = document.querySelector("#age");
    let sMail = document.querySelector("#mail");
    let sNbEnfants = document.querySelector("#enfants");
    let sLove = document.querySelector("#aimeViking");
    let sAlcLove = document.querySelector("#aimeAlcool");
    let sComments = document.querySelector("#comments");

    let lastName = sLastName.value;
    let firstName = sFirstName.value;
    let age = sAge.value;
    let mail = sMail.value;
    let comments = sComments.value;
    let vikingLove = sLove.value;
    let alcoolLove = sAlcLove.value;
    let nbEnfants = sNbEnfants.value

    // Envoi selon réponse au menu déroulant
    if (nbEnfants === "0") {
        kids = "aucun enfant"
    } else if(nbEnfants === "1"){
        kids = "un enfant"
    } else if(nbEnfants === "2"){
        kids = "deux enfants"
    } else {
        kids = "plus de deux enfants"
    }

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
        + "Nombre d'enfant: " + kids + "\n" 
        + love + "\n"
        + alcLove + "\n"
        + "Commentaire: " + comments);
    }
});
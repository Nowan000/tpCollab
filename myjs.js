let send = document.querySelector("#envoyer");

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

    if (nbEnfants === "0") {
        kids = "aucun enfant"
    } else if(nbEnfants.value === "1"){
        kids = "un enfant"
    } else if(nbEnfants.value === "2"){
        kids = "deux enfants"
    } else {
        kids = "plus de deux enfants"
    }

    if(age == ""){
        age = "Non renseigné"
    }
    if(mail == ""){
        mail = "Non renseigné"
    }
    if(comments == ""){
        comments = "Non renseigné"
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
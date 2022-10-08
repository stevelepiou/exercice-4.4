let moinsAge =document.querySelector ("#moinsAge")
let plusAge =document.querySelector ("#plusAge")
let moinsPermis =document.querySelector ("#moinsPermis")
let plusPermis =document.querySelector ("#plusPermis")
let nonAccident =document.querySelector ("#nonAccident")
let unAccident =document.querySelector ("#unAccident")
let deuxAccident =document.querySelector ("#deuxAccident")
let plusAccident =document.querySelector ("#plusAccident")
let moinsInscription =document.querySelector ("#moinsInscription")
let plusInscription =document.querySelector ("#plusInscription")
let bouton =document.querySelector ("#btnVerif")
let result = document.querySelector ("#result")



bouton.addEventListener("click", function (e) {
    e.preventDefault()

    //moins de 25 ans et - 2 ans permis

    if (moinsAge.checked && moinsPermis.checked && nonAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes dans la couleur rouge"
    } else if (moinsAge.checked && moinsPermis.checked && unAccident.checked || deuxAccident.checked || plusAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes refusés"
    } else if (moinsAge.checked && moinsPermis.checked && unAccident.checked || deuxAccident.checked || plusAccident.checked && plusInscription.checked){
        result.textContent = "vous êtes dans la couleur rouge"
    }else if (moinsAge.checked && moinsPermis.checked && nonAccident.checked && plusInscription.checked){
        result.textContent = "vous êtes dans la couleur orange"
    } 
    
    //moins de 25 ans et + 2 ans permis
    
    else if (moinsAge.checked && plusPermis.checked && nonAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes dans la couleur orange"
    } else if (moinsAge.checked && plusPermis.checked && nonAccident.checked && plusInscription.checked){
        result.textContent = "vous êtes dans la couleur verte"
    } else if (moinsAge.checked && plusPermis.checked && unAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes dans la couleur rouge"
    } else if (moinsAge.checked && plusPermis.checked && unAccident.checked && plusInscription.checked){
        result.textContent = "vous êtes dans la couleur orange"
    } else if (moinsAge.checked && plusPermis.checked && deuxAccident.checked || plusAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes refusés"
    }

    //plus de 25 ans et - 2 ans de permis

    else if (plusAge.checked && moinsPermis.checked && nonAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes dans la couleur orange"
    } else if (plusAge.checked && moinsPermis.checked && nonAccident.checked && plusInscription.checked){
        result.textContent = "vous êtes dans la couleur verte"
    } else if (plusAge.checked && moinsPermis.checked && unAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes dans la couleur rouge"
    } else if (plusAge.checked && moinsPermis.checked && unAccident.checked && plusInscription.checked){
        result.textContent = "vous êtes dans la couleur orange"
    } else if (plusAge.checked && moinsPermis.checked && deuxAccident.checked || plusAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes refusés"
    }

    //plus de 25 ans et + 2 ans de permis

    
    else if (plusAge.checked && plusPermis.checked && nonAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes dans la couleur verte"
    } else if (plusAge.checked && plusPermis.checked && nonAccident.checked && plusInscription.checked){
        result.textContent = "vous êtes dans la couleur bleue"
    } else if (plusAge.checked && plusPermis.checked && unAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes dans la couleur orange"
    } else if (plusAge.checked && plusPermis.checked && unAccident.checked && plusInscription.checked){
        result.textContent = "vous êtes dans la couleur verte"
    } else if (plusAge.checked && plusPermis.checked && deuxAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes dans la couleur rouge"
    } else if (plusAge.checked && plusPermis.checked && deuxAccident.checked && plusInscription.checked){
        result.textContent = "vous êtes dans la couleur orange"
    } else if (plusAge.checked && plusPermis.checked && plusAccident.checked && moinsInscription.checked){
        result.textContent = "vous êtes refusés"
    } else if (plusAge.checked && plusPermis.checked && plusAccident.checked && plusInscription.checked){
        result.textContent = "vous êtes dans la couleur rouge"
    }
})
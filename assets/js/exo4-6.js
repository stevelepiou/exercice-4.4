let Candidat1 = document.querySelector ("#Cand1")
let Candidat2 = document.querySelector ("#Cand2")
let Candidat3 = document.querySelector ("#Cand3")
let Candidat4 = document.querySelector ("#Cand4")

let Bouton = document.querySelector ("#btnVerif")
let result = document.querySelector ("#resultat")



Bouton.addEventListener("click", function (e) {
    e.preventDefault()

    if (Candidat1.value >= 50){
        result.textContent = "Le candidat 1 à gagner !"

    } else if (Candidat1.value <50 && Candidat1.value > Candidat2.value && Candidat1.value > Candidat3.value && Candidat1.value > Candidat4.value){
        result.textContent = "Nous avons le droit à un deuxième tour, le candidat 1 est favorable"
    } else if (Candidat1.value < 12.5) {
        result.textContent = "Le candidat 1 à perdu !"
    } 
    else {
        result.textContent = "Nous avons le droit à un deuxième tour, le candidat 1 ne part pas favorable"
    }

})
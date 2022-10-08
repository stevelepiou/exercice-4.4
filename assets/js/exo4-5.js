let Homme = document.querySelector("#radioMan")
let Femme = document.querySelector("#radioWoman")
let Age = document.querySelector("#enterAge")
let Bouton = document.querySelector ("#btnVerif")
let result = document.querySelector ("#ouiNon")




Bouton.addEventListener("click", function (e) {
    e.preventDefault()
console.log( Homme.checked );
console.log( Femme.checked );
    if (Homme.checked && Age.value >20){
        result.textContent = "oui"
    } 
    else if (Femme.checked && 18 <= Age.value && Age.value <= 35){
        result.textContent = "oui"
    } else {
        result.textContent = "non"
    }
})
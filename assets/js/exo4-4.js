let nombrePhotocopies = document.querySelector("#numberOfPrice")
let bouton = document.querySelector("#btnSubmit")
let result = document.querySelector("#result")


var tarif1 = 0.10;
var tarif2 = 0.09;
var tarif3 = 0.08;

bouton.addEventListener("click", function (e) {
    e.preventDefault()



if (nombrePhotocopies.value <=10){
    result.textContent = tarif1 * nombrePhotocopies.value;
} else if (11 <= nombrePhotocopies.value <=30){
    result.textContent = (tarif1 * 10)+(nombrePhotocopies.value -10) * tarif2;
} else {
    result.textContent = ((tarif1 * 10)+(tarif2 * 20)+(nombrePhotocopies.value-30) * tarif3);
}
})
var affichageElement = document.getElementById('affichage');

function enterNumber(xd) {
    var number = xd.value;
    affichageElement.innerHTML = affichageElement.innerHTML + number;
};
function reset() {
    affichageElement.innerHTML = "";
}
function calcul() {
    var result = eval(affichageElement.innerHTML);

    affichageElement.innerHTML = affichageElement.innerHTML +
    "=" + result;
}

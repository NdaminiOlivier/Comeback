// Fonction qui calcule la factorielle d'un nombre
function factorielle(n) {
    if (n < 0) return "Impossible : nombre négatif";
    let resultat = 1;
    for (let i = 1; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}

// Demande une entrée utilisateur
let entree = prompt("Entrez un nombre :");

// Convertit en nombre
let nombre = Number(entree);

// Vérifie si l'entrée est valide
if (isNaN(nombre)) {
    console.log("Veuillez entrer un nombre valide.");
} else {
    // Résolution du problème
    console.log("Vous avez entré :", nombre);

    // Pair ou impair
    if (nombre % 2 === 0) {
        console.log("Le nombre est pair.");
    } else {
        console.log("Le nombre est impair.");
    }

    // Factorielle
    console.log("La factorielle est :", factorielle(nombre));
}

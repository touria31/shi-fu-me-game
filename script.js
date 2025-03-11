// Entrer username
let joueur
setTimeout(() => { //Delai de la fonction
   joueur = prompt('Welcome to Shi FU Me! Please enter your username to start the game.') || 'Joueur';
   document.getElementById('username').innerHTML = joueur;
   document.getElementById('username').classList.add('joueur-style'); //Changer style du joueur
   document.getElementById('robot').classList.add('joueur-style');
} , 1000);


var pierre = document.getElementById('pierre');
var ciseaux = document.getElementById('ciseaux');
var papier = document.getElementById('papier');
var choixJoueur = document.getElementById('choix-joueur');
var choixOrdinateur = document.getElementById('choix-ordinateur');
var choixJoueurText = ''; // Pour stocker les choix du joueur

var resultat = document.getElementById('resultat');
var scoreJoueur = document.getElementById('score-joueur');
var scoreRobot = document.getElementById('score-robot');
var scoreJoueurValeur = 0;
var scoreRobotValeur = 0;
// Afficher les choix de joueur
// Choix Pierre
pierre.addEventListener('click', () => {
        choixJoueur.innerHTML = '' ;// Vérifie si un choix a déjà été fait
        var iconPierre = document.createElement('i');  // Créer une icône
        iconPierre.classList.add('fa-solid', 'fa-hand-back-fist');// Ajouter une classe FontAwesome
        choixJoueur.append(iconPierre);
        choixJoueurText = 'pierre'; //stocker le choix pierre
   
        let choixRobot = choixOrdi(); // Appelle la fonction pour générer le choix de l'ordinateur
        comparer(choixJoueurText, choixRobot)
        misAJour()
});
// Choix Ciseaux
ciseaux.addEventListener('click', () => {
        choixJoueur.innerHTML = '';
        var iconCiseaux = document.createElement('i');
        iconCiseaux.classList.add('fa-solid', 'fa-hand-scissors');
        choixJoueur.append(iconCiseaux);
        choixJoueurText = 'ciseaux';
   
        let choixRobot = choixOrdi();
        comparer(choixJoueurText, choixRobot)
        misAJour()
});
// Choix Papier
papier.addEventListener('click', () => {
        choixJoueur.innerHTML = '';
        var iconPapier = document.createElement('i');
        iconPapier.classList.add('fa-solid', 'fa-hand');
        choixJoueur.append(iconPapier);
        choixJoueurText = 'papier';

        let choixRobot = choixOrdi();
        comparer(choixJoueurText, choixRobot)
        misAJour()
});

//Generer le choix de l'ordi

function choixOrdi() {
    var choixPossible = ['pierre', 'ciseaux', 'papier'];
    var choixRobot = choixPossible[Math.floor(Math.random() * 3)];

    choixOrdinateur.innerHTML = '';  // Efface l'ancien choix
    if (choixRobot === 'pierre') {
        var iconPierreRobot = document.createElement('i');
        iconPierreRobot.classList.add('fa-solid', 'fa-hand-back-fist');
        choixOrdinateur.append(iconPierreRobot);
    }
    else if(choixRobot === 'papier') {
        var iconPapierRobot = document.createElement('i');
        iconPapierRobot.classList.add('fa-solid', 'fa-hand');
        choixOrdinateur.append(iconPapierRobot);
    }
    else if(choixRobot === 'ciseaux') {
        var iconCiseauxRobot = document.createElement('i');
        iconCiseauxRobot.classList.add('fa-solid', 'fa-hand-scissors');
        choixOrdinateur.append(iconCiseauxRobot);
    }
    
return choixRobot;
}

// Comparer les choix Robot VS Joueur
function comparer(choixJoueur, choixRobot){

    resultat.classList.remove('gagne', 'perdu', 'egalite'); // Supprimer les classes précédentes
setTimeout(() => {
    
    if (choixRobot === 'papier' && choixJoueur === 'papier' || 
        choixRobot === 'pierre' && choixJoueur === 'pierre' || 
        choixRobot === 'ciseaux' && choixJoueur === 'ciseaux') {

                        resultat.innerHTML = 'Égalité';
                        resultat.classList.add('egalite');

    }else if ((choixJoueur === 'pierre' && choixRobot === 'ciseaux') ||
            (choixJoueur === 'papier' && choixRobot === 'pierre') ||
            (choixJoueur === 'ciseaux' && choixRobot === 'papier')) {

                        resultat.innerHTML = 'Vous avez gagné';
                        resultat.classList.add('gagne');
                        scoreJoueurValeur++;
                        scoreJoueur.innerHTML = scoreJoueurValeur;
    }else {
                        resultat.innerHTML = 'Vous avez perdu';
                        resultat.classList.add('perdu');
                        scoreRobotValeur++;
                        scoreRobot.innerHTML = scoreRobotValeur;
        }
}, 500);
    
   misAJour()
    partieJouée()
   
}

function misAJour() {
    setTimeout(() => {
        choixJoueur.innerHTML = ''; // Effacer le choix du joueur
        choixOrdinateur.innerHTML = ''; // Effacer le choix du robot
        resultat.innerHTML = ''; // Réinitialiser le résultat
        choixJoueurText = ''; // Réinitialiser le choix du joueur
    }, 2000); // Délai de 2 secondes pour voir le résultat avant de rejouer
}


var nouvellePartieBtn = document.getElementById('nouvelle-partie')
function nouvellePartie(){
    scoreJoueurValeur = 0;
    scoreRobotValeur = 0;
    scoreJoueur.innerHTML = scoreJoueurValeur;
    scoreRobot.innerHTML = scoreRobotValeur;
    choixOrdinateur.innerHTML = '';
    choixJoueur.innerHTML = '';
    resultat.innerHTML = '';

    mancheValeurJoueur = 0;
    mancheValeurRobot = 0;
    partieValeur = 0;

    manche.innerHTML = ''; 
    partie.innerHTML = ''; 
    arrayHistorique = []; // Réinitialiser l'historique
    contentHistorique.innerHTML = ''; // Effacer l'affichage
}

nouvellePartieBtn.addEventListener('click',nouvellePartie)



var manche = document.getElementById('manche');
var partie = document.getElementById('partie');
var mancheValeurJoueur = 0;
var mancheValeurRobot = 0
var partieValeur = 0;
var arrayHistorique = [];
var derniereManche = document.getElementById('reinitialiserDerniereManche');
let boutonHistorique = document.getElementById('toggleHistorique');
let contentHistorique = document.getElementById('content');
let historiqueDiv = document.getElementById('historique');

derniereManche.addEventListener('click', function reinitialiserDerniereManche() {
    if (arrayHistorique.length > 0) { // Vérifie s'il y a au moins une manche enregistrée
        arrayHistorique.pop(); //  Supprime la dernière manche de l'historique
        contentHistorique.innerHTML = arrayHistorique.join('<br> '); //  Met à jour l'affichage de l'historique
    }
    if (mancheValeurJoueur > 0) {
        mancheValeurJoueur--; // Réduit d'une manche si le joueur avait gagné
    } else if (mancheValeurRobot > 0) {
        mancheValeurRobot--; // Réduit d'une manche si le robot avait gagné
    }

    //  Réinitialiser uniquement la manche en cours (sans toucher aux manches précédentes)
    scoreJoueurValeur = 0;
    scoreRobotValeur = 0;
    scoreJoueur.innerHTML = scoreJoueurValeur;
    scoreRobot.innerHTML = scoreRobotValeur;

    //  Mettre à jour l'affichage de la manche en cours
    manche.innerHTML = `${joueur} : ${mancheValeurJoueur}, Robot : ${mancheValeurRobot}`;
})

function partieJouée() {
    if (scoreJoueurValeur === 5) {
        mancheValeurJoueur++; // Incrémente le nombre des manches
        manche.innerHTML = `${joueur} : ${mancheValeurJoueur}, Robot : ${mancheValeurRobot}`;
        let resultatJoueur = 1;
        let resultatRobot = 0;
        arrayHistorique.push(`${joueur} : ${resultatJoueur}, Robot : ${resultatRobot}`)
        contentHistorique.innerHTML  = arrayHistorique.join('<br> ')

        // Réinitialiser les scores après une manche
        scoreJoueurValeur = 0;
        scoreRobotValeur = 0;
        scoreJoueur.innerHTML = scoreJoueurValeur;
        scoreRobot.innerHTML = scoreRobotValeur;
    } else if (scoreRobotValeur === 5) {
        mancheValeurRobot++; // Incrémente le nombre des manches
        manche.innerHTML = `${joueur} : ${mancheValeurJoueur}, Robot : ${mancheValeurRobot}`;
        let resultatJoueur = 0;
        let resultatRobot = 1;
        arrayHistorique.push(`${joueur} : ${resultatJoueur}, Robot : ${resultatRobot}`)
        contentHistorique.innerHTML  = arrayHistorique.join('<br> ')

        // Réinitialiser les scores après une manche
        scoreJoueurValeur = 0;
        scoreRobotValeur = 0;
        scoreJoueur.innerHTML = scoreJoueurValeur;
        scoreRobot.innerHTML = scoreRobotValeur;
    }

    if (mancheValeurRobot === 5 ) {
        partieValeur++;
        partie.innerHTML = 'PERDU 😢';
        partie.classList.add('partie-perdue')
        
        setTimeout(nouvellePartie, 2000);
        
    }
    else if (mancheValeurJoueur === 5){
        partieValeur++;
        partie.innerHTML = 'GAGNÉ 🎉';
        partie.classList.add('partie-gagnee');

        setTimeout(nouvellePartie, 2000);
        
    }
}

boutonHistorique.addEventListener('click', () => {
    if (historiqueDiv.style.display === 'none' || historiqueDiv.style.display === '') {
        historiqueDiv.style.display = 'block';
        boutonHistorique.innerText = "Cacher l'historique"; 
    } else {
        historiqueDiv.style.display = 'none';
        boutonHistorique.innerText = "Afficher l'historique"; 
    }
});
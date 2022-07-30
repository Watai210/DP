/*Fonctions boutons*/

function exp(btnexp){
    document.getElementById('paragraphe').innerHTML = "<p>Transport Amour<strong>| Stagiaire Assistant Logistique |</strong> Avril 2022<br><span class='taches'><u>Tâches réalisées :</u></span><br>Gestion des stocks, contacter les cleints, établir un ittinéraire, vérification de la conformité des livraisons, chargement des commandes dans les véhicules</p><br><p>A.I.P.S.Q <strong>| Ouvrier Polyvalent |</strong> Septembre 2021 –  Mai 2022<br><span class='taches'>Tâches réalisées :</span><br>Prises de mesures, évaluer les réparations, décaper, racler, réalisation d'assemblages simples, réfection d'éléments en bois et métal, poncer, teinter, peindre , vernir, entretien et nettoyage des outils mis a disposition ainsi que des locaux</p><br><p>SOPROCOS <strong>| Assistant Logistique |</strong> 2013<br><span class='taches'><u>Tâches réalisées :</u></span><br>Gestion des stocks et des approvisionnements de matières premières, contacter les fournisseurs, communiquer avec les transporteurs, assurer le suivi des livraisons et des commandes. utilisation régulière du logiciel SAP</p>";
    const parabg = document.getElementById('paragraphe');
    parabg.setAttribute('class', 'expbg');
}
function comp(btncomp){
    document.getElementById('paragraphe').innerHTML = "<p>Languages de programmation : HTML5, CSS, JS, JSDOM, SQL, PHP<br>Création de maquettes pour site WEB<br>Mise en place d'un cahier des charges<br>Respect du cahier des charges<br>Assurer un suivi client<br>Maintenance de matériel informatique<br>Assistance aux utilisateurs<br>Support par prise en main a distance<br>Diagnostic et réparation de pannes<br>Recommandations liées au besoin du client<br>Mise à jour de logiciels<br>Nettoyage physique d'ordinateurs<br>Suppression de virus<br>Installation et configuration d'équipements réseau (routeur, modem, répéteurs)<br>Installation et configuration de postes de travail (OS, drivers, antivirus, logiciels de bureautique...)<br>Maintenance et réparations sur appareils mobiles et tablettes</p>"
    document.getElementById('paragraphe').setAttribute('class', 'compbg');
}
function forma(btnforma){
    const para = document.getElementById('paragraphe');
    para.setAttribute('class', 'formations');
    const paraforma = document.getElementsByClassName('formations');
    paraforma.innerHTML = ""
    document.getElementById('paragraphe').setAttribute('class', 'formabg');
}
function infos(btninfos){
    const para = document.getElementById('paragraphe');
    para.setAttribute('class', 'informations');
    const parainfos = document.getElementsByClassName('informations');
    parainfos.innerHTML = ""
    document.getElementById('paragraphe').setAttribute('class', 'infosbg');
}

/*Fonctions boutons*/
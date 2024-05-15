const url = require('url');

// URL initiale
const URL = "https://www.google.com&search=nodejs";

// Récupérer le protocole utilisé
const parsedURL = url.parse(URL);
const protocol = parsedURL.protocol;
console.log("Protocole utilisé :", protocol);

// Récupérer le nom d'hôte
const hostname = parsedURL.hostname;
console.log("Nom d'hôte :", hostname);

// Récupérer les paramètres de l’URL
const params = parsedURL.query;
console.log("Paramètres de l'URL :", params);

// Reformater l’URL en une nouvelle URL valide en modifiant le nom d'hôte par “www.laplateforme.io”
parsedURL.hostname = "www.laplateforme.io";

// Ajouter à cette nouvelle URL un paramètre
parsedURL.query = "lang=fr";

// Afficher dans le terminal la nouvelle URL
const newURL = url.format(parsedURL);
console.log("Nouvelle URL :", newURL);

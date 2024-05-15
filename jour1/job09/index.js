 const fs = require('fs');

// Chemin du fichier
const filePath = 'C:../../jour1/job06/data.txt';

// Contenu à écrire dans le fichier
const newContent = "Je manipule les fichiers avec un module node !";

// Écriture du nouveau contenu dans le fichier
fs.writeFile(filePath, newContent, 'utf-8', (err) => {});

console.log('Le contenu du fichier a été modifié avec succès.');

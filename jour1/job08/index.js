const fs = require('fs');

// Chemin du fichier
const filePath = 'C:../../jour1/job06/data.txt';

// Lecture du contenu du fichier de manière asynchrone
fs.readFile(filePath, 'utf-8', (err, data) => {
    // Affichage une lettre sur deux dans le terminal
    let result = '';
    for (let i = 0; i < data.length; i += 2) {
        result += data[i];
    }
    console.log("Affichage d'une lettre sur deux :", result);
});

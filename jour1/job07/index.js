const fs = require('fs');

// Chemin du fichier
const filePath = 'C:../../jour1/job06/data.txt';

// Lecture du contenu du fichier de manière asynchrone
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    // Affichage du contenu dans le terminal
    console.log(data);
});

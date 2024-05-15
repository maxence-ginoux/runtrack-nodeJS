const fs = require('fs');

// Chemin du fichier
const filePath = './data.txt';

// Lecture du contenu du fichier de manière synchrone
const content = fs.readFileSync(filePath, 'utf-8');

// Affichage du contenu dans le terminal
console.log('Contenu du fichier data.txt :');
console.log(content);

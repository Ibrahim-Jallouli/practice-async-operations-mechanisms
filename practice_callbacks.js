function divide(a, b, callback) {
    if (b === 0) {
        callback(new Error('Division par zéro'));
    } else {
        const result = a / b;
        callback(null, result);
    }
}

// Utilisation de la fonction divide
divide(10, 2, (err, result) => {
    if (err) {
        console.error('Erreur:', err.message);
    } else {
        console.log('Résultat:', result);
    }
});

divide(10, 0, (err, result) => {
    if (err) {
        console.error('Erreur:', err.message); 
    } else {
        console.log('Résultat:', result);
    }
});



// read from file

const fs = require('fs');

function readFileContent(filePath, callback) {
    if (fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    }));
}

readFileContent('file.txt', (err, data) => {
    if (err) {
        console.error('Erreur:', err.message);
    } else {
        console.log('Contenu du fichier:', data);
    }
});



// HTTP request
const https = require('https');

function makeHTTPRequest(url, callback) {
    https.get(url, (res) => {
        if (res.statusCode !== 200) {
            callback(new Error(`La requête a échoué avec le code d'état ${res.statusCode}`));
            return;
        }else{
            callback(null, res.statusCode);
        }
    })
}

makeHTTPRequest('https://www.youtube.com/', (err, data) => {
    if (err) {
        console.error('Erreur:', err.message);
    } else {
        console.log('Données:', data);
    }
});

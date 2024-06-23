const fs = require('fs').promises;
const http = require('http');


// Read file
function readFileContent(filePath){
    return fs.readFile(filePath, 'utf-8')
}

readFileContent('file.txt')
    .then((data) => {
        console.log('Contenu du fichier:', data);
    })
    .catch((err) => {
        console.error('Erreur:', err.message);
    });





// HTTP request
function makeHTTPRequest(url){
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            resolve(res);
        });
    });
}

makeHTTPRequest('http://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
        if (res.statusCode !== 200) {
            throw new Error(`La requête a échoué avec le code d'état ${res.statusCode}`);
        }
        console.log('Requête réussie', res.statusCode);
    })
    .catch((err) => {
        console.error('Erreur:', err.message);
    });
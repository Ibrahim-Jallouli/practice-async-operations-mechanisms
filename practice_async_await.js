const fs = require('fs').promises;

// Read file
/* note: 
The async keyword is used to define an asynchronous function in JavaScript.
When you mark a function with async, it allows you to use the await keyword inside that function.*/

async function readFileContent(filePath){
    try { 
        return await fs.readFile(filePath, 'utf-8');
    }
    catch (err) {
        console.error('Erreur:', err.message);
    }  
}


 readFileContent('file.txt')
    .then((data) => {
         console.log('Contenu du fichier:', data);
    })
    .catch((err) => {
         console.error('Erreur:', err.message);
    });




// HTTP request
const http = require('http');

async function makeHTTPRequest(url){
    try{
        return await new Promise((resolve, reject) => {
            http.get(url, (res) => {
                resolve(res);
            });
        });
    }
    catch (err) {
        console.error('Erreur:', err.message);
    }
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
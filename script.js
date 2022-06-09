"use strict"

// async function fetchObject(url, payload) { //this returns a javascript object
//     const method = "GET" //Some service will want a POST 
//     const headers = { 'Accept': 'text/html', 'Content-Type': 'application/json' }
//     const response = await fetch(url, { method: method, body: JSON.stringify(payload), headers: headers })
//     //const response = await fetch(url, {method:method,headers:{'Accept':'text/html','Content-Type':'application/json'}})
//     if (response.ok) {
//         return await response.json()
//     }
//     else {
//         console.log(`unexpected response status ${response.status} + ${response.statusText}`)
//     }
// }

const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p')

button.addEventListener('click', function(){
    getJoke();
});

async function getJoke(){

    const jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
}

getJoke()
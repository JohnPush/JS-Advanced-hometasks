'use strict';


function getData(url, errorMessage, method = 'GET') {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`${errorMessage} ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const { abilities } = data;
            const abilityUrl = abilities[0].ability.url;
            console.log(abilities);
            console.log(abilityUrl);

            return fetch(abilityUrl, { method: 'GET' });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Can not get ability data ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const description = data.effect_entries[1].effect;
            console.log(data);
            console.log(description);
            resolve(data);
        })
        .catch(error => {
            console.error('Error:', error.message);
            reject(error);
        });
    });
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Can not get Pokemon data')

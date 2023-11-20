'use strict';


function getData(url, errorMessage, method = 'GET') {
    return fetch(url, {
        method,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`${errorMessage} ${response.status}`);
        }
        return response.json();
    });
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Can not get Pokemon data')
    .then(data => {
        const { abilities } = data;
        const abilityUrl = abilities[0].ability.url;
        console.log(abilities);
        console.log(abilityUrl);
        return getData(abilityUrl, 'Can not get ability data');
    })
    .then(data => {
        const description = data.effect_entries[1].effect;
        console.log(data);
        console.log(description);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

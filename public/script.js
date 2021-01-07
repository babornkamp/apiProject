// ESTABLISH BASEURL, KEYS, AND CONST VARIABLES -----------------------------------------------------------------
const baseURL = 'https://api.covidtracking.com'; 

const searchAbbreviations = document.querySelector('.abbreviations');
const searchDeaths = document.querySelector('.deaths');
const searchConfirmedDeaths = document.querySelector('.confirmed-deaths');
const searchHospitalized = document.querySelector('.hospitalized');
const searchNegative = document.querySelector('.negative');
const searchPositive = document.querySelector('.positive');
const searchTotal = document.querySelector('.total');
const searchLastUpdate = document.querySelector('.last-update');

const displayArea_Abbreviations = document.querySelector('.display-abbreviations');
const displayArea_Deaths = document.querySelector('.display-deaths');
const displayArea_ConfirmedDeaths = document.querySelector('.display-confirmed-deaths');
const displayArea_Hospitalized = document.querySelector('.display-hospitalized');
const displayArea_Negative = document.querySelector('.display-negative');
const displayArea_Positive = document.querySelector('.display-positive');
const displayArea_Total= document.querySelector('.display-total');
const displayArea_LastUpdate= document.querySelector('.display-last-update');

// ABBREVIATIONS --------------------------------------------------------------------------------------------------
searchAbbreviations.addEventListener('click', fetchAbbreviations); 

function fetchAbbreviations(event) {
    console.log(event);
    event.preventDefault(); 

    fetch(`${baseURL}/v1/states/current.json`) 
        .then(responseObj => responseObj.json()) // .then(function(responseObj)) 
        .then(jsonData => displayAbbreviations(jsonData));
}

function displayAbbreviations(json) {
    console.log('Results:', json);

    json.forEach(state => {
        console.log(state);
        let item = document.createElement('li');
        item.innerText = state.state;

        if (state.state === null) {
            let nullValue = document.createElement('li');
            nullValue.innerText = '--';
            displayArea_Abbreviations.append(nullValue);
        } else {
            displayArea_Abbreviations.appendChild(item);
        }

        displayArea_Abbreviations.appendChild(item);
    })
}

// DEATHS --------------------------------------------------------------------------------------------------------
searchDeaths.addEventListener('click', fetchDeaths); 

function fetchDeaths(event) {
    console.log(event);
    event.preventDefault(); 

    fetch(`${baseURL}/v1/states/current.json`) 
        .then(responseObj => responseObj.json()) // .then(function(responseObj)) 
        .then(jsonData => displayDeaths(jsonData));
}

function displayDeaths(json) {
    console.log('Results:', json);

    json.forEach(state => {
        console.log(state);
        let item = document.createElement('li');
        item.innerText = state.death;

        if (state.death === null) {
            let nullValue = document.createElement('li');
            nullValue.innerText = '--';
            displayArea_Deaths.append(nullValue);
        } else {
            displayArea_Deaths.appendChild(item);
        }

        displayArea_Deaths.appendChild(item);
    })
}

// CONFIRMED DEATHS --------------------------------------------------------------------------------------------------------
searchConfirmedDeaths.addEventListener('click', fetchConfirmedDeaths); 

function fetchConfirmedDeaths(event) {
    console.log(event);
    event.preventDefault(); 

    fetch(`${baseURL}/v1/states/current.json`) 
        .then(responseObj => responseObj.json()) // .then(function(responseObj)) 
        .then(jsonData => displayConfirmedDeaths(jsonData));
}

function displayConfirmedDeaths(json) {
    console.log('Results:', json);

    json.forEach(state => {
        console.log(state);
        let item = document.createElement('li');
        item.innerText = state.deathConfirmed;

        if (state.deathConfirmed === null) {
            let nullValue = document.createElement('li');
            nullValue.innerText = '--';
            displayArea_ConfirmedDeaths.append(nullValue);
        } else {
            displayArea_ConfirmedDeaths.appendChild(item);
        }

    })
}

// HOSPITALIZED --------------------------------------------------------------------------------------------------------
searchHospitalized.addEventListener('click', fetchHospitalized); 

function fetchHospitalized(event) {
    console.log(event);
    event.preventDefault(); 

    fetch(`${baseURL}/v1/states/current.json`) 
        .then(responseObj => responseObj.json()) // .then(function(responseObj)) 
        .then(jsonData => displayHospitalized(jsonData));
}

function displayHospitalized(json) {
    console.log('Results:', json);

    json.forEach(state => {
        console.log(state);
        let item = document.createElement('li');
        item.innerText = state.hospitalized;

        if (state.hospitalized === null) {
            let nullValue = document.createElement('li');
            nullValue.innerText = '--';
            displayArea_Hospitalized.append(nullValue);
        } else {
            displayArea_Hospitalized.appendChild(item);
        }

    })
}

// NEGATIVE --------------------------------------------------------------------------------------------------------
searchNegative.addEventListener('click', fetchNegative); 

function fetchNegative(event) {
    console.log(event);
    event.preventDefault(); 

    fetch(`${baseURL}/v1/states/current.json`) 
        .then(responseObj => responseObj.json()) // .then(function(responseObj)) 
        .then(jsonData => displayNegative(jsonData));
}

function displayNegative(json) {
    console.log('Results:', json);

    json.forEach(state => {
        console.log(state);
        let item = document.createElement('li');
        item.innerText = state.negative;

        if (state.negative === null) {
            let nullValue = document.createElement('li');
            nullValue.innerText = '--';
            displayArea_Negative.append(nullValue);
        } else {
            displayArea_Negative.appendChild(item);
        }

    })
}

// POSITIVE --------------------------------------------------------------------------------------------------------
searchPositive.addEventListener('click', fetchPositive); 

function fetchPositive(event) {
    console.log(event);
    event.preventDefault(); 

    fetch(`${baseURL}/v1/states/current.json`) 
        .then(responseObj => responseObj.json()) // .then(function(responseObj)) 
        .then(jsonData => displayPositive(jsonData));
}

function displayPositive(json) {
    console.log('Results:', json);

    json.forEach(state => {
        console.log(state);
        let item = document.createElement('li');
        item.innerText = state.positive;

        if (state.positive === null) {
            let nullValue = document.createElement('li');
            nullValue.innerText = '--';
            displayArea_Positive.append(nullValue);
        } else {
            displayArea_Positive.appendChild(item);
        }

    })
}

// TOTAL --------------------------------------------------------------------------------------------------------
searchTotal.addEventListener('click', fetchTotal); 

function fetchTotal(event) {
    console.log(event);
    event.preventDefault(); 

    fetch(`${baseURL}/v1/states/current.json`) 
        .then(responseObj => responseObj.json()) // .then(function(responseObj)) 
        .then(jsonData => displayTotal(jsonData));
}

function displayTotal(json) {
    console.log('Results:', json);

    json.forEach(state => {
        console.log(state);
        let item = document.createElement('li');
        item.innerText = state.total;

        if (state.total === null) {
            let nullValue = document.createElement('li');
            nullValue.innerText = '--';
            displayArea_Total.append(nullValue);
        } else {
            displayArea_Total.appendChild(item);
        }

    })
}

// LAST UPDATE --------------------------------------------------------------------------------------------------------
searchLastUpdate.addEventListener('click', fetchLastUpdate); 

function fetchLastUpdate(event) {
    console.log(event);
    event.preventDefault(); 

    fetch(`${baseURL}/v1/states/current.json`) 
        .then(responseObj => responseObj.json()) // .then(function(responseObj)) 
        .then(jsonData => displayLastUpdate(jsonData));
}

function displayLastUpdate(json) {
    console.log('Results:', json);

    json.forEach(state => {
        console.log(state);
        let item = document.createElement('li');
        item.innerText = state.lastUpdateEt;

        if (state.lastUpdateEt === null) {
            let nullValue = document.createElement('li');
            nullValue.innerText = '--';
            displayArea_LastUpdate.append(nullValue);
        } else {
            displayArea_LastUpdate.appendChild(item);
        }

    })
}








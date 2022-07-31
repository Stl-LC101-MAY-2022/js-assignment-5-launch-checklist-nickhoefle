require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetInsert = document.getElementById("missionTarget");
    missionTargetInsert.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {
    if (testInput === "") {
        return testInput = "Empty";
    }
    if (isNaN(Number(testInput)) === false) {
        return testInput = "Is a Number";
    }
    if (isNaN(Number(testInput)) === true) {
        return testInput = "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let crewReady = false;
    let validShuttleInput = false;

    if (validateInput(pilot) === "Empty") {
        alert('Pilot name required!');
        event.preventDefault();
    }   
    
    if (validateInput(pilot) === "Is a Number") {
        alert('Pilot name cannot be a number!');
        event.preventDefault();
    }  
    

    if (validateInput(copilot) === "Empty") {
        alert('Co-pilot name required!');
        event.preventDefault();
    }   
    
    if (validateInput(copilot) === "Is a Number") {
        alert('Co-pilot name cannot be a number!');
        event.preventDefault();
    }   

    if (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty" && validateInput(pilot) !== "Is a Number" && validateInput(copilot) !== "Is a Number") {
        crewReady = true;
        event.preventDefault();
    }

    if (validateInput(fuelLevel) === "Empty") {
        alert('Fuel level input is required!');
        event.preventDefault();
    }

    if (validateInput(cargoLevel) === "Empty") {
        alert('Cargo mass input is required!');
        event.preventDefault();
    }

    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert('Make sure to enter valid information for each field!');
        event.preventDefault();
    }

    if (validateInput(fuelLevel) === "Is a Number" && validateInput(cargoLevel) === "Is a Number" && validateInput(fuelLevel) !== "Empty" && validateInput(cargoLevel) !== "Empty") {
        validShuttleInput = true;
        event.preventDefault();
    }

    if (fuelLevel < 10000 && cargoLevel < 10000 && crewReady === true && validShuttleInput === true) {
        list.style.visibility = 'visible';
        let status = document.getElementById("launchStatus");
        status.innerHTML = 'Shuttle Not Ready for Launch';
        status.style.color = "rgb(199, 37, 78)";
        list.innerHTML = `
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
        </ol>`
        event.preventDefault();
    }
    
    if (fuelLevel < 10000 && cargoLevel > 10000 && crewReady === true && validShuttleInput === true) {
        list.style.visibility = 'visible';
        let status = document.getElementById("launchStatus");
        status.innerHTML = 'Shuttle Not Ready for Launch';
        status.style.color = "rgb(199, 37, 78)";
        list.innerHTML = `
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
        </ol>`
        event.preventDefault();
    }

    if (fuelLevel >= 10000 && cargoLevel > 10000 && crewReady === true && validShuttleInput === true) {
        list.style.visibility = 'visible';
        let status = document.getElementById("launchStatus");
        status.innerHTML = 'Shuttle Not Ready for Launch';
        status.style.color = "rgb(199, 37, 78)";
        list.innerHTML = `
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
        </ol>`
        event.preventDefault();
    }

    if (fuelLevel >= 10000 && cargoLevel < 10000 && crewReady === true && validShuttleInput === true) {
        list.style.visibility = 'visible';
        let status = document.getElementById("launchStatus");
        status.innerHTML = 'Shuttle is Ready for Launch'
        status.style.color = "rgb(65, 159, 106)";
        list.innerHTML = `
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
        </ol>`
        event.preventDefault();
    }
};

async function myFetch() {
    return await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (result) {
        return result.json();
    })
};

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    return randomIndex;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

// Write your helper functions here!
require('isomorphic-fetch');

// let list = document.getElementById("faultyItems");

// console.log(list)






function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === ""){
        return testInput = "Empty";
    }
    if (isNaN(Number(testInput)) === false){
        return testInput = "Is a Number"
    }
    if (isNaN(Number(testInput)) === true){
        return testInput = "Not a Number"
    }
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) !== "Empty"){
        list.innerHTML = `
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} ready to go.</li>
        </ol>`
        event.preventDefault();
    } else { 
        alert('Pilot Name required!')
        event.preventDefault();
    }  
    
    if (validateInput(copilot) !== "Empty"){
        list.innerHTML = `
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
        </ol>`
        event.preventDefault();
    } else { 
        alert('Co-Pilot Name required!')
        event.preventDefault();
    }  

    if (fuelLevel < 10000 && cargoLevel < 10000 && (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty")){
        list.style.visibility = 'visible';
        let status = document.getElementById("launchStatus");
        status.innerHTML = 'Shuttle not ready for launch'
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
    
    if (fuelLevel < 10000 && cargoLevel > 10000 && (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty")){
        list.style.visibility = 'visible';
        let status = document.getElementById("launchStatus");
        status.innerHTML = 'Shuttle not ready for launch'
        status.style.color = "rgb(199, 37, 78)";
        list.innerHTML = `
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
        </ol>`
        
        event.preventDefault();
    }

    if (fuelLevel > 10000 && cargoLevel > 10000 && (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty")){
        list.style.visibility = 'visible';
        let status = document.getElementById("launchStatus");
        status.innerHTML = 'Shuttle not ready for launch'
        status.style.color = "rgb(199, 37, 78)";
        list.innerHTML = `
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
        </ol>`
        event.preventDefault();
    }

    if (fuelLevel > 10000 && cargoLevel < 10000 && (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty")){
        list.style.visibility = 'visible';
        let status = document.getElementById("launchStatus");
        status.innerHTML = 'Shuttle is ready to launch'
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
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

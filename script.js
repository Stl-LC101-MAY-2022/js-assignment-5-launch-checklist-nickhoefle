window.addEventListener("load", function() {
    let submitClicked = this.document.getElementById("formSubmit");
    submitClicked.addEventListener("click", () => {
    let list = document.getElementById("faultyItems");
    let pilot = document.querySelector("input[name=pilotName").value.trim();
    let copilot = document.querySelector("input[name=copilotName").value.trim();
    let fuelLevel = document.querySelector("input[name=fuelLevel").value.trim();
    let cargoLevel = document.querySelector("input[name=cargoMass").value.trim();  
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);
            let planet = pickPlanet(listedPlanets)
            randomPlanet = listedPlanets[planet]
            let name = randomPlanet.name;
            let diameter = randomPlanet.diameter;
            let star = randomPlanet.star;
            let distance = randomPlanet.distance;
            let moons = randomPlanet.moons;
            let imageUrl = randomPlanet.image;
            addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
            })
        })
    })

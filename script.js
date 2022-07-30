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
            listedPlanets = listedPlanets.json().then(function (json) {
            listedPlanets = json;
            let planet = pickPlanet(listedPlanets)
            planet = listedPlanets[planet]
            let name = planet.name;
            let diameter = planet.diameter;
            let star = planet.star;
            let distance = planet.distance;
            let moons = planet.moons;
            let imageUrl = planet.image;
            addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
            })
        })
    })
});
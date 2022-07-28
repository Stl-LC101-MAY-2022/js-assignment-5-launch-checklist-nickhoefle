// Write your JavaScript code here!





window.addEventListener("load", function() {
    let submitClicked = this.document.getElementById("formSubmit")
    submitClicked.addEventListener("click", () => {
    let list = document.getElementById("faultyItems")
    let pilot = document.querySelector("input[name=pilotName").value.trim();
    let copilot = document.querySelector("input[name=copilotName").value.trim()
    let fuelLevel = document.querySelector("input[name=fuelLevel").value.trim();
    let cargoLevel = document.querySelector("input[name=cargoMass").value.trim();  
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    

    })


    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
    
});
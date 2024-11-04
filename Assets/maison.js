let pilotage = document.getElementById("pilotage")
let gestion = document.getElementById("gestion")
let securite = document.getElementById("securite")
let maison = document.getElementById("maison")


let showPilotage = document.getElementById("showPilotage")
let showGestion = document.getElementById("showGestion")
let showSecurite = document.getElementById("showSecurite")
let showMaison = document.getElementById("showMaison")

showPilotage.addEventListener("click", () => {
    if(pilotage.classList.contains("hidden")){
        pilotage.classList.remove("hidden");
        gestion.classList.add("hidden");
        securite.classList.add("hidden");
        maison.classList.add("hidden");
    }else{
        pilotage.classList.add("hidden");
    }
})

showGestion.addEventListener("click", () => {
    if(gestion.classList.contains("hidden")){
        gestion.classList.remove("hidden");
        pilotage.classList.add("hidden");
        securite.classList.add("hidden");
        maison.classList.add("hidden");
        
    }else{
        gestion.classList.add("hidden");
    }
})

showSecurite.addEventListener("click", () => {
    if(securite.classList.contains("hidden")){
        securite.classList.remove("hidden");
        pilotage.classList.add("hidden");
        gestion.classList.add("hidden");
        maison.classList.add("hidden");
    }else{
        securite.classList.add("hidden");
    }
})

showMaison.addEventListener("click", () => {
    if(maison.classList.contains("hidden")){
        maison.classList.remove("hidden");
        pilotage.classList.add("hidden");
        gestion.classList.add("hidden");
        securite.classList.add("hidden");
    }else{
        maison.classList.add("hidden");
    }
})

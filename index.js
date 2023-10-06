const planetLinks = document.querySelectorAll(".planets");
const planetName = document.querySelector(".planet-name");
const planetDescription = document.querySelector(".planet-description");
const planetImg = document.querySelector(".planet-img");
const rotation = document.querySelector(".rotation");
const revolution = document.querySelector(".revolution")
const radius = document.querySelector(".radius");
const temp = document.querySelector(".temp")
const contentLinks = document.querySelectorAll(".content-links");
const hamburgerIcon = document.querySelector(".hamburger-icon")
const navigation = document.querySelector(".mobile-navigation")
let currentContent = 'overview';
let previousContent = '';
let currentIndex = 2;


import { planetData } from "./planetData.js"
import { currentPlanet } from "./planetData.js";
import { previousPlanet } from "./planetData.js";

hamburgerIcon.addEventListener("click", () => {
    navigation.style.display = "flex"
})

planetLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigation.style.display = "none"; // Hide the mobile navigation menu
        console.log("Mobile menu closed");
    });
});

console.log(previousPlanet)


function changePlanet(planet, index){
    if(planet === currentPlanet.name) return null
    previousPlanet.name = currentPlanet.name
    currentPlanet.name = planet
    currentIndex = index
   
    resetActiveLink()
    
    planetName.textContent = planetData[index].name;
    planetDescription.textContent = planetData[index].overview.content;
    planetImg.src = planetData[index].images.planet;
    rotation.textContent = planetData[index].rotation
    revolution.textContent = planetData[index].revolution
    radius.textContent = planetData[index].radius
    temp.textContent = planetData[index].temperature

    contentLinks.forEach(link => {
        link.classList.remove(previousPlanet.planetName)
        link.classList.add(currentPlanet.planetName)
    })


}

planetLinks.forEach(planet => {
    planet.addEventListener("click", () => {
        changePlanet(planet.classList[1], planet.classList[2])
    })
})



function switchContent(content){
     currentContent = content;
     previousContent = currentContent
     
    contentLinks.forEach(link => {
        
        switch(content){
            case 'overview':
                if(link.classList.contains("overview")){
                    link.classList.add("active")
                    planetImg.src = planetData[currentIndex].images.planet
                    planetDescription.textContent = planetData[currentIndex].overview.content
                } else{link.classList.remove("active")}
                break;
            case 'structure':
                if(link.classList.contains("structure")){
                    link.classList.add("active")
                    planetImg.src = planetData[currentIndex].images.internal;
                    planetDescription.textContent = planetData[currentIndex].structure.content
                    console.log(planetData[currentIndex].images.internal)
                } else{link.classList.remove("active")}
                break;
            case 'geology':
                if(link.classList.contains("geology")){
                    link.classList.add("active")
                    planetImg.src = planetData[currentIndex].images.geology
                    planetDescription.textContent = planetData[currentIndex].geology.content
                }else{link.classList.remove("active")}
                break

                
        }

        

    })
    
}



contentLinks.forEach(link => {
    link.addEventListener("click",() => {switchContent(link.classList[1])})
})

function resetActiveLink(){
    contentLinks.forEach(link => {
        if(link.classList.contains("overview")){
            link.classList.add("active")
        } else {link.classList.remove("active")}
    })
}

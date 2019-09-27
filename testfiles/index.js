let wateringCan = document.querySelector("#watering-can")
let number = document.querySelector("#number")
let plant = document.querySelector("#plant")

document.addEventListener("click", (event) => {
  if (event.target.id === "watering-can") {
    number.innerText++
    if (number.innerText === "5") {
      plant.src = "../plant-growth/plant-B.png"
    }
    if (number.innerText === "10") {
      plant.src = "../plant-growth/plant-C.png"
    }
    if (number.innerText === "15") {
      plant.src = "../plant-growth/plant-D.png"
    }
    if (number.innerText === "20") {
      plant.src = "../plant-growth/plant-E.png"
    }
  }
})

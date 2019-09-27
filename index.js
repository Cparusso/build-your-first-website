console.log("hello world!")

let x = 0


let picOfWateringCan = document.querySelector("#watering-can")
let num = document.querySelector("#number")
let plant = document.querySelector("#plant")

document.addEventListener("click", (event) => {

  if (event.target.id === "watering-can") {
    num.innerText = parseInt(num.innerText) + 1

    if (parseInt(num.innerText) === 5) {
      plant.src = "./plant-growth/plant-B.png"
    }
    if (parseInt(num.innerText) === 10) {
      plant.src = "./plant-growth/plant-C.png"
    }
    if (parseInt(num.innerText) === 15) {
      plant.src = "./plant-growth/plant-D.png"
    }
    if (parseInt(num.innerText) === 20) {
      plant.src = "./plant-growth/plant-E.png"
    }
  }
})

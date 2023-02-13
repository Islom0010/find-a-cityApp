const city = document.getElementById("city");
const image = document.getElementById("card-image");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const step1 = document.getElementById("1");
const firstCity = document.getElementById("first-city");
const secondCity = document.getElementById("second-city");
const thirdCity = document.getElementById("third-city");
const fourthCity = document.getElementById("fourth-city");

const changeImg = () => {
    city.classList.remove("d-none");
    image.src = "./assets/imgs/paris.jpg";
    first.classList += " active";
    step1.classList.remove("bg-dark");
    step1.classList += " bg-success";
    firstCity.innerHTML = "Praga";
    secondCity.innerHTML = "Riga";
    thirdCity.innerHTML = "London";
    fourthCity.innerHTML = "Paris";
};

const getValue = (e) => {
    console.log(e.target.id)
}
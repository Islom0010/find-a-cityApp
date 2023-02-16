const level = document.getElementById("level");
const city = document.getElementById("city");
const image = document.getElementById("card-image");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const step1 = document.getElementById("1");
const step2 = document.getElementById("2");
const step3 = document.getElementById("3");
const step4 = document.getElementById("4");
const step5 = document.getElementById("5");
const step6 = document.getElementById("6");
const firstCity = document.getElementById("first-city");
const secondCity = document.getElementById("second-city");
const thirdCity = document.getElementById("third-city");
const fourthCity = document.getElementById("fourth-city");

let randomNum;
let img = 0;

const getRandomNum = () => {
    randomNum = Math.ceil(Math.random() * 4);
};


const cityName = () => {
    getRandomNum();
    firstCity.innerHTML = `${firstLevel[img].city}`;
    secondCity.innerHTML = `${firstLevel[randomNum + 1].city}`;
    thirdCity.innerHTML = `${firstLevel[randomNum].city}`;
    fourthCity.innerHTML = `${firstLevel[randomNum - 1].city}`;
};



const steps = [step1, step2, step3, step4, step5, step6];

const step = () => {
    steps[img - 1].classList.remove("bg-dark");
    steps[img - 1].classList += " bg-success";
};

const close = () => {
    level.classList += " animate__backOutUp";
    setTimeout(() => {
        level.classList += " d-none";
    }, 1000);
};

const setFirstLevel = () => {
    close();
    image.src = `./assets/imgs-1/${firstLevel[img].city.toLowerCase()}.jpg`;
    setTimeout(() => {
        city.classList.remove("d-none");
    }, 100);
    first.classList += " active";
    cityName();
    step();
};

let firstLevel = [{
        city: "Paris",
        id: 1,
    },
    {
        city: "Tokyo",
        id: 2,
    },
    {
        city: "Stockholm",
        id: 3,
    },
    {
        city: "Moskow",
        id: 4,
    },
    {
        city: "Tashkent",
        id: 5,
    },
    {
        city: "Riga",
        id: 6,
    },
];

const cities = [firstCity, secondCity, thirdCity, fourthCity];

// Clean
const clean = () => {
    for (let i = 0; i < cities.length; i++) {
        cities[i].classList.remove('btn-outline-warning', "btn-outline-success")
        cities[i].classList += " btn-outline-primary";
    }
}


// Checking the answer

const check = () => {
    if (event.target.innerHTML == firstLevel[img].city) {
        event.target.classList.remove("btn-outline-primary");
        event.target.classList += " btn-outline-success";
        img++;
        setTimeout(() => {
            clean()
            step();
        }, 2000);
        setTimeout(() => {
            image.src = `./assets/imgs-1/${firstLevel[img].city.toLowerCase()}.jpg`;
            cityName();
            getRandomNum();
        }, 3000);

    } else if (event.target.innerHTML !== firstLevel[img].city) {
        event.target.classList.remove("btn-outline-primary");
        event.target.classList += " btn-outline-warning";
        setTimeout(() => {
            clean()
        }, 1000);
    }
};

const getValue = () => {
    check()
};
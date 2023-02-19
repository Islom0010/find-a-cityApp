const level = document.getElementById('level');
const stepsBar = document.getElementById('steps');
const city = document.getElementById('city');
const image = document.getElementById('card-image');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const step1 = document.getElementById('1');
const step2 = document.getElementById('2');
const step3 = document.getElementById('3');
const step4 = document.getElementById('4');
const step5 = document.getElementById('5');
const step6 = document.getElementById('6');
const firstCity = document.getElementById('first-city');
const secondCity = document.getElementById('second-city');
const thirdCity = document.getElementById('third-city');
const fourthCity = document.getElementById('fourth-city');

let step = 0;

const LevelCities = {

    firstLevelCities: [
        'Paris',
        'Tokyo',
        'Stockholm',
        'Moskow',
        'Tashkent',
        'Riga',
    ],
    secondLevelCities: [
        'Barcelona',
        'Istambul',
        'Samarkand',
        'Saint-Peterburg',
        'Franfurt',
        'Los-Angeles',
    ],
    thirdLevelCities: [
        'Manchester',
        'Bukhara',
        'Sigulda',
        'Selicon-Valey',
        'Mumbai',
        'Marrakesh',
    ],
}

const singleSelect = [firstCity, secondCity, thirdCity, fourthCity];
const steps = [step1, step2, step3, step4, step5, step6];

const state = {
    level: ``,
    img: './assets/imgs-1/paris.jpg',
    select: [],
    score: [],
};


const setFirstLevel = () => {
    level.classList += ' animate__backOutUp'
    setInterval(() => {
        level.classList += ' d-none'
        stepsBar.classList.remove('d-none')
        stepsBar.classList += ' d-flex animate__fadeInDown'
        first.classList += ' bg-success'

    }, 1000);

    setTimeout(() => {
        city.classList.remove("d-none");
    }, 200);
};

const render = () => {
    singleSelect.forEach((city) => {
        city.classList.remove('btn-outline-danger', 'btn-outline-success');
        city.classList += ' btn-outline-primary';
    });
    image.src = state.img;
    state.select.forEach((cityName, index) => {
        singleSelect[index].innerHTML = cityName;
    });
    steps.forEach((step, index) => {
        if (state.score[index] === true) {
            step.classList.remove('bg-dark');
            step.classList += ' bg-success';
        }
        if (state.score[index] === false) {
            step.classList.remove('bg-dark');
            step.classList += ' bg-danger';
        }
    });
};

const getRandomCities = (displayedCity) => {
    const randomCities = [];
    while (randomCities.length < 4) {
        const randomNum = Math.ceil(Math.random() * 4);
        if (!randomCities.includes(LevelCities.firstLevelCities[randomNum])) {
            randomCities.push(LevelCities.firstLevelCities[randomNum]);
        }
    }
    if (!randomCities.includes(displayedCity)) {
        randomCities[Math.floor(Math.random() * 4)] = displayedCity;
    }
    return randomCities;
};

state.select = getRandomCities(LevelCities.firstLevelCities[step]);

render();

const updateState = () => {
    // If step is less than 6, then render next step
    if (step < LevelCities.firstLevelCities.length) {
        // Render next step
        state.img = `./assets/imgs-1/${LevelCities.firstLevelCities[step].toLowerCase() }.jpg`;
        state.select = getRandomCities(LevelCities.firstLevelCities[step]);
        render();
    }
};

const clean = () => {
    const cities = [firstCity, secondCity, thirdCity, fourthCity];
    for (let i = 0; i < cities.length; i++) {
        cities[i].classList.remove('btn-outline-danger', "btn-outline-success")
        cities[i].classList += " btn-outline-primary";
    }
    image.classList.remove('animate__backOutRight', 'animate__wobble')
}

const getValue = () => {
    const selectedCityName = event.target.innerHTML;
    if (selectedCityName === LevelCities.firstLevelCities[step]) {
        // Top score set for true on this step
        state.score.push(true);
        event.target.classList.remove('btn-outline-primary');
        event.target.classList += ' btn-outline-success';
        setTimeout(() => {
            image.classList += ' animate__backOutRight'
            step++;
        }, 1000);
        setTimeout(() => {
            clean()
            image.classList += ' animate__backInLeft'
            updateState();
        }, 2500);

    } else {
        // Top score set for false on this step
        state.score.push(false);
        // Change button color to red
        event.target.classList.remove('btn-outline-primary');
        event.target.classList += ' btn-outline-danger';
        image.classList += ' animate__wobble'
        setTimeout(() => {
            clean()
        }, 3000);

    }
};
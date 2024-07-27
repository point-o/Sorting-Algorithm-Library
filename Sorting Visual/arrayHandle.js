const arrayContainer = document.getElementById('array-container');
let array = [];
let previousArray = [];

function genArray() {
    array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    createBars(array);
}

function createBars(array) {
    arrayContainer.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.style.height = `${value}px`;
        bar.style.width = '10px';
        bar.classList.add('bar');
        arrayContainer.appendChild(bar);
    });
}

function updateBars() {
    if (arraysAreDifferent(array, previousArray)) {
        createBars(array);
        previousArray = [...array];
    }
}

function arraysAreDifferent(arr1, arr2) {
    if (arr1.length !== arr2.length) return true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return true;
    }
    return false;
}

// Function to continuously check and update bars
function startUpdating() {
    setInterval(updateBars, 1); // 100 milliseconds = 0.1 seconds
}

// Initial randomization and visualization
genArray();
previousArray = [...array];
startUpdating();

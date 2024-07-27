// check if sorted (never lol)
function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function bogoSort(array) {
    logMessage('Bogo Sort Started')
    while (!isSorted(array)) {
        shuffle(array);
        await delay(0.001); // Small delay
    }
    logMessage('Bogo Sort Finished') //never
    return array;
}

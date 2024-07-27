function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function bubbleSort(array) {
    logMessage('Bubble Sort Started')
    let n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
            await delay(0.001); // Small delay
        }
        n--;
    } while (swapped);
    logMessage('Bubble Sort Finished')
    return array;
}

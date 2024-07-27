function insertionSort(array) {
    logMessage('Insertion Sort Started')
    return new Promise(async (resolve) => {
        for (let i = 1; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;

            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
                await delay(0.001);
            }
            array[j + 1] = key;
            await delay(0.001);
        }
        logMessage('Insertion Sort Finished')
        resolve(array);
    });
}

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

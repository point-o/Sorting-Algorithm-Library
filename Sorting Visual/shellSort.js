function shellSort(array) {
    logMessage('Shell Sort Started')
    return new Promise(async (resolve) => {
        let gap = Math.floor(array.length / 2);

        while (gap > 0) {
            for (let i = gap; i < array.length; i++) {
                let key = array[i];
                let j = i;

                while (j >= gap && array[j - gap] > key) {
                    array[j] = array[j - gap];
                    j -= gap;
                    await delay(0.001); // Delay after each shift
                }
                array[j] = key;
                await delay(0.001); // Delay after each insertion
            }
            // Reduce the gap
            gap = Math.floor(gap / 2);
        }
        logMessage('Shell Sort Finished')
        resolve(array);
    });
}

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}


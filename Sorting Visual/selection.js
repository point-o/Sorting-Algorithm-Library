function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function selection(array) {
    logMessage('Selection Sort Started');
    let n = array.length;
    
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                await delay(0.001); // Parameterized delay
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    
    logMessage('Selection Sort Finished');
    return array;
}

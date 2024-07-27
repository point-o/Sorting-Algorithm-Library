// Delay function to pause execution for a given time
function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// Cocktail Shaker Sort function
function cocktail(array) {
    logMessage('Cocktail is being shaken');
    return new Promise(async (resolve) => {
        let isSorted = false;
        while (!isSorted) {
            isSorted = true;

            // Forward pass
            for (let i = 0; i < array.length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    [array[i], array[i + 1]] = [array[i + 1], array[i]];
                    isSorted = false;
                    await delay(0.001); // Adding delay to visualize the process
                }
            }

            if (isSorted) break;

            isSorted = true;

            // Backward pass
            for (let i = array.length - 1; i > 0; i--) {
                if (array[i] < array[i - 1]) {
                    [array[i], array[i - 1]] = [array[i - 1], array[i]];
                    isSorted = false;
                    await delay(0.001); // Adding delay to visualize the process
                }
            }
        }
        logMessage('Cocktail is Finished');
        resolve(array);
    });
}

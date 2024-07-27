function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// Gnome Sort function with delay
async function gnomeSort(array) {
    logMessage('Gnome is currently sorting')
    let index = 0;
    while (index < array.length) {
        if (index === 0 || array[index] >= array[index - 1]) {
            index++;
        } else {
            [array[index], array[index - 1]] = [array[index - 1], array[index]];
            index--;
        }
        await delay(0.001); // Small delay
    }
    logMessage('Gnome has finshed')
    return array;
}

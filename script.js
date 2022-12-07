function equalSides(array) {
    let sumArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumArray += array[i];
    }
    let sumLeft = 0;
    let sumRight = sumArray - array[0];
    if (sumLeft === sumRight) {
        return 0;
    }
    for (let i = 1; i < array.length; i++) {
        sumLeft = sumLeft + array[i - 1];
        sumRight = sumRight - array[i];
        if (sumLeft === sumRight) {
            return i;
        }
    }
    return -1;
}

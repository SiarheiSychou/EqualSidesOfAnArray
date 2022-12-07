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
        // let leftArrSum = 0;
        // let rightArrSum = 0;
        // leftArr = array.slice(0, i);
        // for (let j = 0; j < leftArr.length; j++) { 
        //     leftArrSum += leftArr[j];
        // }
        // rightArr = array.slice(i + 1, array.length);
        // for (let k = 0; k < rightArr.length; k++) { 
        //     rightArrSum += rightArr[k];
        // }
        // if (leftArrSum === rightArrSum) {
        //     return i;
        // }
//     }
//     return -1;
// }   

console.log(equalSides([1, 2, 3, 4, 3, 2, 1]))

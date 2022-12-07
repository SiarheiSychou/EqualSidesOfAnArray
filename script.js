function equalSides(array) { 
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < array.length; i++) { 
        let leftArrSum = 0;
        let rightArrSum = 0;
        leftArr = array.slice(0, i);
        for (let j = 0; j < leftArr.length; j++) { 
            leftArrSum += leftArr[j];
        }
        rightArr = array.slice(i + 1, array.length);
        for (let k = 0; k < rightArr.length; k++) { 
            rightArrSum += rightArr[k];
        }
        if (leftArrSum === rightArrSum) {
            return i;
        }
    }
    return -1;
}   

console.log(equalSides([1, 2, 3, 4, 3, 2, 1]))

const selectionSortAscending = (arr, value) => {
    let minIdx,
        temp,
        len = arr.length;
    for (let i = 0; i < len; i++) {
        minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j][value] < arr[minIdx][value]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
};

export default selectionSortAscending;

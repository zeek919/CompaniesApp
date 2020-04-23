const selectionSortAscending = (arrayToSort, value) => {
    let minIdx,
        temp,
        len = arrayToSort.length;
    for (let i = 0; i < len; i++) {
        minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arrayToSort[j][value] < arrayToSort[minIdx][value]) {
                minIdx = j;
            }
        }
        temp = arrayToSort[i];
        arrayToSort[i] = arrayToSort[minIdx];
        arrayToSort[minIdx] = temp;
    }
    return arrayToSort;
};

export default selectionSortAscending;

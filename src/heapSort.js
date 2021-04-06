/**
 * 堆排序  【结果：从小到大】  O(nlogn)
 * 
 */



let heapSize; //堆长度

//建堆
function buildMaxHeap(array) {
    heapSize = array.length;
    for (var i = Math.floor(heapSize / 2); i >= 0; i--) {
        heapify(array, i);
    }
}

 // 堆调整
function heapify(array, i) {
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && array[left] > array[largest]) {
        largest = left;
    }

    if (right < len && array[right] > array[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(array, i, largest);
        heapify(array, largest);
    }
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export default function(array) {
    buildMaxHeap(array);

    for (var i = array.length-1; i > 0; i--) {
        swap(array, 0, i);
        heapSize--;
        heapify(array, 0);
    }
    return array;
}



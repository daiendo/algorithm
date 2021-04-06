/**
 * 插入排序  【结果：从小到大】  O(n*n)
 */

export default function (array) {
    for (let i = 1; i < array.length; i++) {
        let tem = array[j];
        let i = j - 1
        while (i >= 0 && array[i] > tem) {
            array[j] = array[j-1];
            array[j-1] = tem
            i = i-1
        }
    }
}
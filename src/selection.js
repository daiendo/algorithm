/**选择排序  【结果：从小到大】   O(n*n)
 * 
 * 从数据中选择出最大元素，与数据末尾数据交换，
 * 末尾得到了最大值，则每次让外层循环减一
 * 
 * 
 * 优于冒泡，因为交换次数少很多
 */

export default function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        let maxIndex = 0
        for (let k = 1; k <= i; k++) {
            if (array[k] >= array[maxIndex]) { //等号的存在是为了尽可能实现稳定的算法 ,等于也算数据中最大，来移动maxIndex
                maxIndex = k
            }
        }
        let max = array[maxIndex];
        array[maxIndex] = array[i]
        array[i] = max;
    }
    return array;
}

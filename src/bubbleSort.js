//冒泡排序    【结果：从小到大】  O(n*n)
/**
 * 两两比较，左边大于右边就交换，每次得到最大值，移动到最右边。【冒泡到右边】，
 * 末尾得到了最大值，则每次让外层循环减一
 */
export default function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let k = 0; k < i; k++) {
            if (array[k] > array[k + 1]) {
                let temp = array[k + 1];
                array[k + 1] = array[k];
                array[k] = temp
            }
        }
    }
    return array;
}


//优化，
/**
 * 假设：数据尾部一些数据已经排好序了 如：[2,1,5,3,6,7,8,9]  
 * 
 */
function bubble(array) {
    for (let i = array.length - 1; i > 0; i--) {
        //初始化字面值1服务于数据完全有序的时候，进行i--时终止循环
        let sortchangeIndex = 1 //+++
        for (let k = 0; k < i; k++) {
            if (array[k] > array[k + 1]) {
                let temp = array[k + 1];
                array[k + 1] = array[k];
                array[k] = temp
                sortchangeIndex = k;//+++
            }
        }
        i = sortchangeIndex;//+++
    }
    return array;
}


//冒泡排序排序是稳定的，排序后相同的值前后位置不变
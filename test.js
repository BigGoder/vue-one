
function flatten(arr){
    let result = []
    for(let i = 0;i<arr.length ;i++){
        let v = arr[i]
        if(Array.isArray(v)){
            result = result.concat(flatten(v))
        }else{
            result.push(v)
        }
    }
    return result
}

function flattenReduce(arr){
    let result = arr.reduce((prev,next)=>{
        return prev.concat(Array.isArray(next)?flattenReduce(next):next)
    },[])
    return result
}


function norepeat(arr1,arr2){
    for (let index = 0; index < arr2.length; index++) {
        const element = arr2[index];
        if(!arr1.includes(element)) arr1.push(element)
    }
    return arr1
}

function norepeat1(arr1,arr2){
    let newSet = new Set([...arr1,...arr2])
    return Array.from(newSet)
}

function merge(arr1,arr2){
    let s = new Set(arr1.filter((e)=>{
        return arr2.includes(e)
    }))
    return Array.from(s)
}


function quickSort1(arr){
    if(arr.length <2) return arr
    let mid = arr[0]
    let left = []
    let right = []
    for(let i = 1;i<arr.length;i++){
        let v = arr[i]
        if(v <= mid) left.push(v)
        if(v > mid) right.push(v)
    }
    return quickSort1(left).concat([mid],quickSort1(right))
}


function quickSort2(arr,leftIndex,rightIndex){
    if(rightIndex -leftIndex <2) return
    let mid = leftIndex
    for(let i = mid;i<rightIndex;i++){
        let v = arr[i]
        if(v <= arr[mid]){
            swap(arr,leftIndex++,i)
            //[arr[leftIndex],arr[i]] = [arr[i],arr[leftIndex++]]
        }
    }
    swap(arr,mid,--leftIndex)
    //[arr[mid],arr[--leftIndex]] = [arr[leftIndex],arr[mid]]
    quickSort2(arr,mid,leftIndex)
    quickSort2(arr,leftIndex + 1,rightIndex)
}

function swap(a,l,r){
    let temp = a[l]
    a[l] = a[r]
    a[r] = temp
}
let arr = [3,5,4,2,1,6,8,3]
// quickSort2(arr,0,arr.length)
console.log(arr);



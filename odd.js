function odd(arr){
    var oddArr=[];
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            oddArr.push(arr[i]);
        }
    }
    return oddArr;

}
console.log(odd([5,6,7,8,9,11,10]));
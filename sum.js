function sum(arr){
    var sum=0;
    for(i=0;i<arr.length;i++)
    {
     sum=sum+arr[i];

    }
    return sum;

}
console.log(sum([1,2,3,4,5]));
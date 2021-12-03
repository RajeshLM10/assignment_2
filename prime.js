function prime(arr){
    
    var newArr=[];
    for(i=0;i<arr.length;i++)
    {
        var result=0;
       for(j=2;j<arr[i];j++)
         {
           if(arr[i]%j==0)
           {
           result=result+1;
           }
         }
       if(result==0)
         {
         newArr.push(arr[i]);
         }
    }
    return newArr;
    
}
console.log(prime([5,10,11,20,7,9]));
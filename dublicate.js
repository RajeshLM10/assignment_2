function duplicate(arr){
    
    var newArr=[];
    newArr.push(arr[0]);
     for(i=1;i<arr.length;i++)
     {
          var result=0;
         for(j=0;j<i;j++)
         {
             if(arr[i]==arr[j])
             {
                 result=result+1;
             }
         }
         if(result==0)
         newArr.push(arr[i]);
     }
   
    return newArr;

}
console.log(duplicate([1,1,12,15,26,12,15,38]));
function medOfArr(arr1,arr2){
  
    var merge=arr1.concat(arr2);
    merge.sort(function(a, b){return a-b});
    let m1=arr1.length-1;
    let m2=arr1.length;
    let median=(merge[m1]+merge[m2])/2;
   
    return median;

}
console.log(medOfArr([1,12,15,26,38],[2,13,17,30,45]));
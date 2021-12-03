function rotate(arr,k){
    if(k>0)
    {
    for(i=1;i<=k;i++)
    {
    var last=arr.shift();
    arr.push(last);
    }
    }
    return arr;

}
console.log(rotate([1,12,15,26,40,38],5));
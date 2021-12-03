function titleCaps(arr){
    var newArr=[];
    
    for(i=0;i<arr.length;i++)
    {
    let lc= arr[i].toLowerCase();
    var str=lc.charAt(0).toUpperCase()+lc.slice(1);
    newArr.push(str);
    }
    
    return newArr;

}
console.log(titleCaps(["hello","guVi","fullStack"]));
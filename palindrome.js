function palindrome(arr){
    var newArr=[];
    
    for(i=0;i<arr.length;i++)
    {
        var letter=arr[i].split("");
        var len=letter.length;
        var rev=[];
        
        for(j=len;j>=0;j--)
        {
            rev.push(letter[j]);

            
        }
        var reverse=rev.join("");
        if(reverse==arr[i])
        newArr.push(arr[i]);
    
    }
    
    return newArr;

}
console.log(palindrome(["hello","reviver","fullstack","madam"]));
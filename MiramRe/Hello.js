var names = ["Eric", "Steve", "Gertrude", "Brian", "Andrew", "Diana"];

for(var i = 0 ; i < names.length; i += 1){
    console.log((i + 1) + " . " + names[i]);
}








function  reverse(A) {
    
    for (var i = 0,len = A.length; i < Math.floor(len/2); i += 1 ) {
        
    var temp;
    temp =A[i];
    A[i] =A[len-1-i];
    A[len-1-i] = temp;
    
    
        
    }
    
    return A;
}

var x = reverse(names);

console.log(x); 
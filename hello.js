 function rev1(A){
     for (i = 0; i < (Math.floor(A.length / 2)); i++){
         temp = A[i];
         A[i] = A[A.length-1-i] ;
         A[A.length-1-i] = temp;
     }
 }
 rev1(A);
 console.log(A);

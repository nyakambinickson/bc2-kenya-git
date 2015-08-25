  function solution(B){
     for (i = 1; i <= (B.length + 1); i++){
         var x = 0;
         for (j = 0; j < (B.length); j++){
            if (i == B[j]){
               // console.log (i +" is there")
                break;
            } else {
                x = x + 1;
            }
            if (x == B.length){
                console.log(i + " is missing");
            }
         }
     }
 }
 var B=[1, 3, 5, 2];
 solution(B);

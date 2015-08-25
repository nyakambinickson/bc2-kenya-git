var dataType = function (x)
{
     if (x === +x && x !==(x|0 )){
         return "Float";
     }
     else if (x === +x && x ===(x|0 ) ){
         return "Int";
         
     }
     else if (typeof x === Boolean){
         return "Boolean";
     }
     else if (typeof x === String){
         return "string";
     }
     else if (typeof x === null){
         return "Null";
     }
     else if (typeof x === Object){
         return "Object";
         
     }
     else if (typeof x === undefined){
         return "Undefined"
     }
     else
     {
         return "null";
     }
   
   
 };
  dataType(3.0);
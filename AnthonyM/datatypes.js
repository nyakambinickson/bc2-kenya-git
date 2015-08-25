var datatypes = function(x){
    var type = typeof x;
  
    if (type === 'number') {
  if (x % 1 === 0) {
      return "Integer";
  }
 
  {
     return "float"; 
  }
       
    }
  else if  (type === 'string'){
      return "string";
  }
  else if (type === 'Object') {
      return "Objects";
  }
};
console.log(datatypes(2.34));
/*Test the code with any values*/
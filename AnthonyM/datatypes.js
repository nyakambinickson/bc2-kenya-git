var datatypes = function(x) {
    var type = typeof x;
    if (type === 'number') {
    if (x % 1 === 0) {
      return "Integer";
  }
  {
    return "float"; 
  }   
    }
  else if (type === 'string') {
    return "string";
  }
  else if (type === 'object') {
    return "Objects";
  }
  else if (type === 'null') {
    return "null";
  }
  else if (type === 'boolean') {
    return "Boolean";
  }
};
console.log(datatypes(3.142));
/*Test the code with any values__Mugiluri__Anthony*/
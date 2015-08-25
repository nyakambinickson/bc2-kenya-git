function average(A){
	var length = A.length, sum = 0;
	for(var i = 0; i < length; i++){
		sum += A[i];
	}
	return (sum/length);
}

console.log(average([2,2,2,2])); //answer 2

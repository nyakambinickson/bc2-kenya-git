var myArrayA = [2,4,6,7];

function arrayAvg(A) {
    for(var i = 0, max = A.length, sum = 0; i < max; i++){
        sum += A[i];
    }
    return (sum / max);
}

arrayAvg(myArrayA);

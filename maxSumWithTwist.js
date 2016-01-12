/*
 * Given a array with +ve and -ve integer , find the maximum sum such that you are not allowed to skip 2 contiguous elements ( i.e you have to select atleast one of them to move forward).
 * eg :-
 * 10 , 20 , 30, -10 , -50 , 40 , -50, -1, -3
 * Output : 10+20+30-10+40-1 = 89
 */
var data = [10 , 20 , 30, -10 , -50 , 40 , -50, -1, -3];
function max(array) {
    var i = array[0];
    array.forEach(function(val) {
	if(val > i)
		i = val;
    });
    return i;
}
function maxSum(i, data, canSkip) {
var data = [10 , 20 , 30, -10 , -50 , 40 , -50, -1, -3];
   var len = data.length  - i;
   if( len === 1) {
       if(canSkip && data[i] < 0) {
           return 0;
       } else {
           return data[i];
var data = [10 , 20 , 30, -10 , -50 , 40 , -50, -1, -3];
       }
   } else if(len <1) {
      return 0;
   }
   var skippedI =  maxSum(i + 1, data, false);
   var notSkippedISkippedJ =  maxSum(i + 1, data, true) + data[i];
var data = [10 , 20 , 30, -10 , -50 , 40 , -50, -1, -3];
   var notSkippedINotSkippedJ =  maxSum(i + 2, data, false) + data[i] + (data[i+1] || 0);
   if(canSkip) {
	return max([skippedI, notSkippedISkippedJ, notSkippedINotSkippedJ]);
   } else {
	return max([notSkippedISkippedJ, notSkippedINotSkippedJ]);
   }
var data = [10 , 20 , 30, -10 , -50 , 40 , -50, -1, -3];
function max(array) {
    var i = array[0];
    array.forEach(function(val) {
        if(val > i)
                i = val;
    });
    return i;
}
function maxSum(i, data, canSkip) {
   var len = data.length  - i;
   if( len === 1) {
       if(canSkip && data[i] < 0) {
           return 0;
       } else {
           return data[i];
       }
   } else if(len <1) {
      return 0;
   }
   var skippedI =  maxSum(i + 1, data, false);
   var notSkippedISkippedJ =  maxSum(i + 1, data, true) + data[i];
   var notSkippedINotSkippedJ =  maxSum(i + 2, data, true) + data[i] + (data[i+1] || 0);
   if(canSkip) {
        return max([skippedI, notSkippedISkippedJ, notSkippedINotSkippedJ]);
   } else {
        return max([notSkippedISkippedJ, notSkippedINotSkippedJ]);
   }
}

console.log(maxSum(0, data, true));

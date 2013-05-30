function swap(a, i, j) {
   //console.log("swap " + a[i] + "  " + a[j]);
   var tmp = a[i];
   a[i] = a[j];
   a[j] = tmp;
}
function shiftDown(a, start, end) {
   var rootIndex =  start;
   var leftChildIndex = 0;
   var rightChildIndex = 0;
   var swapIndex = 0;
   //console.log("rootIndex=" + rootIndex);
   while(leftChildIndex <= end) {
       leftChildIndex = (rootIndex * 2) + 1;
       rightChildIndex = leftChildIndex + 1;
       swapIndex = rootIndex;

       
       if(a[rootIndex] < a[leftChildIndex]) {
          swapIndex = leftChildIndex;
       }
       if(rightChildIndex  <= end && a[swapIndex] < a[rightChildIndex]) {
          swapIndex = rightChildIndex;
       }
       if(swapIndex != rootIndex) {
           swap(a, swapIndex, rootIndex);
           rootIndex = swapIndex;
       } else {
          return;
       }
   }
   
}
function heapify(a, count) {
   var start = parseInt((count - 1) / 2);
   while(start >= 0) {
      shiftDown(a, start, count - 1);
      start--;
   }
}


var a = [ 1,2,3,4,5,6,7,8,9,10 ];
console.log(a.join(","));
heapify(a, a.length);
console.log(a.join(","));

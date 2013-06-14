function combChoose3(a) {
   for(var i = 0; i < a.length; i++) { 
      for(var j = i + 1; j < a.length; j++) {
         var pre = a[i] + "" + a[j];
         for( k = j +1; k < a.length; k++) {
            console.log(pre +  a[k]);
         }
      }
   }
}
//1,2,3,4,5
function combRecur(a, prefix,  start, r) {
   if(r === 1) {
      for(var i = start; i < a.length; i++) {
          console.log(prefix + a[i] );
      }
      return;
   }
   for(var i=start; i <  a.length; i++) {
      var prefix2 = prefix + a[i];  

      // Only difference between permuation and combination
      combRecur(a, prefix2, i + 1, r - 1);  
   } 
}
function swap(a,i,j) {
   var tmp = a[i];
   a[i] = a[j];
   a[j] = tmp;
}
function permuateRecur(a, prefix,  start, r) {
   if(r === 1) {
      for(var i = start; i < a.length; i++) {
          console.log(prefix + a[i] );
      }
      return;
   }
   for(var i=start; i <  a.length; i++) {
      var prefix2 = prefix + a[i];  

      // Only difference between permuation and combination
      swap(a,i,start);
      combRecur(a, prefix2, start + 1, r - 1);  
      swap(a,i,start);


   } 
}

//combChoose3([1,2,3,4,5]);
console.log("combination");
combRecur([1,2,3,4,5],[],0,3);
console.log("permutation");
permuateRecur([1,2,3,4,5],[],0,3);


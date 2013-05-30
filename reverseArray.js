function reverseArray(array) {
   var len = array.length;
   var tmp = "";
   for(i=0; i < len/2; i++) { 
      tmp = array[i];
      array[i] = array[len-1-i];
      array[len - 1 - i] = tmp;
      console.log(tmp);

   }
   return array;
} 

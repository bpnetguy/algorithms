function median(values) {
    values.sort( function(a,b) {return a - b;} );
    var half = Math.floor(values.length/2);
    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

function mode(values) {
    values.sort( function(a,b) {return a - b;} );
    var i = 0;
    var modeValue = values[0];
    var maxNumberRecurrence = 1;
    while(i < values.length) {
       var tmpVal = values[i];
       var rec = 1;
       if(tmpVal && (i+1) < values.length && tmpVal === values[i+1]) {

           while(tmpVal && (i+1) < values.length && tmpVal === values[i+1]) {
               rec++;
               i++;
           }
       } else { 
           i++;
       }
       if(rec > maxNumberRecurrence) {
           maxNumberRecurrence = rec; 
           modeValue = tmpVal;
       }
    }
    return modeValue;
}

function mean(values) {
   var len = values.length;
   var i=len;
   var sum =0;
   while(i--) {
      sum +=values[i];
   }
   return sum /len;
}

function percentTile(p, values) {
   var len = values.length-1;
   values.sort( function(a,b) {return a - b;} );
   var pIndex = parseInt(len * p/100);
   return values[pIndex];
}
 
var list1 = [3, 8, 9, 1, 5, 7, 9, 5, 21, 5, 9, 55, 55, 55, 55, 55, 5, 101];
console.log( "Mean " + mean(list1));
console.log( "Median " + median(list1));
console.log( "Mode " + mode(list1));
console.log( "0% " + percentTile(0,list1));
console.log( "10% " + percentTile(10,list1));
console.log( "50% " + percentTile(50,list1));
console.log( "90% " + percentTile(90,list1));
console.log( "100% " + percentTile(100,list1));

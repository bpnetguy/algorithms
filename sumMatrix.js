var items = [[1,1,1],[10,5,1],[1,8, 1], [10,11,1]];


var sum = 0;
for(i=0; i < items.length; i++ ){
    for(j=0; j < items[i].length; j++) {
       sum += items[i][j];
    }
}


console.log("Sum = " + sum);

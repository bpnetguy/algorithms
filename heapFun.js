a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];



function parentOf(index, a) {
    if(index === 0) {
        console.log("Root node is " + index);
        return;
    }
    var p =  Math.floor((index-1)/2);
    parentOf(p);
    console.log("Parent of " + index + " is " + p);
    return p
}

function childrenOf(index, a) {
    var left = (index * 2) +1;
    var right = (index * 2) +2;
    console.log(index + "[" + left + "," + right + "]");
}


var node = 14;
var parent = parentOf(node);
console.log("Parent of " + node + " is " + parent);



childrenOf(3, a);
childrenOf(7, a);


var Node = function(value) {
   this.left = undefined;
   this.right = undefined;
   this.value = value;
}
var addNode = function(node, value) {
   if(value < node.value) {
      if(node.left) { 
          addNode(node.left, value);
      } else {
          node.left = new Node(value);
      }
   } else { 
      if(node.right) { 
          addNode(node.right, value);
      } else {
          node.right = new Node(value);
      }
      
   }

};
var findValue = function(node, value) {
   if(value < node.value) {
       if(node.left) { 
           return findValue(node.left, value);
       } else {
           return null;
       }
   } else if(value > node.value) { 
       if(node.right) { 
           return findValue(node.right, value);
       } else {
           return null;
       }
   } else {  
       return node;
   }
}

var inRange = function(value, start, end) {
   return value >= start && value <= end;
}
var findRange = function(node, startRangeValue, endRangeValue, result) {
    if(inRange(node.value, startRangeValue, endRangeValue)) {
       result.push(node.value);
       if(node.left) 
          findRange(node.left, startRangeValue, endRangeValue, result);
       if(node.right)
          findRange(node.right, startRangeValue, endRangeValue, result);
    } else if(node.value < startRangeValue && node.right) {
       findRange(node.right, startRangeValue, endRangeValue, result);
    } else if(node.value > endRangeValue && node.left) {
       findRange(node.left, startRangeValue, endRangeValue, result);
    }
};
var root = new Node(16);
addNode(root, 2);
addNode(root, 20);
addNode(root, 12);
addNode(root, 21);
addNode(root, 32);
addNode(root, 42);

console.log(findValue(root, 32).value);
console.log(findValue(root, 31));

var result = [];
/**
        16 
    2       20
      12      21
                32
                  42
*/
findRange(root, 3,33, result);

console.log(result);


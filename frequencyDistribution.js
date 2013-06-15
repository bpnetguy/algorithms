var testScores = [1,3,4,4,5,6,7,4,7,7];


var createFrequencyMatrix = function(a) {
   var hashTable = {};
   var len = a.length;
   while(len--) {
      var val = a[len];
      if(hashTable[val]) { 
         hashTable[val]++;
      } else {
         hashTable[val]=1;
      }
   }
   return hashTable;
}

var printFrequencies = function(frequencyTable) {
   var scoreKeys = Object.keys(frequencyTable).sort();

   var len = scoreKeys.length; 
   while(len--) {
      var score = scoreKeys[len]; 
      var frequency = frequencyTable[score];
      console.log("Score: " + score + " F: " + frequency);
   }

}

var frequencyTable = createFrequencyMatrix(testScores);
printFrequencies(frequencyTable);




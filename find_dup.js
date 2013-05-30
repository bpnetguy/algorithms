
function findDup(array) {
    var duplicate = {};
    for(var i =0; i < array.length;i++) {
        
        for(var j=i+1; j < array.length; j++) {

            if(array[i] === array[j]) {
                duplicate[array[i]] = 1;
            }
        }
    }
    return Object.keys(duplicate);
}



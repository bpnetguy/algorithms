function checkBitFlips(i,j) {
    var tmpI = i;
    var tmpJ = j;
    var counter = 0;
    while(tmpI !== tmpJ) {
        var x = tmpI & 1;
        var y = tmpJ & 1;
        if(x !== y) {
            counter++
        }
        tmpI = tmpI >> 1;
        tmpJ = tmpJ >> 1;
    }
    return counter;
}

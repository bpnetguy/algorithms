var weight = [[1,1,1],[10,5,1],[1,8, 1], [10,11,1]];


function shortestPath(xStart, yStart, xFinal, yFinal,  weight) {

    if(xStart > xFinal) return 1000;
    if(yStart > yFinal) return 1000;

    if(xStart === xFinal &&  yStart == yFinal) {  
        return weight[xStart][yStart];
    } 

    var optionA = shortestPath(xStart + 1, yStart, xFinal, yFinal, weight);
    var optionB = shortestPath(xStart, yStart + 1, xFinal, yFinal, weight);
    var totalWeight = weight[xStart][yStart];
    var src =  "(" + xStart  + "," + yStart + ")";
    var dest = "";

    if(optionA < optionB) {
        totalWeight += optionA;
        dest = "(" + (xStart + 1) + ", " + yStart + ")";
    } else {
        totalWeight += optionB;
        dest = "(" + xStart + ", " + (yStart + 1) + ")";
    }
    console.log(src + "->" + dest + " w:" + totalWeight);
    return totalWeight;
}

shortestPath(0,0,3,2, weight);


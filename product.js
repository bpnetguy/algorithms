/*
 * Given an array of numbers, nums, return an array of numbers products, where products[i] is the product of all nums[j], j != i.
 * Input : [1, 2, 3, 4, 5] Output: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)] = [120, 60, 40, 30, 24]
 */
var data = [1,2,3,4,5];
function getProducts(data) {
    var products = [];
    for(var i = 0; i < data.length; i++) {
        products[i] = 1;
        for(var j=0; j < data.length; j++) {
            if(i !== j) {
                products[i] = products[i] * data[j]; 
            }
        }
    }
    return products;
}
getProducts(data);
var data = [1,2,3,4,5];
function getProducts2(data) {
    var lproducts = [];
    var rproducts = [];
    var products = [];
    var tmp = 1;
    lproducts[0] = 1;
    rproducts[data.length-1] = 1;
    for(var i = 0; i < data.length; i++) {
        var tmp = tmp * data[i];
        if( i+1 < data.length) {
            lproducts[i+1] = tmp;
        }
    }
    tmp = 1;
    for(i=data.length - 1; i > -1; i--) {
        tmp = tmp * data[i];
        if(i-1 >= 0) {
            rproducts[i-1] = tmp;
        }
    }
    for(i = 0; i < data.length; i++) {
       products[i] = lproducts[i] * rproducts[i];
    }
    console.log(lproducts, rproducts)
    return products;
}
getProducts2(data);

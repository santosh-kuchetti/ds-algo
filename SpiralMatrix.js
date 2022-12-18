/*
    Given an m x n matrix, return all elements of the matrix in spiral order.

    Example 1:

    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]
*/

var spiralOrder = function(matrix) {
    if(matrix == null || matrix.length == 0){
            return matrix;
       }
    let lr = 0,lc = 0,hr = matrix.length -1 , hc = matrix[0].length -1;
    let totalCount = matrix.length * matrix[0].length;
    let count = 0;
    let arr = []
    while(lr<=hr &&lc<=hc ){
        for(let i = lc;i<=hc;i++){
            arr.push(matrix[lr][i])
            count ++
        }
        lr++;
        for(let i = lr;i<=hr;i++){
            arr.push(matrix[i][hc])
            count ++
        }
        hc--;
        if(lr<=hr){
            for(let i = hc;i>=lc;i--){
            arr.push(matrix[hr][i])
            count ++
        }
        }
        
        hr--;

        if(lc<=hc){
            for(let i = hr;i>=lr;i--){
            arr.push(matrix[i][lc])
            count ++
        }
        }
        
        lc++;

    }
    return arr
}([[1,2,3],[4,5,6],[7,8,9]]);

console.log(spiralOrder)


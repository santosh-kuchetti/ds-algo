/*
    Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
    You must do it in place.

    Example 1:

    Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
    Output: [[1,0,1],[0,0,0],[1,0,1]]


    Example 2:

    Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

*/

var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let arr = []
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(matrix[i][j] === 0){
                arr.push([i,j])
            }
        }
    }

    for(let i of arr){
        helper(i)
    }

    function helper(i){
        let[r,c] = i;

        for(let i = 0;i < matrix.length;i++){
            matrix[i][c] = 0
        }

        for(let i = 0;i< matrix[0].length;i++){
            matrix[r][i] = 0
        }
    }
    return matrix
}([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);

console.log(setZeroes)


/*
    0 1 2 0
    3 4 5 2
    1 3 1 5


    what we are doing is we have 0's at [0,0] and [0,3]

    and we are setting all the rows and column of those indexes.

    so we are setting 0's for the index [0,0], row [0,0],[1,0],[2,0] and column [0,0],[0,1],[0,2],[0,3]
    so we are setting 0's for the index [0,3], row [0,3],[1,3],[2,3] and column [0,0],[0,1],[0,2],[0,3]


    for achieving that we are saving that indexes whose value is 0 in an array. and iterating that array ang calling a function which
    can perform the operation of setting the values of row and column zero's.

*/

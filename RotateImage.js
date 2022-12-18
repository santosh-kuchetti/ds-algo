/*
    You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
    DO NOT allocate another 2D matrix and do the rotation.

    Example 1:

    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[7,4,1],[8,5,2],[9,6,3]]

*/

var rotate = function(matrix) {
    let n = matrix[0].length;
    transpose(matrix)
    rev(matrix)

    function transpose (matrix){
        
        for(let i = 0;i<n;i++){
            for(let j = i+1;j<n;j++){
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            }
        }
    }

    function rev(matrix){
        for(let i = 0;i<n;i++){
            for(let j = 0;j<n/2;j++){
                let temp = matrix[i][j]
                matrix[i][j] = matrix[i][n-1-j]
                matrix[i][n-1-j] = temp
            }
        }
    }

    return matrix
    
};

/*
    first we can transpose the matrix. transposing means reversing the elements by the diagonal.
    after that we will be reversing the matrix. by that, we can get the required matrix
*/
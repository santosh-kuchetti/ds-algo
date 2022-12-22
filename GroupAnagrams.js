/*
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
    
     
    Example 1:
    
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


    Example 2:
    
    Input: strs = [""]
    Output: [[""]]


    Example 3:
    
    Input: strs = ["a"]
    Output: [["a"]]


*/

var groupAnagrams = function(strs) {
    let map = new Map();
    for(let i = 0;i<strs.length;i++){
        let str = strs[i].split('').sort().join('');
        if(map.has(str)){
            map.set(str,[...map.get(str),strs[i]])
        }else{
            map.set(str,[strs[i]])
        }
    }
   return Array.from(map.values())
}(["eat","tea","tan","ate","nat","bat"]);

console.log(groupAnagrams)

/*
    if we can see the problem statement keenly, we have to check whether each string has same common elements, 
    in these cases, we can make use of Map.

    but before we need to have a unique string to identify. so we are sorting each element of the array for checking as the key in Map.
    and if that sorted element already present in the Map, then we will append our current element into the before value of that key.
    if sorted element is not present in the Map, we will add that element in that array and set it to that key in the Map.

    after that, our required value will be in that Map's values.
    Map.values() gives us the object of the all the values like   {[ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ]}.
    to get the array out of it, we can use Array.from() so that it will change the iterable object elements into the array.
*/
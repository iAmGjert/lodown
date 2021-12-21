'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identify: Designed to return any value unchanged.
 * @param {any value} value: the value passed 
 * @returns {value} value unchanged.
 */
 function identify(value) {
    return value;
}
module.exports.identify = identify;
/**
 * typeOf: Designed to take any value and return its data type as a string.
 * @param {any value} value: any value
 * @returns {String} Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array" 
 */
function typeOf(value){
    let ans = '';
    if (typeof value === 'object'){
        if (Array.isArray(value)){
            ans =  'array';
        } else if (value === null){
            ans = 'null';
        } else if (value instanceof Date){
            ans = 'date';
        }
        else {
            ans = 'object';
        }
    } else {
        ans = typeof value;
    }
    return ans;
}
module.exports.typeOf = typeOf;
/**
 * first: Designed to print the first 'x' number of elements in an array. If an array isnt' passed
 * then it returns an empty array. If a number isn't passed than it returns the first element in array.
 * @param {Array} arr: The array over which to iterate.
 * @param {Number} num: The number of places in array to return.
 * @returns {Array}: Returns an array of 'x' elements, an empty array, or the first element of the array.
 * Examples:
 *   _.first("ponies", 1) -> []
 *   _.first(["a", "b", "c"], "ponies") -> "a"
 *   _.first(["a", "b", "c"], 1) -> "a"
 *   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */
 function first(arr, num){
    let ans = [];
    if (Array.isArray(arr)){
        if (typeof(num) === 'number'){
            if (num > arr.length){
                num = arr.length;
            }
            for (let i = 0; i < num; i++){
                ans.push(arr[i]);
            }
        } else {
            ans = arr[0];
        }
    } else {
        ans = [];
    }
    return ans;
}
module.exports.first = first;
/**
 * last: Designed to iterate over an array and return the last 'x' number of elements.
 * If an array isn't passed, an empty array is returned. If no number is passed, the last
 * element of the array is returned.
 * @param {Array} arr: the array to iterate over. 
 * @param {Number} num: the number of places to display.
 * @returns {Array}: Returns last 'x' number of elements in array, the first elements of array, or an empty array.
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */
 function last(arr, num){
    let ans = [];
    if (Array.isArray(arr)){
        if (typeof num === 'number'){
           if (num > arr.length){
               num = arr.length;
           }
           for (let i = arr.length - num; i < arr.length; i++){
               ans.push(arr[i]);
           }
        } else {
            ans = arr[arr.length - 1];
        }
    } else {
        ans = [];
    }
    return ans
}
module.exports.last = last;
/**
 * indexOf: Designed to take an array and a value and return the first index of the value found in the array.
 * If the value does not exist in the array returns -1.
 * @param {Array} arr: The array to iterate over. 
 * @param {any value} value: the value we are looking for in the array.
 * @returns {Number}: Returns the index value of the first occurance of value in array, or -1 if it does not exist. 
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */
 function indexOf(arr, value){
    let ans = -1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            ans = i;
            break;
        }
    }
    return ans;
}
module.exports.indexOf = indexOf;
/**
 * contains: Designed to loop over a given array to search for a certain value and return true if it exists, false if not.
 * @param {Array} arr: The array to iterate over. 
 * @param {any value} value: The value we're looking for in our array. 
 * @returns {Boolean} true if value exists in array, false if not.
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 */
 function contains(arr, value){
    let ans = false;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            ans = true;
        }
    }
    return ans;
}
module.exports.contains = contains;
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} box: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 *  Examples:
 *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
 *      -> should log "a" "b" "c" to the console
 */
function each(box, func){
    if (_.typeOf(box) === 'array'){
        for (let i = 0; i < box.length; i++){
            func(box[i], i, box);
        }
    } else if (_.typeOf(box) === 'object'){
        for (var key in box){
            func(box[key], key, box);
        }
    }
}
module.exports.each = each;
/**
 * unique: Designed to take an array, return a new array without duplicate values.
 * @param {Array} arr: the array to iterate over.
 * @return {Array}: new array minus duplicate values.
 * Examples:
 *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 * Extra Credit:
 *   use _.each in your implementation
 */
function unique(arr){
    let ans = [];
    for (var i = 0; i < arr.length; i++){
        if (_.indexOf(arr, arr[i]) === i){
            ans.push(arr[i])
        }
    }
    return ans;    
}
module.exports.unique = unique;
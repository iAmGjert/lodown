'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identify: Designed to return any value unchanged.
 * @param {any value} value: the value passed 
 * @return value unchanged.
 */
 function identify(value) {
    return value;
}
module.exports.identify = identify;
/**
 * typeOf: Designed to take any value and return its data type as a string.
 * @param {any value} value: any value
 * @return Return the type of <value> as a string
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
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @return when needed
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
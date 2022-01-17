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

/**
 * filter: Designed to take in an array and a function, iterate through the array and
 * then return a new array with all values of the original array that returned true when
 * passed through the function.
 * @param {Array} arr: the array to iterate over
 * @param {Function} func: the function that will be invoked over each element of 'arr'
 * @returns {Array}: a new array filtered.
 */
 function filter(arr, func){
    /**let ans = [];
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            ans.push(arr[i]);
        }
    }
    return ans; */
    let ans = [];
    _.each(arr, function(ele, ind, array){
        if (func(ele, ind, array)){
            ans.push(ele);
        }
    });
    return ans;
}
module.exports.filter = filter;

/**
 * reject: Designed to take in an array and a function, iterate through the array and
 * then return a new array with all the values of the original array that returned false when
 * passed through the function.
 * @param {Array} arr: the array to iterate over
 * @param {Function} func: the function to that will be invoked over each element of 'arr'
 * @returns {Array}: a new array of elements that returned false when passed thru a function.
 */
 function reject(arr, func){
    let ans = [];
    /**for (let i = 0; i < arr.length; i++){
        if (!func(arr[i], i, arr)){
            ans.push(arr[i]);
        }
    }*/
    _.each(arr, function(ele, ind, array){
        if (!func(ele, ind, array)){
            ans.push(ele);
        }
    });
    return ans;
}
module.exports.reject = reject;

/**
 * partition: Designed to take in an array and a function, iterate through the array and 
 * then return a new array of sub arrays. The first sub array is all the values that returned
 * something truthy. The second sub array is all the values that returned something falsy.
 * @param {Array} arr: the array to iterate over
 * @param {Function} func: the function to invoke on each element of 'arr'
 * @returns {Array}: sub-arrays of [[truthy values], [falsy values]] when passed thru func
 */
 function partition(arr, func){
    let ans = [[], []];
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            ans[0].push(arr[i]);
        } else {
            ans[1].push(arr[i]);
        }
    }
    return ans;
}
module.exports.partition = partition;

/**
 * map: Designed to take in a colleciton (array or object) and a function, iterate through the collection and
 * return a new array of the collection's properties passed through the function in this way:
 *  if collection is an array: the element, it's index, <collection>
 *  if collection is an object: the value, it's key, <collection>
 * @param {Collection} box: the collection to iterate through.
 * @param {Function} func: the function to invoke against the properties of the collection
 * @returns {Array}: an array of the values returned when invoking func with the properties
 * of box.
 */
 function map(box, func){
    let ans = [];
    if (_.typeOf(box) === 'array'){
        for (let i = 0; i < box.length; i++){
            ans.push(func(box[i], i, box));
        }
    } else if (_.typeOf(box) === 'object'){
        for (let key in box){
            ans.push(func(box[key], key, box));
        }
    }
    return ans;
}
module.exports.map = map;

/**
 * pluck: Designed to take in an array of objects and a property, iterate through the array
 * and return a new array of the <property> for every object in the original array.
 * @param {Array} arr: the array of objects to iterate over.
 * @param {Property} prop: the property to look for in each object of the original array.
 * @returns {Array}: an array filled with the <property> of each object of the original array.
 */

 function pluck(arr, prop){
    return _.map(arr, function(ele, i, box){
        return ele[prop];
    });
}
module.exports.pluck = pluck;

/**
 * every: Designed to take in a collection (array or object) and a function, iterate through the
 * collection's properties and invoke a function at each property. If the function returns true for
 * every single property in the collection then it will return true. Otherwise, return false.
 * @param {Collection} box: the collection to iterate through.
 * @param {Function} func: the function to invoke over every property of the colleciton.
 * @returns {Boolean}: returns true if every property of the collection returns true when invoked
 * with the function argument.
 */
 function every(box, func){
    let ans = true;
    if (func){
        if (Array.isArray(box)){
            for (let i = 0; i < box.length; i++){
                if (!func(box[i], i, box)){
                    ans = false;
                }
            }
        } else {
            for (let key in box){
                if(!func(box[key], key, box)){
                    ans = false;
                }
            }
        }
    } else {
        if (Array.isArray(box)){
            for (let i = 0; i < box.length; i++){
                if (!box[i]){
                    ans = false;
                }
            }
        } else {
            for (let key in box){
                if (!box[key]){
                    ans = false;
                }
            }
        }
    }
    return ans;
}
module.exports.every = every;

/**
 * some: Designed to take in a collection (array or object) and a function, iterate through the
 * collection's properties and invoke the function at each property. If the function returns true for
 * a single property in the colleciton then it will return true. Otherwise, return false.
 * @param {Collection} box: the collection to iterate over
 * @param {Function} func: the function to invoke at each property of the collection.
 * @returns {Boolean}: returns true if a single property of the collection returns true when invoked
 * with the func.
 */
 function some(box, func){
    let ans = false;
    if (func){
        if (Array.isArray(box)){
            for (let i = 0; i < box.length; i++){
                if (func(box[i], i, box)){
                    ans = true;
                }
            }
        } else {
            for (let key in box){
                if (func(box[key], key, box)){
                    ans = true;
                }
            }
        }
    } else {
        if (Array.isArray(box)){
            for (let i = 0; i < box.length; i++){
                if (box[i]){
                    ans = true;
                }
            }
        }
    }
    return ans;
}
module.exports.some = some;

/**
 * reduce: Designed to take in an array, a function, and a seed. If no seed is passed into the
 * function it is initialized to the first element in the array. Reduce will then iterate over
 * the array and invoke the function at each element in the array. It will store that value as the
 * new seed and at the end of it's iterations return the seed value;
 * @param {Array} array: the array to iterate over.
 * @param {Function} func: the function to invoke at each element of array.
 * @param {Seed} seed: the inital value of "accumulator" seed.
 * @returns: a new array with just the seed value in it.
 */
 function reduce(array, func, seed) {
    if (seed === undefined) {
        seed = array[0];
        for(var i = 1; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    } else {
        for (var i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    }
 return seed;
};
module.exports.reduce = reduce;

/**
 * extend: Designed to take in an object, and then any number more objects. Will copy all 
 * properties from the subsequent objects into the first object and return the first object.
 * @param {Object} obj: the initial object to be filled with new properties.
 * @param {...Objects} obj2: the remaineder of the objects to be added to the intial object.
 * @returns: inital obj filled with new properties. 
 */
 function extend(obj, ...obj2){
    Object.assign(obj, ...obj2);
    return obj;
}
module.exports.extend = extend;
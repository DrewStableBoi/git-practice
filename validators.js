// 1. Write a function called isString that takes in one parameter.
// The function should return true if the param is a string, false if it is not.

function IsString(param) {
    if (typeof param === 'string') {
        return true
    } else {
        return false
    }
}
const test1 = IsString('hello')
const test2 = IsString(12345)

console.log('should be true =>', test1)
console.log('should be false =>', test2)

// 2. Write a function called isNumber that takes in one parameter.
// The function should return true if the param is a number, false if it is not.

function IsNumber(param) {
    if (typeof param === 'number') {
        return true
    } else {
        return false
    }
}
const test3 = IsNumber('hello')
const test4 = IsNumber(12345)

console.log('should be true =>', test3)
console.log('should be false =>', test4)

// 3. Write a function called isBoolean that takes in one parameter.
// The function should return true if the param is a boolean, false if it is not.

function IsBoolean(param) {
    if (typeof param === 'boolean') {
        return true
    } else {
        return false
    }
}
const test5 = IsBoolean('hello')
const test6 = IsBoolean(12345)

console.log('should be false =>', test5)
console.log('should be true =>', test6)

// 4. Write a function called isFunction that takes in one parameter.
// The function should return true if the param is a function, false if it is not.

function isFunction(param) {
    if (typeof param === 'function') {
        return true
    } else {
        return false
    }
}
const test7 = isFunction(IsBoolean)
const test8 = isFunction(IsBoolean)

console.log(isFunction(IsBoolean)); false

// 5. Write a function called isObject that takes in one parameter.
// The function should return true if the param is an object, false if it is not.

function IsObject(param) {
    if (typeof param === 'object') {
        return true
    } else {
        return false
    }
}
const test11 = IsObject('hello')
const test12 = IsObject(12345)

console.log(IsObject({}))

// 6. Write a function called isArray that takes in one parameter.
// The function should return true if the param is an array, false if it is not.

function isArray(param) {
    if (Array.isArray(param)){
        return true 
    } else {
        return false
    }
}

const test9 = isArray([1,2,3])
const test10 = isArray('hi')

console.log(isArray([1,2,3])) //this should be true
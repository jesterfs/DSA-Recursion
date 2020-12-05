const countSheep = function(number) {
    //base case
    if (number === 0) {
        return 'All sheep jumped over the fence'
    } 
    return number + ': Another sheep jumped over the fence. ' + countSheep(number - 1)
}

// let num = 3;
// console.log(countSheep(num));

////////////

// const powerCalculater = function(a,b) {
    
//     if(b === 0){
//         return 1
//     }
//     return a*powerCalculater(a, b-1)
// }

// console.log(powerCalculater(10,3))


//////////

const reverseString = function(string) {

    if(string.length <= 1) {
        return string
    }
    return string[string.length - 1] + reverseString(string.substr(0, string.length-1))
}

console.log(reverseString("sey"))
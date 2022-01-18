//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = (str, num) => {
    var newStr="";
    for(var i=str.length-num; i<str.length; i++){
        newStr+= str[i];
    }
    for(var i=0; i<str.length-num; i++){
        newStr+=str[i];
    }
    return newStr;
}

// let testString = "012345";
// console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
    for(let i=str1.length; i>0; i--){
        // console.log(rotateString(str1, i));
        if(str2 == rotateString(str1, i)){
            return true
        }
    }
    return false;
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));
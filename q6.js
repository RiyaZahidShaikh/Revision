let num1 = 0
let num2 = null
let num3 = ""
let num4 = undefined
if(num1 || num2 || num3 || num4){
    console.log("Atleast one value is truthy");
}else{
    console.log("All values are falsy");
}

if(num1 && num2 && num3 && num4){
    console.log("All values are truthy");
}else{
    console.log("Atleast one value is falsy");
}
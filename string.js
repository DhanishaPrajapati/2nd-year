let FirstName = "Dhanisha";
let lastName = "Prajapati";
console.log(`My firstname is:${FirstName}`);
console.log(`My lastname is:${lastName}`);
function FullName(first,last){
    return`${first}${lastName}`;
}
let Name=`Hello ${FullName(FirstName,lastName)}`;
console.log(Name);

console.log(".....ARROW FUNCTION....");


function Physics(marks){
    return `${marks}`
}
Physics = marks => {
    return `${marks}`;
}
console.log(Physics(95));
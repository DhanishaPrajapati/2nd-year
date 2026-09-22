// function sum(...values)
// {
//     let total=0;
//     for(let n of values)
//     {
//         total = total+n;

//     }
//     return total;
// }
// console.log(sum(10,20,30));


function sum(name,...values){
    let total=0;
    for(let n of values){
        total=total+n;
    }
  console.log("name:",name);
       return total;
    -
}
console.log("total:",sum("dhanisha",10,20,30));


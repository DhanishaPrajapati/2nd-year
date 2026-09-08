function sum (...values){
    let sum=0;
    for(let i in values)
    {
        sum = sum + values[i];
    }
    console.log(sum);
};
let ar=[10,20,30,40]
    sum (...ar);

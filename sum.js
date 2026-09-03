function sum(...values)
{
    let total=0;
    for(let n of values)
    {
        total = total+n;

    }
    return total;
}
console.log(sum(10,20,30));


Pattern = star=> {
    return `$(star)`;
}
console.log("*");
console.log("**");
console.log("***");

Pattern = number=> {
    return `$(number)`;
}
console.log("1");
console.log("12");
console.log("123");

Pattern=(n)=> {
    for(let i=1;i<=n;i++)
    {
        let row="";
        for(let j=1;j<=i;j++)
        {
            row += "*";
        }
        console.log(row);
    }
};
Pattern(3);
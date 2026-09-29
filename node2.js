const fs= require('fs')
fs.writeFile("std.txt", "Name: Dhanisha", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("File created successfully")
    }
})

fs.appendFile(
    "std.txt",
    "\nAge: 20",
    (err,data) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("Data appended successfully")
        }
    }
)
fs.readFile("std.txt", "utf-8", (err,data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
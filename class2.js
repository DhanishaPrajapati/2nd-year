class Student{
    constructor(roll, name, year){
        this.rollNo = roll;
        this.Name = name;
        this.Year = year;
        console.log(this.rollNo);
        console.log(this.Name);
        console.log(this.Year);
        
    }
}
let s1 = new Student();
let s2 = new Student(101, "vikas", "2nd");
let s3 = new Student(102, "dhanisha6", "2nd");
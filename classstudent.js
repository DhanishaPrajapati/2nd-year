class student{
    static count=0;
    constructor(rollno,name,marks){
        this.rollno=rollno;
        this.name=name;
        this.marks=marks;
         student.count ++;
    }
    display()
    {
        console.log(this.rollno);
        console.log(this.name);
        console.log(this.marks);
    
    if(this.marks>=35)
    {
        console.log("Pass");
    }
    else{
        console.log("fail");
    }
    }

}
let s1=new student("56","Dhanisha","95");
let s2= new student("65","sakshi","90");
s1.display();
s2.display();
console.log(student.count);
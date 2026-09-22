class Person {
    static count = 0;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        Person.count++;
    }
    displayDetails() {
        console.log("ID: " + this.id);
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
    static displayTotalPersons() {
        console.log("Total Persons: " + Person.count);
    }
}
class Doctor extends Person {
    constructor(id, name, age, specialization, consultationFee) {
        super(id, name, age);
        this.specialization = specialization;
        this.consultationFee = consultationFee;
    }
    displayDetails() {
        console.log("DOCTOR");
        console.log("ID: " + this.id);
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Specialization: " + this.specialization);
        console.log("Consultation Fee: ₹ " + this.consultationFee);
    }
}
class Patient extends Person {
    constructor(id, name, age, disease, roomNo) {
        super(id, name, age);
        this.disease = disease;
        this.roomNo = roomNo;
    }
    displayDetails() {
        console.log("PATIENT");
        console.log("ID: " + this.id);
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Disease: " + this.disease);
        console.log("Room No: " + this.roomNo);
    }
}

let doctor1 = new Doctor(616, " ", 26, "gynaecologist", 1000);
let doctor2 = new Doctor(456, " ", 25, "orthopaedic", 1000);

let patient1 = new Patient(17, " ", 21, "Fever", 101);
let patient2 = new Patient(18, " ", 22, "Cold", 102);

doctor1.displayDetails();
console.log();
doctor2.displayDetails();
console.log();
patient1.displayDetails();
console.log();
patient2.displayDetails();
console.log();

Person.displayTotalPersons();
#include<iostream>
using namespace std;
class Student{
    public:
    string name;
    int rollNo;
    float marks;
};
int main(){
    Student s[2] = {{"Riya", 12, 89}, {"Suhani", 34, 97}};
    Student *ptr;
    ptr = &s[0];

    cout<<"Student Details:"<<endl;
    cout<<"Name: "<<ptr->name<<endl;
    cout<<"Roll No: "<<ptr->rollNo<<endl;
    cout<<"Marks: "<<ptr->marks<<endl;
    return 0;
}
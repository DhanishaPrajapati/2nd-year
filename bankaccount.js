class bankaccount{
    static bankinfo(){
        console.log("ABC Bank");
        console.log("Saving,Current,Fixed deposit");

    }
    constructor(accountno,holderName,balance){
        this.accountno=accountno;
        this.holderName=holderName;
        this.balance=balance;
    }
    deposit(amount){
        this.balance += amount;
        console.log(amount);
    }
    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
        }
        else{
            console.log("insufficient balance");
        }
    }
    displayBalance(){
        console.log("Account No:"+this.accountno);
        console.log("Holder name:"+this.holderName);
        console.log("Balance:"+this.balance);
    }


};
bankaccount.bankinfo();
let acc1=new bankaccount(101,"dhanisha",5000);
acc1.deposit(2000);
acc1.withdraw(1500);
acc1.displayBalance();
let acc2=new bankaccount(102,"sakhi",10000);
acc2.deposit(5000);
acc2.withdraw(4000);
acc2.displayBalance();
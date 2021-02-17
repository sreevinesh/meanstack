class Bank{
    constructor(acno,pname,minbal){
        this.acno=acno;
        this.pnam=pname;
        this.minbal=minbal;
    }
    deposit(amount){
        this.minbal+=amount;
        console.log(amount);
    }
    withdraw(amount){
        if(amount>this.minbal){
            console.log("insufficient balance"+amount+"avilable balance"+this.minbal);

        }
        else{
            this.minbal=amount;
            console.log("sufficient balance"+amount+"avilabale balance"+this.minbal);
        }
    }
    balanceEng(){
        console.log(this.minbal);
    }
}
var obj=new Bank(100,"akhil",2000);
obj.deposit(1000)
obj.withdraw(2000)
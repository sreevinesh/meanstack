class Bank{
    constructor(acno,pname,minbal){
        this.acno=acno;
        this.pnam=pname;
        this.minbal=minbal;
    }
    deposit(amount){
        this.minbal+=amount;
        console.log("credited amount "+amount+" balance amount" +this.minbal);
    }
    withdraw(amount){
        if(amount>this.minbal){
    
            console.log("insufficient balanace");

        }
        else{
            this.minbal-=amount;
            console.log("Amount Debited "+amount+" avilabale balance"+this.minbal);
        }
    }
    balanceEng(){
        console.log("avilable balance "+this.minbal);
    }
}
var obj=new Bank(11,"akhil",2000);
obj.deposit(1000)
obj.withdraw(3000)
obj.balanceEng()
class Bank {
    static getAccountDetails() {
      var accountDetails = {
            1000: { accno: 1000, name: "userone", balance: 5000, password: "user1" },
            1002: { accno: 1002, name: "usertwo", balance: 5000, password: "user2" },
            1003: { accno: 1003, name: "userthree", balance: 7000, password: "user3" },
            1004: { accno: 1004, name: "userfour", balance: 5000, password: "user4" },
            1005: { accno: 1005, name: "userfive", balance: 3000, password: "user5" },
        }
        return accountDetails
    }
    static login() {
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pswd").value;

        let data = Bank.getAccountDetails()
        if (accno in data) {
            if (pwd == data[accno]["password"]) {
                alert("authendication sucess")
                window.location.href="userhome.html"

            }
            else {
                alert("invalid password")
            }
            
        }
        else{
        alert("accno")
        }
    }
}
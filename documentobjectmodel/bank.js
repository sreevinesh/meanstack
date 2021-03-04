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
    static authendicateUser(accno, password) {
        let data = Bank.getAccountDetails()
        if (accno in data) {
            if (password == data[accno]["password"]) {
                return 0
            }
            else {
                return 1
            }
        }
        else {
            return -1
        }
    }







    static login() {
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pswd").value;

        let data = Bank.getAccountDetails()
        if (accno in data) {
            if (pwd == data[accno]["password"]) {
                alert("authendication sucess")
                window.location.href = "userhome.html"

            }
            else {
                alert("invalid password");
            }

        }
        else {
            alert("accno");
        }
    }
    static deposit() {
        let accno = document.querySelector("#acno1").value;
        let pwd = document.querySelector("#pswd1").value;
        let amount = document.querySelector("#amountt").value;
        let data = Bank.getAccountDetails()
        let user = Bank.authendicateUser(accno, pwd)
        if (user == 0) {
            data[accno]["balance"] += Number(amount);
            alert(data[accno]["balance"]);
        }
        else if (user == 1) {
            alert("invalid password");
        }
        else {
            alert("invalid accno");
        }


    }



    static withdraw() {

        let accno = document.querySelector("#acno1").value;
        let pwd = document.querySelector("#pswd1").value;
        let amount = document.querySelector("#amountt").value
        let data = Bank.getAccountDetails()
        let user = Bank.authendicateUser(accno, pwd)
        if (amount > data[accno]["balance"]) {
            alert("insufficint balance")
        }
        else {
            data[accno]["balance"] -= Number(amount)
            alert(data[accno]["balance"]);

        }


    }
}

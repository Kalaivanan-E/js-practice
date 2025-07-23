
class Account{
    acc_name
    acc_addr
    acc_mobileno
    constructor(name, addr, mobileno){
        this.acc_name = name;
        this.acc_addr = addr;
        this.acc_mobileno = mobileno;
    }
    updatemobileno(mobileno){
         return this.acc_mobileno = mobileno;
    }
    updateaddress(addr){
         return this.acc_addr = addr;
    }
}

class SavingsAccount extends Account {
   acc_id
   acc_Bal
   min_Bal = 500;
   constructor(id,name, addr, mobileno, amount){
    super(name, addr, mobileno)
    this.acc_id = id
    this.acc_Bal = amount
   } 
   deposit (amount){
    return this.acc_Bal = this.acc_Bal + amount; 
   }

   get_Bal(){
       return this.acc_Bal - this.min_Bal;
    }

    withdrawl_Amount(amount){
        this.acc_Bal=this.acc_Bal-amount;
    }
}


class currentAccount extends Account {
    acc_id
    acc_Bal
    min_Bal = 5000;
    constructor(id,name, addr, mobileno, amount){
        super(name, addr, mobileno)
        this.acc_id = id
        this.acc_Bal = amount
    }
    deposit (amount){
        return this.acc_Bal = this.acc_Bal + amount;
    }

    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal - amount;
    }

    get_Bal(){
       return this.acc_Bal - this.min_Bal;
    }

}



let acc1 = new SavingsAccount(1,"Kalai","Theni",'9345396546',1000)
console.log(acc1.deposit(500));
(acc1.withdrawl_Amount(200))
console.log(acc1.get_Bal());

(acc1.updatemobileno('9876543210'));
(acc1.updateaddress('Madurai'));
console.log(acc1)

let acc2 = new currentAccount(2,"Ravi","Chennai",'9876543210',6000)
console.log(acc2.deposit(1000))
acc2.withdrawl_Amount(2000)
console.log(acc2)

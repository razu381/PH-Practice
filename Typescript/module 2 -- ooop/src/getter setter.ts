class BankAccount {
  accountNo: number;
  amount: number;

  constructor(accountNo: number, amount: number) {
    (this.accountNo = accountNo), (this.amount = amount);
  }

  get balance() {
    return this.amount;
  }
  set deposit(amount: number) {
    this.amount += amount;
  }
}

let myAccount = new BankAccount(12312, 0.0);
console.log(myAccount.balance);
myAccount.deposit = 30;
console.log(myAccount.balance);
myAccount.deposit = 30;
console.log(myAccount.balance);

{
  //
  class BankAccount {
    accountNo: number;
    static amount: number;

    constructor(accountNo: number, amount: number) {
      (this.accountNo = accountNo), (BankAccount.amount = amount);
    }

    get balance() {
      return BankAccount.amount;
    }
    set deposit(amount: number) {
      BankAccount.amount += amount;
    }
  }

  let myAccount = new BankAccount(12312, 0.0);
  console.log(myAccount.balance);
  myAccount.deposit = 30;
  console.log(myAccount.balance);
  myAccount.deposit = 30;
  console.log(myAccount.balance);

  let yourAccount = new BankAccount(45464, 5.5);
  console.log(myAccount.balance);

  //
}

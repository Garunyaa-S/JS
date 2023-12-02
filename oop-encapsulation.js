class BankAccount {
  constructor(accountNo, accountHolderName, balance) {
    this._accountNo = accountNo;
    this._accountHolderName = accountHolderName;
    this._balance = balance;
  }
showAccDetails() {
    console.log(`Account Number: ${this._accountNo}`);
    console.log(`Account Holder Name: ${this._accountHolderName}`);
    console.log(`Balance: ${this._balance}`);
}

deposit (amount) {
    this._balance += amount;
    this.showAccDetails();
}

withdraw (amount) {
  if (this._balance >= amount) {
    this._balance -= amount;
    this.showAccDetails();
  } else {
    console.log("Insufficient Balance");
  }
  }
}

let account1 = new BankAccount("10190", "Garunyaa", 1000);
account1.deposit(500);
let account2 = new BankAccount("10110", "Thrisha", 1000);
account2.deposit(700);
let account3 = new BankAccount("10220", "Ranjani", 1000);
account3.withdraw(500);
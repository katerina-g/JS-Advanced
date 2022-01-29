class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer (customer) {
        if(this.allCustomers.some((c) =>c.firstName == customer.firstName)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        this.allCustomers.push(customer)
        return customer
    }
    depositMoney (personalId, amount){
        if(!this.allCustomers.some((c) =>c.personalId == personalId)) {
            throw new Error('We have no customer with this ID!')
        }
        let c = this.allCustomers.find((c) =>c.personalId == personalId)
        c.transactions = c.transactions || []
        if (!c.totalMoney) {
            c.totalMoney = 0
        }
        c.totalMoney += amount
        c.transactions.push(`${c.firstName} ${c.lastName} made deposit of ${amount}$!`)
        return `${c.totalMoney}$`


    }
    withdrawMoney (personalId, amount){
        if(!this.allCustomers.some((c) =>c.personalId == personalId)) {
            throw new Error('We have no customer with this ID!')
        }
        let c = this.allCustomers.find((c) =>c.personalId == personalId)
        c.transactions = c.transactions || []
        if (c.totalMoney >= amount) {
            c.totalMoney -= amount
            c.transactions.push(`${c.firstName} ${c.lastName} withdrew ${amount}$!`)
            return `${c.totalMoney}$`
        } else {
            return `${c.firstName} ${c.lastName} does not have enough money to withdraw that amount!`
        }

    }
    customerInfo (personalId) {
        if(!this.allCustomers.some((c) =>c.personalId == personalId)) {
            throw new Error('We have no customer with this ID!')
        } else {
            let c = this.allCustomers.find((c) =>c.personalId == personalId)
            let result = ''
            result += `Bank name: ${this._bankName}\nCustomer name: ${c.firstName} ${c.lastName}\nCustomer ID: ${c.personalId}\nTotal Money: ${c.totalMoney}$\nTransactions:\n`
            result += `${c.transactions.reverse().map((x, i, arr) => `${arr.length - i}. ${x}`).join('\n')}`
            return result.trim()
        }
    }
}


// let customers = [{ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }, { firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }]
// let customer = { firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }
// let amount = 250
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));

bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));


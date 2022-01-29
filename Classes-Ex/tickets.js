function solve(ticketsArr, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tiketsObj = [];
    ticketsArr.forEach((entry) => {
        const[dest,price,status] = entry.split('|');
        
        tiketsObj.push(new Ticket(dest, Number(price), status))
    });

    if(sortCriteria == 'destination') {
        tiketsObj.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        })

    } else if(sortCriteria == 'status') {
        tiketsObj.sort((a, b) => {
            return a.status.localeCompare(b.status);
        })
    } else {
        tiketsObj.sort((a, b) => {
            return a.price - b.price
        })
    }
    return tiketsObj;
}
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'))

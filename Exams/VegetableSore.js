class VegetableStore {
    constructor(owner , location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        
    }

    loadingVegetables (vegetables) {
        vegetables.forEach((v) => {
            let [type, quantity, price] = v.split(' ');
            quantity = Number(quantity);
            price = Number(price);
        })
        return vegetables
     
    }

}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

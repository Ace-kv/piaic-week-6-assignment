// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount;
// otherwise, apply a 5% discount.

let discountCalc = (price: number) => {

    if (price > 100) {
        return console.log("You are eligible for a 10% discount");
    }
    return console.log("You are eligible for a 5% discount");
    
}

discountCalc(101)
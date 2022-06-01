console.log('hello!')

let totalSpent = 8000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
    console.log('Yuo are Bronze partner, discount 2%')
    discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log('You are Silver partner, discount 5%')
    discount = 0.05;
} else if (totalSpent >= 5000) {
    console.log('You are Gold partner, discount 10%')
    discount = 0.1;
} else {
    console.log('You are not partner, discount 0%')
}

payment -= payment * discount;

console.log(`You order costs ${payment} credits with discount ${discount * 100}%.`)

totalSpent += payment; 

console.log(`You total spend ${totalSpent} credits.`)

console.log('Good luck!!!')
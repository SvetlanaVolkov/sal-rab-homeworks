function calcShipping(sum, min, shipping) {
    let productSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки
    
    // Задание №2.1. Рассчитать доставку
    let shippingSum;
    if (productSum === 0 || productSum >= freeShippingMinSum) {
        shippingSum = 0;
    } 

    if (productSum > 0 && productSum < freeShippingMinSum) {
        shippingSum = shipping;
    }

    // создайте переменную shippingPrice

    // если productsSum равно 0,
    // то shippingPrice присвоить значение 0

    // если productsSum больше нуля, но меньше freeShippingMinSum,
    // то shippingPrice присвоить значение shipping

    // если productsSum > или равен freeShippingMinSum,
    // то shippingPrice присвоить значение 0

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку
    let discountSum;
    if (productsSum >= discountMinSum) {
        discountSum = productsSum / 100 * discountPart;
    } else {
        discountSum = 0;
    }


    // создайте переменную discountPrice

    // если productsSum больше или равно discountMinSum,
    // то присвойте discountPrice значение discountPart процентов от productsSum,
    // иначе присвойте discountPrice значения 0

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине
    let totalSum = productsSum - discountSum;


    // создайте переменную totalSum

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    totalSum += shippingSum
    // прибавьте к totalSum значение shippingSum
    let freeShipping = shippingSum === 0;

    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}

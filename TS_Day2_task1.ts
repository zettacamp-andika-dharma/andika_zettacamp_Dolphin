function combinationArray(array: (number | string)[]): string {
    return array.join(' ');
}

const mixedArray1: (number | string)[] = [1, "data", "3", "result"];
console.log(combinationArray(mixedArray1));

const mixedArray2: (number | string)[] = ["Bejo", "has", 4, "sport", "car"];
console.log(combinationArray(mixedArray2));

console.log('==============================');

function arrayValueBasedOnType(array: (number | string)[]): number | string {
    if (array.every((arrayElement) => typeof arrayElement === 'undefined')) {
        return 'Invalid Input';
    }
    if (array.every((arrayElement) => typeof arrayElement === 'number')) {
        let result = 0;
        for (let element of array)
            result = result + Number(element);
        return result;
    } else if (array.every((arrayElement) => typeof arrayElement === 'string')) {
        return array.join(' ');
    } else {
        return "Invalid input";
    }
}

const numberArray: number[] = [1, 2, 3, 4];
console.log(arrayValueBasedOnType(numberArray));
const stringArray: string[] = ["the", "dolphin", "of", "zettacamp"];
console.log(arrayValueBasedOnType(stringArray));
const mixedArray: any[] = ["Bejo", "has", 4, "sport", "car"];
console.log(arrayValueBasedOnType(mixedArray));
const emptyArray = [];
console.log(arrayValueBasedOnType(emptyArray));

console.log('==============================');

type Product = {
    name: string;
    vendor: string;
    quantity: number;
    stock: number;
    price: number;
};

type simpleResultProduct = {
    name: string;
    buyAble: boolean;
    totalPrice?: number;
}

function customTypeObject(productObject: Product): simpleResultProduct {
    const resultProduct: simpleResultProduct = {
        name: productObject.name,
        buyAble: productObject.quantity < productObject.stock,
    };

    if (resultProduct.buyAble) {
        resultProduct.totalPrice = productObject.quantity * productObject.price;
    }

    return resultProduct;
}

const product1: Product = {
    name: "Coca-cola",
    vendor: "Coca-cola Company",
    quantity: 5,
    stock: 100,
    price: 5000
};

const product2: Product = {
    name: "Sari Roti",
    vendor: "Toko Kue Sebelah",
    quantity: 2,
    stock: 0,
    price: 10000
};

console.log(customTypeObject(product1));
console.log(customTypeObject(product2));

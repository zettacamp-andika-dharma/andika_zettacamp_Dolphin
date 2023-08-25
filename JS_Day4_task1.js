function purchaseBook(bookDetail, bookDiscount, bookTax, amountStock, amountPurchaseBook) {
    
    const price = 100000;

    const discount = bookDiscount + "%";
    const amountDiscount = ((price * bookDiscount) / 100);
    const priceAfterDiscount = price - amountDiscount;

    const tax = bookTax + "%";
    const taxAmount = ((priceAfterDiscount * bookTax) / 100);
    const priceAfterTax = priceAfterDiscount + taxAmount;


    const buyBook = price < 1000000 ? "beli" : "Tidak membeli";


    for (let i = 0; i<amountPurchaseBook; i++) {
        if (amountStock - amountPurchaseBook > 0) {
            console.log("This Book can be Purchased Again");
            break;
        } else if (amountStock - amountPurchaseBook == 0) {
            console.log("This book can no longer be purchased");
            break;
        }
    }
    
    // const bookStatus = amountPurchaseBook < amountStock ? "This Book can be Purchased Again" : "This book can no longer be purchased";

    const totalPrice = priceAfterTax * amountPurchaseBook;

    return {
        bookDetail, price, discount, amountDiscount, priceAfterDiscount, tax, taxAmount, priceAfterTax, buyBook, amountPurchaseBook, totalPrice
    };
    
}

//Memanggil function
console.log (purchaseBook("Marmut Merah Jambu", 15, 10, 20, 19));
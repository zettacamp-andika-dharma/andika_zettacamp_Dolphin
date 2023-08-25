function purchaseBook(bookDetail, bookDiscount, bookTax) {
    
    const price = 100000;

    const discount = bookDiscount + "%";
    const amountDiscount = ((price * bookDiscount) / 100);
    const priceAfterDiscount = price - amountDiscount;

    const tax = bookTax + "%";
    const taxAmount = ((priceAfterDiscount * bookTax) / 100);
    const priceAfterTax = priceAfterDiscount + taxAmount;


    const buyBook = price < 75000 ? "beli" : "Tidak membeli";

    return {
        bookDetail, price, discount, amountDiscount, priceAfterDiscount, tax, taxAmount, priceAfterTax, buyBook
    };
    
}

//Memanggil function
console.log (purchaseBook("Marmut Merah Jambu", 15, 10));
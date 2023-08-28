function purchaseBook(bookDetail, bookDiscount, bookTax, amountStock, amountPurchaseBook, creditDuration) {
    
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
    

    const totalPrice = priceAfterTax * amountPurchaseBook;

    const creditPrice = totalPrice / creditDuration; 
    const creditDate = 28;
    const arrayMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const startMonth = 8;
    const dueDate = [];
    for (let i = 0; i<creditDuration; i++) {
        const rangeMonth = (i+startMonth)%12;
        arrayMonth[rangeMonth];
        const rangeYear = 2023+Math.floor((startMonth+i)/12);
        dueDate.push(creditDate + ' ' + arrayMonth[rangeMonth] + ' ' + rangeYear + ' : ' + creditPrice); 
    }

    return {
        bookDetail, price, discount, amountDiscount, priceAfterDiscount, tax, taxAmount, priceAfterTax, buyBook, amountPurchaseBook, totalPrice, dueDate
    };
    
}

//Memanggil function
console.log (purchaseBook("Marmut Merah Jambu", 15, 10, 20, 19, 5));
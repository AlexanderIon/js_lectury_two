const deleteOnegood = function(id_prod){
    finded = [myBasket.findIndex(el=> el.good === id_prod)]
    myBasket.splice(finded,1)
}

const cleanBasket = function(){
    myBasket.length = 0
}

const addToBastet = function (id_product,count_product){
    countProduct = myBasket.length;
    if ( countProduct === 0  ){
        basket.good = id_product;
        basket.amount = count_product;
        myBasket.push(basket);
        basket ={"good":NaN,"amount":NaN};

    }
    else {
        let listProduct = [NaN]
        for (i = 0; i < countProduct; i++){
            if (myBasket[i].good === id_product){
                myBasket[i].amount = Number(myBasket[i].amount) + Number(count_product);
                basket ={"good":NaN,"amount":NaN};
                break;
                
            }
            else{                
                basket.good = id_product;
                basket.amount = count_product;
                
                
            }
        }
        if(isNaN(basket.good)){
            
        }
        else{
            myBasket.push(basket);
            basket ={"good":NaN,"amount":NaN};
        }
      
    }
}


const finalOrder = function(basketClient,productCatalog){
    let total = {'totalAmount':NaN,'totalSumm':NaN};

    let totalAmount = 0;
    let totalSumm = 0;
    for (i=0;i<basketClient.length;i++){
        // console.log(basketClient[i])
        idGood = basketClient[i].good;
        id = productCatalog.findIndex(e => e.id == idGood);
        priceProduct = productCatalog[id].price;
        priceProduct = priceProduct * basketClient[i].amount;
        totalSumm = priceProduct +totalSumm;
        totalAmount += Number(basketClient[i].amount);
        
    }
    total.totalAmount = totalAmount;
    total.totalSumm = totalSumm;
    // console.log( totalAmount)
    return total;
}


let aProduct={"id":NaN,"name":NaN,"description":NaN,"sizes":NaN,
"price":NaN,"available":NaN};

let basket ={"good":NaN,"amount":NaN};

let myCatalog = [];
let myBasket = [];

let anyList = [[1,"кросовки","супер новые","45","6500","в наличии"],
[2,"майка","коллекция 2020","52","3500","в наличии"],
[3,"шорты","до колена","55","1500","в наличии"],
[4,"носки","хлопок","42","100","в наличии"],
[5,"куртка","не помокаемая","54","5500","под заказ"],
];

// console.log(anyList.length);
for (i=0;i<anyList.length;i++){
    // console.log(anyList[i])
    let t = 0;
    for (key in aProduct ){
        aProduct[key] = anyList[i][t];
        t++

    }
    myCatalog.push(aProduct)
    aProduct={"id":NaN,"name":NaN,"description":NaN,"sizes":NaN,"price":NaN,"available":NaN}
    // console.log(myCatalog)

}
console.log(myCatalog[4].available);

// const finalOrder = function (myBasket,myCatalog){


// }


console.log(myBasket.lenght)
addToBastet('5','20')
addToBastet('2','10')
addToBastet('3','5')
addToBastet('4','1')
addToBastet('3','10')
for (i=0;i<myBasket.length;i++){
    console.log(myBasket[i])
}

console.log(myBasket.length)



r = finalOrder(myBasket,myCatalog)
console.log(r)



    

    

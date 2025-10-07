import createItem from "./service/item.js";
import products from "./service/cart.js";
console.log("Cart Shopee!");
const myCart = [];


const product1 = await createItem("Calça",15,1);
const product2 = await createItem("Camisa Basica",55,1);
const product3 = await createItem("Tenis",100,4);


await products.addItem(myCart,product1);
await products.addItem(myCart,product2);
await products.addItem(myCart,product3);



await products.removeItemquantity(myCart,product3);
await products.removeItemquantity(myCart,product3);
await products.removeItemquantity(myCart,product3);


await products.calcTotalItem(myCart);
console.log("=============================================================================");
console.log("=============================================================================");

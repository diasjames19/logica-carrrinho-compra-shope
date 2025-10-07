async function addItem(userCart,item){

    userCart.push(item);
    
}
async function deleteItem(userCart,name){
    const seleteItemRemove = userCart.findIndex((index)=> index.name === name);
        if(seleteItemRemove != -1 ){
             userCart.splice(seleteItemRemove,1);
        }

}
async function removeItemquantity(userCart,item) {
    const indexFound = userCart.findIndex((product)=> product.name === item.name)
    
    if(indexFound === -1){
        console.log("Produto Não encontrado");
    }

    if(userCart[indexFound].quantity > 1){
         userCart[indexFound].quantity = userCart[indexFound].quantity - 1;
         return;
    }
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound,1);
         return;
    }

    }

async function removeItemFromIndex(userCart,index) {
    const deleteItemIndex = index - 1;

    if(index >= 0 && userCart.length > index){
            userCart.splice(deleteItemIndex,1);
    }

    }
async function calcTotalItem(userCart)
{
    const result = userCart.reduce((total,item)=>total + item.subtotal(),0);
    console.log(`SubTotal ->${result}`);
}

async function displayerCart(userCart) {
    userCart.forEach((item,index)=>{
        console.log(`Item:${index+1}\nProduto:${item.name} Qtd:${item.quantity}\nPreço:R$->:${item.price}|`);
    });

    
}

const products = {
    addItem,
    deleteItem,
    removeItemquantity,
    calcTotalItem,
    displayerCart,
    removeItemFromIndex
}

export default products;
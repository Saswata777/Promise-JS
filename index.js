const user_API = "https://reqres.in/api/users?page=2";

const user= fetch(user_API);
console.log(user);

user.then(function(data){
            console.log(data);
});







const cart = ["Shoes", "Pants", "Kurta"];

const promise = createOrder(cart);
console.log(promise);

promise.then(function (orderId){
    console.log(orderId);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // Create Order
        // Validate Cart
        // Order Id
        if(!ValidateCart(cart)){
            const err = new Error("Cart is not valid");
            reject (err);
        }

        // logic for Create order

        const orderId = "12345";

        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }

        
    });
    return pr;
}

function ValidateCart(cart){
    // return true;
    return false;    //---> It thorows error in console
}


const user_API = "https://reqres.in/api/users?page=2";

const user= fetch(user_API);
console.log(user);

user.then(function(data){
            console.log(data);
});




const cart = ["Shoes", "Pants", "Kurta"];

const promise = createOrder(cart);

promise.then(function (orderId){
    console.log(orderId);
});

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
            resolve(orderId);
        }

        
    });
    return pr;
}

function ValidateCart(cart){
    return true;
}
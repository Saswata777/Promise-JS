const user_API = "https://reqres.in/api/users?page=2";

const user= fetch(user_API);
console.log(user);

user.then(function(data){
            console.log(data);
});
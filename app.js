
// Create an email pattern

let email = "shapu23@gmail.com";
let email_pattern = /^[a-z0-9_.]*@[a-z]{2,}\.[a-z]{2,5}$/;

console.log(email_pattern.test(email));







// Create a  username pattern

let username = "shapu_23";
let user_pattern = /^[a-z0-9-_]{6,10}$/;

console.log(user_pattern.test(username));








// Create a Bangladeshi phone number pattern

let phone = "01404176498";
let phone_pattern = /^(\+8801|01)[0-9]{9}$/;

console.log(phone_pattern.test(phone));








// Create a password pattern 

let pass = "soro#bindu123";
let pass_pattern = /^[a-z0-9!@#$%^&*()_+-]{8,}$/;

console.log(pass_pattern.test(pass));






// Create a zipcode pattern  

let zipcode = "1204";
let zip_pattern = /^[0-9]{4}$/;

console.log(zip_pattern.test(zipcode));









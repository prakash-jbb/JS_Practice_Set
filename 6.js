let name = "Prakash";
let email = "jbb0521@gmail.com";
let age = 18;

// console.log(typeof name);

// Name data type check
if (typeof name === 'string') {
    console.log("Name Verify");
} else {
    console.log("Name should be String");
}

// Check if email include any specails charcter excluding '@
if (email.includes(('*' || '$') || ('&' || '#'))) {
    console.log("Imvalid Email, Email should have Only Aplphabet, Numbers and @ ");
} else if (email.includes('@gmail.com')) {
    console.log("Gmail Verify")
} else {
    console.log("Invalid Email Address")
}





// Age data type check
if (typeof age === 'number') {
    console.log("Age Verify");
} else {
    console.log("Age should be Number");
}

// Another way to verify age
// if (isNaN(age)) {
//     console.log("Age must be number");
// }
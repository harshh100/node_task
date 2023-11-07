var user = {
    first_name: "Yourname",
    last_name: "Yoursurname",
    age: "22",
    department: "CE"
};

// Print object's properties
console.log("Object properties:");
for (var key in user) {
    console.log(key + ": " + user[key]);
}

// Delete the second property
var keys = Object.keys(user);
if (keys.length >= 2) {
    var secondProperty = keys[1];
    delete user[secondProperty];
    console.log("\nAfter deleting the second property:");
    console.log(user);
}

// Get the length of the object
var objectLength = Object.keys(user).length;
console.log("\nObject length:", objectLength);


var technologies = ['NodeJs', 'ReactJs', 'DenoJs', 'NestJs', 'NextJs'];

console.log("Iterating over the array:");

for (var i = 0; i < technologies.length; i++) {
    console.log(technologies[i]);
}

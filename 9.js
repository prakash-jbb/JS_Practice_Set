// Array which have Number and String
let list = [1, 5, "Anshu", 7, 50, 785, "Rahul"];

for (x in list) {
    // Find type of array element
    let result = typeof list[x];

    if (result === "string") {
        console.log("Fond The First String:", list[x]);
        break;

    }
}
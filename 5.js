let typeOfPackage = "standard";

switch (typeOfPackage) {
    case "standard":
        console.log("Estimated delivery time: 3 to 5 Days");
        break;
    case "express":
        console.log("Estimated delivery time: 1 to 2 Days");
        break;
    case "overnight":
        console.log("Estimated delivery time: Next Day");
        break;
    default:
        console.log("Invalid type of package");
}
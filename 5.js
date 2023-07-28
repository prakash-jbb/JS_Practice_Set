let typeOfPackage = "overnight";

switch (typeOfPackage) {
    case "standard":
        console.log("3 to 5 Days");
        break;
    case "express":
        console.log("1 to 2 Days");
        break;
    case "overnight":
        console.log("Next Day");
        break;
    default:
        console.log("Invalid type of package");
}
// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

console.log("\nCreating Variables");
let favActorFirstName = "Tiger ";
let favActorLastName = "Shroff";
let fullName;

console.log("\nPerforming Concatenation");
// fullName = favActorFirstName+favActorLastName;
// fullName=favActorFirstName.concat(favActorLastName);
fullName=`${favActorFirstName} ${favActorLastName}`;
console.log(fullName);

console.log("\nPerforming Uppercase");
console.log("\nPerforming Uppercase operation");
console.log(fullName.toUpperCase());

console.log("\nUsing Backticks");
message = `My favourite Actor ${fullName} has a fit body`;
console.log(message);

console.log("Performing Append Operation");
message+=" and his best show is Silicon Valley";
console.log(message);
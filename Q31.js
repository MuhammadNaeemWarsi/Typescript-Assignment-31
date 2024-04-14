"use strict";
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
// empty 
var emptyUserNames = [];
// non empty array 
var userNames = ["admin", "meer", "raheel", "amjad", "umair"];
// function 
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log("we need to find some users!");
        return;
    }
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin,would you like to see a status reprot?");
        }
        else {
            console.log("Hello ".concat(username, ",thank you for logging in again"));
        }
    }
}
console.log("for non empty username:\n");
greetUsers(userNames);
userNames = [];
console.log("\n\n for empty username:\n");
greetUsers(userNames);

// Password and 4 attempts. Execution through while or do while.
// 1. Request a password from the user.
// 2. If the password is not correct, report that there are 4 attempts left:
//    - if subsequent incorrect passwords are reduced, attempts are reduced;
//    - when there are no more attempts, display the message: "Please try again later.";
// 3. If the user immediately or after several attempts entered the correct password, display the message "Welcome to the website!".
// 4. We implement the task without break and labels.

let password = prompt("Please, enter your password:");
let i = 4;

if (password === "LOGOS") alert("Welcome to the web site!");

while (i > 0 && password !== "LOGOS")
	password = prompt(`Please, enter your password. You have ${i--} attempts:`);

if (i == 0 && password !== "LOGOS") alert("Please, try again later.");
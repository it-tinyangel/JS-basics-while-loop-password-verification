let password = prompt("Please, enter your password:");
let i = 4;

if (password === "LOGOS") alert("Welcome to the web site!");

while (i > 0 && password !== "LOGOS")
	password = prompt(`Please, enter your password. You have ${i--} attempts:`);

if (i == 0 && password !== "LOGOS") alert("Please, try again later.");
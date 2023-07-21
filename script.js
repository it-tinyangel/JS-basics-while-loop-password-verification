let password = prompt("Please, enter your password:");
let i = 4;

while (i > 0 && password !== "LOGOS")
	password = prompt(`Please, enter your password. You have ${i--} attempts:`);

if (password === "LOGOS") alert("Welcome to the web site!");

else alert("Please, try again later.");
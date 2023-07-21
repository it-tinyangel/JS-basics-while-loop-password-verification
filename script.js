let password = prompt("Please, enter your password:");
let i = 4;

// v.1:
// if (password === "LOGOS") alert("Welcome to the web site!");

// while (i > 0 && password !== "LOGOS")
// 	password = prompt(`Please, enter your password. You have ${i--} attempts:`);

// if (i == 0 && password !== "LOGOS") alert("Please, try again later.");

// v.2:
if (password === "LOGOS") alert("Welcome to the web site!");

else if (password !== "LOGOS") {
	do password = prompt(`Please, enter your password. You have ${i--} attempts:`);
	while (i > 0);
} 

else alert("Please, try again later.");

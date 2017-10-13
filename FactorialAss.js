
function fact (number){
	if (number == 0){
		return 1;
	}
	else {
		return (number * fact(number-1)); //recurssion formular. Keeps executing till number == 0.
	}
}

console.log(fact(150));
/*

fact =1;
for(n=5; n>0; n--){
	fact = fact *n;
}
console.log(fact);
*/
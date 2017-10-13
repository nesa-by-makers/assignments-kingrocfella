var number;
function threes(number){
	if (number % 3 == 0){
		console.log("Fizz");
	}
}

function fives(number){
	if (number % 5 == 0){
		console.log("Buzz");
	}
}

function both(number){
	console.log("FizzBuzz");
}
function neither(number){
	if (number%3 !=0 && number%5 !=0){
		console.log(number);
	}
}

for (number =1; number<=100; number++){
	if(number % 3 == 0 && number% 5 ==0 ){
		both(number);
	}
threes(number);
	neither(number);
fives(number);
;
}
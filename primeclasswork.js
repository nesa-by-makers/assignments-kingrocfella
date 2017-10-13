var sum =0;
for (var num = 2; num<=1000; num++){
	prime(num);
}
console.log(sum + " is the sum of the prime numbers");

function prime(x){
	var ans = true; // decided to set it to true so once we get an instance where the remainder = 0, it becomes a non-prime and cancels it out.
	for (var counter = 2; counter < x; counter++){
		if (x%counter == 0){
			ans = false;
		}
	}
	if(ans == true){
		console.log(x + "  is a prime number");
		sum = sum + x;
	}
}

	
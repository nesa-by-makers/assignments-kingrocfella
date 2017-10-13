
var sum =0;
for(var num =2; num <= 10; num++){
	var isprime = true;
	for (var count= 2; count < num; count++){
		if (num%count == 0){
			isprime = false;
		}
	}
	if (isprime == true){
	console.log(num);
		sum = sum + num;
	}
}
console.log(sum);
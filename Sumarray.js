const myNums=[1,2,3,4,5];

var sum=myNums.reduce((accumulator, currentvalue) => {
	return accumulator + currentvalue
},0);

console.log(sum)
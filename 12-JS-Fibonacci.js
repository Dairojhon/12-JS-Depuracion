function fibonacci(num){
    let num1 = 0;
    let num2 = 1;
    let numFibo = 1
    let arrayFibo = [];
    for (i = 0; i < num; i++){             
        arrayFibo = [...arrayFibo, numFibo]
        console.log(numFibo)
        numFibo = num1 + num2;
        num1 = num2;
        num2 = numFibo;               
    }
    console.log(arrayFibo)
    return arrayFibo
}

fibonacci(10)
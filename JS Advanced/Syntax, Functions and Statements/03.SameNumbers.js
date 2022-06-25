function solve(input) {
    let array = String(input).split('').map(n => Number(n));
    let isSame = array.filter((n) => n != array[0]);
    let sum = array.reduce((acc, num) => acc + num);
    let result = isSame.length == 0 ? true : false;
    console.log(result);
    console.log(sum);
}

solve(2222222);
console.log('Hello console');
// Function 1
let fun1 = function () {
    let a = 20;
    let b = 10;
    if (a === b) {
        console.log('a===b');
        alert('a===b');
    } else {
        if (a == b) {
            alert('a==b');
            console.log('a==b');
        } else {
            if (a > b) {
                alert('a>b');
                console.log('a>b');
            } else {
                alert('a<b');
                console.log('a<b');
            }
        }
    }
}
//Function 2
let funEnd0 = function () {
    let a = +prompt('Please, input number here', 'Number')
    // a = +a;
    if (a % 10 == 0) {
        console.log('TRUE');
    } else {
        console.log('FALSE');
    }
}
// Function 3
let count = 0
let fun3 = function () {
    count++;
    alert(count)
}
// Function 4
let flag = 0;
let counterRandom = 0;
let fun4RandomValue = function () {
    if (flag==0){
        counterRandom = +prompt('Input your number', 0)
        if (isNaN(counterRandom)){
            counterRandom=-1
        }
        flag=1;
    }
    if (flag==1){
        counterRandom++;
        alert(counterRandom)
    }
}




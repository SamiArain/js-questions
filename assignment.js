// q1 reverse a number

var y = 32243 ;
function reverse(){
    y = y.toString();
    console.log(y);
    y = y.split('');
    console.log(y);
    y = y.reverse();
    console.log(y);
    y = y.join("");
    console.log(y);
}
reverse();
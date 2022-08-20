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

// q2 palindrome

function palindrome(){
    var str = prompt("enter word to check whether it is palindrome or not : ");
    var revStr = str.split("").reverse().join("");
    console.log(revStr);
    if (str === revStr){
        console.log("its palindrome");
    }
    else{console.log("not a palindrome")};
    }
    
    palindrome();
    
    // q3 concatination
    
    function concatination(x){
        x = x.split('');
        console.log(x);
        y = x.slice(0,1);
        console.log(y);
        z = x.slice(0,2).join("");
        console.log(z);
        a = x.slice(0,3).join("");
        console.log(a);
        b = x.slice(1,2).join("");
        console.log(b);
        c = x.slice(1,3).join("");
        console.log(c);
        d = x.slice(2,3).join("");
        console.log(d);
        e = y.concat(z,a,b,c,d);
        console.log(e);
        e = e.toString();
        console.log(e);
    }
    
    concatination("dog");
    
    
    // q4 sorting
    
    function abc(y){
        y = y.split("").sort().join(""); 
        return y ;
    }
    
    console.log(abc("webmaster"));
    
    // q5 Title case
    
    function titlecase(sentence){
        word = sentence.split(" ");
        for(var i = 0 ; i < word.length ; i++){
            word[i] = word[i][0].toUpperCase() + word[i].slice(1)
        }
        
        return word.join(" ") ;
    }
    
    console.log(titlecase("the quick brown fox"));
    
    // q6 longest word
    
    function longWord(sentence){
        word = sentence.split(" ");
        var maxlength = 0 ;
        var longestWord;
        for(var i = 0 ; i < word.length ; i++){
            if(word[i].length >= maxlength){
                maxlength = word[i].length;
                longestWord = word[i]
            }
        }
        
        return longestWord ;
    }
    
    console.log(longWord("Web Development Tutorial fifaworlcup2022 Era"));
    
    // q7 count vowels
    
    function vow(sentence){
        // console.log(sentence[4]);
        // word = sentence.split("");
        // console.log(word[4]);
        var count = 0 ;
        sentence = sentence.toLowerCase();
        for(var i = 0 ; i < sentence.length ; i++){
            if(sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u"){
                count = count+1;
                //console.log("hahaha")
            }
        }
        
        return count ;
    }
    
    console.log(vow("thE quIck brOwn fox AEiou"));
    
    // q8 prime number or not
    
    function primeNo(num){
        if (num < 2) {
            console.log(num + " number is not prime number");
        }
        for(var i = 2 ; i < num ; i++){
            if (num % i === 0) {
                console.log(num + " number not prime number");
                return false;
            }
        }
        console.log(num + " number is prime number");
        return true;
        //console.log(num + " is prime number");
    }
    
    primeNo(+prompt("enter number to check it is prime or not : "));
    
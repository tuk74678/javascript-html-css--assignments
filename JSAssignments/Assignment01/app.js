// Excercise 01

let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130
};

let sum = 0;

for (let s in salaries){
     sum += salaries[s];
}

console.log("The total salaries for the team is: ", sum);

// Exercise 02

function multiplyNumeric(obj){
    for(let i in obj){
        if(typeof obj[i] === 'number'){             // check if the object property is a number then we multiply by 2
            obj[i] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);

// Exercise 03

function checkEmailId(str){
    str = str.toLowerCase();        // convert the input string to all lowercase
    let at = str.indexOf("@");
    let dot = str.lastIndexOf(".");

    return at > 0 && dot > at + 1 && dot < str.length - 1;
} 

console.log(checkEmailId("helloworld@gmail.com"));      // true
console.log(checkEmailId("hello.world@gmailcom"));      // false because . came before @
console.log(checkEmailId("helloworld@.com"));           // false because there's no character in between @ and .

// Exercise 04

function truncate(str, maxlength){
    let strLen = str.length;

    if(strLen > maxlength){
        str = str.slice(0, maxlength - 1) + "...";
    }
    console.log(str);
}

truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20);

// Exercise 05

let styles = ["Jame", "Brennie"];       // create an initial array
console.log(styles);

styles.push("Robert");      // append Robert to the end
console.log(styles);

let midIndex = Math.floor(styles.length / 2);          // use Math.floor to round number down to the nearest integer
styles[midIndex] = "Calvin";
console.log(styles);

styles.shift();         // remove the first element from the array
console.log(styles);

styles.unshift("Rose", "Regal");        // add more element at the beginning of the array
console.log(styles);



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


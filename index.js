const entree = "Turkey";
const side = "Vegetables";
const dessert = "Pecan Pie";
const greeting = "Bon Appetit!";
// console.log ("The menu for today is " + entree + " with " + side + " and " + dessert + " for dessert! " + greeting);

const a=2;
const b=3;
// let c=a+b; 

const meal = [entree, side, dessert];
// console.log ("Today's menu includes " + meal);
// console.log ("Today's menu includes " + meal2);

let app; 
let main = "Turkey";
if (main === entree) {
    app = "Stuffed Mushrooms"
} else {
    app = "Baked Brie"
}
meal.push(app);
console.log(meal);

function toggleTurkeyList() {
    let list = document.getElementById('turkeylist');
    if (list.style.display === "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    };
}

function toggleVeggieList() {
    let list = document.getElementById('veggielist');
    if (list.style.display === "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    };
}

function togglePieList() {
    let list = document.getElementById('pielist');
    if (list.style.display === "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    };
}


let itemName = prompt("What is the name of your item?");
let itemCost = prompt("what is base price?");
let searchEngine = prompt("did you find the item via search engine?");
let comparisonSite = prompt("did you visit a comparison site?");
let blackFriday = prompt("is today black friday?")
let baseMessage = `The base price of ${itemName} is ${itemCost}.`

if(searchEngine === "yes"){
	itemCost *= 1.01;
	baseMessage += "Because you came frome a search engine, we will increase the price of the item by 1% to pay the search engine."
}
if (comparisonSite === "yes"){
	itemCost *= .9;
	baseMessage += "Because you are a comparison shopper, we will decrease the price of the item by 10%."
}
if (blackFriday === "yes"){
	itemCost *= .75;
	baseMessage += "Because it's Black Friday, we'll drop the price by 25%."
};

alert(`${baseMessage} Your total is $${itemCost.toFixed(2)}`);
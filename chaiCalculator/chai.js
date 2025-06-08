const numberOfCups = prompt('Karibu! How many cups of Chai Bora would you like to make?')
//inputs number of cups user wants

//calculates the ingredients required based on how many cups are entered
function calculateChaiIngredients(numberOfCups){
    //water should be 200 per cup
    //milk should be 50ml per cup
    //tea leaves should be 1 tablespoon per cup
    //sugar should be 2 teaspoons per cup
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${numberOfCups * 200} ml
Milk: ${numberOfCups * 50} ml
Tea Leaves (Majani): ${numberOfCups} tablespoons
Sugar (Sukari): ${numberOfCups *2} teaspoons

Enjoy your Chai Bora!`)
//prints on the console
}
calculateChaiIngredients(numberOfCups)
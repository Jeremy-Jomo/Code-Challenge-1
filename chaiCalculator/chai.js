const numberOfCups = prompt('Karibu! How many cups of Chai Bora would you like to make?')

function calculateChaiIngredients(numberOfCups){
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${numberOfCups * 200} ml
Milk: ${numberOfCups * 50} ml
Tea Leaves (Majani): ${numberOfCups} tablespoons
Sugar (Sukari): ${numberOfCups *2} teaspoons

Enjoy your Chai Bora!`)
}
calculateChaiIngredients(numberOfCups)
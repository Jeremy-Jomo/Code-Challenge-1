const cups = prompt('Karibu! How many cups of Chai Bora would you like to make?')

function calculateChaiIngredients(cups){
    console.log(`To make ${cups} cups of Kenyan Chai, you will need:
Water: ${cups * 200} ml
Milk: ${cups * 50} ml
Tea Leaves (Majani): ${cups} tablespoons
Sugar (Sukari): ${cups *2} teaspoons

Enjoy your Chai Bora!`)
}
calculateChaiIngredients(cups)
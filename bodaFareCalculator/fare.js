const distance = prompt('Unafika wapi Mkubwa?\nKilometer ngapi?:');
function calculateBodaFare(distance){
    console.log(`Uko kwote? Io ni ${distance} km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES ${distance * 15}
Total: KES ${(distance*15)+50}

Panda Pikipiki!`)
}
calculateBodaFare(distance)
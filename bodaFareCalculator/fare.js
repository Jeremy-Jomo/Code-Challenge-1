const distanceInKm = prompt('Unafika wapi Mkubwa?\nKilometer ngapi?:');
//gets user input for distance

//calculates boda boda fare
function calculateBodaFare(distanceInKm){
    let baseFare=50
    //minimum charge
    let chargePerKm=15
    //charge depending on kilometers KES 15per kilometer
    totalFare = baseFare + (distanceInKm * chargePerKm)
    //calculates total fare

    console.log(`Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES ${distanceInKm * 15}
Total: KES ${totalFare}

Panda Pikipiki!`)
//prints in the console
}
calculateBodaFare(distanceInKm)
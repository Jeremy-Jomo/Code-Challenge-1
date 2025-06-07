const distanceInKm = prompt('Unafika wapi Mkubwa?\nKilometer ngapi?:');



function calculateBodaFare(distanceInKm){
    let baseFare=50
    let chargePerKm=15
    totalFare = baseFare + (distanceInKm * chargePerKm)


    console.log(`Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES ${distanceInKm * 15}
Total: KES ${totalFare}

Panda Pikipiki!`)
}
calculateBodaFare(distanceInKm)
const amountToSend = prompt('Unatuma Ngapi? (KES):');
//inputs the amount to send
function estimateTransactionFee(amountToSend){
    amountToSend= Number(amountToSend)
    //makes sure prompted input is a number


    if (amountToSend<666){
        console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${10}
Total amount to be debited: KES ${10 + amountToSend }

Send Money Securely!`)
//anything below KES666 transaction =KES10
    }else if(amountToSend>666 && amountToSend<=4666){console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${0.015 * amountToSend}
Total amount to be debited: KES ${amountToSend + (0.015 * amountToSend)}

Send Money Securely!`)
//anything with a transaction of between KES10 and KES70 is multiplied by 1.5%
}else {
    console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${70}
Total amount to be debited: KES ${amountToSend+70}

Send Money Securely!`)
}
//anything above KES70 transaction fee remains KES70
}
estimateTransactionFee(amountToSend)
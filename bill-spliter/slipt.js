function splitBill(bill, tipPercent, people) {

    if (people < 1){
        console.log("error: need at least 1 person");
        return;
    }

    let tip = bill * (tipPercent / 100);
    let total = bill + tip;
    let each = total / people;

    console.log("tip " + tip.toFixed(2));
    console.log("total " + total.toFixed(2));
    console.log("each pays: " + each.toFixed(2));
}

for (let p  = 1; p <= 5; p++) {
    console.log("--- people:", p);
    splitBill(1250, 10, p);
}
splitBill(1250, 10, 0);
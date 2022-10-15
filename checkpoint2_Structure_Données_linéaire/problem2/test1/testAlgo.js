
    let arr1 = [3, 1, 7, 9];
    let arr2 = [2, 4, 1, 9, 3];
    let twins = [];
    let sum1 = 0 
    let sum2 = 0
    let TotalnotTwins = 0
    let TotalTwins = 0


for (let a = 0; a < arr1.length; a++) {
    sum1 = sum1 + arr1[a];
    for (let b = 0; b < arr2.length; b++) {
        if (arr1[a] == arr2[b]) {
                twins[a] = arr1[a]
                sum1 = sum1 - twins[a];
        }
    }

}
for (let b = 0; b < arr2.length; b++) {
    sum2 = sum2 + arr2[b];
    for (let a = 0; a < arr1.length; a++) {
        if (arr1[a] == arr2[b]) {
                sum2 = sum2 - twins[a];
        }
    }
}
    TotalnotTwins = sum1 + sum2;

    for (let i = 0; i < twins.length; i++) {
        if (twins[i] === parseInt[""] ) {
            TotalTwins = TotalTwins
        }else {
            TotalTwins = TotalTwins + twins[i]*2;}
        
    }

    console.log("the total of the separate elements is: ", TotalnotTwins); 

    console.log("the total of the overlapping elements is:", TotalTwins );

    console.log("the numbers that are present in both sets are", twins);



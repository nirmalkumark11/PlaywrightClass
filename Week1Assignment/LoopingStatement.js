function printOddNumber(range1, range2) {
    for (i = range1; i <= range2; i++) {
        if (i % 2 == 1)
            console.log(i);
    }
}

printOddNumber(1, 20)
function gradeCalc(studentScore){
    let grade1= "A+"
    let grade2= "A"
    let grade3="A-"


switch (true){
  
    case studentScore>90:
    return grade1;
    break;
    case studentScore<=90 && studentScore >=80:
    return grade2
    break;
    default:
    return grade3  
}
}

let gradeVal= gradeCalc(95);
console.log(`The Student grade is` + " "+gradeVal);
gradeVal= gradeCalc(85);
console.log(`The Student grade is` + " " +gradeVal);
gradeVal=gradeCalc(65);
console.log(`The Student grade is` + " "+gradeVal);

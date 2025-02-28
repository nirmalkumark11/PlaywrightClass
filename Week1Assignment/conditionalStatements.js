function launchBrowser(browserName){

    if(browserName===`Chrome`){
        console.log(`The Browser Name is chrome`);
    }
    else if (browserName === `Firefox`){
        console.log(`The Browser Name is Firefox`);
    }
    else if (browserName === `Edge`){
        console.log(`The Browser Name is Edge`);
    }
    else {
        console.log(`The Browser Name is Others`);  
    }
}
function runTests (testType){
    switch(testType){
        case "Smoke":
        console.log(`The Testing Type is Sanity`);
        break;
        case "Sanity":
        console.log(`The Testing Type is Sanity`);
        break;
        case "Regression":
        console.log(`The Testing Type is Regression`);
        break;
        default:
        console.log(`The Testing type is default to Smoke`); 
    }
    }
launchBrowser('Chrome');
launchBrowser('Safari');
runTests(`Regression`);
runTests('Functional');

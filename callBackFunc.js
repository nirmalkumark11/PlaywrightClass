function getUserData(call) {

    setTimeout(() => {
        console.log(`This method is delayed 3 sec`);
        call();
    }, 3000);
}
function fetchAge() {
    console.log(`Name is Nirmal`);
    console.log(`Age is 35`);
}

getUserData(fetchAge)
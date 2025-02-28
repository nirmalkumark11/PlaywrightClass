const browserVersion =`Chrome`

    function getBrowserVersion(){

        if(browserVersion.startsWith(`Chrome`)){

            //browserVersion=`firefox` //NW- Assignment to constant Variable
            //let browserVersion='firefox' // Working - New Variable Declaration inside if block
            var browserVersion='firefox' // NotWorking 
            console.log(browserVersion);
    
        }
        else{
            console.log(browserVersion);
    
        }
    console.log(browserVersion);
}
getBrowserVersion();
